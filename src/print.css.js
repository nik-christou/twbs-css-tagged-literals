import { css, unsafeCSS } from 'lit-element';
import { PrintCss as twbsPrintCss } from 'twbs-css-string-literals';

/**
 * @returns {import('lit-element').CSSResult}
 */
export const PrintCss = css`${unsafeCSS(twbsPrintCss)}`;