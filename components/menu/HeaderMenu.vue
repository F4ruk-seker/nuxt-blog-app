<template>

<header class="fixed w-full top-0 z-10 bg-white dark:bg-gray-800">
    <nav class="flex py-2 sticky top-0">
        <article :class="!expend_search_bar ? 'w-full md:w-4/12 my-auto ms-2':'hidden'">
            <h1 class="text-gray-700 my-auto font-semibold">./blog @f4rukseker</h1>
        </article>
        <article :class="'flex mx-0 md:mx-2 ' + (expend_search_bar ? 'w-full ms-2':'md:w-full min-w-max text-right float-end justify-end')">
    
            <div :class="expend_search_bar ? '': 'hidden md:block w-full'">
                <div class="w-full">
                    <input type="text" 
                    v-model="searchText"
                    class="caret-orange-500 rounded-2xl border focus:ring-blue-500 focus:border-gray-600  outline-none bg-gray-100 dark:focus:border-0 dark:active:border-0 border-gray-300 text-orange-700 text-sm font-bold block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder=">_ search" />
                </div>
            </div>
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
</template>

<script setup>
const expend_search_bar = ref(false)
const searchText = ref('')

const emit = defineEmits(['search_action'])

const props = defineProps({
    expend_mobil_menu:Boolean,
    selected_tags:Array
})

watch(searchText, (_)=>{
    emit('search_action', _)
})

</script>