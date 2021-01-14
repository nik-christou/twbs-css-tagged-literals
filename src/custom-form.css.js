import { css, unsafeCSS } from 'lit-element';
import { CustomFormCss as twbsCustomFormCss } from 'twbs-css-string-literals';

/**
 * @returns {import('lit-element').CSSResult}
 */
export const CustomFormCss = css`${unsafeCSS(twbsCustomFormCss)}`;