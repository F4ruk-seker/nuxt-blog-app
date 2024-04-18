<template>
<button class="border border-gray-600 h-full px-2 py-1  bg-gray-900 rounded font-bold text-white shadow-sm relative" @click="dark_mode=!dark_mode">
    <div class="w-full h-full flex m-auto text-center justify-center" style="min-width: 22px; max-width: 22px;" >
        <Transition name="slide-fade">
            <span class="absolute" v-if="colorMode.preference === 'dark'" >
              <font-awesome-icon :icon="['fas', 'moon']" />
            </span>
            <span class="absolute" v-else>
              <font-awesome-icon :icon="['fas', 'sun']" />
            </span>
        </Transition>
    </div>
</button>
</template>

<script setup>
const dark_mode = ref(false)

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


function walk(){
    if (index.value++ == options.value.length){
        index.value = 0
    } else {
        index.value++
    }
    set_icon()
}

function set_icon() {
  colorMode.preference = options.value[index.value].value
}

const colorMode = useColorMode()

watch(dark_mode, new_dark_mode => {
  colorMode.preference = new_dark_mode ? 'dark':'light'
})

</script>


<style scoped>
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
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
