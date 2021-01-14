import { css, unsafeCSS } from 'lit-element';
import { GridCss as twbsGridCss } from 'twbs-css-string-literals';

/**
 * @returns {import('lit-element').CSSResult}
 */
export const GridCss = css`${unsafeCSS(twbsGridCss)}`;