<template>
<aside class="text-center">
<ul class="list-none">
    <li class="text-right mx-2 flex md:hidden mt-3">
        <h1 class="text-gray-700 my-auto font-semibold w-full text-left ">./blog @f4rukseker</h1>
        <button class="border border-gray-600 bg-gray-900 px-2 py-1 rounded font-bold text-white shadow-sm" @click="$emit('close_menu')">
            <font-awesome-icon :icon="['fas', 'x']" />
        </button>
    </li>
</ul>
</aside>
</template>


<script setup>

const emit = defineEmits(['close_menu'])

</script>