<template>
  <div class="flex flex-wrap w-full">
    <h1 class="w-full text-3xl text-center my-4">Markdown App</h1>
    <section class="flex m-auto w-10/12 h-screen">
      <article class="w-1/2 border">
        <textarea
          class="w-full h-full"
          :value="text"
          @input="update"
          ref="textArea"
        ></textarea>
      </article>
      <article class="w-1/2 border bg-gray-200" v-html="markedText"></article>
    </section>
  </div>
</template>

<script>
import marked from "marked";
import debounce from "../utilities/mixins/debounce";
export default {
  mixins: [debounce],
  data() {
    return {
      text: "",
    };
  },
  computed: {
    markedText() {
      return marked(this.text);
    },
  },
  methods: {
    update(e) {
      const task = () => (this.text = e.target.value);
      this.debounce(task, 500);
    },
  },
  mounted() {
    this.$refs.textArea.focus();
  },
};
</script>

<style>
</style>