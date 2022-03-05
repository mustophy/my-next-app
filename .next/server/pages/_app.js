"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 660:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/script"
const script_namespaceObject = require("next/script");
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
;// CONCATENATED MODULE: ./components/Header.js


const Header = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: "main-header",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: "/",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: "logo-holder text-logo",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        children: "ABU RAZEETH"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "search-button",
                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                    className: "far fa-search"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "search-input",
                children: /*#__PURE__*/ jsx_runtime_.jsx("form", {
                    action: "#",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        name: "s",
                        id: "se",
                        type: "text",
                        className: "search",
                        placeholder: "Search"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "sb-button"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "share-btn showshare",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: "fal fa-megaphone"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: "Share Kotlis"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "nav-button-wrap",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "nav-button",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "nav-holder vismobmenu main-menu",
                children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                id: "menu-item-315",
                                className: "menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-315",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    title: "",
                                    href: "/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: "Home"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                id: "menu-item-382",
                                className: "menu-item menu-item-type-post_type menu-item-object-page menu-item-382",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    title: "I",
                                    href: "/about",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: "About"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                id: "menu-item-316",
                                className: "menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-316",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    title: "I",
                                    href: "/portfolio",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: "Portfolio"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                id: "menu-item-480",
                                className: "menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-480",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "#",
                                    children: "Video"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                id: "menu-item-525",
                                className: "menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-525",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "#",
                                    children: "Shop"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                id: "menu-item-383",
                                className: "menu-item menu-item-type-post_type menu-item-object-page menu-item-383",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    title: "I",
                                    href: "#",
                                    children: "Contacts"
                                })
                            })
                        ]
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const components_Header = (Header);

;// CONCATENATED MODULE: ./components/Sidebar.js

