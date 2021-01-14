import { css, unsafeCSS } from 'lit-element';
import { ToastCss as twbToastCss } from 'twbs-css-string-literals';

export const ToastCss = css`${unsafeCSS(twbToastCss)}`;