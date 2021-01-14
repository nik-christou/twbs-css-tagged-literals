import { css, unsafeCSS } from 'lit-element';
import { PaginationCss as twbsPaginationCss } from 'twbs-css-string-literals';

/**
 * @returns {import('lit-element').CSSResult}
 */
export const PaginationCss = css`${unsafeCSS(twbsPaginationCss)}`;