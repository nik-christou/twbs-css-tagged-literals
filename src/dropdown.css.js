import { css, unsafeCSS } from 'lit-element';
import { DropdownCss as twbsDropdownCss } from 'twbs-css-string-literals';

/**
 * @returns {import('lit-element').CSSResult}
 */
export const DropdownCss = css`${unsafeCSS(twbsDropdownCss)}`;