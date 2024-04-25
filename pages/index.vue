<template>

<MenuHeaderMenu :expend_mobil_menu="expend_mobil_menu" />

<section class="absolute w-full h-screen top-0 pt-16 overflow-y-scroll scrollbar-pars ">
<article>
    <TagSelectMenu />
</article>
    <article class="container m-auto" >
        <ul class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
            <li v-for="blog in blogs"><CardBlogPreView :blog="blog" /></li>
        </ul>
    </article>
    <footer>
        <hr>
        cscs
    </footer>
</section>
</template>

<script setup>
import TagSelectMenu from '~/components/menu/TagSelectMenu.vue';
const expend_mobil_menu = ref(false)
const config = useRuntimeConfig()

const blogs = ref([])
await useFetch(config.public.API_HOST + 'content/all/?type=blog').then(response => {
    blogs.value = response.data.value;
})

</script>

