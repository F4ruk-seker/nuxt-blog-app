<template>

<MenuHeaderMenu :expend_mobil_menu="expend_mobil_menu" :selected_tags="selected_tags" @search_action="searchAction" />

<section class="absolute w-full h-screen top-0 pt-16 overflow-y-scroll scrollbar-pars ">
<article>
    <TagSelectMenu @setSelectedTag="filter_tag" :selected_tags="selected_tags"/>
</article>
    <article class="container m-auto" >
        <ul class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
            <li v-for="blog in blogs"><CardBlogPreView :blog="blog" v-if="blog.show" /></li>
        </ul>
    </article>
    <footer>
        <hr>
        cscs
        selected tags :{{ selected_tags }}
        <br>
        searchText : 
    </footer>
</section>
</template>

<script setup>
import { watch, ref } from 'vue'
import TagSelectMenu from '~/components/menu/TagSelectMenu.vue';

const expend_mobil_menu = ref(false)
const config = useRuntimeConfig()

const blogs = ref([])
const selected_tags = ref([])

function load_blogs() {
    $fetch(config.public.API_HOST + 'content/all/?type=blog').then(response => {
        response.forEach(blog => {blog.show = true})
        blogs.value = response;
    })
}

onMounted(load_blogs)

function filter_tag(tag) {
    if (!selected_tags.value.includes(tag.id)){
        selected_tags.value.push(tag.id)
    } else {
        const indexToRemove = selected_tags.value.indexOf(tag.id);
        if (indexToRemove !== -1) {
            selected_tags.value.splice(indexToRemove, 1);
        }
    }
}

function has_selected_tag(){
    // this blog content is have slected tag's
    blogs.value.forEach(blog => {
        const blogTagIdList = blog.tags.map(tag => tag.id)
        blog.show = false
        if (selected_tags.value.length == 0){
            blog.show = true
        }
        selected_tags.value.forEach(_ => {
            if (blogTagIdList.includes(_)){
                blog.show = true
            }
        });
    });
}

function searchAction(text){
    // selected_tags.value.pop()
    blogs.value.forEach(blog => {
        blog.show = blog.title.toLowerCase().includes(text)
    })
}

watch(selected_tags, (_)=>{
    has_selected_tag()
}, { deep: true })

</script>

