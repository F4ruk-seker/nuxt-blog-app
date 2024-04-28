import { ref, withAsyncContext, unref, useSSRContext, watch, resolveComponent, mergeProps } from 'vue';
import { u as useAsyncData, a as useColorMode } from './composables-CoNnLgtX.mjs';
import { ssrRenderComponent, ssrRenderClass, ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import { d as useRoute, e as useSeoMeta, a as useRuntimeConfig } from './server.mjs';
import { marked } from 'marked';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
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

const _sfc_main$1 = {
  __name: "HeaderDetailMenu",
  __ssrInlineRender: true,
  props: {
    fontFamilyName: String,
    fontSize: String
    //fontWeight:String
  },
  emits: [
    "changeFont",
    "fontSize"
    //'fontWeight'
  ],
  setup(__props, { emit: __emit }) {
    const dark_mode = ref(false);
    const colorMode = useColorMode();
    watch(dark_mode, (new_dark_mode) => {
      colorMode.preference = new_dark_mode ? "dark" : "light";
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "fixed w-full top-0 z-10 bg-white dark:bg-gray-800 border-b border-orange-400 shadow" }, _attrs))}><nav class="flex py-2 sticky top-0"><article class="min-w-max md:w-full my-auto mx-4"><a href="/" class="">`);
      _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "blog"] }, null, _parent));
      _push(`</a></article><article class="w-min text-center flex justify-between"><button class="min-w-max me-1">`);
      _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "font"] }, null, _parent));
      _push(`<span class="font-bold">: ${ssrInterpolate(__props.fontFamilyName)}</span></button><button class="min-w-max ms-1">`);
      _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "t"] }, null, _parent));
      _push(`<span class="font-bold">: ${ssrInterpolate(__props.fontSize)}</span></button></article><article class="min-w-max md:w-full text-center mx-4 md:mx-0 font-bold">${ssrInterpolate(unref(colorMode).preference)}</article></nav></header>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeaderDetailMenu.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$1;
const _sfc_main = {
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const getHtmlFromMark = (mark) => {
      if (mark) {
        return marked.parse(mark);
      } else {
        return "";
      }
    };
    const config = useRuntimeConfig();
    const route = useRoute();
    const context = ref();
    const { data, pending, error, refresh } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "context",
      () => $fetch(`${config.public.API_HOST}content/${route.params.slug}/`)
    )), __temp = await __temp, __restore(), __temp);
    context.value = data.value;
    useSeoMeta({
      title: context.value.title + " - F4",
      ogTitle: context.value.title,
      description: context.value.seo_description,
      ogDescription: context.value.seo_description,
      ogImage: context.value.seo_image_url,
      twitterCard: "summary_large_image",
      author: "F4ruk-Seker"
    });
    const selectedFontIndex = ref(0);
    const fontList = ref([
      {
        name: "Nunito",
        font: "font-[Nunito]"
      },
      {
        name: "Roboto",
        font: "font-[Roboto]"
      },
      {
        name: "Ubuntu",
        font: "font-[Ubuntu]"
      }
    ]);
    function changeFont() {
      if (fontList.value.length - 1 === selectedFontIndex.value) {
        selectedFontIndex.value = 0;
      } else {
        selectedFontIndex.value++;
      }
    }
    const fontSize = ref(0);
    function getFontSize() {
      switch (fontSize.value) {
        case 0:
          return "text-lg";
        case 1:
          return "text-xl";
        case 2:
          return "text-2xl";
        case 3:
          return "text-3xl";
        case 4:
          return "text-4xl";
        default:
          fontSize.value = 0;
          getFontSize();
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_HeaderDetailMenu = __nuxt_component_0;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_HeaderDetailMenu, {
        fontFamilyName: unref(fontList)[unref(selectedFontIndex)].name,
        onChangeFont: changeFont,
        fontSize: getFontSize(),
        onFontSize: ($event) => fontSize.value++
      }, null, _parent));
      _push(`<section class="absolute w-full h-screen top-0 pt-16 overflow-y-scroll overflow-x-hidden scrollbar-pars"><article class="${ssrRenderClass(`container m-auto px-2  ${unref(fontList)[unref(selectedFontIndex)].font} ${getFontSize()}`)}">${getHtmlFromMark((_a = unref(context)) == null ? void 0 : _a.text)}</article><hr><footer> Footer </footer></section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-B54iZWWb.mjs.map
