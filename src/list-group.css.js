import { css, unsafeCSS } from 'lit-element';
import { ListGroupCss as twbsListGroupCss } from 'twbs-css-string-literals';

/**
 * @returns {import('lit-element').CSSResult}
 */
export const ListGroupCss = css`${unsafeCSS(twbsListGroupCss)}`;