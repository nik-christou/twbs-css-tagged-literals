import { css, unsafeCSS } from 'lit-element';
import { CardCss as twbsCardCss } from 'twbs-css-string-literals';

/**
 * @returns {import('lit-element').CSSResult}
 */
export const CardCss = css`${unsafeCSS(twbsCardCss)}`;