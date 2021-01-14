import { css, unsafeCSS } from 'lit-element';
import { RootCss as twbsRootCss } from 'twbs-css-string-literals';

export const RootCss = css`${unsafeCSS(twbsRootCss)}`;