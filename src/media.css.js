import { css, unsafeCSS } from 'lit-element';
import { MediaCss as twbsMediaCss } from 'twbs-css-string-literals';

/**
 * @returns {import('lit-element').CSSResult}
 */
export const MediaCss = css`${unsafeCSS(twbsMediaCss)}`;