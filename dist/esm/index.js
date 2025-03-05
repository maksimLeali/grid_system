
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $a17398a5f5f400d3$exports = {};

$parcel$export($a17398a5f5f400d3$exports, "generateCss", () => $8cfa8ff4699e48ec$export$a011a3162271e5f9);
$parcel$export($a17398a5f5f400d3$exports, "createTheme", () => $feed1cc43c61c5e9$export$25d302a5b900a763);
var $02ebced76e5dccfa$exports = {};
$02ebced76e5dccfa$exports = JSON.parse("{\"max-width\":\"1440px\",\"max-grid-size\":\"min(100vw, var(--max-width))\",\"grid-columns-number\":\"48\",\"grid-color\":\"#aaa7\",\"colors\":{\"white-light\":\"#edf6f8\",\"white\":\"#daedf1\",\"white-dark\":\"#b6dae2\",\"black-light\":\"#18393e\",\"black\":\"#2b2b2b\",\"black-dark\":\"#0F0F0F\",\"primary-light\":\"#117888\",\"primary-light-shade\":\"#11788888\",\"primary\":\"#0b505b\",\"primary-shade\":\"#0b505b88\",\"primary-dark\":\"#06282d\",\"primary-dark-shade\":\"#06282d88\",\"secondary-light\":\"#9a329a\",\"secondary-light-shade\":\"#9a329a88\",\"secondary\":\"#5c1e5c\",\"secondary-shade\":\"#5c1e5c88\",\"secondary-dark\":\"#270c27\",\"secondary-dark-shade\":\"#270c2788\",\"tertiary-light\":\"#99fdff\",\"tertiary-light-shade\":\"#99fdff88\",\"tertiary\":\"#00fbff\",\"tertiary-shade\":\"#00fbff88\",\"tertiary-dark\":\"#00c9cc\",\"tertiary-dark-shade\":\"#00c9cc88\",\"gray\":\"#9a9a9a\",\"gray-light\":\"#e9e9e9\",\"gray-dark\":\"#454545\",\"success\":\"#2dd36f\",\"success-dark\":\"#28ba62\",\"success-light\":\"#42d77d\",\"danger\":\"#eb445a\",\"danger-dark\":\"#cf3c4f\",\"danger-light\":\"#ed576b\"}}");


let $5d9b3ec726ff6af2$export$8f45430ccf837300 = {
    "primary": "var(--primary)",
    "primary-shade": "var(--primary-shade)",
    "primary-light": "var(--primary-light)",
    "primary-light-shade": "var(--primary-light-shade)",
    "primary-dark": "var(--primary-dark)",
    "primary-dark-shade": "var(--primary-dark-shade)",
    "secondary": "var(--secondary)",
    "secondary-shade": "var(--secondary-shade)",
    "secondary-light": "var(--secondary-light)",
    "secondary-light-shade": "var(--secondary-light-shade)",
    "secondary-dark": "var(--secondary-dark)",
    "secondary-dark-shade": "var(--secondary-dark-shade)",
    "tertiary": "var(--tertiary)",
    "tertiary-shade": "var(--tertiary-shade)",
    "tertiary-light": "var(--tertiary-light)",
    "tertiary-light-shade": "var(--tertiary-light-shade)",
    "tertiary-dark": "var(--tertiary-dark)",
    "tertiary-dark-shade": "var(--tertiary-dark-shade)",
    "black": "var(--black)",
    "black-light": "var(--black-light)",
    "black-dark": "var(--black-dark)",
    "white-light": "var(--white-light)",
    "white": "var(--white)",
    "white-dark": "var(--white-dark)",
    "gray": "var(--gray)",
    "gray-light": "var(--gray-light)",
    "gray-dark": "var(--gray-dark)",
    "success": "var(--success)",
    "success-dark": "var(--success-dark)",
    "success-light": "var(--success-light)",
    "danger": "var(--danger)",
    "danger-dark": "var(--danger-dark)",
    "danger-light": "var(--danger-light)"
};


