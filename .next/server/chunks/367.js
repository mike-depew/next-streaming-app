"use strict";
exports.id = 367;
exports.ids = [367];
exports.modules = {

/***/ 367:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Navigation)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@heroicons/react/outline"
var outline_ = __webpack_require__(8768);
;// CONCATENATED MODULE: ./components/Menuitems.js



function Menuitems() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex justify-center md:justify-start mt-3 md:mt-0 space-x-8 ",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "",
                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: "/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: "font-medium text-sm md:text-md hover:text-gray-400",
                        children: "Home"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: "/video0001",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: "font-medium text-sm md:text-md hover:text-gray-400",
                        children: "New Videos"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: "/video0002",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: "font-medium text-sm md:text-md hover:text-gray-400",
                        children: "Photos"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: "/login",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: "font-medium text-sm md:text-md hover:text-gray-400",
                        children: "Members login"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: "/signUp",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: "font-medium text-sm md:text-md hover:text-gray-50 bg-blue-500 px-10 py-2 rounded-md hover:bg-blue-700",
                        children: "SignUp"
                    })
                })
            })
        ]
    }));
}
/* harmony default export */ const components_Menuitems = (Menuitems);

;// CONCATENATED MODULE: ./components/Navigation.js





const Navigation = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "w-full h-24 md:h-16 bg-gray-900 fixed z-20 text-gray-50 flex items-center",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "px-3 md:px-0 md:container md:mx-auto w-full",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-col md:flex-row justify-center md:justify-between items-center ",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: "/Legal",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "font-bold tracking-wider text-2xl text-center md:text-left",
                                children: "FART.XXX"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_Menuitems, {})
                ]
            })
        })
    }));
};
/* harmony default export */ const components_Navigation = (Navigation);


/***/ })

};
;