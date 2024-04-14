<template>
    <div class="flex items-center justify-center">
    <select v-model="$colorMode.preference" class="select-color-mode w-full appearance-none border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="sepia">Sepia</option>
    </select>
  </div>
  </template>
  
  <script setup>
  const colorMode = useColorMode()
  // {{ $colorMode.value }}
  console.log(colorMode.preference)
  </script>
  
  <style>

  .select-color-mode{
    @apply text-orange-400
  }

  body {
    background-color: #fff;
    color: rgba(0,0,0,0.8);
  }
  .dark-mode body {
    background-color: #091a28;
    color: #ebf4f1;

    .select-color-mode{
      @apply text-teal-600
    }

  }
  .sepia-mode body {
    background-color: #f1e7d0;
    color: #433422;
  }

</style>
  