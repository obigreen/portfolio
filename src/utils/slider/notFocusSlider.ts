export const addSliderFocusManagement = (sliderSelector: string, swiperInstance?: any) => {
    // const slider = swiperInstance?.el || document.querySelector(sliderSelector);
    //
    // if (!slider) return;
    //
    // const manageFocus = () => {
    //     const hiddenSlides = slider.querySelectorAll('.swiper-slide:not(.swiper-slide-visible)');
    //     hiddenSlides.forEach((slide) => {
    //         const focusedElement = slide.querySelector(':focus');
    //         if (focusedElement) {
    //             (focusedElement as HTMLElement).blur();
    //         }
    //     });
    // };
    //
    // swiperInstance?.on('slideChange', manageFocus);
    //
    // return () => {
    //     swiperInstance?.off('slideChange', manageFocus);
    // };
};

export const removeFocusFromHiddenSlides = () => {
    // const hiddenSlides = document.querySelectorAll('.swiper-slide:not(.swiper-slide-visible)');
    // hiddenSlides.forEach((slide) => {
    //     const focusedElement = slide.querySelector(':focus');
    //     if (focusedElement) {
    //         (focusedElement as HTMLElement).blur();
    //     }
    // });
};

