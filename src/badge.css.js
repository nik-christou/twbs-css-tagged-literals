import { css, unsafeCSS } from 'lit-element';
import { BadgeCss as twbsBadgeCss } from 'twbs-css-string-literals';

export const BadgeCss = css`${unsafeCSS(twbsBadgeCss)}`;