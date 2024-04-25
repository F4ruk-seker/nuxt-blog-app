import { defineStore } from 'pinia'

export const useBlogStore = defineStore('blogStore', {
    state: () => ({
        blog_contents: [],
        blog_tags:[],
        loading: false
      }),
      getters: {
      },
      actions: {
        async fetch_blog_tags() {
            let tag_list = []
            await $fetch('http://127.0.0.1:8000/api/' + 'content/type/blog').then((response) => {  
                response.data.sub_tags.forEach(element => {
                    element.tags.forEach(tag=>{tag.selected = false;tag_list.push(tag)})
                });
                this.tag_list = tag_list
            })
        }
      }
})


/*
async function fetch_blog_tags() {
    let tag_list = []
    await axios.get('content/type/blog').then((response) => {  
        response.data.sub_tags.forEach(element => {
            element.tags.forEach(tag=>{tag.selected = false;tag_list.push(tag)})
        });
        tags.value = tag_list
    })
}
*/