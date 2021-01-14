import { css, unsafeCSS } from 'lit-element';
import { FormCss as twbsFormCss } from 'twbs-css-string-literals';

export const FormCss = css`${unsafeCSS(twbsFormCss)}`;