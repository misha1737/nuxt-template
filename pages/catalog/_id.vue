<template>
  <div>
    <TestPage />
    <div v-if="data">{{ data }}</div>
    <p>id:{{ $route.params.id }}</p>
    <NuxtLink to="/">home</NuxtLink>
    <NuxtLink to="/catalog/1">1</NuxtLink>
    <NuxtLink to="/catalog/2">2</NuxtLink>
    <NuxtLink to="/catalog/3">3</NuxtLink>
  </div>
</template>

<script>
export default {
  name: "Home",
  async fetch({ store }) {
    await store.dispatch("User/getData");
  },
  data() {
    return {};
  },
  computed: {
    data() {
      return this.$store.getters["User/getData"];
    },
  },
  methods: {
    addCounter() {
      this.$store.commit("User/saveCounter");
    },
  },
};
</script>

<style lang="scss">
@import "@/scss/pages/_home.scss";
</style>
