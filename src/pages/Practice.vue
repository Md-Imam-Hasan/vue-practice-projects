<template>
  <div class="m-auto">
    <div v-for="todo in events" :key="todo.id" class="p-3 m-3 border rounded">
      <h1 class="text-3xl">
        {{ todo.title }}
      </h1>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      incrementValue: null,
    };
  },
  computed: {
    ...mapState(["user", "events"]),
  },
  methods: {},
  created() {
    this.$store.dispatch("loadEvent");
  },
};
</script>

<style>
</style>