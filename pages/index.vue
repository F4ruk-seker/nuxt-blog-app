<template>
    <section class="max-h-screen">
        <section class="w-full m-auto flex h-screen bg-blend-lighten hover:bg-blend-darken static ">
            <article class="w-full md:w-4/12 absolute md:static border-0 border-e border-gray-100 z-10">
                <ul class="list-none">
                    <li class="flex w-full h-full relative">
                        <h1 class="bg-white md:bg-orange-600 text-orange-600 md:text-white  font-bold text-center py-2 w-f w-full">BLOG</h1>
                        <button class="bg-white hover:bg-gray-100 text-gray-800 hover:text-orange-500 h-full font-bold border-2 px-2 z-10 border-white rounded-0 absolute right-0 md:hidden" @click="modal_menu=!modal_menu">
                            <font-awesome-icon :icon="modal_menu ?  ['fas', 'bars']:['fas', 'x']" />
                        </button>
                    </li>
                    <li class="mt-auto bg-white dark:bg-[#091a28]">
                        <ul :class=" (modal_menu ? 'hidden':'') + ' md:block ' ">
                            <li>
                                <button class="dark:bg-transparent dark:border-0 dark:hover:bg-gray-900 dark:text-orange-500 bg-white dark:bg-gray-200  hover:bg-gray-100 text-gray-800 hover:text-orange-500 font-bold py-2 px-4 border-2 border-white rounded-0 w-full">
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
            <article class="w-full mt-10 md:mt-0 relative">
                <div class=" top-0 z-10">
                    <SearchBar />
                </div>
                <hr>        
                <div class="my-5 grid grid-cols-3 gap-4" style="min-height: 30%;" >
                    <div class="p-2 row-span-4 border border-red-300 bg-cover bg-center bg-no-repeat dark:grayscale" style="background-image: url(_nuxt/assets/img/solider.jpg);"></div>
                    <div class="p-2 row-span-2 border border-red-300 bg-cover bg-center bg-no-repeat" style="background-image: url(_nuxt/assets/img/view.jpg);"></div>
                    <div class="p-2 border border-red-300">
                        <h2>4. title</h2>
                    </div>
                    <div class="p-2 border border-red-300">
                        <h2>5. title</h2>
                    </div>
                    <div class="p-2 row-span-2 border border-red-300 bg-cover bg-center bg-no-repeat" style="background-image: url(_nuxt/assets/img/pc.jpg);"></div>
                    <div class="p-2 border border-red-300">5.title</div>
                    <div class="p-2 border border-red-300">6.title</div>
                </div>      
                <div class="my-5 bg-cover bg-bottom bg-no-repeat min-h-[40%] relative" style="background-image: url(_nuxt/assets/anim/jp.gif);">
                    <div class="absolute flex m-auto h-full w-full">
                        <div class="m-auto justify-center text-center">
                            <h1 class="text-orange-600 font-bold text-8xl">Start Reading</h1>
                            <button class="text-gray-400 hover:text-gray-500 text-6xl mt-2 hover:pt-3 ">
                                <font-awesome-icon :icon="['fas', 'circle-down']"/>
                            </button>
                        </div>
                    </div>
                </div>  
            </article>
            <article class="w-full hidden md:block md:w-4/12 absolute md:static border-0 border-e border-gray-100">
                <h1 class="bg-white md:bg-orange-600 text-orange-600 md:text-white  font-bold text-center py-2 w-f w-full">Trends</h1>
            </article>
        </section>
    </section>
    
</template>

<script setup>
import ColorMode from '@/components/theme/ColorMode.vue';

const modal_menu = ref(true)

// + (modal_menu ? 'show':'hidden')"
</script>