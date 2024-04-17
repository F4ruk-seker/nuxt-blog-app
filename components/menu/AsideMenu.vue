<template>
<aside class="text-center">
<ul class="list-none text-start mx-2">
    <li class="text-right flex md:hidden mt-3">
        <h1 class="text-gray-700 my-auto font-semibold w-full text-left ">./blog @f4rukseker</h1>
        <button class="border border-gray-600 bg-gray-900 px-2 py-1 rounded font-bold text-white shadow-sm" @click="$emit('close_menu')">
            <font-awesome-icon :icon="['fas', 'x']" />
        </button>
    </li>
    <li class="my-2">
        <hr>
    </li>
    <li class="w-full flex mb-2">
        <!--has-[:checked]-->
        <label class="min-w-full p-1 rounded border border-orange-500 hover:border-orange-600 has-[:checked]:bg-orange-600 has-[:checked]:text-white shadow-lg">
            <input class="hidden" type="checkbox" name="todo"> 
            <strong class="">xd</strong>
        </label>
    </li>

    <li>
      
    </li>
    
</ul>
</aside>
</template>


<script setup>

const emit = defineEmits(['close_menu'])

</script>