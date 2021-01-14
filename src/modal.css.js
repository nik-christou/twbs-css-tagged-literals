import { css, unsafeCSS } from 'lit-element';
import { ModalCss as twbsModalCss } from 'twbs-css-string-literals';

/**
 * @returns {import('lit-element').CSSResult}
 */
export const ModalCss = css`${unsafeCSS(twbsModalCss)}`;