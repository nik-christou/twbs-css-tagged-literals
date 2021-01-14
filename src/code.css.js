import { css, unsafeCSS } from 'lit-element';
import { CodeCss as twbsCodeCss } from 'twbs-css-string-literals';

export const CodeCss = css`${unsafeCSS(twbsCodeCss)}`;