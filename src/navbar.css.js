import { css, unsafeCSS } from 'lit-element';
import { NavbarCss as twbsNavbarCss } from 'twbs-css-string-literals';

/**
 * @returns {import('lit-element').CSSResult}
 */
export const NavbarCss = css`${unsafeCSS(twbsNavbarCss)}`;