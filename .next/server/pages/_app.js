"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9360:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react-icons/ai"
var ai_ = __webpack_require__(9847);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
// EXTERNAL MODULE: external "react-icons/bs"
var bs_ = __webpack_require__(567);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: ./public/assets/acp-logo.png
/* harmony default export */ const acp_logo = ({"src":"/_next/static/media/acp-logo.e12b4bab.png","height":500,"width":500,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAP0lEQVR42mXMsQqAMBRD0SOCg4ivi+LiIAiF/v8HdiidXgIhJHBlLSPzxIaVUL2K0+3X+DxCcdhdggwdnj39HWZxAXpeBrvVAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./components/Navbar.jsx









const Navbar = ()=>{
    // HOOK TO INITIALIZE AND SET STATE
    const { 0: nav , 1: setNav  } = (0,external_react_.useState)(false);
    const { 0: shadow , 1: setShadow  } = (0,external_react_.useState)(false);
    const { 0: navBg , 1: setNavbg  } = (0,external_react_.useState)("#ecf0f3");
    const { 0: linkColor , 1: setLinkColor  } = (0,external_react_.useState)("#1f2937");
    const router = (0,router_namespaceObject.useRouter)();
    // LOGIC TO TOGGLE BETWEEN STATE
    const handleNav = ()=>{
        setNav(!nav);
    };
    // LOGIC TO GIVE SHADOW ON NAVBAR ONCE SCROLLING
    (0,external_react_.useEffect)(()=>{
        const handleShadow = ()=>{
            if (window.scrollY >= 90) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        };
        window.addEventListener("scroll", handleShadow);
    }, []);
    (0,external_react_.useEffect)(()=>{
        if (router.asPath === "/vendOMatic") {
            setNavbg("transparent");
            setLinkColor("#f8f8f8");
        } else {
            setNavbg("#ecf0f3");
            setLinkColor("#1f2937");
        }
    }, [
        router
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        id: "navbar",
        style: {
            backgroundColor: `${navBg}`
        },
        className: shadow ? "fixed w-full h-20 shadow-xl z-[100]" : "fixed w-full h-20 z-[100]",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex justify-between items-center w-full px-2 2xl:px-16",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: acp_logo,
                            alt: "/",
                            width: "250",
                            height: "100"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                style: {
                                    color: `${linkColor}`
                                },
                                className: "hidden md:flex",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "ml-10 text-sm uppercase border-[#1e97f3] hover:border-b",
                                            children: " Home "
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/#about",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "ml-10 text-sm uppercase border-[#1e97f3] hover:border-b",
                                            children: " About "
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/#skills",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "ml-10 text-sm uppercase border-[#1e97f3] hover:border-b",
                                            children: " Skills "
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/#projects",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "ml-10 text-sm uppercase border-[#1e97f3] hover:border-b",
                                            children: " Projects "
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/resume",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "ml-10 text-sm uppercase border-[#1e97f3] hover:border-b",
                                            children: " Resume "
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "ml-10 text-sm uppercase border-[#1e97f3] hover:border-b",
                                            children: " Blog "
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/#contact",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "ml-10 text-sm uppercase border-[#1e97f3] hover:border-b",
                                            children: " Contact "
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                onClick: handleNav,
                                className: "md:hidden",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(ai_.AiOutlineMenu, {
                                    size: 25,
                                    fill: "#1e97f3"
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : "",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: nav ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500" : "fixed left-[-100%] top-0 p-10 ease-in duration-500",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex w-full items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                src: "/../public/assets/acp-logo.png",
                                                alt: "/",
                                                width: "125",
                                                height: "50"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            onClick: handleNav,
                                            className: "rounded-full shadow-lg shawdow-gray-400 p-3 cursor-pointer",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(ai_.AiOutlineClose, {})
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "border-b border-gray-300 my-4",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "w-[85%] md:w-[95%] py-4",
                                        children: " Let's build something together "
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "py-4 flex flex-col",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "uppercase",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                onClick: ()=>setNav(false),
                                                className: "py-4 text-sm uppercase border-[#1e97f3] hover:border-b",
                                                children: " Home "
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/#about",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                onClick: ()=>setNav(false),
                                                className: "py-4 text-sm uppercase border-[#1e97f3] hover:border-b",
                                                children: " About "
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/#skills",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                onClick: ()=>setNav(false),
                                                className: "py-4 text-sm uppercase border-[#1e97f3] hover:border-b",
                                                children: " Skills "
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/#projects",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                onClick: ()=>setNav(false),
                                                className: "py-4 text-sm uppercase border-[#1e97f3] hover:border-b",
                                                children: " Projects "
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/resume",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                onClick: ()=>setNav(false),
                                                className: "py-4 text-sm uppercase border-[#1e97f3] hover:border-b",
                                                children: " Resume "
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                onClick: ()=>setNav(false),
                                                className: "py-4 text-sm uppercase border-[#1e97f3] hover:border-b",
                                                children: " Blog "
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/#contact",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                onClick: ()=>setNav(false),
                                                className: "py-4 text-sm uppercase border-[#1e97f3] hover:border-b",
                                                children: " Contact "
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "pt-40",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "uppercase tracking-widest text-[#1e97f3]",
                                            children: " Let's Connect "
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex items-center justify-between my-4 w-full sm:w-[80%]",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "https://www.linkedin.com/in/andrew-c-park/",
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaLinkedinIn, {})
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "https://github.com/andrewcpark",
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaGithub, {})
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/#contact",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(ai_.AiOutlineMail, {})
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/resume",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(bs_.BsFillPersonLinesFill, {})
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const components_Navbar = (Navbar);

;// CONCATENATED MODULE: ./pages/_app.js



function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Navbar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 9847:
/***/ ((module) => {

module.exports = require("react-icons/ai");

/***/ }),

/***/ 567:
/***/ ((module) => {

module.exports = require("react-icons/bs");

/***/ }),

/***/ 6290:
/***/ ((module) => {

module.exports = require("react-icons/fa");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,61], () => (__webpack_exec__(9360)));
module.exports = __webpack_exports__;

})();