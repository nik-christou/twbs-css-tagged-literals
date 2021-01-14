import { css, unsafeCSS } from 'lit-element';
import { ProgressCss as twbsProgressCss } from 'twbs-css-string-literals';

/**
 * @returns {import('lit-element').CSSResult}
 */
export const ProgressCss = css`${unsafeCSS(twbsProgressCss)}`;