const Sidebar = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "sb-overlay"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "hiiden-sidebar-wrap outsb",
                tabIndex: "0",
                style: {
                    overflow: 'hidden',
                    outline: 'none',
                    right: '-450px',
                    transform: 'translate3d(0px, 0px, 0px)'
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        id: "mc4wp_form_widget-3",
                        className: "widget widget-block sb-widget-wrap fl-wrap widget_mc4wp_form_widget",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                children: "SUBSCRIBE TO OUR NEWSLETTER"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                id: "mc4wp-form-1",
                                className: "mc4wp-form mc4wp-form-336",
                                method: "post",
                                "data-id": "336",
                                "data-name": "",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "mc4wp-form-fields",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor sit amet, "
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                type: "email",
                                                name: "EMAIL",
                                                placeholder: "Your Email",
                                                required: ""
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                type: "submit",
                                                value: "Sign up"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "mc4wp-response"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        id: "kotlis_social_widget-2",
                        className: "widget widget-block sb-widget-wrap fl-wrap widget_kotlis_social_widget",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                children: "We’re Are Social"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "sb-widget fl-wrap",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "sidebar-social fl-wrap",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fab fa-facebook-f"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fab fa-twitter"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fab fa-linkedin"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fab fa-instagram"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fab fa-pinterest-p"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        id: "kotlis_twitter_widget-2",
                        className: "widget widget-block sb-widget-wrap fl-wrap widget_kotlis_twitter_widget",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                children: "Our Last Twitts"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "sb-widget fl-wrap",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        id: "footer-twiit",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "user",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    "data-scribe": "element:user_link",
                                                                    href: "https://twitter.com/webRedox",
                                                                    "aria-label": "webRedox (screen name: webRedox)",
                                                                    target: "_blank",
                                                                    rel: "noreferrer",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        "data-scribe": "element:avatar",
                                                                        "data-src-2x": "https://pbs.twimg.com/profile_images/1470415618725740553/LXGaMW6E_bigger.jpg",
                                                                        alt: "",
                                                                        "data-src-1x": "https://pbs.twimg.com/profile_images/1470415618725740553/LXGaMW6E_normal.jpg"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    "data-scribe": "component:author",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        "data-scribe": "element:user_link",
                                                                        href: "https://twitter.com/webRedox",
                                                                        "aria-label": "webRedox (screen name: webRedox)",
                                                                        target: "_blank",
                                                                        rel: "noreferrer",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                        title: "webRedox",
                                                                                        "data-scribe": "element:name",
                                                                                        children: "webRedox"
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                    title: "@webRedox",
                                                                                    "data-scribe": "element:screen_name",
                                                                                    children: "@webRedox"
                                                                                })
                                                                            ]
                                                                        })
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            className: "tweet",
                                                            children: [
                                                                "Check out Tank - Creative Portfolio WordPress Theme. on ",
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                    href: "https://twitter.com/hashtag/EnvatoMarket?src=hash",
                                                                    "data-scribe": "element:hashtag",
                                                                    target: "_blank",
                                                                    rel: "noreferrer",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            children: "#"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            children: "EnvatoMarket"
                                                                        })
                                                                    ]
                                                                }),
                                                                " by ",
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                    href: "https://twitter.com/hashtag/webRedox?src=hash",
                                                                    "data-scribe": "element:hashtag",
                                                                    target: "_blank",
                                                                    rel: "noreferrer",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            children: "#"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            children: "webRedox"
                                                                        })
                                                                    ]
                                                                }),
                                                                " ",
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                    href: "https://twitter.com/hashtag/WPBakery?src=hash",
                                                                    "data-scribe": "element:hashtag",
                                                                    target: "_blank",
                                                                    rel: "noreferrer",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            children: "#"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            children: "WPBakery"
                                                                        })
                                                                    ]
                                                                }),
                                                                " ",
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                    href: "https://twitter.com/hashtag/elementor?src=hash",
                                                                    "data-scribe": "element:hashtag",
                                                                    target: "_blank",
                                                                    rel: "noreferrer",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            children: "#"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            children: "elementor"
                                                                        })
                                                                    ]
                                                                }),
                                                                " ",
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                    href: "https://twitter.com/hashtag/portfolio?src=hash",
                                                                    "data-scribe": "element:hashtag",
                                                                    target: "_blank",
                                                                    rel: "noreferrer",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            children: "#"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            children: "portfolio"
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                    href: "https://t.co/Bd5ZIyBHdY",
                                                                    "data-expanded-url": "https://themeforest.net/item/tank-creative-portfolio-wordpress-theme/34096116",
                                                                    target: "_blank",
                                                                    rel: "noreferrer",
                                                                    title: "https://themeforest.net/item/tank-creative-portfolio-wordpress-theme/34096116",
                                                                    "data-scribe": "element:url",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            children: "https://"
                                                                        }),
                                                                        "themeforest.net/item/tank-crea",
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            children: "tive-portfolio-wordpress-theme/34096116\xa0"
                                                                        }),
                                                                        "…"
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            className: "timePosted",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "https://twitter.com/webRedox/status/1470417184006361089",
                                                                children: "Posted on Dec 13, 2021"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            className: "interact",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "https://twitter.com/intent/tweet?in_reply_to=1470417184006361089",
                                                                    className: "twitter_reply_icon",
                                                                    target: "_blank",
                                                                    rel: "noreferrer",
                                                                    children: "Reply"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "https://twitter.com/intent/retweet?tweet_id=1470417184006361089",
                                                                    className: "twitter_retweet_icon",
                                                                    target: "_blank",
                                                                    rel: "noreferrer",
                                                                    children: "Retweet"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "https://twitter.com/intent/favorite?tweet_id=1470417184006361089",
                                                                    className: "twitter_fav_icon",
                                                                    target: "_blank",
                                                                    rel: "noreferrer",
                                                                    children: "Favorite"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "user",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    "data-scribe": "element:user_link",
                                                                    href: "https://twitter.com/webRedox",
                                                                    "aria-label": "webRedox (screen name: webRedox)",
                                                                    target: "_blank",
                                                                    rel: "noreferrer",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        "data-scribe": "element:avatar",
                                                                        "data-src-2x": "https://pbs.twimg.com/profile_images/1470415618725740553/LXGaMW6E_bigger.jpg",
                                                                        alt: "",
                                                                        "data-src-1x": "https://pbs.twimg.com/profile_images/1470415618725740553/LXGaMW6E_normal.jpg"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    "data-scribe": "component:author",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        "data-scribe": "element:user_link",
                                                                        href: "https://twitter.com/webRedox",
                                                                        "aria-label": "webRedox (screen name: webRedox)",
                                                                        target: "_blank",
                                                                        rel: "noreferrer",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                        title: "webRedox",
                                                                                        "data-scribe": "element:name",
                                                                                        children: "webRedox"
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                    title: "@webRedox",
                                                                                    "data-scribe": "element:screen_name",
                                                                                    children: "@webRedox"
                                                                                })
                                                                            ]
                                                                        })
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            className: "tweet",
                                                            children: [
                                                                "Check out Bauen - Creative Portfolio WordPress Theme. on ",
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                    href: "https://twitter.com/hashtag/EnvatoMarket?src=hash",
                                                                    "data-scribe": "element:hashtag",
                                                                    target: "_blank",
                                                                    rel: "noreferrer",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            children: "#"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            children: "EnvatoMarket"
                                                                        })
                                                                    ]
                                                                }),
                                                                " by ",
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                    href: "https://twitter.com/hashtag/webRedox?src=hash",
                                                                    "data-scribe": "element:hashtag",
                                                                    target: "_blank",
                                                                    rel: "noreferrer",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            children: "#"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            children: "webRedox"
                                                                        })
                                                                    ]
                                                                }),
                                                                " ",
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                    href: "https://twitter.com/hashtag/WPBakery?src=hash",
                                                                    "data-scribe": "element:hashtag",
                                                                    target: "_blank",
                                                                    rel: "noreferrer",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            children: "#"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            children: "WPBakery"
                                                                        })
                                                                    ]
                                                                }),
                                                                " ",
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                    href: "https://twitter.com/hashtag/Portfolio?src=hash",
                                                                    "data-scribe": "element:hashtag",
                                                                    target: "_blank",
                                                                    rel: "noreferrer",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            children: "#"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            children: "Portfolio"
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                    href: "https://t.co/8XepZsNBT6",
                                                                    "data-expanded-url": "https://themeforest.net/item/bauen-architecture-interior-wordpress-theme/34326026",
                                                                    target: "_blank",
                                                                    rel: "noreferrer",
                                                                    title: "https://themeforest.net/item/bauen-architecture-interior-wordpress-theme/34326026",
                                                                    "data-scribe": "element:url",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            children: "https://"
                                                                        }),
                                                                        "themeforest.net/item/bauen-arc",
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            children: "hitecture-interior-wordpress-theme/34326026\xa0"
                                                                        }),
                                                                        "…"
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            className: "timePosted",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "https://twitter.com/webRedox/status/1470416832918024195",
                                                                children: "Posted on Dec 13, 2021"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            className: "interact",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "https://twitter.com/intent/tweet?in_reply_to=1470416832918024195",
                                                                    className: "twitter_reply_icon",
                                                                    target: "_blank",
                                                                    rel: "noreferrer",
                                                                    children: "Reply"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "https://twitter.com/intent/retweet?tweet_id=1470416832918024195",
                                                                    className: "twitter_retweet_icon",
                                                                    target: "_blank",
                                                                    rel: "noreferrer",
                                                                    children: "Retweet"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "https://twitter.com/intent/favorite?tweet_id=1470416832918024195",
                                                                    className: "twitter_fav_icon",
                                                                    target: "_blank",
                                                                    rel: "noreferrer",
                                                                    children: "Favorite"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "https://twitter.com/webredox",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        className: "twitt_btn fl-wrap",
                                        children: "Follow Us"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const components_Sidebar = (Sidebar);

