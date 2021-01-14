import { css, unsafeCSS } from 'lit-element';
import { CodeCss as twbsCodeCss } from 'twbs-css-string-literals';

/**
 * @returns {import('lit-element').CSSResult}
 */
export const CodeCss = css`${unsafeCSS(twbsCodeCss)}`;