import { css, unsafeCSS } from 'lit-element';
import { RootCss as twbsRootCss } from 'twbs-css-string-literals';

/**
 * @returns {import('lit-element').CSSResult}
 */
export const RootCss = css`${unsafeCSS(twbsRootCss)}`;