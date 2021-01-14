import { css, unsafeCSS } from 'lit-element';
import { CustomFormCss as twbsCustomFormCss } from 'twbs-css-string-literals';

export const CustomFormCss = css`${unsafeCSS(twbsCustomFormCss)}`;