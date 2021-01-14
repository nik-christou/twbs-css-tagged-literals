import { css, unsafeCSS } from 'lit-element';
import { FormCss as twbsFormCss } from 'twbs-css-string-literals';

/**
 * @returns {import('lit-element').CSSResult}
 */
export const FormCss = css`${unsafeCSS(twbsFormCss)}`;