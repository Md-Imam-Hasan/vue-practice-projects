<template>
  <div class="m-auto">
    <h1 class="text-3xl text-center my-4">DC Heros {{ heroLength }}</h1>
    <ul class="border rounded p-2">
      <li
        class="flex justify-between p-1"
        v-for="(hero, index) in heros"
        :key="hero.name"
      >
        <div>
          {{ hero.name }}
        </div>
        <button @click="removeHeros(index)">x</button>
      </li>
    </ul>
    <form class="mt-10" @submit.prevent="addHero">
      <input
        class="border rounded px-2"
        type="text"
        v-model="newHero"
        placeholder="Type Hero Name"
        ref="newHeroInput"
      />
      <button
        class="
          border
          rounded
          bg-gradient-to-r
          from-red-700
          to-pink-500
          text-white
          ml-2
          px-2
        "
        type="submit"
      >
        Add Hero
      </button>
    </form>
  </div>
</template>

<script>
import { computed, onMounted, ref } from "vue";
export default {
  setup() {
    return uses();
  },
};
function uses() {
  const newHeroInput = ref("");
  const newHero = ref("");
  const heros = ref([
    { name: "SuperGirl" },
    { name: "Flash" },
    { name: "Batman" },
    { name: "Arrow" },
    { name: "SuperMan" },
  ]);

  onMounted(() => {
    newHeroInput.value.focus();
  });

  function addHero() {
    if (newHero.value !== "") {
      heros.value.push({ name: newHero.value });
      newHero.value = "";
    }
  }

  function removeHeros(index) {
    heros.value = heros.value.filter((herp, i) => i !== index);
  }

  const heroLength = computed({
    get: () => heros.value.length,
  });

  return { newHero, heros, removeHeros, addHero, heroLength, newHeroInput };
}
</script>

<style></style>