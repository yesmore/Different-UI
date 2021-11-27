"use strict";
exports.id = 327;
exports.ids = [327];
exports.modules = {

/***/ 5887:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-621628ba",
  "path": "/guide/start.html",
  "title": "Quick start",
  "lang": "eh-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "guide/start.md",
  "git": {
    "updatedTime": null,
    "contributors": []
  }
}


/***/ }),

/***/ 1794:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ start_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(4498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/guide/start.html.vue?vue&type=template&id=257d1810



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_CodeGroup = (0,external_vue_.resolveComponent)("CodeGroup")
  const _component_CodeGroupItem = (0,external_vue_.resolveComponent)("CodeGroupItem")

  _push(`<!--[--><h1 id="quick-start" tabindex="-1"><a class="header-anchor" href="#quick-start" aria-hidden="true">#</a> Quick start</h1>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroup, null, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroupItem, { title: "YARN" }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`<div class="language-bash ext-sh"${
                _scopeId
              }><pre class="language-bash"${
                _scopeId
              }><code${
                _scopeId
              }><span class="token function"${
                _scopeId
              }>yarn</span>
</code></pre></div>`)
            } else {
              return [
                (0,external_vue_.createVNode)("div", { class: "language-bash ext-sh" }, [
                  (0,external_vue_.createVNode)("pre", { class: "language-bash" }, [
                    (0,external_vue_.createVNode)("code", null, [
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "yarn"),
                      (0,external_vue_.createTextVNode)("\n")
                    ])
                  ])
                ])
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroupItem, {
          title: "NPM",
          active: ""
        }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`<div class="language-bash ext-sh"${
                _scopeId
              }><pre class="language-bash"${
                _scopeId
              }><code${
                _scopeId
              }><span class="token function"${
                _scopeId
              }>npm</span> <span class="token function"${
                _scopeId
              }>install</span>
</code></pre></div>`)
            } else {
              return [
                (0,external_vue_.createVNode)("div", { class: "language-bash ext-sh" }, [
                  (0,external_vue_.createVNode)("pre", { class: "language-bash" }, [
                    (0,external_vue_.createVNode)("code", null, [
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "npm"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "install"),
                      (0,external_vue_.createTextVNode)("\n")
                    ])
                  ])
                ])
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
      } else {
        return [
          (0,external_vue_.createVNode)(_component_CodeGroupItem, { title: "YARN" }, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createVNode)("div", { class: "language-bash ext-sh" }, [
                (0,external_vue_.createVNode)("pre", { class: "language-bash" }, [
                  (0,external_vue_.createVNode)("code", null, [
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "yarn"),
                    (0,external_vue_.createTextVNode)("\n")
                  ])
                ])
              ])
            ]),
            _: 1
          }),
          (0,external_vue_.createVNode)(_component_CodeGroupItem, {
            title: "NPM",
            active: ""
          }, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createVNode)("div", { class: "language-bash ext-sh" }, [
                (0,external_vue_.createVNode)("pre", { class: "language-bash" }, [
                  (0,external_vue_.createVNode)("code", null, [
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "npm"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "install"),
                    (0,external_vue_.createTextVNode)("\n")
                  ])
                ])
              ])
            ]),
            _: 1
          })
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/guide/start.html.vue?vue&type=template&id=257d1810

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/guide/start.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const start_html = (__exports__);

/***/ }),

/***/ 3744:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
// runtime helper for setting properties on components
// in a tree-shakable way
exports.Z = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ })

};
;
//# sourceMappingURL=327.app.js.map