// src/theme/generateCss.ts
import defaultVariables from "./variables.json";

export type GridVariables = {
  [key: string]: string;
};

/**
 * Merges the default variables with the user config and returns a CSS string.
 *
 * @param userConfig Optional user configuration to override default variables.
 * @returns A CSS string containing the merged custom properties.
 */
export function generateCss(userConfig?: GridVariables): string {
  const mergedVariables: GridVariables = {
    ...defaultVariables,
    ...userConfig,
  };

  const cssVars = Object.entries(mergedVariables)
    .map(([key, value]) => `  --${key}: ${value};`)
    .join("\n");

  return `:root {\n${cssVars}\n}`;
}
