import { css, unsafeCSS } from 'lit-element';
import { TooltipCss as twbTooltipCss } from 'twbs-css-string-literals';

/**
 * @returns {import('lit-element').CSSResult}
 */
export const TooltipCss = css`${unsafeCSS(twbTooltipCss)}`;