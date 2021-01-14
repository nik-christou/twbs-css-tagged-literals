import { css, unsafeCSS } from 'lit-element';
import { TablesCss as twbTablesCss } from 'twbs-css-string-literals';

/**
 * @returns {import('lit-element').CSSResult}
 */
export const TablesCss = css`${unsafeCSS(twbTablesCss)}`;