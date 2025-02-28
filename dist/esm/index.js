import "./index.css";
import {jsxs as $26Zo0$jsxs, jsx as $26Zo0$jsx} from "react/jsx-runtime";
import $26Zo0$gsap from "gsap";
import {useGSAP as $26Zo0$useGSAP} from "@gsap/react";
import {Draggable as $26Zo0$Draggable} from "gsap/dist/Draggable";
import {useState as $26Zo0$useState} from "react";
import $26Zo0$styledcomponents from "styled-components";
import {useHotkeys as $26Zo0$useHotkeys} from "react-hotkeys-hook";


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

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
var $ac4891bf196f4904$exports = {};

$parcel$export($ac4891bf196f4904$exports, "DebugGrid", () => $ac4891bf196f4904$export$43c8e9a4fa65db5d);







var $a17398a5f5f400d3$exports = {};
var $6b7b5f421cd0dd18$exports = {};

$parcel$export($6b7b5f421cd0dd18$exports, "$uw", () => $6b7b5f421cd0dd18$export$d736a794e9620a72);
$parcel$export($6b7b5f421cd0dd18$exports, "$color", () => $6b7b5f421cd0dd18$export$6ab51d0c2eb33fad);
$parcel$export($6b7b5f421cd0dd18$exports, "$cssTRBL", () => $6b7b5f421cd0dd18$export$76e7c09f7f6671cc);
$parcel$export($6b7b5f421cd0dd18$exports, "$breakPoint", () => $6b7b5f421cd0dd18$export$4aed85427fc6df30);
const $5d9b3ec726ff6af2$export$8f45430ccf837300 = {
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
function $5d9b3ec726ff6af2$export$8ead525ebc18316c(key) {
    return Object.keys($5d9b3ec726ff6af2$export$8f45430ccf837300).includes(key);
}


const $6b7b5f421cd0dd18$export$d736a794e9620a72 = (val)=>`calc(var(--max-grid-size) / var(--grid-columns-number) * ${val})`;
const $6b7b5f421cd0dd18$export$6ab51d0c2eb33fad = (color)=>{
    if ((0, $5d9b3ec726ff6af2$export$8ead525ebc18316c)(color)) return (0, $5d9b3ec726ff6af2$export$8f45430ccf837300)[color];
    return color;
};
const $6b7b5f421cd0dd18$export$76e7c09f7f6671cc = (top, right = top, bottom = top, left = right)=>`${$6b7b5f421cd0dd18$export$d736a794e9620a72(top)} ${$6b7b5f421cd0dd18$export$d736a794e9620a72(right)} ${$6b7b5f421cd0dd18$export$d736a794e9620a72(bottom)} ${$6b7b5f421cd0dd18$export$d736a794e9620a72(left)}`;
const $6b7b5f421cd0dd18$export$4aed85427fc6df30 = (val)=>`@media only screen and (max-width: ${val}px)`;



$parcel$exportWildcard($a17398a5f5f400d3$exports, $6b7b5f421cd0dd18$exports);


(0, $26Zo0$gsap).registerPlugin((0, $26Zo0$Draggable));
const $ac4891bf196f4904$export$43c8e9a4fa65db5d = ()=>{
    const [gridHeight, setGridHeigth] = (0, $26Zo0$useState)(3);
    const [visible, setVisible] = (0, $26Zo0$useState)(false);
    (0, $26Zo0$useGSAP)(()=>{
        (0, $26Zo0$Draggable).create("#debugGrid", {
            bounds: "#mainWrapper"
        });
    }, []);
    (0, $26Zo0$useHotkeys)("mod+alt+g", ()=>setVisible(!visible));
    const editGridHeight = (num)=>{
        if (gridHeight + num < 3) return;
        setGridHeigth(gridHeight + num);
    };
    return /*#__PURE__*/ (0, $26Zo0$jsxs)($ac4891bf196f4904$var$Container, {
        id: "debugGrid",
        $gridheight: gridHeight,
        $visible: visible,
        children: [
            /*#__PURE__*/ (0, $26Zo0$jsx)($ac4891bf196f4904$var$Action, {
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
            /*#__PURE__*/ (0, $26Zo0$jsx)($ac4891bf196f4904$var$Action, {
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
const $ac4891bf196f4904$var$Container = (0, $26Zo0$styledcomponents).div`
	width: var(--max-grid-size);
	height: ${({ $gridheight: $gridheight })=>(0, $6b7b5f421cd0dd18$export$d736a794e9620a72)($gridheight)};
	position: fixed;
	top: 0;
	box-sizing: border-box;
	z-index: ${({ $visible: $visible })=>$visible ? 999 : `-1!important`};
	opacity: ${({ $visible: $visible })=>$visible ? 1 : 0};
	display: flex;
	justify-content: space-between;
	align-items: start;
	padding: ${(0, $6b7b5f421cd0dd18$export$76e7c09f7f6671cc)(1)};

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
const $ac4891bf196f4904$var$Action = (0, $26Zo0$styledcomponents).button`
	width: ${(0, $6b7b5f421cd0dd18$export$d736a794e9620a72)(1)};
	height: ${(0, $6b7b5f421cd0dd18$export$d736a794e9620a72)(1)};
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

	${(0, $6b7b5f421cd0dd18$export$4aed85427fc6df30)(380)} {
		font-size: 1.6rem;
		border-width: 1px;
	}
	&.remove {
		border-color: ${(0, $6b7b5f421cd0dd18$export$6ab51d0c2eb33fad)("danger")};
		color: ${(0, $6b7b5f421cd0dd18$export$6ab51d0c2eb33fad)("danger")};
	}
	&.add {
		border-color: ${(0, $6b7b5f421cd0dd18$export$6ab51d0c2eb33fad)("success")};
		color: ${(0, $6b7b5f421cd0dd18$export$6ab51d0c2eb33fad)("success")};
	}
`;



 // export your color utilities, etc.


export {$ac4891bf196f4904$export$43c8e9a4fa65db5d as DebugGrid, $6b7b5f421cd0dd18$export$d736a794e9620a72 as $uw, $6b7b5f421cd0dd18$export$6ab51d0c2eb33fad as $color, $6b7b5f421cd0dd18$export$76e7c09f7f6671cc as $cssTRBL, $6b7b5f421cd0dd18$export$4aed85427fc6df30 as $breakPoint};
//# sourceMappingURL=index.js.map
