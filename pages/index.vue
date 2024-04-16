<template>

<section class="fixed w-full top-0 z-10">
    <header class="flex py-2 sticky top-0">
    <article class="w-4/12 my-auto ms-2"><h1 class="text-gray-700 my-auto">./blog @f4rukseker</h1></article>
    <article class="w-full"><SearchBar /></article>
    <article class="w-4/12 text-center my-auto"><button class="border border-gray-600 bg-gray-900 px-2 py-1 rounded font-bold text-white shadow-sm">./SSH</button></article>
</header>
<article class="flex sticky top-0">
    <div class="w-full bg-gray-200 rounded-0 h-1.5 dark:bg-gray-700 my-auto">
        <div class="bg-orange-600 h-1.5 rounded-0" style="width: 45%"></div>
    </div>
</article>
</section>
<section class="flex absolute w-full h-screen top-0 ">
    <article class="mt-16 overflow-y-scroll max-h-screen w-full scrollbar-pars">
        <article class="w-4/12 h-full fixed ">heade</article>
        <article class="w-full border " ><div style="height: 220vh;"></div></article>
    </article>
    </section>
</template>

<script setup>
import ColorMode from '@/components/theme/ColorMode.vue';

const modal_menu = ref(true)

// + (modal_menu ? 'show':'hidden')"
</script>