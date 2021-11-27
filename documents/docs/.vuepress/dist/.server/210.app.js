"use strict";
exports.id = 210;
exports.ids = [210];
exports.modules = {

/***/ 7210:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(4498);
// EXTERNAL MODULE: ./node_modules/@vuepress/client/lib/index.js
var lib = __webpack_require__(7621);
// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(2253);
// EXTERNAL MODULE: ./node_modules/@vuepress/shared/lib/esm/index.js + 13 modules
var esm = __webpack_require__(5897);
;// CONCATENATED MODULE: ./node_modules/esbuild-loader/dist/index.js??clonedRuleSet-31.use[0]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./node_modules/@vuepress/theme-default/lib/client/components/NavLink.vue?vue&type=script&setup=true&lang=ts








const __default__ = (0,external_vue_.defineComponent)({
  inheritAttrs: false
});
function setup(__props) {
  const props = __props;
  const route = (0,external_vue_router_.useRoute)();
  const site = (0,lib/* useSiteData */.WF)();
  const { item } = (0,external_vue_.toRefs)(props);
  const hasHttpProtocol = (0,external_vue_.computed)(() => (0,esm/* isLinkHttp */.ak)(item.value.link));
  const hasNonHttpProtocal = (0,external_vue_.computed)(() => (0,esm/* isLinkMailto */.B2)(item.value.link) || (0,esm/* isLinkTel */.R5)(item.value.link));
  const linkTarget = (0,external_vue_.computed)(() => {
    if (hasNonHttpProtocal.value)
      return void 0;
    if (item.value.target)
      return item.value.target;
    if (hasHttpProtocol.value)
      return "_blank";
    return void 0;
  });
  const isBlankTarget = (0,external_vue_.computed)(() => linkTarget.value === "_blank");
  const isRouterLink = (0,external_vue_.computed)(() => !hasHttpProtocol.value && !hasNonHttpProtocal.value && !isBlankTarget.value);
  const linkRel = (0,external_vue_.computed)(() => {
    if (hasNonHttpProtocal.value)
      return void 0;
    if (item.value.rel)
      return item.value.rel;
    if (isBlankTarget.value)
      return "noopener noreferrer";
    return void 0;
  });
  const linkAriaLabel = (0,external_vue_.computed)(() => item.value.ariaLabel || item.value.text);
  const shouldBeActiveInSubpath = (0,external_vue_.computed)(() => {
    const localeKeys = Object.keys(site.value.locales);
    if (localeKeys.length) {
      return !localeKeys.some((key) => key === item.value.link);
    }
    return item.value.link !== "/";
  });
  const isActiveInSubpath = (0,external_vue_.computed)(() => {
    if (!shouldBeActiveInSubpath.value) {
      return false;
    }
    return route.path.startsWith(item.value.link);
  });
  const isActive = (0,external_vue_.computed)(() => {
    if (!isRouterLink.value) {
      return false;
    }
    if (item.value.activeMatch) {
      return new RegExp(item.value.activeMatch).test(route.path);
    }
    return isActiveInSubpath.value;
  });
  return (_ctx, _push, _parent, _attrs) => {
    const _component_RouterLink = (0,external_vue_.resolveComponent)("RouterLink");
    const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink");
    if ((0,external_vue_.unref)(isRouterLink)) {
      _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, (0,external_vue_.mergeProps)({
        class: ["nav-link", { "router-link-active": (0,external_vue_.unref)(isActive) }],
        to: (0,external_vue_.unref)(item).link,
        "aria-label": (0,external_vue_.unref)(linkAriaLabel)
      }, _ctx.$attrs, _attrs), {
        default: (0,external_vue_.withCtx)((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            (0,server_renderer.ssrRenderSlot)(_ctx.$slots, "before", {}, null, _push2, _parent2, _scopeId);
            _push2(` ${(0,server_renderer.ssrInterpolate)((0,external_vue_.unref)(item).text)} `);
            (0,server_renderer.ssrRenderSlot)(_ctx.$slots, "after", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              (0,external_vue_.renderSlot)(_ctx.$slots, "before"),
              (0,external_vue_.createTextVNode)(" " + (0,external_vue_.toDisplayString)((0,external_vue_.unref)(item).text) + " ", 1),
              (0,external_vue_.renderSlot)(_ctx.$slots, "after")
            ];
          }
        }),
        _: 3
      }, _parent));
    } else {
      _push(`<a${(0,server_renderer.ssrRenderAttrs)((0,external_vue_.mergeProps)({
        class: "nav-link external",
        href: (0,external_vue_.unref)(item).link,
        rel: (0,external_vue_.unref)(linkRel),
        target: (0,external_vue_.unref)(linkTarget),
        "aria-label": (0,external_vue_.unref)(linkAriaLabel)
      }, _ctx.$attrs, _attrs))}>`);
      (0,server_renderer.ssrRenderSlot)(_ctx.$slots, "before", {}, null, _push, _parent);
      _push(` ${(0,server_renderer.ssrInterpolate)((0,external_vue_.unref)(item).text)} `);
      if ((0,external_vue_.unref)(isBlankTarget)) {
        _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      (0,server_renderer.ssrRenderSlot)(_ctx.$slots, "after", {}, null, _push, _parent);
      _push(`</a>`);
    }
  };
}
/* harmony default export */ const NavLinkvue_type_script_setup_true_lang_ts = (/* @__PURE__ */(0,external_vue_.defineComponent)({
  ...__default__,
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup
}));

;// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/lib/client/components/NavLink.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/lib/client/components/NavLink.vue



const __exports__ = NavLinkvue_type_script_setup_true_lang_ts;

/* harmony default export */ const NavLink = (__exports__);
;// CONCATENATED MODULE: ./node_modules/esbuild-loader/dist/index.js??clonedRuleSet-31.use[0]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./node_modules/@vuepress/theme-default/lib/client/components/Home.vue?vue&type=script&setup=true&lang=ts







