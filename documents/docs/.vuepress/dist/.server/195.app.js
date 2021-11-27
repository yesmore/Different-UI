"use strict";
exports.id = 195;
exports.ids = [195];
exports.modules = {

/***/ 3408:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-1fdc817c",
  "path": "/component/button.html",
  "title": "Button 按钮",
  "lang": "eh-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Basic",
      "slug": "basic",
      "children": [
        {
          "level": 3,
          "title": "color",
          "slug": "color",
          "children": []
        },
        {
          "level": 3,
          "title": "size",
          "slug": "size",
          "children": []
        },
        {
          "level": 3,
          "title": "radius",
          "slug": "radius",
          "children": []
        },
        {
          "level": 3,
          "title": "round",
          "slug": "round",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Advanced",
      "slug": "advanced",
      "children": [
        {
          "level": 3,
          "title": "concave",
          "slug": "concave",
          "children": []
        },
        {
          "level": 3,
          "title": "bling",
          "slug": "bling",
          "children": []
        },
        {
          "level": 3,
          "title": "transx-[color]",
          "slug": "transx-color",
          "children": []
        },
        {
          "level": 3,
          "title": "transy-[color]",
          "slug": "transy-color",
          "children": []
        },
        {
          "level": 3,
          "title": "curtain-[dirction]-[color]",
          "slug": "curtain-dirction-color",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "component/button.md",
  "git": {
    "updatedTime": null,
    "contributors": []
  }
}


/***/ }),

/***/ 1027:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ button_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(4498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/component/button.html.vue?vue&type=template&id=d7842d88



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_df_template = (0,external_vue_.resolveComponent)("df-template")
  const _component_df_button = (0,external_vue_.resolveComponent)("df-button")

  _push(`<!--[--><h1 id="button-按钮" tabindex="-1"><a class="header-anchor" href="#button-按钮" aria-hidden="true">#</a> Button 按钮</h1><p>按钮组件</p><h2 id="basic" tabindex="-1"><a class="header-anchor" href="#basic" aria-hidden="true">#</a> Basic</h2><p>df-button 提供了 <code>color</code> 属性来设置按钮不同颜色主题，示例如下：</p><h3 id="color" tabindex="-1"><a class="header-anchor" href="#color" aria-hidden="true">#</a> color</h3>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_df_template, null, {
    demo: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="btn-container" style="${
          (0,server_renderer.ssrRenderStyle)({"display":"flex","justify-content":"center","flex-wrap":"wrap"})
        }"${
          _scopeId
        }>`)
        _push((0,server_renderer.ssrRenderComponent)(_component_df_button, { color: "primary" }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`primary`)
            } else {
              return [
                (0,external_vue_.createTextVNode)("primary")
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push((0,server_renderer.ssrRenderComponent)(_component_df_button, { color: "success" }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`success`)
            } else {
              return [
                (0,external_vue_.createTextVNode)("success")
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push((0,server_renderer.ssrRenderComponent)(_component_df_button, { color: "warning" }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`warning`)
            } else {
              return [
                (0,external_vue_.createTextVNode)("warning")
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push((0,server_renderer.ssrRenderComponent)(_component_df_button, { color: "danger" }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`danger`)
            } else {
              return [
                (0,external_vue_.createTextVNode)("danger")
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push((0,server_renderer.ssrRenderComponent)(_component_df_button, { color: "error" }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`error`)
            } else {
              return [
                (0,external_vue_.createTextVNode)("error")
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push((0,server_renderer.ssrRenderComponent)(_component_df_button, { color: "info" }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`info`)
            } else {
              return [
                (0,external_vue_.createTextVNode)("info")
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push((0,server_renderer.ssrRenderComponent)(_component_df_button, { color: "black" }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`black`)
            } else {
              return [
                (0,external_vue_.createTextVNode)("black")
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push(`</div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", {
            class: "btn-container",
            style: {"display":"flex","justify-content":"center","flex-wrap":"wrap"}
          }, [
            (0,external_vue_.createVNode)(_component_df_button, { color: "primary" }, {
              default: (0,external_vue_.withCtx)(() => [
                (0,external_vue_.createTextVNode)("primary")
              ]),
              _: 1
            }),
            (0,external_vue_.createVNode)(_component_df_button, { color: "success" }, {
              default: (0,external_vue_.withCtx)(() => [
                (0,external_vue_.createTextVNode)("success")
              ]),
              _: 1
            }),
            (0,external_vue_.createVNode)(_component_df_button, { color: "warning" }, {
              default: (0,external_vue_.withCtx)(() => [
                (0,external_vue_.createTextVNode)("warning")
              ]),
              _: 1
            }),
            (0,external_vue_.createVNode)(_component_df_button, { color: "danger" }, {
              default: (0,external_vue_.withCtx)(() => [
                (0,external_vue_.createTextVNode)("danger")
              ]),
              _: 1
            }),
            (0,external_vue_.createVNode)(_component_df_button, { color: "error" }, {
              default: (0,external_vue_.withCtx)(() => [
                (0,external_vue_.createTextVNode)("error")
              ]),
              _: 1
            }),
            (0,external_vue_.createVNode)(_component_df_button, { color: "info" }, {
              default: (0,external_vue_.withCtx)(() => [
                (0,external_vue_.createTextVNode)("info")
              ]),
              _: 1
            }),
            (0,external_vue_.createVNode)(_component_df_button, { color: "black" }, {
              default: (0,external_vue_.withCtx)(() => [
                (0,external_vue_.createTextVNode)("black")
              ]),
              _: 1
            })
          ])
        ]
      }
    }),
    src: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<details class="custom-container details"${
          _scopeId
        }><summary${
          _scopeId
        }><i class="iconfont icon-script"${
          _scopeId
        }></i></summary><div class="language-vue ext-vue line-numbers-mode"${
          _scopeId
        }><pre class="language-vue"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>template</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
  <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>div</span>
    <span class="token attr-name"${
          _scopeId
        }>class</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>btn-container<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span>
    <span class="token special-attr"${
          _scopeId
        }><span class="token attr-name"${
          _scopeId
        }>style</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span><span class="token value css language-css"${
          _scopeId
        }><span class="token property"${
          _scopeId
        }>display</span><span class="token punctuation"${
          _scopeId
        }>:</span>flex<span class="token punctuation"${
          _scopeId
        }>;</span><span class="token property"${
          _scopeId
        }>justify-content</span><span class="token punctuation"${
          _scopeId
        }>:</span>center<span class="token punctuation"${
          _scopeId
        }>;</span><span class="token property"${
          _scopeId
        }>flex-wrap</span><span class="token punctuation"${
          _scopeId
        }>:</span>wrap<span class="token punctuation"${
          _scopeId
        }>;</span></span><span class="token punctuation"${
          _scopeId
        }>&quot;</span></span></span>
  <span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
    <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>df-button</span> <span class="token attr-name"${
          _scopeId
        }>color</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>primary<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>primary<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>df-button</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
    <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>df-button</span> <span class="token attr-name"${
          _scopeId
        }>color</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>success<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>success<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>df-button</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
    <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>df-button</span> <span class="token attr-name"${
          _scopeId
        }>color</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>warning<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>warning<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>df-button</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
    <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>df-button</span> <span class="token attr-name"${
          _scopeId
        }>color</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>danger<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>danger<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>df-button</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
    <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>df-button</span> <span class="token attr-name"${
          _scopeId
        }>color</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>error<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>error<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>df-button</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
    <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>df-button</span> <span class="token attr-name"${
          _scopeId
        }>color</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>info<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>info<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>df-button</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
    <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>df-button</span> <span class="token attr-name"${
          _scopeId
        }>color</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>black<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>black<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>df-button</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
  <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>div</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>template</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
</code></pre><div class="line-numbers"${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>1</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>2</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>3</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>4</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>5</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>6</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>7</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>8</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>9</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>10</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>11</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>12</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>13</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>14</span><br${
          _scopeId
        }></div></div></details>`)
      } else {
        return [
          (0,external_vue_.createVNode)("details", { class: "custom-container details" }, [
            (0,external_vue_.createVNode)("summary", null, [
              (0,external_vue_.createVNode)("i", { class: "iconfont icon-script" })
            ]),
            (0,external_vue_.createVNode)("div", { class: "language-vue ext-vue line-numbers-mode" }, [
              (0,external_vue_.createVNode)("pre", { class: "language-vue" }, [
                (0,external_vue_.createVNode)("code", null, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                      (0,external_vue_.createTextVNode)("template")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("\n  "),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                      (0,external_vue_.createTextVNode)("div")
                    ]),
                    (0,external_vue_.createTextVNode)("\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "class"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("btn-container"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createTextVNode)("\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token special-attr" }, [
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "style"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createVNode)("span", { class: "token value css language-css" }, [
                          (0,external_vue_.createVNode)("span", { class: "token property" }, "display"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                          (0,external_vue_.createTextVNode)("flex"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
                          (0,external_vue_.createVNode)("span", { class: "token property" }, "justify-content"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                          (0,external_vue_.createTextVNode)("center"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
                          (0,external_vue_.createVNode)("span", { class: "token property" }, "flex-wrap"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                          (0,external_vue_.createTextVNode)("wrap"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ])
                    ]),
                    (0,external_vue_.createTextVNode)("\n  "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("\n    "),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "color"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("primary"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("primary"),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("\n    "),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "color"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("success"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("success"),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("\n    "),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "color"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("warning"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("warning"),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("\n    "),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "color"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("danger"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("danger"),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("\n    "),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "color"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("error"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("error"),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("\n    "),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "color"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("info"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("info"),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("\n    "),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "color"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("black"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("black"),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("\n  "),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                      (0,external_vue_.createTextVNode)("div")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("\n"),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                      (0,external_vue_.createTextVNode)("template")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("\n")
                ])
              ]),
              (0,external_vue_.createVNode)("div", { class: "line-numbers" }, [
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "1"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "2"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "3"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "4"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "5"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "6"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "7"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "8"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "9"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "10"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "11"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "12"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "13"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "14"),
                (0,external_vue_.createVNode)("br")
              ])
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="size" tabindex="-1"><a class="header-anchor" href="#size" aria-hidden="true">#</a> size</h3><p>通过 <code>size</code> 属性来设置按钮大小，默认值为 <code>default</code>/<code>middle</code> 示例如下：</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_df_template, null, {
    demo: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="btn-container" style="${
          (0,server_renderer.ssrRenderStyle)({"display":"flex","justify-content":"center","flex-wrap":"wrap"})
        }"${
          _scopeId
        }>`)
        _push((0,server_renderer.ssrRenderComponent)(_component_df_button, {
          color: "primary",
          size: "mini"
        }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`small`)
            } else {
              return [
                (0,external_vue_.createTextVNode)("small")
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push((0,server_renderer.ssrRenderComponent)(_component_df_button, {
          color: "success",
          size: "small"
        }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`success`)
            } else {
              return [
                (0,external_vue_.createTextVNode)("success")
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push((0,server_renderer.ssrRenderComponent)(_component_df_button, {
          color: "warning",
          size: "middle"
        }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`warning`)
            } else {
              return [
                (0,external_vue_.createTextVNode)("warning")
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push((0,server_renderer.ssrRenderComponent)(_component_df_button, {
          color: "danger",
          size: "large"
        }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`danger`)
            } else {
              return [
                (0,external_vue_.createTextVNode)("danger")
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push(`</div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", {
            class: "btn-container",
            style: {"display":"flex","justify-content":"center","flex-wrap":"wrap"}
          }, [
            (0,external_vue_.createVNode)(_component_df_button, {
              color: "primary",
              size: "mini"
            }, {
              default: (0,external_vue_.withCtx)(() => [
                (0,external_vue_.createTextVNode)("small")
              ]),
              _: 1
            }),
            (0,external_vue_.createVNode)(_component_df_button, {
              color: "success",
              size: "small"
            }, {
              default: (0,external_vue_.withCtx)(() => [
                (0,external_vue_.createTextVNode)("success")
              ]),
              _: 1
            }),
            (0,external_vue_.createVNode)(_component_df_button, {
              color: "warning",
              size: "middle"
            }, {
              default: (0,external_vue_.withCtx)(() => [
                (0,external_vue_.createTextVNode)("warning")
              ]),
              _: 1
            }),
            (0,external_vue_.createVNode)(_component_df_button, {
              color: "danger",
              size: "large"
            }, {
              default: (0,external_vue_.withCtx)(() => [
                (0,external_vue_.createTextVNode)("danger")
              ]),
              _: 1
            })
          ])
        ]
      }
    }),
    src: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<details class="custom-container details"${
          _scopeId
        }><summary${
          _scopeId
        }><i class="iconfont icon-script"${
          _scopeId
        }></i></summary><div class="language-vue ext-vue line-numbers-mode"${
          _scopeId
        }><pre class="language-vue"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>template</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
  <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>div</span>
    <span class="token attr-name"${
          _scopeId
        }>class</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>btn-container<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span>
    <span class="token special-attr"${
          _scopeId
        }><span class="token attr-name"${
          _scopeId
        }>style</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span><span class="token value css language-css"${
          _scopeId
        }><span class="token property"${
          _scopeId
        }>display</span><span class="token punctuation"${
          _scopeId
        }>:</span>flex<span class="token punctuation"${
          _scopeId
        }>;</span><span class="token property"${
          _scopeId
        }>justify-content</span><span class="token punctuation"${
          _scopeId
        }>:</span>center<span class="token punctuation"${
          _scopeId
        }>;</span><span class="token property"${
          _scopeId
        }>flex-wrap</span><span class="token punctuation"${
          _scopeId
        }>:</span>wrap<span class="token punctuation"${
          _scopeId
        }>;</span></span><span class="token punctuation"${
          _scopeId
        }>&quot;</span></span></span>
  <span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
    <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>df-button</span> <span class="token attr-name"${
          _scopeId
        }>color</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>primary<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span> <span class="token attr-name"${
          _scopeId
        }>size</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>mini<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>small<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>df-button</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
    <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>df-button</span> <span class="token attr-name"${
          _scopeId
        }>color</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>success<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span> <span class="token attr-name"${
          _scopeId
        }>size</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>small<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>success<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>df-button</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
    <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>df-button</span> <span class="token attr-name"${
          _scopeId
        }>color</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>warning<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span> <span class="token attr-name"${
          _scopeId
        }>size</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>middle<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>warning<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>df-button</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
    <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>df-button</span> <span class="token attr-name"${
          _scopeId
        }>color</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>danger<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span> <span class="token attr-name"${
          _scopeId
        }>size</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>large<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>danger<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>df-button</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
  <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>div</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>template</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
</code></pre><div class="line-numbers"${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>1</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>2</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>3</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>4</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>5</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>6</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>7</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>8</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>9</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>10</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>11</span><br${
          _scopeId
        }></div></div></details>`)
      } else {
        return [
          (0,external_vue_.createVNode)("details", { class: "custom-container details" }, [
            (0,external_vue_.createVNode)("summary", null, [
              (0,external_vue_.createVNode)("i", { class: "iconfont icon-script" })
            ]),
            (0,external_vue_.createVNode)("div", { class: "language-vue ext-vue line-numbers-mode" }, [
              (0,external_vue_.createVNode)("pre", { class: "language-vue" }, [
                (0,external_vue_.createVNode)("code", null, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                      (0,external_vue_.createTextVNode)("template")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("\n  "),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                      (0,external_vue_.createTextVNode)("div")
                    ]),
                    (0,external_vue_.createTextVNode)("\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "class"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("btn-container"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createTextVNode)("\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token special-attr" }, [
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "style"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createVNode)("span", { class: "token value css language-css" }, [
                          (0,external_vue_.createVNode)("span", { class: "token property" }, "display"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                          (0,external_vue_.createTextVNode)("flex"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
                          (0,external_vue_.createVNode)("span", { class: "token property" }, "justify-content"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                          (0,external_vue_.createTextVNode)("center"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
                          (0,external_vue_.createVNode)("span", { class: "token property" }, "flex-wrap"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                          (0,external_vue_.createTextVNode)("wrap"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ])
                    ]),
                    (0,external_vue_.createTextVNode)("\n  "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("\n    "),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "color"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("primary"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "size"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("mini"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("small"),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("\n    "),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "color"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("success"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "size"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("small"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("success"),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("\n    "),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "color"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("warning"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "size"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("middle"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("warning"),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("\n    "),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "color"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("danger"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "size"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("large"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("danger"),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("\n  "),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                      (0,external_vue_.createTextVNode)("div")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("\n"),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                      (0,external_vue_.createTextVNode)("template")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("\n")
                ])
              ]),
              (0,external_vue_.createVNode)("div", { class: "line-numbers" }, [
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "1"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "2"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "3"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "4"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "5"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "6"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "7"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "8"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "9"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "10"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "11"),
                (0,external_vue_.createVNode)("br")
              ])
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="radius" tabindex="-1"><a class="header-anchor" href="#radius" aria-hidden="true">#</a> radius</h3><p>通过 <code>radius</code> 属性来设置按钮圆角半径，默认值为 <code>default</code>/<code>middle</code> 示例如下：</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_df_template, null, {
    demo: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="btn-container" style="${
          (0,server_renderer.ssrRenderStyle)({"display":"flex","justify-content":"center","flex-wrap":"wrap"})
        }"${
          _scopeId
        }>`)
        _push((0,server_renderer.ssrRenderComponent)(_component_df_button, {
          color: "primary",
          radius: "mini"
        }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`small`)
            } else {
              return [
                (0,external_vue_.createTextVNode)("small")
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push((0,server_renderer.ssrRenderComponent)(_component_df_button, {
          color: "success",
          radius: "small"
        }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`success`)
            } else {
              return [
                (0,external_vue_.createTextVNode)("success")
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push((0,server_renderer.ssrRenderComponent)(_component_df_button, {
          color: "warning",
          radius: "middle"
        }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`warning`)
            } else {
              return [
                (0,external_vue_.createTextVNode)("warning")
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push((0,server_renderer.ssrRenderComponent)(_component_df_button, {
          color: "danger",
          radius: "large"
        }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`danger`)
            } else {
              return [
                (0,external_vue_.createTextVNode)("danger")
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push(`</div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", {
            class: "btn-container",
            style: {"display":"flex","justify-content":"center","flex-wrap":"wrap"}
          }, [
            (0,external_vue_.createVNode)(_component_df_button, {
              color: "primary",
              radius: "mini"
            }, {
              default: (0,external_vue_.withCtx)(() => [
                (0,external_vue_.createTextVNode)("small")
              ]),
              _: 1
            }),
            (0,external_vue_.createVNode)(_component_df_button, {
              color: "success",
              radius: "small"
            }, {
              default: (0,external_vue_.withCtx)(() => [
                (0,external_vue_.createTextVNode)("success")
              ]),
              _: 1
            }),
            (0,external_vue_.createVNode)(_component_df_button, {
              color: "warning",
              radius: "middle"
            }, {
              default: (0,external_vue_.withCtx)(() => [
                (0,external_vue_.createTextVNode)("warning")
              ]),
              _: 1
            }),
            (0,external_vue_.createVNode)(_component_df_button, {
              color: "danger",
              radius: "large"
            }, {
              default: (0,external_vue_.withCtx)(() => [
                (0,external_vue_.createTextVNode)("danger")
              ]),
              _: 1
            })
          ])
        ]
      }
    }),
    src: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<details class="custom-container details"${
          _scopeId
        }><summary${
          _scopeId
        }><i class="iconfont icon-script"${
          _scopeId
        }></i></summary><div class="language-vue ext-vue line-numbers-mode"${
          _scopeId
        }><pre class="language-vue"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>template</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
  <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>div</span>
    <span class="token attr-name"${
          _scopeId
        }>class</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>btn-container<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span>
    <span class="token special-attr"${
          _scopeId
        }><span class="token attr-name"${
          _scopeId
        }>style</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span><span class="token value css language-css"${
          _scopeId
        }><span class="token property"${
          _scopeId
        }>display</span><span class="token punctuation"${
          _scopeId
        }>:</span>flex<span class="token punctuation"${
          _scopeId
        }>;</span><span class="token property"${
          _scopeId
        }>justify-content</span><span class="token punctuation"${
          _scopeId
        }>:</span>center<span class="token punctuation"${
          _scopeId
        }>;</span><span class="token property"${
          _scopeId
        }>flex-wrap</span><span class="token punctuation"${
          _scopeId
        }>:</span>wrap<span class="token punctuation"${
          _scopeId
        }>;</span></span><span class="token punctuation"${
          _scopeId
        }>&quot;</span></span></span>
  <span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
    <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>df-button</span> <span class="token attr-name"${
          _scopeId
        }>color</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>primary<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span> <span class="token attr-name"${
          _scopeId
        }>radius</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>mini<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>small<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>df-button</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
    <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>df-button</span> <span class="token attr-name"${
          _scopeId
        }>color</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>success<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span> <span class="token attr-name"${
          _scopeId
        }>radius</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>small<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>success<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>df-button</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
    <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>df-button</span> <span class="token attr-name"${
          _scopeId
        }>color</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>warning<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span> <span class="token attr-name"${
          _scopeId
        }>radius</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>middle<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>warning<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>df-button</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
    <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>df-button</span> <span class="token attr-name"${
          _scopeId
        }>color</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>danger<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span> <span class="token attr-name"${
          _scopeId
        }>radius</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>large<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>danger<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>df-button</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
  <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>div</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>template</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
</code></pre><div class="line-numbers"${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>1</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>2</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>3</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>4</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>5</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>6</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>7</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>8</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>9</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>10</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>11</span><br${
          _scopeId
        }></div></div></details>`)
      } else {
        return [
          (0,external_vue_.createVNode)("details", { class: "custom-container details" }, [
            (0,external_vue_.createVNode)("summary", null, [
              (0,external_vue_.createVNode)("i", { class: "iconfont icon-script" })
            ]),
            (0,external_vue_.createVNode)("div", { class: "language-vue ext-vue line-numbers-mode" }, [
              (0,external_vue_.createVNode)("pre", { class: "language-vue" }, [
                (0,external_vue_.createVNode)("code", null, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                      (0,external_vue_.createTextVNode)("template")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("\n  "),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                      (0,external_vue_.createTextVNode)("div")
                    ]),
                    (0,external_vue_.createTextVNode)("\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "class"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("btn-container"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createTextVNode)("\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token special-attr" }, [
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "style"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createVNode)("span", { class: "token value css language-css" }, [
                          (0,external_vue_.createVNode)("span", { class: "token property" }, "display"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                          (0,external_vue_.createTextVNode)("flex"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
                          (0,external_vue_.createVNode)("span", { class: "token property" }, "justify-content"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                          (0,external_vue_.createTextVNode)("center"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
                          (0,external_vue_.createVNode)("span", { class: "token property" }, "flex-wrap"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                          (0,external_vue_.createTextVNode)("wrap"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ])
                    ]),
                    (0,external_vue_.createTextVNode)("\n  "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("\n    "),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "color"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("primary"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "radius"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("mini"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("small"),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("\n    "),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "color"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("success"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "radius"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("small"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("success"),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("\n    "),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "color"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("warning"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "radius"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("middle"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("warning"),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("\n    "),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "color"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("danger"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "radius"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("large"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("danger"),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("\n  "),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                      (0,external_vue_.createTextVNode)("div")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("\n"),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                      (0,external_vue_.createTextVNode)("template")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("\n")
                ])
              ]),
              (0,external_vue_.createVNode)("div", { class: "line-numbers" }, [
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "1"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "2"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "3"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "4"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "5"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "6"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "7"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "8"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "9"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "10"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "11"),
                (0,external_vue_.createVNode)("br")
              ])
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="round" tabindex="-1"><a class="header-anchor" href="#round" aria-hidden="true">#</a> round</h3><p>通过 <code>round</code> 属性来设置按钮是否为圆形，默认值为 <code>false</code>，示例如下：</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_df_template, null, {
    demo: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="btn-container" style="${
          (0,server_renderer.ssrRenderStyle)({"display":"flex","justify-content":"center","flex-wrap":"wrap"})
        }"${
          _scopeId
        }>`)
        _push((0,server_renderer.ssrRenderComponent)(_component_df_button, {
          color: "primary",
          size: "mini",
          round: true
        }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`i`)
            } else {
              return [
                (0,external_vue_.createTextVNode)("i")
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push((0,server_renderer.ssrRenderComponent)(_component_df_button, {
          color: "success",
          size: "small",
          round: true
        }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`i`)
            } else {
              return [
                (0,external_vue_.createTextVNode)("i")
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push((0,server_renderer.ssrRenderComponent)(_component_df_button, {
          color: "warning",
          size: "middle",
          round: true
        }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`i`)
            } else {
              return [
                (0,external_vue_.createTextVNode)("i")
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push((0,server_renderer.ssrRenderComponent)(_component_df_button, {
          color: "danger",
          size: "large",
          round: true
        }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`i`)
            } else {
              return [
                (0,external_vue_.createTextVNode)("i")
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push(`</div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", {
            class: "btn-container",
            style: {"display":"flex","justify-content":"center","flex-wrap":"wrap"}
          }, [
            (0,external_vue_.createVNode)(_component_df_button, {
              color: "primary",
              size: "mini",
              round: true
            }, {
              default: (0,external_vue_.withCtx)(() => [
                (0,external_vue_.createTextVNode)("i")
              ]),
              _: 1
            }),
            (0,external_vue_.createVNode)(_component_df_button, {
              color: "success",
              size: "small",
              round: true
            }, {
              default: (0,external_vue_.withCtx)(() => [
                (0,external_vue_.createTextVNode)("i")
              ]),
              _: 1
            }),
            (0,external_vue_.createVNode)(_component_df_button, {
              color: "warning",
              size: "middle",
              round: true
            }, {
              default: (0,external_vue_.withCtx)(() => [
                (0,external_vue_.createTextVNode)("i")
              ]),
              _: 1
            }),
            (0,external_vue_.createVNode)(_component_df_button, {
              color: "danger",
              size: "large",
              round: true
            }, {
              default: (0,external_vue_.withCtx)(() => [
                (0,external_vue_.createTextVNode)("i")
              ]),
              _: 1
            })
          ])
        ]
      }
    }),
    src: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<details class="custom-container details"${
          _scopeId
        }><summary${
          _scopeId
        }><i class="iconfont icon-script"${
          _scopeId
        }></i></summary><div class="language-vue ext-vue line-numbers-mode"${
          _scopeId
        }><pre class="language-vue"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>template</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
  <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>div</span>
    <span class="token attr-name"${
          _scopeId
        }>class</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>btn-container<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span>
    <span class="token special-attr"${
          _scopeId
        }><span class="token attr-name"${
          _scopeId
        }>style</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span><span class="token value css language-css"${
          _scopeId
        }><span class="token property"${
          _scopeId
        }>display</span><span class="token punctuation"${
          _scopeId
        }>:</span>flex<span class="token punctuation"${
          _scopeId
        }>;</span><span class="token property"${
          _scopeId
        }>justify-content</span><span class="token punctuation"${
          _scopeId
        }>:</span>center<span class="token punctuation"${
          _scopeId
        }>;</span><span class="token property"${
          _scopeId
        }>flex-wrap</span><span class="token punctuation"${
          _scopeId
        }>:</span>wrap<span class="token punctuation"${
          _scopeId
        }>;</span></span><span class="token punctuation"${
          _scopeId
        }>&quot;</span></span></span>
  <span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
    <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>df-button</span> <span class="token attr-name"${
          _scopeId
        }>color</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>primary<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span> <span class="token attr-name"${
          _scopeId
        }>size</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>mini<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span> <span class="token attr-name"${
          _scopeId
        }>:round</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>true<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>i<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>df-button</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
    <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>df-button</span> <span class="token attr-name"${
          _scopeId
        }>color</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>success<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span> <span class="token attr-name"${
          _scopeId
        }>size</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>small<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span> <span class="token attr-name"${
          _scopeId
        }>:round</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>true<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>i<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>df-button</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
    <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>df-button</span> <span class="token attr-name"${
          _scopeId
        }>color</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>warning<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span> <span class="token attr-name"${
          _scopeId
        }>size</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>middle<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span> <span class="token attr-name"${
          _scopeId
        }>:round</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>true<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>i<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>df-button</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
    <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>df-button</span> <span class="token attr-name"${
          _scopeId
        }>color</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>danger<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span> <span class="token attr-name"${
          _scopeId
        }>size</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>large<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span> <span class="token attr-name"${
          _scopeId
        }>:round</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>true<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>i<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>df-button</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
  <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>div</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>template</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
</code></pre><div class="line-numbers"${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>1</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>2</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>3</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>4</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>5</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>6</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>7</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>8</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>9</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>10</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>11</span><br${
          _scopeId
        }></div></div></details>`)
      } else {
        return [
          (0,external_vue_.createVNode)("details", { class: "custom-container details" }, [
            (0,external_vue_.createVNode)("summary", null, [
              (0,external_vue_.createVNode)("i", { class: "iconfont icon-script" })
            ]),
            (0,external_vue_.createVNode)("div", { class: "language-vue ext-vue line-numbers-mode" }, [
              (0,external_vue_.createVNode)("pre", { class: "language-vue" }, [
                (0,external_vue_.createVNode)("code", null, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                      (0,external_vue_.createTextVNode)("template")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("\n  "),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                      (0,external_vue_.createTextVNode)("div")
                    ]),
                    (0,external_vue_.createTextVNode)("\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "class"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("btn-container"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createTextVNode)("\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token special-attr" }, [
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "style"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createVNode)("span", { class: "token value css language-css" }, [
                          (0,external_vue_.createVNode)("span", { class: "token property" }, "display"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                          (0,external_vue_.createTextVNode)("flex"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
                          (0,external_vue_.createVNode)("span", { class: "token property" }, "justify-content"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                          (0,external_vue_.createTextVNode)("center"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
                          (0,external_vue_.createVNode)("span", { class: "token property" }, "flex-wrap"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                          (0,external_vue_.createTextVNode)("wrap"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ])
                    ]),
                    (0,external_vue_.createTextVNode)("\n  "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("\n    "),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "color"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("primary"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "size"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("mini"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, ":round"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("true"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("i"),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("\n    "),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "color"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("success"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "size"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("small"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, ":round"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("true"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("i"),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("\n    "),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "color"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("warning"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "size"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("middle"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, ":round"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("true"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("i"),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("\n    "),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "color"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("danger"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "size"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("large"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, ":round"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("true"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("i"),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("\n  "),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                      (0,external_vue_.createTextVNode)("div")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("\n"),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                      (0,external_vue_.createTextVNode)("template")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("\n")
                ])
              ]),
              (0,external_vue_.createVNode)("div", { class: "line-numbers" }, [
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "1"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "2"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "3"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "4"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "5"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "6"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "7"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "8"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "9"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "10"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "11"),
                (0,external_vue_.createVNode)("br")
              ])
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h2 id="advanced" tabindex="-1"><a class="header-anchor" href="#advanced" aria-hidden="true">#</a> Advanced</h2><p>df-button 提供了 <code>type</code> 属性来设置按钮不同样式类型，其中，默认样式为 <code>default</code>/<code>simple</code>。下面是 <code>type</code> 的可选值示例。</p><h3 id="concave" tabindex="-1"><a class="header-anchor" href="#concave" aria-hidden="true">#</a> concave</h3><ul><li><code>type=&#39;concave&#39;</code></li><li>当你鼠标点击时，会产生凹陷效果。</li></ul><p>示例如下：</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_df_template, null, {
    demo: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="btn-container" style="${
          (0,server_renderer.ssrRenderStyle)({"display":"flex","justify-content":"center","flex-wrap":"wrap"})
        }"${
          _scopeId
        }>`)
        _push((0,server_renderer.ssrRenderComponent)(_component_df_button, {
          color: "primary",
          type: "concave"
        }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`primary`)
            } else {
              return [
                (0,external_vue_.createTextVNode)("primary")
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push((0,server_renderer.ssrRenderComponent)(_component_df_button, {
          color: "success",
          type: "concave"
        }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`success`)
            } else {
              return [
                (0,external_vue_.createTextVNode)("success")
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push((0,server_renderer.ssrRenderComponent)(_component_df_button, {
          color: "warning",
          type: "concave"
        }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`warning`)
            } else {
              return [
                (0,external_vue_.createTextVNode)("warning")
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push((0,server_renderer.ssrRenderComponent)(_component_df_button, {
          color: "danger",
          type: "concave"
        }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`danger`)
            } else {
              return [
                (0,external_vue_.createTextVNode)("danger")
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push((0,server_renderer.ssrRenderComponent)(_component_df_button, {
          color: "error",
          type: "concave"
        }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`error`)
            } else {
              return [
                (0,external_vue_.createTextVNode)("error")
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push((0,server_renderer.ssrRenderComponent)(_component_df_button, {
          color: "info",
          type: "concave"
        }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`info`)
            } else {
              return [
                (0,external_vue_.createTextVNode)("info")
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push((0,server_renderer.ssrRenderComponent)(_component_df_button, {
          color: "black",
          type: "concave"
        }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`black`)
            } else {
              return [
                (0,external_vue_.createTextVNode)("black")
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push(`</div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", {
            class: "btn-container",
            style: {"display":"flex","justify-content":"center","flex-wrap":"wrap"}
          }, [
            (0,external_vue_.createVNode)(_component_df_button, {
              color: "primary",
              type: "concave"
            }, {
              default: (0,external_vue_.withCtx)(() => [
                (0,external_vue_.createTextVNode)("primary")
              ]),
              _: 1
            }),
            (0,external_vue_.createVNode)(_component_df_button, {
              color: "success",
              type: "concave"
            }, {
              default: (0,external_vue_.withCtx)(() => [
                (0,external_vue_.createTextVNode)("success")
              ]),
              _: 1
            }),
            (0,external_vue_.createVNode)(_component_df_button, {
              color: "warning",
              type: "concave"
            }, {
              default: (0,external_vue_.withCtx)(() => [
                (0,external_vue_.createTextVNode)("warning")
              ]),
              _: 1
            }),
            (0,external_vue_.createVNode)(_component_df_button, {
              color: "danger",
              type: "concave"
            }, {
              default: (0,external_vue_.withCtx)(() => [
                (0,external_vue_.createTextVNode)("danger")
              ]),
              _: 1
            }),
            (0,external_vue_.createVNode)(_component_df_button, {
              color: "error",
              type: "concave"
            }, {
              default: (0,external_vue_.withCtx)(() => [
                (0,external_vue_.createTextVNode)("error")
              ]),
              _: 1
            }),
            (0,external_vue_.createVNode)(_component_df_button, {
              color: "info",
              type: "concave"
            }, {
              default: (0,external_vue_.withCtx)(() => [
                (0,external_vue_.createTextVNode)("info")
              ]),
              _: 1
            }),
            (0,external_vue_.createVNode)(_component_df_button, {
              color: "black",
              type: "concave"
            }, {
              default: (0,external_vue_.withCtx)(() => [
                (0,external_vue_.createTextVNode)("black")
              ]),
              _: 1
            })
          ])
        ]
      }
    }),
    src: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<details class="custom-container details"${
          _scopeId
        }><summary${
          _scopeId
        }><i class="iconfont icon-script"${
          _scopeId
        }></i></summary><div class="language-vue ext-vue line-numbers-mode"${
          _scopeId
        }><pre class="language-vue"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>template</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
  <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>div</span>
    <span class="token attr-name"${
          _scopeId
        }>class</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>btn-container<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span>
    <span class="token special-attr"${
          _scopeId
        }><span class="token attr-name"${
          _scopeId
        }>style</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span><span class="token value css language-css"${
          _scopeId
        }><span class="token property"${
          _scopeId
        }>display</span><span class="token punctuation"${
          _scopeId
        }>:</span>flex<span class="token punctuation"${
          _scopeId
        }>;</span><span class="token property"${
          _scopeId
        }>justify-content</span><span class="token punctuation"${
          _scopeId
        }>:</span>center<span class="token punctuation"${
          _scopeId
        }>;</span><span class="token property"${
          _scopeId
        }>flex-wrap</span><span class="token punctuation"${
          _scopeId
        }>:</span>wrap<span class="token punctuation"${
          _scopeId
        }>;</span></span><span class="token punctuation"${
          _scopeId
        }>&quot;</span></span></span>
  <span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
    <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>df-button</span> <span class="token attr-name"${
          _scopeId
        }>color</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>primary<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span> <span class="token attr-name"${
          _scopeId
        }>type</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>concave<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>primary<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>df-button</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
    <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>df-button</span> <span class="token attr-name"${
          _scopeId
        }>color</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>success<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span> <span class="token attr-name"${
          _scopeId
        }>type</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>concave<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>success<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>df-button</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
    <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>df-button</span> <span class="token attr-name"${
          _scopeId
        }>color</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>warning<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span> <span class="token attr-name"${
          _scopeId
        }>type</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>concave<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>warning<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>df-button</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
    <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>df-button</span> <span class="token attr-name"${
          _scopeId
        }>color</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>danger<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span> <span class="token attr-name"${
          _scopeId
        }>type</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>concave<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>danger<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>df-button</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
    <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>df-button</span> <span class="token attr-name"${
          _scopeId
        }>color</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>error<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span> <span class="token attr-name"${
          _scopeId
        }>type</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>concave<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>error<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>df-button</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
    <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>df-button</span> <span class="token attr-name"${
          _scopeId
        }>color</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>info<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span> <span class="token attr-name"${
          _scopeId
        }>type</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>concave<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>info<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>df-button</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
    <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>df-button</span> <span class="token attr-name"${
          _scopeId
        }>color</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>black<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span> <span class="token attr-name"${
          _scopeId
        }>type</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>concave<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>black<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>df-button</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
  <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>div</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>template</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
</code></pre><div class="line-numbers"${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>1</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>2</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>3</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>4</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>5</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>6</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>7</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>8</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>9</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>10</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>11</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>12</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>13</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>14</span><br${
          _scopeId
        }></div></div></details>`)
      } else {
        return [
          (0,external_vue_.createVNode)("details", { class: "custom-container details" }, [
            (0,external_vue_.createVNode)("summary", null, [
              (0,external_vue_.createVNode)("i", { class: "iconfont icon-script" })
            ]),
            (0,external_vue_.createVNode)("div", { class: "language-vue ext-vue line-numbers-mode" }, [
              (0,external_vue_.createVNode)("pre", { class: "language-vue" }, [
                (0,external_vue_.createVNode)("code", null, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                      (0,external_vue_.createTextVNode)("template")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("\n  "),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                      (0,external_vue_.createTextVNode)("div")
                    ]),
                    (0,external_vue_.createTextVNode)("\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "class"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("btn-container"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createTextVNode)("\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token special-attr" }, [
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "style"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createVNode)("span", { class: "token value css language-css" }, [
                          (0,external_vue_.createVNode)("span", { class: "token property" }, "display"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                          (0,external_vue_.createTextVNode)("flex"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
                          (0,external_vue_.createVNode)("span", { class: "token property" }, "justify-content"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                          (0,external_vue_.createTextVNode)("center"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
                          (0,external_vue_.createVNode)("span", { class: "token property" }, "flex-wrap"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                          (0,external_vue_.createTextVNode)("wrap"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ])
                    ]),
                    (0,external_vue_.createTextVNode)("\n  "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("\n    "),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "color"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("primary"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "type"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("concave"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("primary"),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("\n    "),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "color"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("success"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "type"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("concave"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("success"),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("\n    "),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "color"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("warning"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "type"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("concave"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("warning"),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("\n    "),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "color"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("danger"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "type"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("concave"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("danger"),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("\n    "),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "color"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("error"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "type"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("concave"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("error"),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("\n    "),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "color"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("info"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "type"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("concave"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("info"),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("\n    "),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "color"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("black"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "type"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("concave"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("black"),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("\n  "),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                      (0,external_vue_.createTextVNode)("div")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("\n"),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                      (0,external_vue_.createTextVNode)("template")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("\n")
                ])
              ]),
              (0,external_vue_.createVNode)("div", { class: "line-numbers" }, [
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "1"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "2"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "3"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "4"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "5"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "6"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "7"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "8"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "9"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "10"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "11"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "12"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "13"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "14"),
                (0,external_vue_.createVNode)("br")
              ])
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="bling" tabindex="-1"><a class="header-anchor" href="#bling" aria-hidden="true">#</a> bling</h3><ul><li><code>type=&#39;bling&#39;</code></li><li>闪动效果。</li></ul><p>示例如下：</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_df_template, null, {
    demo: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="btn-container" style="${
          (0,server_renderer.ssrRenderStyle)({"display":"flex","justify-content":"center","flex-wrap":"wrap"})
        }"${
          _scopeId
        }>`)
        _push((0,server_renderer.ssrRenderComponent)(_component_df_button, {
          color: "primary",
          type: "bling"
        }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`primary`)
            } else {
              return [
                (0,external_vue_.createTextVNode)("primary")
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push((0,server_renderer.ssrRenderComponent)(_component_df_button, {
          color: "success",
          type: "bling"
        }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`success`)
            } else {
              return [
                (0,external_vue_.createTextVNode)("success")
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push((0,server_renderer.ssrRenderComponent)(_component_df_button, {
          color: "warning",
          type: "bling"
        }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`warning`)
            } else {
              return [
                (0,external_vue_.createTextVNode)("warning")
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push((0,server_renderer.ssrRenderComponent)(_component_df_button, {
          color: "danger",
          type: "bling"
        }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`danger`)
            } else {
              return [
                (0,external_vue_.createTextVNode)("danger")
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push((0,server_renderer.ssrRenderComponent)(_component_df_button, {
          color: "error",
          type: "bling"
        }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`error`)
            } else {
              return [
                (0,external_vue_.createTextVNode)("error")
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push((0,server_renderer.ssrRenderComponent)(_component_df_button, {
          color: "info",
          type: "bling"
        }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`info`)
            } else {
              return [
                (0,external_vue_.createTextVNode)("info")
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push((0,server_renderer.ssrRenderComponent)(_component_df_button, {
          color: "black",
          type: "bling"
        }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`black`)
            } else {
              return [
                (0,external_vue_.createTextVNode)("black")
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push(`</div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", {
            class: "btn-container",
            style: {"display":"flex","justify-content":"center","flex-wrap":"wrap"}
          }, [
            (0,external_vue_.createVNode)(_component_df_button, {
              color: "primary",
              type: "bling"
            }, {
              default: (0,external_vue_.withCtx)(() => [
                (0,external_vue_.createTextVNode)("primary")
              ]),
              _: 1
            }),
            (0,external_vue_.createVNode)(_component_df_button, {
              color: "success",
              type: "bling"
            }, {
              default: (0,external_vue_.withCtx)(() => [
                (0,external_vue_.createTextVNode)("success")
              ]),
              _: 1
            }),
            (0,external_vue_.createVNode)(_component_df_button, {
              color: "warning",
              type: "bling"
            }, {
              default: (0,external_vue_.withCtx)(() => [
                (0,external_vue_.createTextVNode)("warning")
              ]),
              _: 1
            }),
            (0,external_vue_.createVNode)(_component_df_button, {
              color: "danger",
              type: "bling"
            }, {
              default: (0,external_vue_.withCtx)(() => [
                (0,external_vue_.createTextVNode)("danger")
              ]),
              _: 1
            }),
            (0,external_vue_.createVNode)(_component_df_button, {
              color: "error",
              type: "bling"
            }, {
              default: (0,external_vue_.withCtx)(() => [
                (0,external_vue_.createTextVNode)("error")
              ]),
              _: 1
            }),
            (0,external_vue_.createVNode)(_component_df_button, {
              color: "info",
              type: "bling"
            }, {
              default: (0,external_vue_.withCtx)(() => [
                (0,external_vue_.createTextVNode)("info")
              ]),
              _: 1
            }),
            (0,external_vue_.createVNode)(_component_df_button, {
              color: "black",
              type: "bling"
            }, {
              default: (0,external_vue_.withCtx)(() => [
                (0,external_vue_.createTextVNode)("black")
              ]),
              _: 1
            })
          ])
        ]
      }
    }),
    src: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<details class="custom-container details"${
          _scopeId
        }><summary${
          _scopeId
        }><i class="iconfont icon-script"${
          _scopeId
        }></i></summary><div class="language-vue ext-vue line-numbers-mode"${
          _scopeId
        }><pre class="language-vue"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>template</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
  <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>div</span>
    <span class="token attr-name"${
          _scopeId
        }>class</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>btn-container<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span>
    <span class="token special-attr"${
          _scopeId
        }><span class="token attr-name"${
          _scopeId
        }>style</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span><span class="token value css language-css"${
          _scopeId
        }><span class="token property"${
          _scopeId
        }>display</span><span class="token punctuation"${
          _scopeId
        }>:</span>flex<span class="token punctuation"${
          _scopeId
        }>;</span><span class="token property"${
          _scopeId
        }>justify-content</span><span class="token punctuation"${
          _scopeId
        }>:</span>center<span class="token punctuation"${
          _scopeId
        }>;</span><span class="token property"${
          _scopeId
        }>flex-wrap</span><span class="token punctuation"${
          _scopeId
        }>:</span>wrap<span class="token punctuation"${
          _scopeId
        }>;</span></span><span class="token punctuation"${
          _scopeId
        }>&quot;</span></span></span>
  <span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
    <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>df-button</span> <span class="token attr-name"${
          _scopeId
        }>color</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>primary<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span> <span class="token attr-name"${
          _scopeId
        }>type</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>bling<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>primary<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>df-button</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
    <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>df-button</span> <span class="token attr-name"${
          _scopeId
        }>color</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>success<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span> <span class="token attr-name"${
          _scopeId
        }>type</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>bling<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>success<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>df-button</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
    <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>df-button</span> <span class="token attr-name"${
          _scopeId
        }>color</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>warning<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span> <span class="token attr-name"${
          _scopeId
        }>type</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>bling<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>warning<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>df-button</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
    <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>df-button</span> <span class="token attr-name"${
          _scopeId
        }>color</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>danger<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span> <span class="token attr-name"${
          _scopeId
        }>type</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>bling<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>danger<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>df-button</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
    <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>df-button</span> <span class="token attr-name"${
          _scopeId
        }>color</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>error<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span> <span class="token attr-name"${
          _scopeId
        }>type</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>bling<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>error<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>df-button</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
    <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>df-button</span> <span class="token attr-name"${
          _scopeId
        }>color</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>info<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span> <span class="token attr-name"${
          _scopeId
        }>type</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>bling<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>info<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>df-button</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
    <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>df-button</span> <span class="token attr-name"${
          _scopeId
        }>color</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>black<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span> <span class="token attr-name"${
          _scopeId
        }>type</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>bling<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>black<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>df-button</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
  <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>div</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>template</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
</code></pre><div class="line-numbers"${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>1</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>2</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>3</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>4</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>5</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>6</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>7</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>8</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>9</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>10</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>11</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>12</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>13</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>14</span><br${
          _scopeId
        }></div></div></details>`)
      } else {
        return [
          (0,external_vue_.createVNode)("details", { class: "custom-container details" }, [
            (0,external_vue_.createVNode)("summary", null, [
              (0,external_vue_.createVNode)("i", { class: "iconfont icon-script" })
            ]),
            (0,external_vue_.createVNode)("div", { class: "language-vue ext-vue line-numbers-mode" }, [
              (0,external_vue_.createVNode)("pre", { class: "language-vue" }, [
                (0,external_vue_.createVNode)("code", null, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                      (0,external_vue_.createTextVNode)("template")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("\n  "),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                      (0,external_vue_.createTextVNode)("div")
                    ]),
                    (0,external_vue_.createTextVNode)("\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "class"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("btn-container"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createTextVNode)("\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token special-attr" }, [
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "style"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createVNode)("span", { class: "token value css language-css" }, [
                          (0,external_vue_.createVNode)("span", { class: "token property" }, "display"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                          (0,external_vue_.createTextVNode)("flex"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
                          (0,external_vue_.createVNode)("span", { class: "token property" }, "justify-content"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                          (0,external_vue_.createTextVNode)("center"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
                          (0,external_vue_.createVNode)("span", { class: "token property" }, "flex-wrap"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                          (0,external_vue_.createTextVNode)("wrap"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ])
                    ]),
                    (0,external_vue_.createTextVNode)("\n  "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("\n    "),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "color"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("primary"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "type"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("bling"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("primary"),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("\n    "),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "color"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("success"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "type"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("bling"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("success"),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("\n    "),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "color"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("warning"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "type"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("bling"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("warning"),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("\n    "),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "color"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("danger"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "type"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("bling"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("danger"),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("\n    "),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "color"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("error"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "type"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("bling"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("error"),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("\n    "),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "color"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("info"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "type"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("bling"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("info"),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("\n    "),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "color"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("black"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "type"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("bling"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("black"),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("\n  "),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                      (0,external_vue_.createTextVNode)("div")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("\n"),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                      (0,external_vue_.createTextVNode)("template")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("\n")
                ])
              ]),
              (0,external_vue_.createVNode)("div", { class: "line-numbers" }, [
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "1"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "2"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "3"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "4"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "5"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "6"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "7"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "8"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "9"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "10"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "11"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "12"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "13"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "14"),
                (0,external_vue_.createVNode)("br")
              ])
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="transx-color" tabindex="-1"><a class="header-anchor" href="#transx-color" aria-hidden="true">#</a> transx-[color]</h3><ul><li><code>type=&#39;transx-[color]&#39;</code></li><li>边框动态绘制效果。</li></ul><p>示例如下：</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_df_template, null, {
    demo: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="btn-container" style="${
          (0,server_renderer.ssrRenderStyle)({"display":"flex","justify-content":"center","flex-wrap":"wrap"})
        }"${
          _scopeId
        }>`)
        _push((0,server_renderer.ssrRenderComponent)(_component_df_button, {
          color: "primary",
          type: "transx-primary"
        }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`primary`)
            } else {
              return [
                (0,external_vue_.createTextVNode)("primary")
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push((0,server_renderer.ssrRenderComponent)(_component_df_button, {
          color: "success",
          type: "transx-success"
        }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`success`)
            } else {
              return [
                (0,external_vue_.createTextVNode)("success")
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push((0,server_renderer.ssrRenderComponent)(_component_df_button, {
          color: "warning",
          type: "transx-warning"
        }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`warning`)
            } else {
              return [
                (0,external_vue_.createTextVNode)("warning")
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push((0,server_renderer.ssrRenderComponent)(_component_df_button, {
          color: "danger",
          type: "transx-danger"
        }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`danger`)
            } else {
              return [
                (0,external_vue_.createTextVNode)("danger")
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push((0,server_renderer.ssrRenderComponent)(_component_df_button, {
          color: "error",
          type: "transx-error"
        }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`error`)
            } else {
              return [
                (0,external_vue_.createTextVNode)("error")
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push((0,server_renderer.ssrRenderComponent)(_component_df_button, {
          color: "info",
          type: "transx-info"
        }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`info`)
            } else {
              return [
                (0,external_vue_.createTextVNode)("info")
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push((0,server_renderer.ssrRenderComponent)(_component_df_button, {
          color: "black",
          type: "transx-black"
        }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`black`)
            } else {
              return [
                (0,external_vue_.createTextVNode)("black")
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push(`</div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", {
            class: "btn-container",
            style: {"display":"flex","justify-content":"center","flex-wrap":"wrap"}
          }, [
            (0,external_vue_.createVNode)(_component_df_button, {
              color: "primary",
              type: "transx-primary"
            }, {
              default: (0,external_vue_.withCtx)(() => [
                (0,external_vue_.createTextVNode)("primary")
              ]),
              _: 1
            }),
            (0,external_vue_.createVNode)(_component_df_button, {
              color: "success",
              type: "transx-success"
            }, {
              default: (0,external_vue_.withCtx)(() => [
                (0,external_vue_.createTextVNode)("success")
              ]),
              _: 1
            }),
            (0,external_vue_.createVNode)(_component_df_button, {
              color: "warning",
              type: "transx-warning"
            }, {
              default: (0,external_vue_.withCtx)(() => [
                (0,external_vue_.createTextVNode)("warning")
              ]),
              _: 1
            }),
            (0,external_vue_.createVNode)(_component_df_button, {
              color: "danger",
              type: "transx-danger"
            }, {
              default: (0,external_vue_.withCtx)(() => [
                (0,external_vue_.createTextVNode)("danger")
              ]),
              _: 1
            }),
            (0,external_vue_.createVNode)(_component_df_button, {
              color: "error",
              type: "transx-error"
            }, {
              default: (0,external_vue_.withCtx)(() => [
                (0,external_vue_.createTextVNode)("error")
              ]),
              _: 1
            }),
            (0,external_vue_.createVNode)(_component_df_button, {
              color: "info",
              type: "transx-info"
            }, {
              default: (0,external_vue_.withCtx)(() => [
                (0,external_vue_.createTextVNode)("info")
              ]),
              _: 1
            }),
            (0,external_vue_.createVNode)(_component_df_button, {
              color: "black",
              type: "transx-black"
            }, {
              default: (0,external_vue_.withCtx)(() => [
                (0,external_vue_.createTextVNode)("black")
              ]),
              _: 1
            })
          ])
        ]
      }
    }),
    src: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<details class="custom-container details"${
          _scopeId
        }><summary${
          _scopeId
        }><i class="iconfont icon-script"${
          _scopeId
        }></i></summary><div class="language-vue ext-vue line-numbers-mode"${
          _scopeId
        }><pre class="language-vue"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>template</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
  <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>div</span>
    <span class="token attr-name"${
          _scopeId
        }>class</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>btn-container<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span>
    <span class="token special-attr"${
          _scopeId
        }><span class="token attr-name"${
          _scopeId
        }>style</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span><span class="token value css language-css"${
          _scopeId
        }><span class="token property"${
          _scopeId
        }>display</span><span class="token punctuation"${
          _scopeId
        }>:</span>flex<span class="token punctuation"${
          _scopeId
        }>;</span><span class="token property"${
          _scopeId
        }>justify-content</span><span class="token punctuation"${
          _scopeId
        }>:</span>center<span class="token punctuation"${
          _scopeId
        }>;</span><span class="token property"${
          _scopeId
        }>flex-wrap</span><span class="token punctuation"${
          _scopeId
        }>:</span>wrap<span class="token punctuation"${
          _scopeId
        }>;</span></span><span class="token punctuation"${
          _scopeId
        }>&quot;</span></span></span>
  <span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
    <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>df-button</span> <span class="token attr-name"${
          _scopeId
        }>color</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>primary<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span> <span class="token attr-name"${
          _scopeId
        }>type</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>transy-primary<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>primary<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>df-button</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
    <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>df-button</span> <span class="token attr-name"${
          _scopeId
        }>color</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>success<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span> <span class="token attr-name"${
          _scopeId
        }>type</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>transy-success<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>success<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>df-button</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
    <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>df-button</span> <span class="token attr-name"${
          _scopeId
        }>color</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>warning<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span> <span class="token attr-name"${
          _scopeId
        }>type</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>transy-warning<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>warning<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>df-button</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
    <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>df-button</span> <span class="token attr-name"${
          _scopeId
        }>color</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>danger<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span> <span class="token attr-name"${
          _scopeId
        }>type</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>transy-danger<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>danger<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>df-button</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
    <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>df-button</span> <span class="token attr-name"${
          _scopeId
        }>color</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>error<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span> <span class="token attr-name"${
          _scopeId
        }>type</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>transy-error<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>error<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>df-button</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
    <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>df-button</span> <span class="token attr-name"${
          _scopeId
        }>color</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>info<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span> <span class="token attr-name"${
          _scopeId
        }>type</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>transy-info<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>info<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>df-button</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
    <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>df-button</span> <span class="token attr-name"${
          _scopeId
        }>color</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>black<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span> <span class="token attr-name"${
          _scopeId
        }>type</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>transy-black<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>black<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>df-button</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
  <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>div</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>template</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
</code></pre><div class="line-numbers"${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>1</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>2</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>3</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>4</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>5</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>6</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>7</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>8</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>9</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>10</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>11</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>12</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>13</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>14</span><br${
          _scopeId
        }></div></div></details>`)
      } else {
        return [
          (0,external_vue_.createVNode)("details", { class: "custom-container details" }, [
            (0,external_vue_.createVNode)("summary", null, [
              (0,external_vue_.createVNode)("i", { class: "iconfont icon-script" })
            ]),
            (0,external_vue_.createVNode)("div", { class: "language-vue ext-vue line-numbers-mode" }, [
              (0,external_vue_.createVNode)("pre", { class: "language-vue" }, [
                (0,external_vue_.createVNode)("code", null, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                      (0,external_vue_.createTextVNode)("template")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("\n  "),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                      (0,external_vue_.createTextVNode)("div")
                    ]),
                    (0,external_vue_.createTextVNode)("\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "class"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("btn-container"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createTextVNode)("\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token special-attr" }, [
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "style"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createVNode)("span", { class: "token value css language-css" }, [
                          (0,external_vue_.createVNode)("span", { class: "token property" }, "display"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                          (0,external_vue_.createTextVNode)("flex"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
                          (0,external_vue_.createVNode)("span", { class: "token property" }, "justify-content"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                          (0,external_vue_.createTextVNode)("center"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
                          (0,external_vue_.createVNode)("span", { class: "token property" }, "flex-wrap"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                          (0,external_vue_.createTextVNode)("wrap"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ])
                    ]),
                    (0,external_vue_.createTextVNode)("\n  "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("\n    "),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "color"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("primary"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "type"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("transy-primary"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("primary"),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("\n    "),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "color"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("success"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "type"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("transy-success"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("success"),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("\n    "),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "color"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("warning"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "type"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("transy-warning"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("warning"),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("\n    "),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "color"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("danger"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "type"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("transy-danger"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("danger"),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("\n    "),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "color"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("error"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "type"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("transy-error"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("error"),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("\n    "),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "color"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("info"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "type"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("transy-info"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("info"),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("\n    "),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "color"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("black"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "type"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("transy-black"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("black"),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("\n  "),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                      (0,external_vue_.createTextVNode)("div")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("\n"),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                      (0,external_vue_.createTextVNode)("template")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("\n")
                ])
              ]),
              (0,external_vue_.createVNode)("div", { class: "line-numbers" }, [
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "1"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "2"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "3"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "4"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "5"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "6"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "7"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "8"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "9"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "10"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "11"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "12"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "13"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "14"),
                (0,external_vue_.createVNode)("br")
              ])
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<div class="custom-container tip"><p class="custom-container-title">TIP</p><p><code>type=&#39;transx-[color]&#39;</code>中的 [color] 为边框颜色，可与 <code>color</code> 属性同时使用。</p></div><h3 id="transy-color" tabindex="-1"><a class="header-anchor" href="#transy-color" aria-hidden="true">#</a> transy-[color]</h3><ul><li><code>type=&#39;transy-[color]&#39;</code></li><li>边框动态绘制(一半)效果。</li></ul><p>示例如下：</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_df_template, null, {
    demo: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="btn-container" style="${
          (0,server_renderer.ssrRenderStyle)({"display":"flex","justify-content":"center","flex-wrap":"wrap"})
        }"${
          _scopeId
        }>`)
        _push((0,server_renderer.ssrRenderComponent)(_component_df_button, {
          color: "primary",
          type: "transy-primary"
        }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`primary`)
            } else {
              return [
                (0,external_vue_.createTextVNode)("primary")
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push((0,server_renderer.ssrRenderComponent)(_component_df_button, {
          color: "success",
          type: "transy-success"
        }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`success`)
            } else {
              return [
                (0,external_vue_.createTextVNode)("success")
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push((0,server_renderer.ssrRenderComponent)(_component_df_button, {
          color: "warning",
          type: "transy-warning"
        }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`warning`)
            } else {
              return [
                (0,external_vue_.createTextVNode)("warning")
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push((0,server_renderer.ssrRenderComponent)(_component_df_button, {
          color: "danger",
          type: "transy-danger"
        }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`danger`)
            } else {
              return [
                (0,external_vue_.createTextVNode)("danger")
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push((0,server_renderer.ssrRenderComponent)(_component_df_button, {
          color: "error",
          type: "transy-error"
        }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`error`)
            } else {
              return [
                (0,external_vue_.createTextVNode)("error")
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push((0,server_renderer.ssrRenderComponent)(_component_df_button, {
          color: "info",
          type: "transy-info"
        }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`info`)
            } else {
              return [
                (0,external_vue_.createTextVNode)("info")
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push((0,server_renderer.ssrRenderComponent)(_component_df_button, {
          color: "black",
          type: "transy-black"
        }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`black`)
            } else {
              return [
                (0,external_vue_.createTextVNode)("black")
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push(`</div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", {
            class: "btn-container",
            style: {"display":"flex","justify-content":"center","flex-wrap":"wrap"}
          }, [
            (0,external_vue_.createVNode)(_component_df_button, {
              color: "primary",
              type: "transy-primary"
            }, {
              default: (0,external_vue_.withCtx)(() => [
                (0,external_vue_.createTextVNode)("primary")
              ]),
              _: 1
            }),
            (0,external_vue_.createVNode)(_component_df_button, {
              color: "success",
              type: "transy-success"
            }, {
              default: (0,external_vue_.withCtx)(() => [
                (0,external_vue_.createTextVNode)("success")
              ]),
              _: 1
            }),
            (0,external_vue_.createVNode)(_component_df_button, {
              color: "warning",
              type: "transy-warning"
            }, {
              default: (0,external_vue_.withCtx)(() => [
                (0,external_vue_.createTextVNode)("warning")
              ]),
              _: 1
            }),
            (0,external_vue_.createVNode)(_component_df_button, {
              color: "danger",
              type: "transy-danger"
            }, {
              default: (0,external_vue_.withCtx)(() => [
                (0,external_vue_.createTextVNode)("danger")
              ]),
              _: 1
            }),
            (0,external_vue_.createVNode)(_component_df_button, {
              color: "error",
              type: "transy-error"
            }, {
              default: (0,external_vue_.withCtx)(() => [
                (0,external_vue_.createTextVNode)("error")
              ]),
              _: 1
            }),
            (0,external_vue_.createVNode)(_component_df_button, {
              color: "info",
              type: "transy-info"
            }, {
              default: (0,external_vue_.withCtx)(() => [
                (0,external_vue_.createTextVNode)("info")
              ]),
              _: 1
            }),
            (0,external_vue_.createVNode)(_component_df_button, {
              color: "black",
              type: "transy-black"
            }, {
              default: (0,external_vue_.withCtx)(() => [
                (0,external_vue_.createTextVNode)("black")
              ]),
              _: 1
            })
          ])
        ]
      }
    }),
    src: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<details class="custom-container details"${
          _scopeId
        }><summary${
          _scopeId
        }><i class="iconfont icon-script"${
          _scopeId
        }></i></summary><div class="language-vue ext-vue line-numbers-mode"${
          _scopeId
        }><pre class="language-vue"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>template</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
  <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>div</span>
    <span class="token attr-name"${
          _scopeId
        }>class</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>btn-container<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span>
    <span class="token special-attr"${
          _scopeId
        }><span class="token attr-name"${
          _scopeId
        }>style</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span><span class="token value css language-css"${
          _scopeId
        }><span class="token property"${
          _scopeId
        }>display</span><span class="token punctuation"${
          _scopeId
        }>:</span>flex<span class="token punctuation"${
          _scopeId
        }>;</span><span class="token property"${
          _scopeId
        }>justify-content</span><span class="token punctuation"${
          _scopeId
        }>:</span>center<span class="token punctuation"${
          _scopeId
        }>;</span><span class="token property"${
          _scopeId
        }>flex-wrap</span><span class="token punctuation"${
          _scopeId
        }>:</span>wrap<span class="token punctuation"${
          _scopeId
        }>;</span></span><span class="token punctuation"${
          _scopeId
        }>&quot;</span></span></span>
  <span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
    <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>df-button</span> <span class="token attr-name"${
          _scopeId
        }>color</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>primary<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span> <span class="token attr-name"${
          _scopeId
        }>type</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>transy-primary<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>primary<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>df-button</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
    <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>df-button</span> <span class="token attr-name"${
          _scopeId
        }>color</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>success<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span> <span class="token attr-name"${
          _scopeId
        }>type</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>transy-success<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>success<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>df-button</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
    <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>df-button</span> <span class="token attr-name"${
          _scopeId
        }>color</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>warning<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span> <span class="token attr-name"${
          _scopeId
        }>type</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>transy-warning<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>warning<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>df-button</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
    <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>df-button</span> <span class="token attr-name"${
          _scopeId
        }>color</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>danger<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span> <span class="token attr-name"${
          _scopeId
        }>type</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>transy-danger<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>danger<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>df-button</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
    <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>df-button</span> <span class="token attr-name"${
          _scopeId
        }>color</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>error<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span> <span class="token attr-name"${
          _scopeId
        }>type</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>transy-error<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>error<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>df-button</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
    <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>df-button</span> <span class="token attr-name"${
          _scopeId
        }>color</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>info<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span> <span class="token attr-name"${
          _scopeId
        }>type</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>transy-info<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>info<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>df-button</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
    <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>df-button</span> <span class="token attr-name"${
          _scopeId
        }>color</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>black<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span> <span class="token attr-name"${
          _scopeId
        }>type</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>transy-black<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>black<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>df-button</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
  <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>div</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>template</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
</code></pre><div class="line-numbers"${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>1</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>2</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>3</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>4</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>5</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>6</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>7</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>8</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>9</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>10</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>11</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>12</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>13</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>14</span><br${
          _scopeId
        }></div></div></details>`)
      } else {
        return [
          (0,external_vue_.createVNode)("details", { class: "custom-container details" }, [
            (0,external_vue_.createVNode)("summary", null, [
              (0,external_vue_.createVNode)("i", { class: "iconfont icon-script" })
            ]),
            (0,external_vue_.createVNode)("div", { class: "language-vue ext-vue line-numbers-mode" }, [
              (0,external_vue_.createVNode)("pre", { class: "language-vue" }, [
                (0,external_vue_.createVNode)("code", null, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                      (0,external_vue_.createTextVNode)("template")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("\n  "),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                      (0,external_vue_.createTextVNode)("div")
                    ]),
                    (0,external_vue_.createTextVNode)("\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "class"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("btn-container"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createTextVNode)("\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token special-attr" }, [
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "style"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createVNode)("span", { class: "token value css language-css" }, [
                          (0,external_vue_.createVNode)("span", { class: "token property" }, "display"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                          (0,external_vue_.createTextVNode)("flex"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
                          (0,external_vue_.createVNode)("span", { class: "token property" }, "justify-content"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                          (0,external_vue_.createTextVNode)("center"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
                          (0,external_vue_.createVNode)("span", { class: "token property" }, "flex-wrap"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                          (0,external_vue_.createTextVNode)("wrap"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ])
                    ]),
                    (0,external_vue_.createTextVNode)("\n  "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("\n    "),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "color"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("primary"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "type"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("transy-primary"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("primary"),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("\n    "),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "color"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("success"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "type"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("transy-success"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("success"),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("\n    "),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "color"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("warning"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "type"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("transy-warning"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("warning"),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("\n    "),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "color"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("danger"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "type"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("transy-danger"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("danger"),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("\n    "),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "color"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("error"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "type"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("transy-error"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("error"),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("\n    "),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "color"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("info"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "type"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("transy-info"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("info"),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("\n    "),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "color"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("black"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "type"),
                    (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                      (0,external_vue_.createTextVNode)("transy-black"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("black"),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                      (0,external_vue_.createTextVNode)("df-button")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("\n  "),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                      (0,external_vue_.createTextVNode)("div")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("\n"),
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                      (0,external_vue_.createTextVNode)("template")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                  ]),
                  (0,external_vue_.createTextVNode)("\n")
                ])
              ]),
              (0,external_vue_.createVNode)("div", { class: "line-numbers" }, [
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "1"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "2"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "3"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "4"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "5"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "6"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "7"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "8"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "9"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "10"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "11"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "12"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "13"),
                (0,external_vue_.createVNode)("br"),
                (0,external_vue_.createVNode)("span", { class: "line-number" }, "14"),
                (0,external_vue_.createVNode)("br")
              ])
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="curtain-dirction-color" tabindex="-1"><a class="header-anchor" href="#curtain-dirction-color" aria-hidden="true">#</a> curtain-[dirction]-[color]</h3><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>手打中</p></div><!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/component/button.html.vue?vue&type=template&id=d7842d88

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/component/button.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const button_html = (__exports__);

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
//# sourceMappingURL=195.app.js.map