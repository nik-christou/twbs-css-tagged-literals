import { css, unsafeCSS } from 'lit-element';
import { InputGroupCss as twbsInputGroupCss } from 'twbs-css-string-literals';

/**
 * @returns {import('lit-element').CSSResult}
 */
export const InputGroupCss = css`${unsafeCSS(twbsInputGroupCss)}`;