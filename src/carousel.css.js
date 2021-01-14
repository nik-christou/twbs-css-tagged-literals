import { css, unsafeCSS } from 'lit-element';
import { CarouselCss as twbsCarouselCss } from 'twbs-css-string-literals';

/**
 * @returns {import('lit-element').CSSResult}
 */
export const CarouselCss = css`${unsafeCSS(twbsCarouselCss)}`;