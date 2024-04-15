<template>
    <section class=" h-screen">
        <section class="w-full m-auto flex h-screen bg-blend-lighten hover:bg-blend-darken static">
            <article class="w-full md:w-3/12 absolute md:static border-0 border-e border-gray-100">
                <ul class="list-none">
                    <li class="flex w-full h-full relative">
                        <h1 class="bg-white md:bg-orange-600 text-orange-600 md:text-white  font-bold text-center py-2 w-f w-full">BLOG</h1>
                        <button class="bg-white hover:bg-gray-100 text-gray-800 hover:text-orange-500 h-full font-bold border-2 px-2 z-10 border-white rounded-0 absolute right-0 md:hidden" @click="modal_menu=!modal_menu">
                            <font-awesome-icon :icon="modal_menu ?  ['fas', 'bars']:['fas', 'x']" />
                        </button>
                    </li>
                    <li class="mt-auto">
                        <ul :class=" (modal_menu ? 'hidden':'') + ' md:block ' ">
                            <li>
                                <button class="dark:bg-transparent dark:border-0 dark:hover:bg-gray-900 dark:text-orange-500 bg-white hover:bg-gray-100 text-gray-800 hover:text-orange-500 font-bold py-2 px-4 border-2 border-white rounded-0 w-full">
                                    Tag 22
                                </button>
                            </li>
                            <li>
                                <button class="dark:bg-transparent dark:border-0 dark:hover:bg-gray-900 dark:text-orange-500 bg-white hover:bg-gray-100 text-gray-800 hover:text-orange-500 font-bold py-2 px-4 border-2 border-white rounded-0 w-full">
                                    Tag 22
                                </button>
                            </li>
                            <li>
                                <button class="dark:bg-transparent dark:border-0 dark:hover:bg-gray-900 dark:text-orange-500 bg-white hover:bg-gray-100 text-gray-800 hover:text-orange-500 font-bold py-2 px-4 border-2 border-white rounded-0 w-full">
                                    Tag 22
                                </button>
                            </li>
                            <li><hr></li>
                            <li class="mt-4">
                                <ColorMode />
                            </li>
                        </ul>
                    </li>
                    
                </ul>
            </article>
            <article class="w-full mt-10 md:mt-0">
                <SearchBar />
                <hr>                
            </article>
            <article class="w-full md:w-3/12 absolute md:static border-0 border-e border-gray-100">
            barx
            </article>
        </section>
    </section>
    
</template>

<script setup>
import ColorMode from '@/components/theme/ColorMode.vue';

const modal_menu = ref(true)

// + (modal_menu ? 'show':'hidden')"
</script>