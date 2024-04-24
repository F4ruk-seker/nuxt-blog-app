<template>
<nav class="flex" name="tag">
    <div class="w-full p-2 border border-gray-300 hover:border-gray-400">x</div>
</nav>
</template>

<script setup>
import { useBlogStore } from '~/store/BlogStore';
const store = useBlogStore()
console.log(store)
</script>