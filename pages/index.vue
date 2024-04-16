<template>

<section class="fixed w-full top-0 z-10">
    <header class="flex py-2 sticky top-0">
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
        <ul class="list-none justify-center m-auto">
            <li class="mx-2">
                <button class="border border-gray-600 bg-gray-900 px-2 py-1 rounded font-bold text-white shadow-sm">
                    <span class="hidden md:block">./SSH</span>
                    <span class="block md:hidden">
                        <font-awesome-icon :icon="['fas', 'user']" /> 
                    </span>
                </button>
            </li>
        </ul>
    </article>
</header>
<article class="flex sticky top-0">
    <div class="w-full bg-gray-200 rounded-0 h-1.5 dark:bg-gray-700 my-auto">
        <div class="bg-orange-600 h-1.5 rounded-0" style="width: 45%"></div>
    </div>
</article>
</section>
<section class="flex absolute w-full h-screen top-0 ">
    <article class="mt-16 overflow-y-scroll max-h-screen w-full scrollbar-pars">
        <article class="w-2/12 h-full fixed">
            <MenuAsideMenu  />
        </article>
        <article class="w-full border " ><div style="height: 220vh;"></div></article>
    </article>
    </section>
</template>

<script setup>
import ColorMode from '@/components/theme/ColorMode.vue';

const expend_search_bar = ref(true)
// + (modal_menu ? 'show':'hidden')"
</script>