import { css, unsafeCSS } from 'lit-element';
import { ButtonCss as twbsButtonCss } from 'twbs-css-string-literals';

/**
 * @returns {import('lit-element').CSSResult}
 */
export const ButtonCss = css`${unsafeCSS(twbsButtonCss)}`;