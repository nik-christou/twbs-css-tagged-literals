import { css, unsafeCSS } from 'lit-element';
import { PrintCss as twbsPrintCss } from 'twbs-css-string-literals';

export const PrintCss = css`${unsafeCSS(twbsPrintCss)}`;