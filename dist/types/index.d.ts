import React from "react";
type ColorKeys = "primary" | "primary-shade" | "primary-light" | "primary-light-shade" | "primary-dark" | "primary-dark-shade" | "secondary" | "secondary-shade" | "secondary-light" | "secondary-light-shade" | "secondary-dark" | "secondary-dark-shade" | "tertiary" | "tertiary-shade" | "tertiary-light" | "tertiary-light-shade" | "tertiary-dark" | "tertiary-dark-shade" | "black" | "black-light" | "black-dark" | "white-light" | "white" | "white-dark" | "gray" | "gray-light" | "gray-dark" | "success" | "success-dark" | "success-light" | "danger" | "danger-dark" | "danger-light";
export const $uw: (val: number) => string;
export const $color: (color: ColorKeys | string) => string;
export const $cssTRBL: (top: number, right?: number, bottom?: number, left?: number) => string;
export const $breakPoint: (val: number) => string;
export const DebugGrid: React.FC;
type GridVariables = {
    [key: string]: string;
};
/**
 * Merges the default variables with the user config and returns a CSS string.
 *
 * @param userConfig Optional user configuration to override default variables.
 * @returns A CSS string containing the merged custom properties.
 */
export function generateCss(userConfig?: GridVariables): string;

//# sourceMappingURL=index.d.ts.map
