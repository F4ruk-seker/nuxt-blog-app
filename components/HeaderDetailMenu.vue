<template>
<header class="fixed w-full top-0 z-10 bg-white dark:bg-gray-900 border-b border-orange-400 ">
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
            <!--button class="min-w-max" @click="$emit('fontWeight')">
                <font-awesome-icon :icon="['fas', 'bold']" />
                <span class="font-bold">: {{ fontWeight }}</span>x
            </button-->
        </article>
        <article class="min-w-max md:w-full text-center mx-4 md:mx-0 font-bold">Dark</article>
    </nav>
</header>
</template>

<script setup>

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