function $8cfa8ff4699e48ec$export$a011a3162271e5f9(userConfig) {
    // Merge non-color variables
    const mergedVariables = {
        ...(0, (/*@__PURE__*/$parcel$interopDefault($02ebced76e5dccfa$exports))),
        ...userConfig
    };
    // @ts-ignore
    delete mergedVariables.colors;
    // Remove "colors" property if it exists since it is handled separately
    const configColors = (0, (/*@__PURE__*/$parcel$interopDefault($02ebced76e5dccfa$exports))).colors;
    const userColors = userConfig?.colors || {};
    // Merge colors: defaults are overridden by userConfig.colors if provided
    const mergedColors = {
        ...configColors,
        ...userColors
    };
    Object.keys(userColors).map((color)=>{
        if (!(0, $5d9b3ec726ff6af2$export$8f45430ccf837300)[color]) (0, $5d9b3ec726ff6af2$export$8f45430ccf837300)[color] = `var(--${color})`;
    });
    // Generate CSS declarations for non-color variables
    const otherCss = Object.entries(mergedVariables).map(([key, value])=>`  --${key}: ${value};`).join("\n");
    // Generate CSS declarations for colors
    const colorCss = Object.entries(mergedColors).map(([key, value])=>`  --${key}: ${value};`).join("\n");
    return `:root {\n${otherCss}\n${colorCss}\n}`;
}


// src/theme/createTheme.ts


const $feed1cc43c61c5e9$export$d736a794e9620a72 = (val)=>{
    return `calc(var(--max-grid-size) / var(--grid-columns-number) * ${val})`;
};
function $feed1cc43c61c5e9$export$aab783acb543317b(name) {
    return `var(--${name})`;
}
const $feed1cc43c61c5e9$export$76e7c09f7f6671cc = (top, right = top, bottom = top, left = right)=>{
    return `${$feed1cc43c61c5e9$export$d736a794e9620a72(top)} ${$feed1cc43c61c5e9$export$d736a794e9620a72(right)} ${$feed1cc43c61c5e9$export$d736a794e9620a72(bottom)} ${$feed1cc43c61c5e9$export$d736a794e9620a72(left)}`;
};
const $feed1cc43c61c5e9$export$4aed85427fc6df30 = (val)=>{
    return `@media only screen and (max-width: ${val}px)`;
};
function $feed1cc43c61c5e9$export$25d302a5b900a763(userConfig) {
    // Merge non-color variables
    const mergedVariables = {
        ...(0, (/*@__PURE__*/$parcel$interopDefault($02ebced76e5dccfa$exports))),
        ...userConfig
    };
    // Remove colors from merged variables since it's handled separately
    // @ts-ignore
    delete mergedVariables.colors;
    // Merge colors: userColors will override default colors if provided
    const configColors = (0, (/*@__PURE__*/$parcel$interopDefault($02ebced76e5dccfa$exports))).colors;
    const userColors = userConfig?.colors || {};
    const mergedColors = {
        ...configColors,
        ...userColors
    };
    const $color = (color)=>{
        // @ts-ignore
        return color in mergedColors ? mergedColors[color] : color;
    };
    // Generate the CSS string with the merged configuration and colors
    const css = (0, $8cfa8ff4699e48ec$export$a011a3162271e5f9)({
        ...mergedVariables,
        colors: mergedColors
    });
    return {
        css: css,
        colors: mergedColors,
        $uw: $feed1cc43c61c5e9$export$d736a794e9620a72,
        $color: $color,
        $variable: $feed1cc43c61c5e9$export$aab783acb543317b,
        $cssTRBL: $feed1cc43c61c5e9$export$76e7c09f7f6671cc,
        $breakPoint: $feed1cc43c61c5e9$export$4aed85427fc6df30
    };
}






export {$8cfa8ff4699e48ec$export$a011a3162271e5f9 as generateCss, $feed1cc43c61c5e9$export$25d302a5b900a763 as createTheme};
//# sourceMappingURL=index.js.map
