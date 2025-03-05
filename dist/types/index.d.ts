type GridConfig = {
    "max-width"?: string;
    "max-grid-size"?: string;
    "grid-columns-number"?: string;
    "grid-color"?: string;
    colors?: {
        [color: string]: string;
    };
};
/**
 * Merges the default grid variables with the user config and returns a CSS string.
 *
 * The `colors` key in the config will merge with default colors and add any new keys.
 *
 * @param userConfig Optional user configuration to override default variables.
 * @returns A CSS string containing the merged custom properties.
 */
export function generateCss(userConfig?: GridConfig): string;
declare const $uw: (val: number) => string;
declare function $variable(name: string): string;
declare const $cssTRBL: (top: number, right?: number, bottom?: number, left?: number) => string;
declare const $breakPoint: (val: number) => string;
interface Theme {
    css: string;
    colors: Record<string, string>;
    $uw: typeof $uw;
    $color: (color: string) => string;
    $cssTRBL: typeof $cssTRBL;
    $variable: typeof $variable;
    $breakPoint: typeof $breakPoint;
}
/**
 * Creates a theme object by merging the default configuration with user-provided overrides.
 * Returns a theme object containing:
 *  - The generated CSS string,
 *  - The merged colors object,
 *  - Utility functions for working with theme values.
 *
 * @param userConfig Optional user configuration to override default variables.
 * @returns A Theme object.
 */
export function createTheme(userConfig?: GridConfig): Theme;

//# sourceMappingURL=index.d.ts.map