/* harmony default export */ const Homevue_type_script_setup_true_lang_ts = (/* @__PURE__ */(0,external_vue_.defineComponent)({
  __ssrInlineRender: true,
  setup(__props) {
    const frontmatter = (0,lib/* usePageFrontmatter */.I2)();
    const siteLocale = (0,lib/* useSiteLocaleData */.I5)();
    const heroImage = (0,external_vue_.computed)(() => {
      if (!frontmatter.value.heroImage) {
        return null;
      }
      return (0,lib/* withBase */.pJ)(frontmatter.value.heroImage);
    });
    const heroText = (0,external_vue_.computed)(() => {
      if (frontmatter.value.heroText === null) {
        return null;
      }
      return frontmatter.value.heroText || siteLocale.value.title || "Hello";
    });
    const heroAlt = (0,external_vue_.computed)(() => frontmatter.value.heroAlt || heroText.value || "hero");
    const tagline = (0,external_vue_.computed)(() => {
      if (frontmatter.value.tagline === null) {
        return null;
      }
      return frontmatter.value.tagline || siteLocale.value.description || "Welcome to your VuePress site";
    });
    const actions = (0,external_vue_.computed)(() => {
      if (!(0,esm/* isArray */.kJ)(frontmatter.value.actions)) {
        return [];
      }
      return frontmatter.value.actions.map(({ text, link, type = "primary" }) => ({
        text,
        link,
        type
      }));
    });
    const features = (0,external_vue_.computed)(() => {
      if ((0,esm/* isArray */.kJ)(frontmatter.value.features)) {
        return frontmatter.value.features;
      }
      return [];
    });
    const footer = (0,external_vue_.computed)(() => frontmatter.value.footer);
    const footerHtml = (0,external_vue_.computed)(() => frontmatter.value.footerHtml);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Content = (0,external_vue_.resolveComponent)("Content");
      _push(`<main${(0,server_renderer.ssrRenderAttrs)((0,external_vue_.mergeProps)({
        class: "home",
        "aria-labelledby": (0,external_vue_.unref)(heroText) ? "main-title" : void 0
      }, _attrs))}><header class="hero">`);
      if ((0,external_vue_.unref)(heroImage)) {
        _push(`<img${(0,server_renderer.ssrRenderAttr)("src", (0,external_vue_.unref)(heroImage))}${(0,server_renderer.ssrRenderAttr)("alt", (0,external_vue_.unref)(heroAlt))}>`);
      } else {
        _push(`<!---->`);
      }
      if ((0,external_vue_.unref)(heroText)) {
        _push(`<h1 id="main-title">${(0,server_renderer.ssrInterpolate)((0,external_vue_.unref)(heroText))}</h1>`);
      } else {
        _push(`<!---->`);
      }
      if ((0,external_vue_.unref)(tagline)) {
        _push(`<p class="description">${(0,server_renderer.ssrInterpolate)((0,external_vue_.unref)(tagline))}</p>`);
      } else {
        _push(`<!---->`);
      }
      if ((0,external_vue_.unref)(actions).length) {
        _push(`<p class="actions"><!--[-->`);
        (0,server_renderer.ssrRenderList)((0,external_vue_.unref)(actions), (action) => {
          _push((0,server_renderer.ssrRenderComponent)(NavLink, {
            key: action.text,
            class: ["action-button", [action.type]],
            item: action
          }, null, _parent));
        });
        _push(`<!--]--></p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header>`);
      if ((0,external_vue_.unref)(features).length) {
        _push(`<div class="features"><!--[-->`);
        (0,server_renderer.ssrRenderList)((0,external_vue_.unref)(features), (feature) => {
          _push(`<div class="feature"><h2>${(0,server_renderer.ssrInterpolate)(feature.title)}</h2><p>${(0,server_renderer.ssrInterpolate)(feature.details)}</p></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="theme-default-content custom">`);
      _push((0,server_renderer.ssrRenderComponent)(_component_Content, null, null, _parent));
      _push(`</div>`);
      if ((0,external_vue_.unref)(footer)) {
        _push(`<!--[-->`);
        if ((0,external_vue_.unref)(footerHtml)) {
          _push(`<div class="footer">${(0,external_vue_.unref)(footer)}</div>`);
        } else {
          _push(`<div class="footer">${(0,server_renderer.ssrInterpolate)((0,external_vue_.unref)(footer))}</div>`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</main>`);
    };
  }
}));

;// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/lib/client/components/Home.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/lib/client/components/Home.vue



const Home_exports_ = Homevue_type_script_setup_true_lang_ts;

/* harmony default export */ const Home = (Home_exports_);
// EXTERNAL MODULE: ./node_modules/@vuepress/theme-default/lib/client/composables/index.js + 10 modules
var composables = __webpack_require__(4391);
;// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/lib/client/utils/resolveRepoType.js

const resolveRepoType = (repo) => {
    if (!(0,esm/* isLinkHttp */.ak)(repo) || /github\.com/.test(repo))
        return 'GitHub';
    if (/bitbucket\.org/.test(repo))
        return 'Bitbucket';
    if (/gitlab\.com/.test(repo))
        return 'GitLab';
    if (/gitee\.com/.test(repo))
        return 'Gitee';
    return null;
};

;// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/lib/client/utils/resolveEditLink.js


const editLinkPatterns = {
    GitHub: ':repo/edit/:branch/:path',
    GitLab: ':repo/-/edit/:branch/:path',
    Gitee: ':repo/edit/:branch/:path',
    Bitbucket: ':repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default',
};
const resolveEditLink = ({ docsRepo, docsBranch, docsDir, filePathRelative, editLinkPattern, }) => {
    const repoType = resolveRepoType(docsRepo);
    let pattern;
    if (editLinkPattern) {
        pattern = editLinkPattern;
    }
    else if (repoType !== null) {
        pattern = editLinkPatterns[repoType];
    }
    if (!pattern)
        return null;
    return pattern
        .replace(/:repo/, (0,esm/* isLinkHttp */.ak)(docsRepo) ? docsRepo : `https://github.com/${docsRepo}`)
        .replace(/:branch/, docsBranch)
        .replace(/:path/, (0,esm/* removeLeadingSlash */.FY)(`${(0,esm/* removeEndingSlash */.U1)(docsDir)}/${filePathRelative}`));
};

;// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/lib/client/utils/index.js



;// CONCATENATED MODULE: ./node_modules/esbuild-loader/dist/index.js??clonedRuleSet-31.use[0]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./node_modules/@vuepress/theme-default/lib/client/components/DropdownTransition.vue?vue&type=script&setup=true&lang=ts


/* harmony default export */ const DropdownTransitionvue_type_script_setup_true_lang_ts = (/* @__PURE__ */(0,external_vue_.defineComponent)({
  __ssrInlineRender: true,
  setup(__props) {
    const setHeight = (items) => {
      items.style.height = items.scrollHeight + "px";
    };
    const unsetHeight = (items) => {
      items.style.height = "";
    };
    return (_ctx, _push, _parent, _attrs) => {
      (0,server_renderer.ssrRenderSlot)(_ctx.$slots, "default", {}, null, _push, _parent);
    };
  }
}));

;// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/lib/client/components/DropdownTransition.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/lib/client/components/DropdownTransition.vue



const DropdownTransition_exports_ = DropdownTransitionvue_type_script_setup_true_lang_ts;

/* harmony default export */ const DropdownTransition = (DropdownTransition_exports_);
;// CONCATENATED MODULE: ./node_modules/esbuild-loader/dist/index.js??clonedRuleSet-31.use[0]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./node_modules/@vuepress/theme-default/lib/client/components/DropdownLink.vue?vue&type=script&setup=true&lang=ts







/* harmony default export */ const DropdownLinkvue_type_script_setup_true_lang_ts = (/* @__PURE__ */(0,external_vue_.defineComponent)({
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const { item } = (0,external_vue_.toRefs)(props);
    const dropdownAriaLabel = (0,external_vue_.computed)(() => item.value.ariaLabel || item.value.text);
    const open = (0,external_vue_.ref)(false);
    const route = (0,external_vue_router_.useRoute)();
    (0,external_vue_.watch)(() => route.path, () => {
      open.value = false;
    });
    const handleDropdown = (e) => {
      const isTriggerByTab = e.detail === 0;
      if (isTriggerByTab) {
        open.value = !open.value;
      } else {
        open.value = false;
      }
    };
    const isLastItemOfArray = (item2, arr) => arr[arr.length - 1] === item2;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${(0,server_renderer.ssrRenderAttrs)((0,external_vue_.mergeProps)({
        class: ["dropdown-wrapper", { open: open.value }]
      }, _attrs))}><button class="dropdown-title" type="button"${(0,server_renderer.ssrRenderAttr)("aria-label", (0,external_vue_.unref)(dropdownAriaLabel))}><span class="title">${(0,server_renderer.ssrInterpolate)((0,external_vue_.unref)(item).text)}</span><span class="arrow down"></span></button><button class="mobile-dropdown-title" type="button"${(0,server_renderer.ssrRenderAttr)("aria-label", (0,external_vue_.unref)(dropdownAriaLabel))}><span class="title">${(0,server_renderer.ssrInterpolate)((0,external_vue_.unref)(item).text)}</span><span class="${(0,server_renderer.ssrRenderClass)([open.value ? "down" : "right", "arrow"])}"></span></button>`);
      _push((0,server_renderer.ssrRenderComponent)(DropdownTransition, null, {
        default: (0,external_vue_.withCtx)((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<ul style="${(0,server_renderer.ssrRenderStyle)(open.value ? null : { display: "none" })}" class="nav-dropdown"${_scopeId}><!--[-->`);
            (0,server_renderer.ssrRenderList)((0,external_vue_.unref)(item).children, (child, index) => {
              _push2(`<li class="dropdown-item"${_scopeId}>`);
              if (child.children) {
                _push2(`<!--[--><h4 class="dropdown-subtitle"${_scopeId}>`);
                if (child.link) {
                  _push2((0,server_renderer.ssrRenderComponent)(NavLink, { item: child }, null, _parent2, _scopeId));
                } else {
                  _push2(`<span${_scopeId}>${(0,server_renderer.ssrInterpolate)(child.text)}</span>`);
                }
                _push2(`</h4><ul class="dropdown-subitem-wrapper"${_scopeId}><!--[-->`);
                (0,server_renderer.ssrRenderList)(child.children, (grandchild) => {
                  _push2(`<li class="dropdown-subitem"${_scopeId}>`);
                  _push2((0,server_renderer.ssrRenderComponent)(NavLink, { item: grandchild }, null, _parent2, _scopeId));
                  _push2(`</li>`);
                });
                _push2(`<!--]--></ul><!--]-->`);
              } else {
                _push2((0,server_renderer.ssrRenderComponent)(NavLink, { item: child }, null, _parent2, _scopeId));
              }
              _push2(`</li>`);
            });
            _push2(`<!--]--></ul>`);
          } else {
            return [
              (0,external_vue_.withDirectives)((0,external_vue_.createVNode)("ul", { class: "nav-dropdown" }, [
                ((0,external_vue_.openBlock)(true), (0,external_vue_.createBlock)(external_vue_.Fragment, null, (0,external_vue_.renderList)((0,external_vue_.unref)(item).children, (child, index) => {
                  return (0,external_vue_.openBlock)(), (0,external_vue_.createBlock)("li", {
                    key: child.link || index,
                    class: "dropdown-item"
                  }, [
                    child.children ? ((0,external_vue_.openBlock)(), (0,external_vue_.createBlock)(external_vue_.Fragment, { key: 0 }, [
                      (0,external_vue_.createVNode)("h4", { class: "dropdown-subtitle" }, [
                        child.link ? ((0,external_vue_.openBlock)(), (0,external_vue_.createBlock)(NavLink, {
                          key: 0,
                          item: child,
                          onFocusout: ($event) => isLastItemOfArray(child, (0,external_vue_.unref)(item).children) && child.children.length === 0 && (open.value = false)
                        }, null, 8, ["item", "onFocusout"])) : ((0,external_vue_.openBlock)(), (0,external_vue_.createBlock)("span", { key: 1 }, (0,external_vue_.toDisplayString)(child.text), 1))
                      ]),
                      (0,external_vue_.createVNode)("ul", { class: "dropdown-subitem-wrapper" }, [
                        ((0,external_vue_.openBlock)(true), (0,external_vue_.createBlock)(external_vue_.Fragment, null, (0,external_vue_.renderList)(child.children, (grandchild) => {
                          return (0,external_vue_.openBlock)(), (0,external_vue_.createBlock)("li", {
                            key: grandchild.link,
                            class: "dropdown-subitem"
                          }, [
                            (0,external_vue_.createVNode)(NavLink, {
                              item: grandchild,
                              onFocusout: ($event) => isLastItemOfArray(grandchild, child.children) && isLastItemOfArray(child, (0,external_vue_.unref)(item).children) && (open.value = false)
                            }, null, 8, ["item", "onFocusout"])
                          ]);
                        }), 128))
                      ])
                    ], 64)) : ((0,external_vue_.openBlock)(), (0,external_vue_.createBlock)(NavLink, {
                      key: 1,
                      item: child,
                      onFocusout: ($event) => isLastItemOfArray(child, (0,external_vue_.unref)(item).children) && (open.value = false)
                    }, null, 8, ["item", "onFocusout"]))
                  ]);
                }), 128))
              ], 512), [
                [external_vue_.vShow, open.value]
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
}));

;// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/lib/client/components/DropdownLink.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/lib/client/components/DropdownLink.vue



const DropdownLink_exports_ = DropdownLinkvue_type_script_setup_true_lang_ts;

/* harmony default export */ const DropdownLink = (DropdownLink_exports_);
;// CONCATENATED MODULE: ./node_modules/esbuild-loader/dist/index.js??clonedRuleSet-31.use[0]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./node_modules/@vuepress/theme-default/lib/client/components/NavbarLinks.vue?vue&type=script&setup=true&lang=ts











/* harmony default export */ const NavbarLinksvue_type_script_setup_true_lang_ts = (/* @__PURE__ */(0,external_vue_.defineComponent)({
  __ssrInlineRender: true,
  setup(__props) {
    const useNavbarSelectLanguage = () => {
      const router = (0,external_vue_router_.useRouter)();
      const routeLocale = (0,lib/* useRouteLocale */.I)();
      const siteLocale = (0,lib/* useSiteLocaleData */.I5)();
      const themeLocale = (0,composables/* useThemeLocaleData */.X6)();
      return (0,external_vue_.computed)(() => {
        var _a, _b;
        const localePaths = Object.keys(siteLocale.value.locales);
        if (localePaths.length < 2) {
          return [];
        }
        const currentPath = router.currentRoute.value.path;
        const currentFullPath = router.currentRoute.value.fullPath;
        const languageDropdown = {
          text: (_a = themeLocale.value.selectLanguageText) != null ? _a : "unkown language",
          ariaLabel: (_b = themeLocale.value.selectLanguageAriaLabel) != null ? _b : "unkown language",
          children: localePaths.map((targetLocalePath) => {
            var _a2, _b2, _c, _d, _e, _f;
            const targetSiteLocale = (_b2 = (_a2 = siteLocale.value.locales) == null ? void 0 : _a2[targetLocalePath]) != null ? _b2 : {};
            const targetThemeLocale = (_d = (_c = themeLocale.value.locales) == null ? void 0 : _c[targetLocalePath]) != null ? _d : {};
            const targetLang = `${targetSiteLocale.lang}`;
            const text = (_e = targetThemeLocale.selectLanguageName) != null ? _e : targetLang;
            let link;
            if (targetLang === siteLocale.value.lang) {
              link = currentFullPath;
            } else {
              const targetLocalePage = currentPath.replace(routeLocale.value, targetLocalePath);
              if (router.getRoutes().some((item) => item.path === targetLocalePage)) {
                link = targetLocalePage;
              } else {
                link = (_f = targetThemeLocale.home) != null ? _f : targetLocalePath;
              }
            }
            return {
              text,
              link
            };
          })
        };
        return [languageDropdown];
      });
    };
    const useNavbarRepo = () => {
      const themeLocale = (0,composables/* useThemeLocaleData */.X6)();
      const repo = (0,external_vue_.computed)(() => themeLocale.value.repo);
      const repoType = (0,external_vue_.computed)(() => repo.value ? resolveRepoType(repo.value) : null);
      const repoLink = (0,external_vue_.computed)(() => {
        if (repo.value && !(0,esm/* isLinkHttp */.ak)(repo.value)) {
          return `https://github.com/${repo.value}`;
        }
        return repo.value;
      });
      const repoLabel = (0,external_vue_.computed)(() => {
        if (!repoLink.value)
          return null;
        if (themeLocale.value.repoLabel)
          return themeLocale.value.repoLabel;
        if (repoType.value === null)
          return "Source";
        return repoType.value;
      });
      return (0,external_vue_.computed)(() => {
        if (!repoLink.value || !repoLabel.value) {
          return [];
        }
        return [
          {
            text: repoLabel.value,
            link: repoLink.value
          }
        ];
      });
    };
    const resolveNavbarItem = (item) => {
      if ((0,esm/* isString */.HD)(item)) {
        return (0,composables/* useNavLink */.sC)(item);
      }
      if (item.children) {
        return {
          ...item,
          children: item.children.map(resolveNavbarItem)
        };
      }
      return item;
    };
    const useNavbarConfig = () => {
      const themeLocale = (0,composables/* useThemeLocaleData */.X6)();
      return (0,external_vue_.computed)(() => (themeLocale.value.navbar || []).map(resolveNavbarItem));
    };
    const navbarConfig = useNavbarConfig();
    const navbarSelectLanguage = useNavbarSelectLanguage();
    const navbarRepo = useNavbarRepo();
    const navbarLinks = (0,external_vue_.computed)(() => [
      ...navbarConfig.value,
      ...navbarSelectLanguage.value,
      ...navbarRepo.value
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      if ((0,external_vue_.unref)(navbarLinks).length) {
        _push(`<nav${(0,server_renderer.ssrRenderAttrs)((0,external_vue_.mergeProps)({ class: "navbar-links" }, _attrs))}><!--[-->`);
        (0,server_renderer.ssrRenderList)((0,external_vue_.unref)(navbarLinks), (item) => {
          _push(`<div class="navbar-links-item">`);
          if (item.children) {
            _push((0,server_renderer.ssrRenderComponent)(DropdownLink, { item }, null, _parent));
          } else {
            _push((0,server_renderer.ssrRenderComponent)(NavLink, { item }, null, _parent));
          }
          _push(`</div>`);
        });
        _push(`<!--]--></nav>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
}));

;// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/lib/client/components/NavbarLinks.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/lib/client/components/NavbarLinks.vue



const NavbarLinks_exports_ = NavbarLinksvue_type_script_setup_true_lang_ts;

/* harmony default export */ const NavbarLinks = (NavbarLinks_exports_);
;// CONCATENATED MODULE: ./node_modules/esbuild-loader/dist/index.js??clonedRuleSet-31.use[0]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./node_modules/@vuepress/theme-default/lib/client/components/ToggleDarkModeButton.vue?vue&type=script&setup=true&lang=ts




/* harmony default export */ const ToggleDarkModeButtonvue_type_script_setup_true_lang_ts = (/* @__PURE__ */(0,external_vue_.defineComponent)({
  __ssrInlineRender: true,
  setup(__props) {
    const themeLocale = (0,composables/* useThemeLocaleData */.X6)();
    const isDarkMode = (0,composables/* useDarkMode */.vs)();
    const toggleDarkMode = () => {
      isDarkMode.value = !isDarkMode.value;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${(0,server_renderer.ssrRenderAttrs)((0,external_vue_.mergeProps)({
        class: "toggle-dark-button",
        title: (0,external_vue_.unref)(themeLocale).toggleDarkMode
      }, _attrs))}><svg style="${(0,server_renderer.ssrRenderStyle)(!(0,external_vue_.unref)(isDarkMode) ? null : { display: "none" })}" class="icon" focusable="false" viewBox="0 0 32 32"><path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path></svg><svg style="${(0,server_renderer.ssrRenderStyle)((0,external_vue_.unref)(isDarkMode) ? null : { display: "none" })}" class="icon" focusable="false" viewBox="0 0 32 32"><path d="M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z" fill="currentColor"></path></svg></button>`);
    };
  }
}));

;// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/lib/client/components/ToggleDarkModeButton.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/lib/client/components/ToggleDarkModeButton.vue



const ToggleDarkModeButton_exports_ = ToggleDarkModeButtonvue_type_script_setup_true_lang_ts;

/* harmony default export */ const ToggleDarkModeButton = (ToggleDarkModeButton_exports_);
;// CONCATENATED MODULE: ./node_modules/esbuild-loader/dist/index.js??clonedRuleSet-31.use[0]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./node_modules/@vuepress/theme-default/lib/client/components/ToggleSidebarButton.vue?vue&type=script&setup=true&lang=ts




/* harmony default export */ const ToggleSidebarButtonvue_type_script_setup_true_lang_ts = (/* @__PURE__ */(0,external_vue_.defineComponent)({
  __ssrInlineRender: true,
  emits: ["toggle"],
  setup(__props) {
    const themeLocale = (0,composables/* useThemeLocaleData */.X6)();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${(0,server_renderer.ssrRenderAttrs)((0,external_vue_.mergeProps)({
        class: "toggle-sidebar-button",
        title: (0,external_vue_.unref)(themeLocale).toggleSidebar,
        "aria-expanded": "false",
        role: "button",
        tabindex: "0"
      }, _attrs))}><div class="icon" aria-hidden="true"><span></span><span></span><span></span></div></div>`);
    };
  }
}));

;// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/lib/client/components/ToggleSidebarButton.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/lib/client/components/ToggleSidebarButton.vue



const ToggleSidebarButton_exports_ = ToggleSidebarButtonvue_type_script_setup_true_lang_ts;

/* harmony default export */ const ToggleSidebarButton = (ToggleSidebarButton_exports_);
;// CONCATENATED MODULE: ./node_modules/esbuild-loader/dist/index.js??clonedRuleSet-31.use[0]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./node_modules/@vuepress/theme-default/lib/client/components/Navbar.vue?vue&type=script&setup=true&lang=ts









/* harmony default export */ const Navbarvue_type_script_setup_true_lang_ts = (/* @__PURE__ */(0,external_vue_.defineComponent)({
  __ssrInlineRender: true,
  emits: ["toggle-sidebar"],
  setup(__props) {
    const routeLocale = (0,lib/* useRouteLocale */.I)();
    const siteLocale = (0,lib/* useSiteLocaleData */.I5)();
    const themeLocale = (0,composables/* useThemeLocaleData */.X6)();
    const isDarkMode = (0,composables/* useDarkMode */.vs)();
    const navbar = (0,external_vue_.ref)(null);
    const siteBrand = (0,external_vue_.ref)(null);
    const siteBrandLink = (0,external_vue_.computed)(() => themeLocale.value.home || routeLocale.value);
    const siteBrandLogo = (0,external_vue_.computed)(() => {
      if (isDarkMode.value && themeLocale.value.logoDark !== void 0) {
        return themeLocale.value.logoDark;
      }
      return themeLocale.value.logo;
    });
    const siteBrandTitle = (0,external_vue_.computed)(() => siteLocale.value.title);
    const linksWrapperMaxWidth = (0,external_vue_.ref)(0);
    const linksWrapperStyle = (0,external_vue_.computed)(() => {
      if (!linksWrapperMaxWidth.value) {
        return {};
      }
      return {
        maxWidth: linksWrapperMaxWidth.value + "px"
      };
    });
    const enableDarkMode = (0,external_vue_.computed)(() => themeLocale.value.darkMode);
    (0,external_vue_.onMounted)(() => {
      const MOBILE_DESKTOP_BREAKPOINT = 719;
      const navbarHorizontalPadding = getCssValue(navbar.value, "paddingLeft") + getCssValue(navbar.value, "paddingRight");
      const handleLinksWrapWidth = () => {
        var _a;
        if (window.innerWidth <= MOBILE_DESKTOP_BREAKPOINT) {
          linksWrapperMaxWidth.value = 0;
        } else {
          linksWrapperMaxWidth.value = navbar.value.offsetWidth - navbarHorizontalPadding - (((_a = siteBrand.value) == null ? void 0 : _a.offsetWidth) || 0);
        }
      };
      handleLinksWrapWidth();
      window.addEventListener("resize", handleLinksWrapWidth, false);
      window.addEventListener("orientationchange", handleLinksWrapWidth, false);
    });
    function getCssValue(el, property) {
      var _a, _b, _c;
      const val = (_c = (_b = (_a = el == null ? void 0 : el.ownerDocument) == null ? void 0 : _a.defaultView) == null ? void 0 : _b.getComputedStyle(el, null)) == null ? void 0 : _c[property];
      const num = Number.parseInt(val, 10);
      return Number.isNaN(num) ? 0 : num;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = (0,external_vue_.resolveComponent)("RouterLink");
      const _component_ClientOnly = (0,external_vue_.resolveComponent)("ClientOnly");
      const _component_NavbarSearch = (0,external_vue_.resolveComponent)("NavbarSearch");
      _push(`<header${(0,server_renderer.ssrRenderAttrs)((0,external_vue_.mergeProps)({
        ref: (_value, _refs) => {
          _refs["navbar"] = _value;
          navbar.value = _value;
        },
        class: "navbar"
      }, _attrs))}>`);
      _push((0,server_renderer.ssrRenderComponent)(ToggleSidebarButton, null, null, _parent));
      _push(`<span>`);
      _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: (0,external_vue_.unref)(siteBrandLink) }, {
        default: (0,external_vue_.withCtx)((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2((0,server_renderer.ssrRenderComponent)(_component_ClientOnly, null, {
              default: (0,external_vue_.withCtx)((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if ((0,external_vue_.unref)(siteBrandLogo)) {
                    _push3(`<img class="logo"${(0,server_renderer.ssrRenderAttr)("src", (0,external_vue_.unref)(lib/* withBase */.pJ)((0,external_vue_.unref)(siteBrandLogo)))}${(0,server_renderer.ssrRenderAttr)("alt", (0,external_vue_.unref)(siteBrandTitle))}${_scopeId2}>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    (0,external_vue_.unref)(siteBrandLogo) ? ((0,external_vue_.openBlock)(), (0,external_vue_.createBlock)("img", {
                      key: 0,
                      class: "logo",
                      src: (0,external_vue_.unref)(lib/* withBase */.pJ)((0,external_vue_.unref)(siteBrandLogo)),
                      alt: (0,external_vue_.unref)(siteBrandTitle)
                    }, null, 8, ["src", "alt"])) : (0,external_vue_.createCommentVNode)("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if ((0,external_vue_.unref)(siteBrandTitle)) {
              _push2(`<span class="${(0,server_renderer.ssrRenderClass)([{ "can-hide": (0,external_vue_.unref)(siteBrandLogo) }, "site-name"])}"${_scopeId}>${(0,server_renderer.ssrInterpolate)((0,external_vue_.unref)(siteBrandTitle))}</span>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              (0,external_vue_.createVNode)(_component_ClientOnly, null, {
                default: (0,external_vue_.withCtx)(() => [
                  (0,external_vue_.unref)(siteBrandLogo) ? ((0,external_vue_.openBlock)(), (0,external_vue_.createBlock)("img", {
                    key: 0,
                    class: "logo",
                    src: (0,external_vue_.unref)(lib/* withBase */.pJ)((0,external_vue_.unref)(siteBrandLogo)),
                    alt: (0,external_vue_.unref)(siteBrandTitle)
                  }, null, 8, ["src", "alt"])) : (0,external_vue_.createCommentVNode)("", true)
                ]),
                _: 1
              }),
              (0,external_vue_.unref)(siteBrandTitle) ? ((0,external_vue_.openBlock)(), (0,external_vue_.createBlock)("span", {
                key: 0,
                class: ["site-name", { "can-hide": (0,external_vue_.unref)(siteBrandLogo) }]
              }, (0,external_vue_.toDisplayString)((0,external_vue_.unref)(siteBrandTitle)), 3)) : (0,external_vue_.createCommentVNode)("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</span><div class="navbar-links-wrapper" style="${(0,server_renderer.ssrRenderStyle)((0,external_vue_.unref)(linksWrapperStyle))}">`);
      (0,server_renderer.ssrRenderSlot)(_ctx.$slots, "before", {}, null, _push, _parent);
      _push((0,server_renderer.ssrRenderComponent)(NavbarLinks, { class: "can-hide" }, null, _parent));
      (0,server_renderer.ssrRenderSlot)(_ctx.$slots, "after", {}, null, _push, _parent);
      if ((0,external_vue_.unref)(enableDarkMode)) {
        _push((0,server_renderer.ssrRenderComponent)(ToggleDarkModeButton, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push((0,server_renderer.ssrRenderComponent)(_component_NavbarSearch, null, null, _parent));
      _push(`</div></header>`);
    };
  }
}));

;// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/lib/client/components/Navbar.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/lib/client/components/Navbar.vue



const Navbar_exports_ = Navbarvue_type_script_setup_true_lang_ts;

/* harmony default export */ const Navbar = (Navbar_exports_);
;// CONCATENATED MODULE: ./node_modules/esbuild-loader/dist/index.js??clonedRuleSet-31.use[0]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./node_modules/@vuepress/theme-default/lib/client/components/PageMeta.vue?vue&type=script&setup=true&lang=ts








/* harmony default export */ const PageMetavue_type_script_setup_true_lang_ts = (/* @__PURE__ */(0,external_vue_.defineComponent)({
  __ssrInlineRender: true,
  setup(__props) {
    const useEditNavLink = () => {
      const themeLocale2 = (0,composables/* useThemeLocaleData */.X6)();
      const page = (0,lib/* usePageData */.Vi)();
      const frontmatter = (0,lib/* usePageFrontmatter */.I2)();
      return (0,external_vue_.computed)(() => {
        var _a, _b, _c;
        const showEditLink = (_b = (_a = frontmatter.value.editLink) != null ? _a : themeLocale2.value.editLink) != null ? _b : true;
        if (!showEditLink) {
          return null;
        }
        const {
          repo,
          docsRepo = repo,
          docsBranch = "main",
          docsDir = "",
          editLinkText
        } = themeLocale2.value;
        if (!docsRepo)
          return null;
        const editLink = resolveEditLink({
          docsRepo,
          docsBranch,
          docsDir,
          filePathRelative: page.value.filePathRelative,
          editLinkPattern: (_c = frontmatter.value.editLinkPattern) != null ? _c : themeLocale2.value.editLinkPattern
        });
        if (!editLink)
          return null;
        return {
          text: editLinkText != null ? editLinkText : "Edit this page",
          link: editLink
        };
      });
    };
    const useLastUpdated = () => {
      const siteLocale = (0,lib/* useSiteLocaleData */.I5)();
      const themeLocale2 = (0,composables/* useThemeLocaleData */.X6)();
      const page = (0,lib/* usePageData */.Vi)();
      const frontmatter = (0,lib/* usePageFrontmatter */.I2)();
      return (0,external_vue_.computed)(() => {
        var _a, _b, _c, _d;
        const showLastUpdated = (_b = (_a = frontmatter.value.lastUpdated) != null ? _a : themeLocale2.value.lastUpdated) != null ? _b : true;
        if (!showLastUpdated)
          return null;
        if (!((_c = page.value.git) == null ? void 0 : _c.updatedTime))
          return null;
        const updatedDate = new Date((_d = page.value.git) == null ? void 0 : _d.updatedTime);
        return updatedDate.toLocaleString(siteLocale.value.lang);
      });
    };
    const useContributors = () => {
      const themeLocale2 = (0,composables/* useThemeLocaleData */.X6)();
      const page = (0,lib/* usePageData */.Vi)();
      const frontmatter = (0,lib/* usePageFrontmatter */.I2)();
      return (0,external_vue_.computed)(() => {
        var _a, _b, _c, _d;
        const showContributors = (_b = (_a = frontmatter.value.contributors) != null ? _a : themeLocale2.value.contributors) != null ? _b : true;
        if (!showContributors)
          return null;
        return (_d = (_c = page.value.git) == null ? void 0 : _c.contributors) != null ? _d : null;
      });
    };
    const themeLocale = (0,composables/* useThemeLocaleData */.X6)();
    const editNavLink = useEditNavLink();
    const lastUpdated = useLastUpdated();
    const contributors = useContributors();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${(0,server_renderer.ssrRenderAttrs)((0,external_vue_.mergeProps)({ class: "page-meta" }, _attrs))}>`);
      if ((0,external_vue_.unref)(editNavLink)) {
        _push(`<div class="meta-item edit-link">`);
        _push((0,server_renderer.ssrRenderComponent)(NavLink, {
          class: "meta-item-label",
          item: (0,external_vue_.unref)(editNavLink)
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if ((0,external_vue_.unref)(lastUpdated)) {
        _push(`<div class="meta-item last-updated"><span class="meta-item-label">${(0,server_renderer.ssrInterpolate)((0,external_vue_.unref)(themeLocale).lastUpdatedText)}: </span><span class="meta-item-info">${(0,server_renderer.ssrInterpolate)((0,external_vue_.unref)(lastUpdated))}</span></div>`);
      } else {
        _push(`<!---->`);
      }
      if ((0,external_vue_.unref)(contributors) && (0,external_vue_.unref)(contributors).length) {
        _push(`<div class="meta-item contributors"><span class="meta-item-label">${(0,server_renderer.ssrInterpolate)((0,external_vue_.unref)(themeLocale).contributorsText)}: </span><span class="meta-item-info"><!--[-->`);
        (0,server_renderer.ssrRenderList)((0,external_vue_.unref)(contributors), (contributor, index) => {
          _push(`<!--[--><span class="contributor"${(0,server_renderer.ssrRenderAttr)("title", `email: ${contributor.email}`)}>${(0,server_renderer.ssrInterpolate)(contributor.name)}</span>`);
          if (index !== (0,external_vue_.unref)(contributors).length - 1) {
            _push(`<!--[-->, <!--]-->`);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</footer>`);
    };
  }
}));

;// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/lib/client/components/PageMeta.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/lib/client/components/PageMeta.vue



const PageMeta_exports_ = PageMetavue_type_script_setup_true_lang_ts;

/* harmony default export */ const PageMeta = (PageMeta_exports_);
;// CONCATENATED MODULE: ./node_modules/esbuild-loader/dist/index.js??clonedRuleSet-31.use[0]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./node_modules/@vuepress/theme-default/lib/client/components/PageNav.vue?vue&type=script&setup=true&lang=ts









/* harmony default export */ const PageNavvue_type_script_setup_true_lang_ts = (/* @__PURE__ */(0,external_vue_.defineComponent)({
  __ssrInlineRender: true,
  setup(__props) {
    const resolveFromFrontmatterConfig = (conf) => {
      if (conf === false) {
        return null;
      }
      if ((0,esm/* isString */.HD)(conf)) {
        return (0,composables/* useNavLink */.sC)(conf);
      }
      if ((0,esm/* isPlainObject */.PO)(conf)) {
        return conf;
      }
      return false;
    };
    const resolveFromSidebarItems = (sidebarItems2, currentPath, offset) => {
      const index = sidebarItems2.findIndex((item) => item.link === currentPath);
      if (index !== -1) {
        const targetItem = sidebarItems2[index + offset];
        if (!(targetItem == null ? void 0 : targetItem.link)) {
          return null;
        }
        return targetItem;
      }
      for (const item of sidebarItems2) {
        if (item.children) {
          const childResult = resolveFromSidebarItems(item.children, currentPath, offset);
          if (childResult) {
            return childResult;
          }
        }
      }
      return null;
    };
    const frontmatter = (0,lib/* usePageFrontmatter */.I2)();
    const sidebarItems = (0,composables/* useSidebarItems */.VU)();
    const route = (0,external_vue_router_.useRoute)();
    const prevNavLink = (0,external_vue_.computed)(() => {
      const prevConfig = resolveFromFrontmatterConfig(frontmatter.value.prev);
      if (prevConfig !== false) {
        return prevConfig;
      }
      return resolveFromSidebarItems(sidebarItems.value, route.path, -1);
    });
    const nextNavLink = (0,external_vue_.computed)(() => {
      const nextConfig = resolveFromFrontmatterConfig(frontmatter.value.next);
      if (nextConfig !== false) {
        return nextConfig;
      }
      return resolveFromSidebarItems(sidebarItems.value, route.path, 1);
    });
    return (_ctx, _push, _parent, _attrs) => {
      if ((0,external_vue_.unref)(prevNavLink) || (0,external_vue_.unref)(nextNavLink)) {
        _push(`<nav${(0,server_renderer.ssrRenderAttrs)((0,external_vue_.mergeProps)({ class: "page-nav" }, _attrs))}><p class="inner">`);
        if ((0,external_vue_.unref)(prevNavLink)) {
          _push(`<span class="prev"> \u2190 `);
          _push((0,server_renderer.ssrRenderComponent)(NavLink, { item: (0,external_vue_.unref)(prevNavLink) }, null, _parent));
          _push(`</span>`);
        } else {
          _push(`<!---->`);
        }
        if ((0,external_vue_.unref)(nextNavLink)) {
          _push(`<span class="next">`);
          _push((0,server_renderer.ssrRenderComponent)(NavLink, { item: (0,external_vue_.unref)(nextNavLink) }, null, _parent));
          _push(` \u2192 </span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</p></nav>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
}));

;// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/lib/client/components/PageNav.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/lib/client/components/PageNav.vue



const PageNav_exports_ = PageNavvue_type_script_setup_true_lang_ts;

/* harmony default export */ const PageNav = (PageNav_exports_);
;// CONCATENATED MODULE: ./node_modules/esbuild-loader/dist/index.js??clonedRuleSet-31.use[0]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./node_modules/@vuepress/theme-default/lib/client/components/Page.vue?vue&type=script&setup=true&lang=ts





/* harmony default export */ const Pagevue_type_script_setup_true_lang_ts = (/* @__PURE__ */(0,external_vue_.defineComponent)({
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Content = (0,external_vue_.resolveComponent)("Content");
      _push(`<main${(0,server_renderer.ssrRenderAttrs)((0,external_vue_.mergeProps)({ class: "page" }, _attrs))}>`);
      (0,server_renderer.ssrRenderSlot)(_ctx.$slots, "top", {}, null, _push, _parent);
      _push(`<div class="theme-default-content">`);
      _push((0,server_renderer.ssrRenderComponent)(_component_Content, null, null, _parent));
      _push(`</div>`);
      _push((0,server_renderer.ssrRenderComponent)(PageMeta, null, null, _parent));
      _push((0,server_renderer.ssrRenderComponent)(PageNav, null, null, _parent));
      (0,server_renderer.ssrRenderSlot)(_ctx.$slots, "bottom", {}, null, _push, _parent);
      _push(`</main>`);
    };
  }
}));

;// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/lib/client/components/Page.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/lib/client/components/Page.vue



const Page_exports_ = Pagevue_type_script_setup_true_lang_ts;

/* harmony default export */ const Page = (Page_exports_);
;// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/lib/client/components/SidebarChild.js



const normalizePath = (path) => decodeURI(path)
    .replace(/#.*$/, '')
    .replace(/(index)?\.(md|html)$/, '');
const isActiveLink = (route, link) => {
    if (link === undefined) {
        return false;
    }
    if (route.hash === link) {
        return true;
    }
    const currentPath = normalizePath(route.path);
    const targetPath = normalizePath(link);
    return currentPath === targetPath;
};
const isActiveItem = (route, item) => {
    if (isActiveLink(route, item.link)) {
        return true;
    }
    if (item.children) {
        return item.children.some((child) => isActiveItem(route, child));
    }
    return false;
};
const renderItem = (item, props) => {
    // if the item has link, render it as `<NavLink>`
    if (item.link) {
        return (0,external_vue_.h)(NavLink, {
            ...props,
            item,
        });
    }
    // if the item only has text, render it as `<p>`
    return (0,external_vue_.h)('p', props, item.text);
};
const renderChildren = (item, depth) => {
    var _a;
    if (!((_a = item.children) === null || _a === void 0 ? void 0 : _a.length)) {
        return null;
    }
    return (0,external_vue_.h)('ul', {
        class: {
            'sidebar-sub-items': depth > 0,
        },
    }, item.children.map((child) => (0,external_vue_.h)('li', (0,external_vue_.h)(SidebarChild, {
        item: child,
        depth: depth + 1,
    }))));
};
const SidebarChild = ({ item, depth = 0 }) => {
    const route = (0,external_vue_router_.useRoute)();
    const active = isActiveItem(route, item);
    return [
        renderItem(item, {
            class: {
                'sidebar-heading': depth === 0,
                'sidebar-item': true,
                active,
            },
        }),
        renderChildren(item, depth),
    ];
};
SidebarChild.displayName = 'SidebarChild';
SidebarChild.props = {
    item: {
        type: Object,
        required: true,
    },
    depth: {
        type: Number,
        required: false,
    },
};

;// CONCATENATED MODULE: ./node_modules/esbuild-loader/dist/index.js??clonedRuleSet-31.use[0]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./node_modules/@vuepress/theme-default/lib/client/components/Sidebar.vue?vue&type=script&setup=true&lang=ts






/* harmony default export */ const Sidebarvue_type_script_setup_true_lang_ts = (/* @__PURE__ */(0,external_vue_.defineComponent)({
  __ssrInlineRender: true,
  setup(__props) {
    const sidebarItems = (0,composables/* useSidebarItems */.VU)();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<aside${(0,server_renderer.ssrRenderAttrs)((0,external_vue_.mergeProps)({ class: "sidebar" }, _attrs))}>`);
      _push((0,server_renderer.ssrRenderComponent)(NavbarLinks, null, null, _parent));
      (0,server_renderer.ssrRenderSlot)(_ctx.$slots, "top", {}, null, _push, _parent);
      _push(`<ul class="sidebar-links"><!--[-->`);
      (0,server_renderer.ssrRenderList)((0,external_vue_.unref)(sidebarItems), (item) => {
        _push((0,server_renderer.ssrRenderComponent)((0,external_vue_.unref)(SidebarChild), {
          key: item.link || item.text,
          item
        }, null, _parent));
      });
      _push(`<!--]--></ul>`);
      (0,server_renderer.ssrRenderSlot)(_ctx.$slots, "bottom", {}, null, _push, _parent);
      _push(`</aside>`);
    };
  }
}));

;// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/lib/client/components/Sidebar.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/lib/client/components/Sidebar.vue



const Sidebar_exports_ = Sidebarvue_type_script_setup_true_lang_ts;

/* harmony default export */ const Sidebar = (Sidebar_exports_);
;// CONCATENATED MODULE: ./node_modules/esbuild-loader/dist/index.js??clonedRuleSet-31.use[0]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue?vue&type=script&setup=true&lang=ts











/* harmony default export */ const Layoutvue_type_script_setup_true_lang_ts = (/* @__PURE__ */(0,external_vue_.defineComponent)({
  __ssrInlineRender: true,
  setup(__props) {
    const page = (0,lib/* usePageData */.Vi)();
    const frontmatter = (0,lib/* usePageFrontmatter */.I2)();
    const themeLocale = (0,composables/* useThemeLocaleData */.X6)();
    const shouldShowNavbar = (0,external_vue_.computed)(() => frontmatter.value.navbar !== false && themeLocale.value.navbar !== false);
    const sidebarItems = (0,composables/* useSidebarItems */.VU)();
    const isSidebarOpen = (0,external_vue_.ref)(false);
    const toggleSidebar = (to) => {
      isSidebarOpen.value = typeof to === "boolean" ? to : !isSidebarOpen.value;
    };
    const touchStart = { x: 0, y: 0 };
    const onTouchStart = (e) => {
      touchStart.x = e.changedTouches[0].clientX;
      touchStart.y = e.changedTouches[0].clientY;
    };
    const onTouchEnd = (e) => {
      const dx = e.changedTouches[0].clientX - touchStart.x;
      const dy = e.changedTouches[0].clientY - touchStart.y;
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && touchStart.x <= 80) {
          toggleSidebar(true);
        } else {
          toggleSidebar(false);
        }
      }
    };
    const containerClass = (0,external_vue_.computed)(() => [
      {
        "no-navbar": !shouldShowNavbar.value,
        "no-sidebar": !sidebarItems.value.length,
        "sidebar-open": isSidebarOpen.value
      },
      frontmatter.value.pageClass
    ]);
    let unregisterRouterHook;
    (0,external_vue_.onMounted)(() => {
      const router = (0,external_vue_router_.useRouter)();
      unregisterRouterHook = router.afterEach(() => {
        toggleSidebar(false);
      });
    });
    (0,external_vue_.onUnmounted)(() => {
      unregisterRouterHook();
    });
    const scrollPromise = (0,composables/* useScrollPromise */.P$)();
    const onBeforeEnter = scrollPromise.resolve;
    const onBeforeLeave = scrollPromise.pending;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${(0,server_renderer.ssrRenderAttrs)((0,external_vue_.mergeProps)({
        class: ["theme-container", (0,external_vue_.unref)(containerClass)]
      }, _attrs))}>`);
      (0,server_renderer.ssrRenderSlot)(_ctx.$slots, "navbar", {}, () => {
        if ((0,external_vue_.unref)(shouldShowNavbar)) {
          _push((0,server_renderer.ssrRenderComponent)(Navbar, null, {
            before: (0,external_vue_.withCtx)((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                (0,server_renderer.ssrRenderSlot)(_ctx.$slots, "navbar-before", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  (0,external_vue_.renderSlot)(_ctx.$slots, "navbar-before")
                ];
              }
            }),
            after: (0,external_vue_.withCtx)((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                (0,server_renderer.ssrRenderSlot)(_ctx.$slots, "navbar-after", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  (0,external_vue_.renderSlot)(_ctx.$slots, "navbar-after")
                ];
              }
            }),
            _: 3
          }, _parent));
        } else {
          _push(`<!---->`);
        }
      }, _push, _parent);
      _push(`<div class="sidebar-mask"></div>`);
      (0,server_renderer.ssrRenderSlot)(_ctx.$slots, "sidebar", {}, () => {
        _push((0,server_renderer.ssrRenderComponent)(Sidebar, null, {
          top: (0,external_vue_.withCtx)((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              (0,server_renderer.ssrRenderSlot)(_ctx.$slots, "sidebar-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                (0,external_vue_.renderSlot)(_ctx.$slots, "sidebar-top")
              ];
            }
          }),
          bottom: (0,external_vue_.withCtx)((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              (0,server_renderer.ssrRenderSlot)(_ctx.$slots, "sidebar-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                (0,external_vue_.renderSlot)(_ctx.$slots, "sidebar-bottom")
              ];
            }
          }),
          _: 3
        }, _parent));
      }, _push, _parent);
      (0,server_renderer.ssrRenderSlot)(_ctx.$slots, "page", {}, () => {
        if ((0,external_vue_.unref)(frontmatter).home) {
          _push((0,server_renderer.ssrRenderComponent)(Home, null, null, _parent));
        } else {
          _push((0,server_renderer.ssrRenderComponent)(Page, (0,external_vue_.mergeProps)({
            key: (0,external_vue_.unref)(page).path
          }, _attrs), {
            top: (0,external_vue_.withCtx)((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                (0,server_renderer.ssrRenderSlot)(_ctx.$slots, "page-top", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  (0,external_vue_.renderSlot)(_ctx.$slots, "page-top")
                ];
              }
            }),
            bottom: (0,external_vue_.withCtx)((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                (0,server_renderer.ssrRenderSlot)(_ctx.$slots, "page-bottom", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  (0,external_vue_.renderSlot)(_ctx.$slots, "page-bottom")
                ];
              }
            }),
            _: 3
          }, _parent));
        }
      }, _push, _parent);
      _push(`</div>`);
    };
  }
}));

;// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue



const Layout_exports_ = Layoutvue_type_script_setup_true_lang_ts;

/* harmony default export */ const Layout = (Layout_exports_);

/***/ })

};
;
//# sourceMappingURL=210.app.js.map