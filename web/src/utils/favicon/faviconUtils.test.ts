import {createRandomQueue} from "./faviconUtils";
import {afterEach, describe, expect, test, vi} from "vitest";

describe("createRandomQueue", () => {
    afterEach(() => {
        vi.restoreAllMocks();
    });

    test("returns every item once without mutating the source array", () => {
        vi.spyOn(Math, "random").mockReturnValue(0);
        const source = ["html", "css", "js", "react"];

        const queue = createRandomQueue(source);

        expect(queue).toEqual(["css", "js", "react", "html"]);
        expect(source).toEqual(["html", "css", "js", "react"]);
        expect(new Set(queue)).toEqual(new Set(source));
    });

    test("does not repeat the previous item at the start of a new cycle", () => {
        vi.spyOn(Math, "random").mockReturnValue(0);

        const queue = createRandomQueue(["html", "css", "js"], "css");

        expect(queue[0]).not.toBe("css");
        expect(new Set(queue)).toEqual(new Set(["html", "css", "js"]));
    });
});
