import { css, unsafeCSS } from 'lit-element';
import { JumbotronCss as twbsJumbotronCss } from 'twbs-css-string-literals';

/**
 * @returns {import('lit-element').CSSResult}
 */
export const JumbotronCss = css`${unsafeCSS(twbsJumbotronCss)}`;