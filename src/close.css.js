import { css, unsafeCSS } from 'lit-element';
import { CloseCss as twbsCloseCss } from 'twbs-css-string-literals';

export const CloseCss = css`${unsafeCSS(twbsCloseCss)}`;