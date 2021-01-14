import { css, unsafeCSS } from 'lit-element';
import { BadgeCss as twbsBadgeCss } from 'twbs-css-string-literals';

/**
 * @returns {import('lit-element').CSSResult}
 */
export const BadgeCss = css`${unsafeCSS(twbsBadgeCss)}`;