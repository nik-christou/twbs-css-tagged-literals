import { css, unsafeCSS } from 'lit-element';
import { SpinnersCss as twbSpinnersCss } from 'twbs-css-string-literals';

/**
 * @returns {import('lit-element').CSSResult}
 */
export const SpinnersCss = css`${unsafeCSS(twbSpinnersCss)}`;