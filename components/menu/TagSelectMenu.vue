<template>
<nav class="flex" name="tag">
<ul class="list-none flex w-full">
    <li 
        v-for="tag, index in tags"
        v-bind:key="index"
        @click="tag.selected=!tag.selected"
        :class="'w-full flex p-1 border mx-0.5 hover:bg-gray-300 font-semibold cursor-pointer ' + (tag.selected ? 'bg-orange-400 text-white':'')"
    >
        {{ tag.name }}
    </li>
</ul>
</nav>
</template>

<script setup>
const config = useRuntimeConfig()
const tags = ref([])
const blogs = ref([])
await useFetch(config.public.API_HOST + 'content/type/blog').then(response => {
    response.data.value.sub_tags.forEach(element => {
    let tag_list = []
    element.tags.forEach(tag=>{tag.selected = false;tag_list.push(tag)})
    tags.value = tag_list
});
})
await useFetch(config.public.API_HOST + 'content/all/?type=blog').then(response => {
    blogs.value = response.data.value;
})

</script>