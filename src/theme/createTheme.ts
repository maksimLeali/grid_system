// src/theme/createTheme.ts
import defaultVariables from "./variables.json";
import { generateCss, GridConfig } from "./generateCss";


export const $uw = (val: number): string => {
    return `calc(var(--max-grid-size) / var(--grid-columns-number) * ${val})`;
};

export function $variable(name: string): string {
    return `var(--${name})`
}

export const $cssTRBL = (
    top: number,
    right: number = top,
    bottom: number = top,
    left: number = right
): string => {
    return `${$uw(top)} ${$uw(right)} ${$uw(bottom)} ${$uw(left)}`;
};

export const $breakPoint = (val: number): string => {
    return `@media only screen and (max-width: ${val}px)`;
};



export interface Theme {
  css: string;
  colors: Record<string, string>;
  $uw: typeof $uw;
  $color: (color: string)=> string;
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
export function createTheme(userConfig?: GridConfig): Theme {
  // Merge non-color variables
  const mergedVariables = {
    ...defaultVariables,
    ...userConfig,
  };

  // Remove colors from merged variables since it's handled separately
  // @ts-ignore
  delete mergedVariables.colors;

  // Merge colors: userColors will override default colors if provided
  const configColors = defaultVariables.colors;
  const userColors = userConfig?.colors || {};
  const mergedColors = {
    ...configColors,
    ...userColors,
  };


  const $color = (color: string)=>{
    // @ts-ignore
    return color in mergedColors ? mergedColors[color] : color
  }

  // Generate the CSS string with the merged configuration and colors
  const css = generateCss({
    ...mergedVariables,
    colors: mergedColors,
  });

  return {
    css,
    colors: mergedColors,
    $uw,
    $color,
    $variable,
    $cssTRBL,
    $breakPoint,
  };
}
