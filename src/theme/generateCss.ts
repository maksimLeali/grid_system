import defaultVariables from "./variables.json";
import { colors as defaultColors } from "./colors";
export type GridConfig = {
  // Other grid variables (as strings)

  "max-width"?: string;
  "max-grid-size"?: string;
  "grid-columns-number"?: string;
  "grid-color"?: string;
  // Optional colors key for custom color overrides/additions
  colors?: { [color: string]: string };
};

/**
 * Merges the default grid variables with the user config and returns a CSS string.
 * 
 * The `colors` key in the config will merge with default colors and add any new keys.
 *
 * @param userConfig Optional user configuration to override default variables.
 * @returns A CSS string containing the merged custom properties.
 */
export function generateCss(userConfig?: GridConfig): string {
  // Merge non-color variables


  const mergedVariables = {
    ...defaultVariables,
    ...userConfig
  }
  // @ts-ignore
  delete mergedVariables.colors;

  // Remove "colors" property if it exists since it is handled separately
  const configColors = defaultVariables.colors;
  const userColors = userConfig?.colors || {}

  // Merge colors: defaults are overridden by userConfig.colors if provided
  const mergedColors = {
    ...configColors,
    ...userColors,
  };



  Object.keys(userColors).map((color) => {
    if (!defaultColors[color]) {
      defaultColors[color] = `var(--${color})`
    }
  })

  // Generate CSS declarations for non-color variables
  const otherCss = Object.entries(mergedVariables)
    .map(([key, value]) => `  --${key}: ${value};`)
    .join("\n");

  // Generate CSS declarations for colors
  const colorCss = Object.entries(mergedColors)
    .map(([key, value]) => `  --${key}: ${value};`)
    .join("\n");


  return `:root {\n${otherCss}\n${colorCss}\n}`;
}
