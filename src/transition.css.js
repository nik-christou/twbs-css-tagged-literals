import { css, unsafeCSS } from 'lit-element';
import { TransitionCss as twbTransitionCss } from 'twbs-css-string-literals';

export const TransitionCss = css`${unsafeCSS(twbTransitionCss)}`;