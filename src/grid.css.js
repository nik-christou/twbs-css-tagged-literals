import { css, unsafeCSS } from 'lit-element';
import { GridCss as twbsGridCss } from 'twbs-css-string-literals';

export const GridCss = css`${unsafeCSS(twbsGridCss)}`;