<template>
<header class="fixed w-full top-0 z-10 bg-white dark:bg-gray-900 border-b border-orange-400 shadow">
    <nav class="flex py-2 sticky top-0">
        <article class="min-w-max md:w-full my-auto mx-4">
            <a href="/" class="">
                <font-awesome-icon :icon="['fas', 'blog']" />
            </a>
        </article>
        <article class="w-min text-center flex justify-between">
            <button class="min-w-max me-1" @click="$emit('changeFont')">
                <font-awesome-icon :icon="['fas', 'font']" />
                <span class="font-bold">: {{ fontFamilyName }}</span>
            </button>
            <button class="min-w-max ms-1" @click="$emit('fontSize')">
                <font-awesome-icon :icon="['fas', 't']" />
                <span class="font-bold">: {{ fontSize }}</span>
            </button>
        </article>
        <article class="min-w-max md:w-full text-center mx-4 md:mx-0 font-bold" @click="dark_mode=!dark_mode">
            {{ colorMode.preference }}
        </article>
    </nav>
</header>
</template>

<script setup>
const dark_mode = ref(false)
const colorMode = useColorMode()

watch(dark_mode, new_dark_mode => {
  colorMode.preference = new_dark_mode ? 'dark':'light'
})

onBeforeUpdate(()=>{
  dark_mode.value = colorMode.preference ==='dark'
})

const props = defineProps({
    fontFamilyName:String,
    fontSize:String,
    //fontWeight:String
})

const emit = defineEmits([
    'changeFont',
    'fontSize',
    //'fontWeight'
])


</script>