;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./components/Layout.js





const Layout = ({ children  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            id: "main",
            style: {
                opacity: 1
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(components_Header, {}),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    id: "wrapper",
                    children: children
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(components_Sidebar, {}),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "element",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "element-item"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("script", {
                        async: true,
                        src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js",
                        integrity: "sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==",
                        crossOrigin: "anonymous",
                        referrerpolicy: "no-referrer"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("script", {
                    async: true,
                    src: "/js/modernizr-min.js"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("script", {
                    async: true,
                    src: "/js/easing-min.js"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("script", {
                    async: true,
                    src: "/js/lightgallery-min.js"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("script", {
                    async: true,
                    src: "/js/isotope-min.js"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("script", {
                    async: true,
                    src: "/js/packery-min.js"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("script", {
                    async: true,
                    src: "/js/share-min.js"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("script", {
                    async: true,
                    src: "/js/sliding-menu-min.js"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("script", {
                    async: true,
                    src: "/js/tweenmax-min.js"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("script", {
                    async: true,
                    src: "/js/swiper-min.js"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("script", {
                    async: true,
                    src: "/js/tweenmax-min.js"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("script", {
                    async: true,
                    src: "/js/utility-min.js"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("script", {
                    async: true,
                    src: "/js/map-min.js"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("script", {
                    async: true,
                    src: "/js/map-script.js"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("script", {
                    async: true,
                    src: "/js/dark-scripts.js"
                })
            ]
        })
    }));
};
/* harmony default export */ const components_Layout = (Layout);

;// CONCATENATED MODULE: ./pages/_app.js








function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(components_Layout, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 14:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 20:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 52:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 422:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

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
var __webpack_exports__ = __webpack_require__.X(0, [190,676,664], () => (__webpack_exec__(660)));
module.exports = __webpack_exports__;

})();