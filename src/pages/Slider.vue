<template>
  <div class="flex flex-wrap w-full relative">
    <div v-for="(color, index) in slider" :key="color" class="absolute w-full">
      <transition name="fade">
        <div
          v-if="currentSlide === index"
          :class="color"
          style="height: 350px"
        ></div>
      </transition>
    </div>
    <div class="w-full" style="height: 340px">
      <div class="absolute bottom-0 w-full flex justify-center">
        <div
          v-for="(item, index) in slider"
          :key="item"
          @click="makeActive(index)"
          class="w-4 h-4 mx-2 rounded-full cursor-pointer shadow-md"
          :class="currentSlide === index ? 'bg-gray-700' : 'bg-gray-300'"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSlide: 0,
      slider: ["bg-blue-600", "bg-yellow-600", "bg-red-800"],
      interval: "",
      isShowingText: true,
    };
  },
  methods: {
    makeActive(index) {
      this.currentSlide = index;
    },
  },
  mounted() {
    this.interval = setInterval(() => {
      this.currentSlide = this.currentSlide === 2 ? 0 : this.currentSlide + 1;
    }, 2000);
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}
.fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(100%);
}
</style>