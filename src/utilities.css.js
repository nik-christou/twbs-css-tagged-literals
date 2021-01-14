import { css, unsafeCSS } from 'lit-element';
import { UtilitiesCss as twbUtilitiesCss } from 'twbs-css-string-literals';

/**
 * @returns {import('lit-element').CSSResult}
 */
export const UtilitiesCss = css`${unsafeCSS(twbUtilitiesCss)}`;