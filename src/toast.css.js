import { css, unsafeCSS } from 'lit-element';
import { ToastCss as twbToastCss } from 'twbs-css-string-literals';

/**
 * @returns {import('lit-element').CSSResult}
 */
export const ToastCss = css`${unsafeCSS(twbToastCss)}`;