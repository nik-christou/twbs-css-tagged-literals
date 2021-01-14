import { css, unsafeCSS } from 'lit-element';
import { RebootCss as twbsRebootCss } from 'twbs-css-string-literals';

/**
 * @returns {import('lit-element').CSSResult}
 */
export const RebootCss = css`${unsafeCSS(twbsRebootCss)}`;