const SVG_NAMESPACE = "http://www.w3.org/2000/svg";

export type FaviconSource = {
    iconId?: string;
    imgSrc?: string;
};

type PrepareFaviconUrlsOptions = {
    icons: readonly FaviconSource[];
    spriteUrl: string;
    viewBox: string;
    signal: AbortSignal;
};

type PreparedFaviconUrls = {
    urls: string[];
    objectUrls: string[];
};

const createStandaloneSvg = (
    spriteMarkup: string,
    iconId: string,
    viewBox: string
): string | null => {
    const spriteDocument = new DOMParser().parseFromString(spriteMarkup, "image/svg+xml");

    if (spriteDocument.querySelector("parsererror")) {
        return null;
    }

    const icon = spriteDocument.getElementById(iconId);

    if (!icon) {
        return null;
    }

    const standaloneSvg = spriteDocument.createElementNS(SVG_NAMESPACE, "svg");
    standaloneSvg.setAttribute("xmlns", SVG_NAMESPACE);
    standaloneSvg.setAttribute("viewBox", viewBox);
    standaloneSvg.setAttribute("width", "32");
    standaloneSvg.setAttribute("height", "32");
    standaloneSvg.setAttribute("fill", "none");

    Array.from(spriteDocument.documentElement.children)
        .filter(({localName}) => localName === "defs" || localName === "style")
        .forEach((node) => standaloneSvg.appendChild(node.cloneNode(true)));

    standaloneSvg.appendChild(icon.cloneNode(true));

    return new XMLSerializer().serializeToString(standaloneSvg);
};

export const prepareFaviconUrls = async ({
    icons,
    spriteUrl,
    viewBox,
    signal,
}: PrepareFaviconUrlsOptions): Promise<PreparedFaviconUrls> => {
    const needsSprite = icons.some(({iconId, imgSrc}) => iconId && !imgSrc);
    let spriteMarkup = "";

    if (needsSprite) {
        const response = await fetch(spriteUrl, {signal});

        if (!response.ok) {
            throw new Error(`Failed to load favicon sprite: ${response.status}`);
        }

        spriteMarkup = await response.text();
    }

    const objectUrls: string[] = [];
    const urls = icons.reduce<string[]>((result, {iconId, imgSrc}) => {
        if (imgSrc) {
            result.push(imgSrc);
            return result;
        }

        if (!iconId || !spriteMarkup) {
            return result;
        }

        const standaloneSvg = createStandaloneSvg(spriteMarkup, iconId, viewBox);

        if (!standaloneSvg) {
            return result;
        }

        const objectUrl = URL.createObjectURL(
            new Blob([standaloneSvg], {type: "image/svg+xml"})
        );

        objectUrls.push(objectUrl);
        result.push(objectUrl);

        return result;
    }, []);

    return {urls, objectUrls};
};

export const createRandomQueue = <T>(
    items: readonly T[],
    previousItem?: T
): T[] => {
    const queue = [...items];

    for (let index = queue.length - 1; index > 0; index -= 1) {
        const randomIndex = Math.floor(Math.random() * (index + 1));
        [queue[index], queue[randomIndex]] = [queue[randomIndex], queue[index]];
    }

    if (queue.length > 1 && previousItem !== undefined && queue[0] === previousItem) {
        const replacementIndex = queue.findIndex((item) => item !== previousItem);

        if (replacementIndex > 0) {
            [queue[0], queue[replacementIndex]] = [queue[replacementIndex], queue[0]];
        }
    }

    return queue;
};
