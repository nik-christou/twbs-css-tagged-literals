import { css, unsafeCSS } from 'lit-element';
import { MediaCss as twbsMediaCss } from 'twbs-css-string-literals';

export const MediaCss = css`${unsafeCSS(twbsMediaCss)}`;