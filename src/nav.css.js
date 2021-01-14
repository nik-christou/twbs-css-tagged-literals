import { css, unsafeCSS } from 'lit-element';
import { NavCss as twbsNavCss } from 'twbs-css-string-literals';

/**
 * @returns {import('lit-element').CSSResult}
 */
export const NavCss = css`${unsafeCSS(twbsNavCss)}`;