import { css, unsafeCSS } from 'lit-element';
import { TypographyCss as twbTypographyCss } from 'twbs-css-string-literals';

/**
 * @returns {import('lit-element').CSSResult}
 */
export const TypographyCss = css`${unsafeCSS(twbTypographyCss)}`;