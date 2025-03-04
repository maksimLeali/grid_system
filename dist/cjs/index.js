require("./index.css");
var $dYZEH$reactjsxruntime = require("react/jsx-runtime");
var $dYZEH$gsap = require("gsap");
var $dYZEH$gsapreact = require("@gsap/react");
var $dYZEH$gsapdistDraggable = require("gsap/dist/Draggable");
var $dYZEH$react = require("react");
var $dYZEH$styledcomponents = require("styled-components");
var $dYZEH$reacthotkeyshook = require("react-hotkeys-hook");


function $parcel$exportWildcard(dest, source) {
  Object.keys(source).forEach(function(key) {
    if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function get() {
        return source[key];
      }
    });
  });

  return dest;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "generateCss", () => $c36aafcf92cc680a$export$a011a3162271e5f9);
var $da2eea5b5d34e7f3$exports = {};

$parcel$export($da2eea5b5d34e7f3$exports, "DebugGrid", () => $da2eea5b5d34e7f3$export$43c8e9a4fa65db5d);







var $759ff1173ad3a21d$exports = {};
var $1b56de4b86e9665e$exports = {};

$parcel$export($1b56de4b86e9665e$exports, "$uw", () => $1b56de4b86e9665e$export$d736a794e9620a72);
$parcel$export($1b56de4b86e9665e$exports, "$color", () => $1b56de4b86e9665e$export$6ab51d0c2eb33fad);
$parcel$export($1b56de4b86e9665e$exports, "$cssTRBL", () => $1b56de4b86e9665e$export$76e7c09f7f6671cc);
$parcel$export($1b56de4b86e9665e$exports, "$breakPoint", () => $1b56de4b86e9665e$export$4aed85427fc6df30);
const $ba2c9597ecf4bd21$export$8f45430ccf837300 = {
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
function $ba2c9597ecf4bd21$export$8ead525ebc18316c(key) {
    return Object.keys($ba2c9597ecf4bd21$export$8f45430ccf837300).includes(key);
}


const $1b56de4b86e9665e$export$d736a794e9620a72 = (val)=>`calc(var(--max-grid-size) / var(--grid-columns-number) * ${val})`;
const $1b56de4b86e9665e$export$6ab51d0c2eb33fad = (color)=>{
    if ((0, $ba2c9597ecf4bd21$export$8ead525ebc18316c)(color)) return (0, $ba2c9597ecf4bd21$export$8f45430ccf837300)[color];
    return color;
};
const $1b56de4b86e9665e$export$76e7c09f7f6671cc = (top, right = top, bottom = top, left = right)=>`${$1b56de4b86e9665e$export$d736a794e9620a72(top)} ${$1b56de4b86e9665e$export$d736a794e9620a72(right)} ${$1b56de4b86e9665e$export$d736a794e9620a72(bottom)} ${$1b56de4b86e9665e$export$d736a794e9620a72(left)}`;
const $1b56de4b86e9665e$export$4aed85427fc6df30 = (val)=>`@media only screen and (max-width: ${val}px)`;



$parcel$exportWildcard($759ff1173ad3a21d$exports, $1b56de4b86e9665e$exports);


(0, ($parcel$interopDefault($dYZEH$gsap))).registerPlugin((0, $dYZEH$gsapdistDraggable.Draggable));
const $da2eea5b5d34e7f3$export$43c8e9a4fa65db5d = ()=>{
    const [gridHeight, setGridHeigth] = (0, $dYZEH$react.useState)(3);
    const [visible, setVisible] = (0, $dYZEH$react.useState)(false);
    (0, $dYZEH$gsapreact.useGSAP)(()=>{
        (0, $dYZEH$gsapdistDraggable.Draggable).create("#debugGrid", {
            bounds: "#mainWrapper"
        });
    }, []);
    (0, $dYZEH$reacthotkeyshook.useHotkeys)("mod+alt+g", ()=>setVisible(!visible));
    const editGridHeight = (num)=>{
        if (gridHeight + num < 3) return;
        setGridHeigth(gridHeight + num);
    };
    return /*#__PURE__*/ (0, $dYZEH$reactjsxruntime.jsxs)($da2eea5b5d34e7f3$var$Container, {
        id: "debugGrid",
        $gridheight: gridHeight,
        $visible: visible,
        children: [
            /*#__PURE__*/ (0, $dYZEH$reactjsxruntime.jsx)($da2eea5b5d34e7f3$var$Action, {
                onClick: (e)=>{
                    e.preventDefault();
                    editGridHeight(-1);
                },
                onTouchEnd: (e)=>{
                    e.preventDefault();
                    editGridHeight(-1);
                },
                className: "remove",
                children: "-"
            }),
            /*#__PURE__*/ (0, $dYZEH$reactjsxruntime.jsx)($da2eea5b5d34e7f3$var$Action, {
                onClick: (e)=>{
                    e.preventDefault();
                    editGridHeight(1);
                },
                onTouchEnd: (e)=>{
                    e.preventDefault();
                    editGridHeight(1);
                },
                className: "add",
                children: "+"
            })
        ]
    });
};
const $da2eea5b5d34e7f3$var$Container = (0, ($parcel$interopDefault($dYZEH$styledcomponents))).div`
	width: var(--max-grid-size);
	height: ${({ $gridheight: $gridheight })=>(0, $1b56de4b86e9665e$export$d736a794e9620a72)($gridheight)};
	position: fixed;
	top: 0;
	box-sizing: border-box;
	z-index: ${({ $visible: $visible })=>$visible ? 999 : `-1!important`};
	opacity: ${({ $visible: $visible })=>$visible ? 1 : 0};
	display: flex;
	justify-content: space-between;
	align-items: start;
	padding: ${(0, $1b56de4b86e9665e$export$76e7c09f7f6671cc)(1)};

	border-bottom: 1px solid var(--grid-color);
	border-right: 2px solid var(--grid-color);
	background-size: calc(var(--max-grid-size) / var(--grid-columns-number))
		calc(var(--max-grid-size) / var(--grid-columns-number));
	background-image: linear-gradient(
			to right,
			var(--grid-color) 1px,
			transparent 1px
		),
		linear-gradient(to bottom, var(--grid-color) 1px, transparent 1px);
`;
const $da2eea5b5d34e7f3$var$Action = (0, ($parcel$interopDefault($dYZEH$styledcomponents))).button`
	width: ${(0, $1b56de4b86e9665e$export$d736a794e9620a72)(1)};
	height: ${(0, $1b56de4b86e9665e$export$d736a794e9620a72)(1)};
	box-sizing: border-box;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 100%;
	background-color: unset;
	font-weight: 800;
	font-size: 2.5rem;
	border-width: 2px;
	border-style: solid;

	${(0, $1b56de4b86e9665e$export$4aed85427fc6df30)(380)} {
		font-size: 1.6rem;
		border-width: 1px;
	}
	&.remove {
		border-color: ${(0, $1b56de4b86e9665e$export$6ab51d0c2eb33fad)("danger")};
		color: ${(0, $1b56de4b86e9665e$export$6ab51d0c2eb33fad)("danger")};
	}
	&.add {
		border-color: ${(0, $1b56de4b86e9665e$export$6ab51d0c2eb33fad)("success")};
		color: ${(0, $1b56de4b86e9665e$export$6ab51d0c2eb33fad)("success")};
	}
`;



// src/theme/generateCss.ts
var $042f49e427f361cf$exports = {};
$042f49e427f361cf$exports = JSON.parse("{\"max-width\":\"1440px\",\"max-grid-size\":\"min(100vw, var(--max-width))\",\"grid-columns-number\":\"52\",\"grid-color\":\"#aaa7\",\"white-light\":\"#edf6f8\",\"white\":\"#daedf1\",\"white-dark\":\"#b6dae2\",\"black-light\":\"#18393e\",\"black\":\"#2b2b2b\",\"black-dark\":\"#0F0F0F\",\"primary-light\":\"#117888\",\"primary-light-shade\":\"#11788888\",\"primary\":\"#0b505b\",\"primary-shade\":\"#0b505b88\",\"primary-dark\":\"#06282d\",\"primary-dark-shade\":\"#06282d88\",\"secondary-light\":\"#9a329a\",\"secondary-light-shade\":\"#9a329a88\",\"secondary\":\"#5c1e5c\",\"secondary-shade\":\"#5c1e5c88\",\"secondary-dark\":\"#270c27\",\"secondary-dark-shade\":\"#270c2788\",\"tertiary-light\":\"#99fdff\",\"tertiary-light-shade\":\"#99fdff88\",\"tertiary\":\"#00fbff\",\"tertiary-shade\":\"#00fbff88\",\"tertiary-dark\":\"#00c9cc\",\"tertiary-dark-shade\":\"#00c9cc88\",\"gray\":\"#9a9a9a\",\"gray-light\":\"#e9e9e9\",\"gray-dark\":\"#454545\",\"success\":\"#2dd36f\",\"success-dark\":\"#28ba62\",\"success-light\":\"#42d77d\",\"danger\":\"#eb445a\",\"danger-dark\":\"#cf3c4f\",\"danger-light\":\"#ed576b\"}");


function $c36aafcf92cc680a$export$a011a3162271e5f9(userConfig) {
    const mergedVariables = {
        ...(0, (/*@__PURE__*/$parcel$interopDefault($042f49e427f361cf$exports))),
        ...userConfig
    };
    const cssVars = Object.entries(mergedVariables).map(([key, value])=>`  --${key}: ${value};`).join("\n");
    return `:root {\n${cssVars}\n}`;
}


$parcel$exportWildcard(module.exports, $da2eea5b5d34e7f3$exports);
$parcel$exportWildcard(module.exports, $759ff1173ad3a21d$exports);


//# sourceMappingURL=index.js.map
