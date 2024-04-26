<template>
<nav class="flex" name="tag">
<ul class="list-none flex w-full">
    <li 
        v-for="tag, index in tags"
        v-bind:key="index"
        @click="setSelect(tag)"
        :class="'w-full flex p-1 border mx-0.5  font-semibold cursor-pointer ' + (selected_tags.includes(tag.id) ? 'bg-orange-600 text-white hover:bg-orange-400':'hover:bg-gray-300')"
    >
        {{ tag.name }}
    </li>
</ul>
</nav>
</template>

<script setup>
import { defineEmits } from 'vue'

const config = useRuntimeConfig()
const tags = ref([])
await useFetch(config.public.API_HOST + 'content/type/blog').then(response => {
    response.data.value.sub_tags.forEach(element => {
        let tag_list = []
        const tym = element.tags.forEach(tag=>{tag_list.push(tag)})
        tags.value = tag_list
    });
})

const emit = defineEmits(['setSelectedTag'])
const props = defineProps({
    selected_tags:Array
})

function setSelect(tag) {
    emit('setSelectedTag', tag)
}

</script>