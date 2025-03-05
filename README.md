# @lemaks/grid_system

A lightweight grid system library that generates CSS custom properties from a JSON configuration. It allows you to merge default theme variables with your own overrides and provides utility functions for responsive grid layouts—all in a framework-agnostic way.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
  - [Generating CSS with Default Settings](#generating-css-with-default-settings)
  - [Customizing the Theme](#customizing-the-theme)
  - [Theme Factory](#theme-factory)
  - [Utility Functions](#utility-functions)
- [API Documentation](#api-documentation)
- [Configuration Files](#configuration-files)
- [Build Process](#build-process)
- [Example Configuration](#example-configuration)
- [License](#license)

## Overview

The **@lemaks/grid_system** package lets you generate a CSS string containing custom properties for grid-related settings (like maximum width, grid columns, colors, etc.). It supports merging a default JSON configuration with user-defined overrides. Additionally, the package provides several utility functions to work with grid metrics and colors.

## Features

- **CSS Variable Generation:** Create CSS custom properties dynamically from a JSON configuration.
- **Theme Customization:** Merge default settings with user overrides, including custom colors.
- **Utility Functions:** Offers helpers like `$uw` (unit width), `$color` (color resolution), `$cssTRBL` (spacing for top/right/bottom/left), and `$breakPoint` (media query generation).
- **Framework Agnostic:** Use in any JavaScript or TypeScript environment without being tied to React or any other framework.

## Installation

Install via npm:

```bash
npm install @lemaks/grid_system
```

## Usage

### Generating CSS with Default Settings

```ts
import { generateCss } from '@lemaks/grid_system';

const css = generateCss();
console.log(css);
```

### Customizing the Theme

```ts
import { generateCss } from '@lemaks/grid_system';

const userConfig = {
  "max-width": "1600px",
  "grid-columns-number": "52",
  colors: {
    "glass-dark": "#4b4b4b88",
    "glass": "#8a8a8a88",
    "glass-light": "#abababaa"
  }
};

const css = generateCss(userConfig);
console.log(css);
```

### Theme Factory

```ts
import { createTheme } from '@lemaks/grid_system/theme/createTheme';

const theme = createTheme(userConfig);
console.log(theme.css);
console.log(theme.colors);
```

### Utility Functions

- **`$uw(val: number): string`** - Computes a unit width based on the grid configuration.
- **`$color(color: string): string`** - Resolves a color key to its CSS variable.
- **`$cssTRBL(top, right?, bottom?, left?): string`** - Generates a spacing string.
- **`$breakPoint(val: number): string`** - Returns a media query string.

## API Documentation

### `generateCss(userConfig?: GridConfig): string`

Generates a CSS string based on merged settings.

### `createTheme(userConfig?: GridConfig): Theme`

Returns a theme object with CSS, colors, and utility functions.

## Configuration Files

- **`variables.json`** - Default grid settings.
- **`colors.ts`** - Maps color keys to CSS variables.
- **`functions.ts`** - Utility functions.
- **`generateCss.ts`** - Handles merging and CSS generation.

## Build Process

Build the package using Parcel:

```bash
npm run build
```

## Example Configuration

```js
import { colors, isColorKey } from '@lemaks/grid_system';

const userColors = {
  "glass-dark": "#4b4b4b88",
  "glass": "#8a8a8a88",
  "glass-light": "#abababaa"
};

export const userGridConfig = {
  "max-width": "1600px",
  "grid-columns-number": "52",
  colors: userColors
};
```

Use the generated theme:

```ts
import { createTheme } from '@lemaks/grid_system/theme/createTheme';
import { userGridConfig } from './grid.config';

const theme = createTheme(userGridConfig);
console.log(theme.css);
```

## License

This project is licensed under the MIT License.

