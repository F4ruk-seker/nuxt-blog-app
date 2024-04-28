import { ref, watch, useSSRContext, resolveComponent, mergeProps, unref, withAsyncContext, computed, toValue, reactive } from 'vue';
import { a as useColorMode, u as useAsyncData } from './composables-CoNnLgtX.mjs';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttrs, ssrRenderStyle, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc, g as fetchDefaults, a as useRuntimeConfig, f as useNuxtApp } from './server.mjs';
import { y as hash } from '../runtime.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@fortawesome/fontawesome-svg-core';
import '@fortawesome/vue-fontawesome';
import '@fortawesome/free-solid-svg-icons';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';

function useRequestEvent(nuxtApp = useNuxtApp()) {
  var _a;
  return (_a = nuxtApp.ssrContext) == null ? void 0 : _a.event;
}
function useRequestFetch() {
  var _a;
  return ((_a = useRequestEvent()) == null ? void 0 : _a.$fetch) || globalThis.$fetch;
}
function useFetch(request, arg1, arg2) {
  const [opts = {}, autoKey] = typeof arg1 === "string" ? [{}, arg1] : [arg1, arg2];
  const _request = computed(() => toValue(request));
  const _key = opts.key || hash([autoKey, typeof _request.value === "string" ? _request.value : "", ...generateOptionSegments(opts)]);
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useFetch] key must be a string: " + _key);
  }
  if (!request) {
    throw new Error("[nuxt] [useFetch] request is missing.");
  }
  const key = _key === autoKey ? "$f" + _key : _key;
  if (!opts.baseURL && typeof _request.value === "string" && (_request.value[0] === "/" && _request.value[1] === "/")) {
    throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');
  }
  const {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick,
    watch: watch2,
    immediate,
    getCachedData,
    deep,
    dedupe,
    ...fetchOptions
  } = opts;
  const _fetchOptions = reactive({
    ...fetchDefaults,
    ...fetchOptions,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  });
  const _asyncDataOptions = {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick,
    immediate,
    getCachedData,
    deep,
    dedupe,
    watch: watch2 === false ? [] : [_fetchOptions, _request, ...watch2 || []]
  };
  let controller;
  const asyncData = useAsyncData(key, () => {
    var _a;
    (_a = controller == null ? void 0 : controller.abort) == null ? void 0 : _a.call(controller);
    controller = typeof AbortController !== "undefined" ? new AbortController() : {};
    const timeoutLength = toValue(opts.timeout);
    if (timeoutLength) {
      setTimeout(() => controller.abort(), timeoutLength);
    }
    let _$fetch = opts.$fetch || globalThis.$fetch;
    if (!opts.$fetch) {
      const isLocalFetch = typeof _request.value === "string" && _request.value[0] === "/" && (!toValue(opts.baseURL) || toValue(opts.baseURL)[0] === "/");
      if (isLocalFetch) {
        _$fetch = useRequestFetch();
      }
    }
    return _$fetch(_request.value, { signal: controller.signal, ..._fetchOptions });
  }, _asyncDataOptions);
  return asyncData;
}
function generateOptionSegments(opts) {
  var _a;
  const segments = [
    ((_a = toValue(opts.method)) == null ? void 0 : _a.toUpperCase()) || "GET",
    toValue(opts.baseURL)
  ];
  for (const _obj of [opts.params || opts.query]) {
    const obj = toValue(_obj);
    if (!obj) {
      continue;
    }
    const unwrapped = {};
    for (const [key, value] of Object.entries(obj)) {
      unwrapped[toValue(key)] = toValue(value);
    }
    segments.push(unwrapped);
  }
  return segments;
}
const _sfc_main$4 = {
  __name: "OneToOneColorMode",
  __ssrInlineRender: true,
  setup(__props) {
    const dark_mode = ref(false);
    const colorMode = useColorMode();
    watch(dark_mode, (new_dark_mode) => {
      colorMode.preference = new_dark_mode ? "dark" : "light";
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      _push(`<button${ssrRenderAttrs(mergeProps({ class: "border border-gray-600 h-full px-2 py-1 bg-gray-900 rounded font-bold text-white shadow-sm relative" }, _attrs))} data-v-f11b4b14><div class="w-full h-full flex m-auto text-center justify-center" style="${ssrRenderStyle({ "min-width": "22px", "max-width": "22px" })}" data-v-f11b4b14>`);
      if (unref(colorMode).preference === "dark") {
        _push(`<span class="absolute" data-v-f11b4b14>`);
        _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "moon"] }, null, _parent));
        _push(`</span>`);
      } else {
        _push(`<span class="absolute" data-v-f11b4b14>`);
        _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "sun"] }, null, _parent));
        _push(`</span>`);
      }
      _push(`</div></button>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/theme/OneToOneColorMode.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-f11b4b14"]]);
const _sfc_main$3 = {
  __name: "HeaderMenu",
  __ssrInlineRender: true,
  props: {
    expend_mobil_menu: Boolean,
    selected_tags: Array
  },
  emits: ["search_action"],
  setup(__props, { emit: __emit }) {
    const expend_search_bar = ref(false);
    const searchText = ref("");
    const emit = __emit;
    watch(searchText, (_) => {
      emit("search_action", _);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      const _component_ThemeOneToOneColorMode = __nuxt_component_0$1;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "fixed w-full top-0 z-10 bg-white dark:bg-gray-800" }, _attrs))}><nav class="flex py-2 sticky top-0"><article class="${ssrRenderClass(!unref(expend_search_bar) ? "w-full md:w-4/12 my-auto ms-2" : "hidden")}"><h1 class="text-gray-700 my-auto font-semibold">./blog @f4rukseker</h1></article><article class="${ssrRenderClass("flex mx-0 md:mx-2 " + (unref(expend_search_bar) ? "w-full ms-2" : "md:w-full min-w-max text-right float-end justify-end"))}"><div class="${ssrRenderClass(unref(expend_search_bar) ? "" : "hidden md:block w-full")}"><div class="w-full"><input type="text"${ssrRenderAttr("value", unref(searchText))} class="caret-orange-500 rounded-2xl border focus:ring-blue-500 focus:border-gray-600 outline-none bg-gray-100 dark:focus:border-0 dark:active:border-0 border-gray-300 text-orange-700 text-sm font-bold block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="&gt;_ search"></div></div><button class="rounded-full border ms-2 flex h-[42px] w-[42px] md:hidden"><span class="text-center justify-center m-auto">`);
      _push(ssrRenderComponent(_component_font_awesome_icon, {
        icon: unref(expend_search_bar) ? ["fas", "x"] : ["fas", "magnifying-glass"]
      }, null, _parent));
      _push(`</span></button></article><article class="${ssrRenderClass(!unref(expend_search_bar) ? "min-w-max md:w-4/12 m-auto flex text-center" : "hidden")}"><ul class="list-none justify-center m-auto flex"><li class="mx-2 hidden md:block"><button class="border border-gray-600 bg-gray-900 px-2 py-1 rounded font-bold text-white shadow-sm"><span class="hidden md:block font-[Ubuntu] font-normal">./SSH</span><span class="block md:hidden">`);
      _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "user"] }, null, _parent));
      _push(`</span></button></li><li class="mx-2 hidden md:block">`);
      _push(ssrRenderComponent(_component_ThemeOneToOneColorMode, null, null, _parent));
      _push(`</li><li class="mx-2 block md:hidden"><button class="border border-gray-600 bg-gray-900 px-2 py-1 rounded font-bold text-white shadow-sm"><span class="block md:hidden">`);
      _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "bars"] }, null, _parent));
      _push(`</span></button></li></ul></article></nav><article class="flex sticky top-0"><div class="w-full bg-gray-200 rounded-0 h-1.5 dark:bg-gray-700 my-auto"><div class="bg-orange-600 h-1.5 rounded-0" style="${ssrRenderStyle({ "width": "0%" })}"></div></div></article></header>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/menu/HeaderMenu.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$3;
const _sfc_main$2 = {
  __name: "BlogPreView",
  __ssrInlineRender: true,
  props: {
    blog: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "row-span-2 p-2" }, _attrs))} data-v-532e3c59><a class="rounded h-full shadow-lg"${ssrRenderAttr("href", `/${__props.blog.slug}`)} data-v-532e3c59><div class="h-[30vh] md:h-[20vh] rounded-t bg-slate-600 blog-thumbnail" style="${ssrRenderStyle("background: url(" + __props.blog.seo_image_url + ");")}" data-v-532e3c59></div><div class="h-[6vh] rounded-b bg-slate-100 flex" data-v-532e3c59><h2 class="w-full font-[Roboto] font-bold justify-center my-auto ms-2 text-orange-600 hover:text-orange-500" data-v-532e3c59>${ssrInterpolate(__props.blog.title)}</h2></div></a></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Card/BlogPreView.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-532e3c59"]]);
const _sfc_main$1 = {
  __name: "TagSelectMenu",
  __ssrInlineRender: true,
  props: {
    selected_tags: Array
  },
  emits: ["setSelectedTag"],
  async setup(__props, { emit: __emit }) {
    let __temp, __restore;
    const config = useRuntimeConfig();
    const tags = ref([]);
    [__temp, __restore] = withAsyncContext(() => useFetch(config.public.API_HOST + "content/type/blog", "$BCNyFMo8Wy").then((response) => {
      response.data.value.sub_tags.forEach((element) => {
        let tag_list = [];
        element.tags.forEach((tag) => {
          tag_list.push(tag);
        });
        tags.value = tag_list;
      });
    })), await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({
        class: "flex",
        name: "tag"
      }, _attrs))}><ul class="list-none flex w-full"><!--[-->`);
      ssrRenderList(unref(tags), (tag, index) => {
        _push(`<li class="${ssrRenderClass("w-full flex p-1 border mx-0.5  font-semibold cursor-pointer " + (__props.selected_tags.includes(tag.id) ? "bg-orange-600 text-white hover:bg-orange-400" : "hover:bg-gray-300"))}">${ssrInterpolate(tag.name)}</li>`);
      });
      _push(`<!--]--></ul></nav>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/menu/TagSelectMenu.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const TagSelectMenu = _sfc_main$1;
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const expend_mobil_menu = ref(false);
    const blogs = ref([]);
    const selected_tags = ref([]);
    function filter_tag(tag) {
      if (!selected_tags.value.includes(tag.id)) {
        selected_tags.value.push(tag.id);
      } else {
        const indexToRemove = selected_tags.value.indexOf(tag.id);
        if (indexToRemove !== -1) {
          selected_tags.value.splice(indexToRemove, 1);
        }
      }
    }
    function has_selected_tag() {
      blogs.value.forEach((blog) => {
        const blogTagIdList = blog.tags.map((tag) => tag.id);
        blog.show = false;
        if (selected_tags.value.length == 0) {
          blog.show = true;
        }
        selected_tags.value.forEach((_) => {
          if (blogTagIdList.includes(_)) {
            blog.show = true;
          }
        });
      });
    }
    function searchAction(text) {
      blogs.value.forEach((blog) => {
        blog.show = blog.title.toLowerCase().includes(text);
      });
    }
    watch(selected_tags, (_) => {
      has_selected_tag();
    }, { deep: true });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MenuHeaderMenu = __nuxt_component_0;
      const _component_CardBlogPreView = __nuxt_component_1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_MenuHeaderMenu, {
        expend_mobil_menu: expend_mobil_menu.value,
        selected_tags: selected_tags.value,
        onSearch_action: searchAction
      }, null, _parent));
      _push(`<section class="absolute w-full h-screen top-0 pt-16 overflow-y-scroll scrollbar-pars"><article>`);
      _push(ssrRenderComponent(TagSelectMenu, {
        onSetSelectedTag: filter_tag,
        selected_tags: selected_tags.value
      }, null, _parent));
      _push(`</article><article class="container m-auto"><ul class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4"><!--[-->`);
      ssrRenderList(blogs.value, (blog) => {
        _push(`<li>`);
        if (blog.show) {
          _push(ssrRenderComponent(_component_CardBlogPreView, { blog }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ul></article><footer><hr> cscs selected tags :${ssrInterpolate(selected_tags.value)} <br> searchText : </footer></section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-B__EyfH2.mjs.map
