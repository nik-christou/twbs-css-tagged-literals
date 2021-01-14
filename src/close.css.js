import { css, unsafeCSS } from 'lit-element';
import { CloseCss as twbsCloseCss } from 'twbs-css-string-literals';

/**
 * @returns {import('lit-element').CSSResult}
 */
export const CloseCss = css`${unsafeCSS(twbsCloseCss)}`;