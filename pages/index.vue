<template>

<header class="fixed w-full top-0 z-10 bg-white dark:bg-gray-900">
    <nav class="flex py-2 sticky top-0">
        <article :class="!expend_search_bar ? 'w-full md:w-4/12 my-auto ms-2':'hidden'">
            <h1 class="text-gray-700 my-auto font-semibold">./blog @f4rukseker</h1>
        </article>
        <article :class="'flex mx-0 md:mx-2 ' + (expend_search_bar ? 'w-full ms-2':'md:w-full min-w-max text-right float-end justify-end')">
            <SearchBar :class="expend_search_bar ? '': 'hidden md:block'" :expend="expend_search_bar" />
            <button class="rounded-full border ms-2 flex h-[42px] w-[42px] md:hidden" @click="expend_search_bar=!expend_search_bar ">
                <span class="text-center justify-center m-auto">
                    <font-awesome-icon :icon="expend_search_bar ? ['fas', 'x']:['fas', 'magnifying-glass']"/>
                </span>
            </button>
        </article>
        <article :class="!expend_search_bar ? 'min-w-max md:w-4/12 m-auto flex text-center':'hidden'">
            <ul class="list-none justify-center m-auto flex">
                <li class="mx-2 hidden md:block">
                    <button class="border border-gray-600 bg-gray-900 px-2 py-1 rounded font-bold text-white shadow-sm">
                        <span class="hidden md:block font-[Ubuntu] font-normal">./SSH</span>
                        <span class="block md:hidden">
                            <font-awesome-icon :icon="['fas', 'user']" /> 
                        </span>
                    </button>
                </li>
                <li class="mx-2 hidden md:block">
                    <ThemeOneToOneColorMode />
                </li>
                <li class="mx-2 block md:hidden">
                    <button class="border border-gray-600 bg-gray-900 px-2 py-1 rounded font-bold text-white shadow-sm" @click="expend_mobil_menu=true">
                        <span class="block md:hidden">
                            <font-awesome-icon :icon="['fas', 'bars']" /> 
                        </span>
                    </button>
                </li>
            </ul>
        </article>
    </nav>
<article class="flex sticky top-0">
    <div class="w-full bg-gray-200 rounded-0 h-1.5 dark:bg-gray-700 my-auto">
        <div class="bg-orange-600 h-1.5 rounded-0" style="width: 0%"></div>
    </div>
</article>
</header>
<section class="absolute w-full h-screen top-0 pt-16 flex overflow-y-scroll scrollbar-pars ">
    <article :class="'w-full md:w-3/12 h-full top-0 z-20 bg-white dark:bg-gray-900 fixed md:sticky ' + (expend_mobil_menu ? '': 'hidden md:block')">
        <MenuAsideMenu  @close_menu="expend_mobil_menu=!expend_mobil_menu"/>
    </article>
    <article class="w-full mx-0 md:mx-2" >
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
            <CardBlogPreView />
            <CardBlogPreView />
            <CardBlogPreView />
            <CardBlogPreView />
            <CardBlogPreView />
            <CardBlogPreView />
            <CardBlogPreView />
            <CardBlogPreView />
            <CardBlogPreView />
            <CardBlogPreView />
            <CardBlogPreView />
            <CardBlogPreView />
            <CardBlogPreView />
            <CardBlogPreView />
            <CardBlogPreView />
            <CardBlogPreView />
            <CardBlogPreView />
            <CardBlogPreView />
            <CardBlogPreView />
            <CardBlogPreView />
            <CardBlogPreView />
            <CardBlogPreView />
            <CardBlogPreView />
        </div>
    <footer>
        <hr>
        cscs
    </footer>
    </article>
    </section>
</template>

<script setup>
import ColorMode from '@/components/theme/ColorMode.vue';

const expend_search_bar = ref(false)
const expend_mobil_menu = ref(false)
// + (modal_menu ? 'show':'hidden')"
</script>