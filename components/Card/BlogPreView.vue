<template>
<div class="row-span-2 p-2">
    <div class="rounded h-full shadow-lg">
        <div class="h-[30vh] md:h-[20vh] rounded-t bg-slate-600 blog-thumbnail" :style="'background: url(' + blog.seo_image_url + ');'"></div>
        <div class="h-[5vh] rounded-b bg-slate-100 flex">
            <h2 class="w-full font-[Roboto] font-bold justify-center my-auto ms-2 text-orange-600 hover:text-orange-500">{{blog.title}}</h2>
        </div>
    </div>
</div>
</template>

<script setup>
const props = defineProps({
    blog:Object
})
</script>

<style scoped>
.blog-thumbnail{
    object-fit: cover!important;
    background-position: center!important;
    background-size: cover!important;
    background-repeat: no-repeat!important;
}
</style>