import { css, unsafeCSS } from 'lit-element';
import { TransitionCss as twbTransitionCss } from 'twbs-css-string-literals';

/**
 * @returns {import('lit-element').CSSResult}
 */
export const TransitionCss = css`${unsafeCSS(twbTransitionCss)}`;