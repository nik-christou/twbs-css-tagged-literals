import { css, unsafeCSS } from 'lit-element';
import { ButtonGroupCss as twbsButtonGroupCss } from 'twbs-css-string-literals';

/**
 * @returns {import('lit-element').CSSResult}
 */
export const ButtonGroupCss = css`${unsafeCSS(twbsButtonGroupCss)}`;