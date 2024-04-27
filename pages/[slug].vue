<template>
<HeaderDetailMenu 
    :fontFamilyName="fontList[selectedFontIndex].name"
    @changeFont="changeFont"
    :fontSize="getFontSize()"
    @fontSize="fontSize++"
    />

<section class="absolute w-full h-screen top-0 pt-16 overflow-y-scroll overflow-x-hidden scrollbar-pars ">
    <article 
        :class="`container m-auto px-2  ${fontList[selectedFontIndex].font} ${getFontSize()}`"
        v-html="getHtmlFromMark(context?.text)"
    ></article>
    <hr>
    <footer>
        Footer
    </footer>
</section>
</template>

<script setup>
import { marked } from 'marked'

const getHtmlFromMark = (mark) => {
    if (mark){
        return marked.parse(mark);
    } else {
        return ''
    }
}

const config = useRuntimeConfig()
const route = useRoute()
const context = ref()

async function getContext() {
    await useFetch(`${config.public.API_HOST}content/${route.params.slug}/`).then(response =>{
        context.value = response.data.value
    })
}

await getContext()

useSeoMeta({
  title: context.value.title,
  ogTitle: context.value.title,
  description: context.value.seo_description,
  ogDescription: context.value.seo_description,
  ogImage: context.value.seo_image_url,
  twitterCard: 'summary_large_image',
})

const selectedFontIndex = ref(0)
const fontList = ref([
    {
        name: 'Nunito',
        font: 'font-[Nunito]'
    },
    {
        name: 'Roboto',
        font: 'font-[Roboto]'
    },
    {
        name: 'Ubuntu',
        font: 'font-[Ubuntu]'
    },
])

function changeFont() {
    if (fontList.value.length-1 === selectedFontIndex.value){
        selectedFontIndex.value = 0
    } else {
        selectedFontIndex.value++
    }
}

const fontSize = ref(0)
function getFontSize() {
    switch(fontSize.value) {
        case 0:
            return 'text-lg'
        case 1:
            return 'text-xl'
        case 2:
            return 'text-2xl'
        case 3:
            return 'text-3xl'
        case 4:
            return 'text-4xl'
        default:
            fontSize.value = 0        
            getFontSize()
    }
}
/*
:fontWeight="getFontWeight()"
@fontWeight="fontWeight++"
    

const fontWeight = ref(1)
function getFontWeight() {
    switch(fontWeight.value) {
        case 0:
            return 'normal'
        case 1:
            return 'bold'
        case 2:
            return 'extrabold'
        default:
            fontWeight.value = 0        
            getFontWeight()
    }
}

*/
</script>
