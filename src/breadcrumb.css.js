import { css, unsafeCSS } from 'lit-element';
import { BreadcrumbCss as twbsBreadcrumbCss } from 'twbs-css-string-literals';

/**
 * @returns {import('lit-element').CSSResult}
 */
export const BreadcrumbCss = css`${unsafeCSS(twbsBreadcrumbCss)}`;