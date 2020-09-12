import Typography from "typography";
import grandViewTheme from "typography-theme-bootstrap";

delete grandViewTheme.googleFonts

grandViewTheme.baseFontSize = '18px';
grandViewTheme.scaleRatio = 1.6;

const typography = new Typography(grandViewTheme);

export const { scale, rhythm, options } = typography;
export default typography;