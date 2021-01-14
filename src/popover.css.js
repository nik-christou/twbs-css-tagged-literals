import { css, unsafeCSS } from 'lit-element';
import { PopoverCss as twbsPopoverCss } from 'twbs-css-string-literals';

/**
 * @returns {import('lit-element').CSSResult}
 */
export const PopoverCss = css`${unsafeCSS(twbsPopoverCss)}`;