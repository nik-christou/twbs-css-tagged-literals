import { css, unsafeCSS } from 'lit-element';
import { ImagesCss as twbsImagesCss } from 'twbs-css-string-literals';

/**
 * @returns {import('lit-element').CSSResult}
 */
export const ImagesCss = css`${unsafeCSS(twbsImagesCss)}`;