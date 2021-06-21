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
        ref="newHero"
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
export default {
  data() {
    return {
      newHero: "",
      heros: [
        { name: "SuperGirl" },
        { name: "Flash" },
        { name: "Batman" },
        { name: "Arrow" },
        { name: "SuperMan" },
      ],
    };
  },
  mounted() {
    this.$refs.newHero.focus();
  },
  methods: {
    addHero() {
      if (this.newHero !== "") {
        this.heros.push({ name: this.newHero });
        this.newHero = "";
      }
    },
    removeHeros(index) {
      this.heros = this.heros.filter((herp, i) => i !== index);
    },
  },
  computed: {
    heroLength() {
      return this.heros.length;
    },
  },
};
</script>

<style></style>