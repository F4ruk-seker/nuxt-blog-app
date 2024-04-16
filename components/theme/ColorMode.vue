<template>
  <div class="relative">
    <div class="flex justify-between m-2 md:w-1/2 md:rounded-full border-2 border-y-0 m-auto py-5">
      <button class="border-0 p-3 hover:text-orange-400" @click="decrease">
        <font-awesome-icon :icon="['fas', 'arrow-left']" />
      </button>
      <div class="m-3 shadow-lg">
        <Transition name="slide-fade">
          <span v-if="colorMode.preference === 'system'"><font-awesome-icon  :icon="['fas', 'wand-sparkles']" /></span>
        </Transition>
        <Transition name="slide-fade">
          <span v-if="colorMode.preference === 'light'" ><font-awesome-icon :icon="['fas', 'sun']" /></span>
        </Transition>
        <Transition name="slide-fade">
          <span v-if="colorMode.preference === 'dark'"  ><font-awesome-icon :icon="['fas', 'moon']" /></span>
        </Transition>
        <Transition name="slide-fade">
          <span v-if="colorMode.preference === 'sepia'" ><font-awesome-icon :icon="['fas', 'mug-hot']" /></span>
        </Transition>
      </div>
      <button class="border-0 p-3 hover:text-orange-400" @click="increase">
        <font-awesome-icon :icon="['fas', 'arrow-right'] " />
      </button>
    </div>
    <span class="absolute mx-auto text-center w-full bottom-0 mb-2"> {{ colorMode.preference }} </span>

  </div>
</template>
  
<script setup>
const index = ref(0)
const options = ref([
  {
    value: 'system',
    icon: 'wand-sparkles'
  },
  {
    value: 'light',
    icon: 'sun'
  },
  {
    value: 'dark',
    icon: 'moon'
  },
  {
    value: 'sepia',
    icon: 'mug-hot'
  }
])

function increase() {
  if (options.value.length - 1 > index.value) {
    index.value++;
  } else {
    index.value = 0
  }
  set_icon()
}

function decrease() {
  if (index.value - 1 >= 0) {
    index.value--;
  } else {
    index.value = options.value.length - 1
  }
  set_icon()

}

function set_icon() {
  colorMode.preference = options.value[index.value].value
}

const colorMode = useColorMode()



onBeforeUpdate(()=>{
  for (let _ = 0; _ < options.value.length; _++) {
    if (options.value[_].value === colorMode.preference){
      index.value = _
    }
  }
})

</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>

<style>

.select-color-mode{
  @apply text-orange-400
}

body {
  background-color: #fff;
  color: rgba(0,0,0,0.8);
}

/* .dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;

  .select-color-mode{
    @apply text-teal-600
  }
} */
.dark body {
  background-color: #091a28;
  color: #ebf4f1;

  .select-color-mode{
    @apply text-teal-600
  }
}

.sepia body {
  background-color: #f1e7d0;
  color: #433422;
}

</style>
