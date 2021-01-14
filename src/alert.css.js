import { css, unsafeCSS } from 'lit-element';
import { AlertCss as twbsAlertCss } from 'twbs-css-string-literals';

/**
 * @returns {import('lit-element').CSSResult}
 */
export const AlertCss = css`${unsafeCSS(twbsAlertCss)}`;