<template>
  <div>
    <TestPage />
    <div>{{ user.name }}</div>
    <div>{{ counter }}</div>
    <button @click="addCounter()">add</button>
    <div v-if="data">{{ data }}</div>
    <NuxtLink to="/catalog/1">1</NuxtLink>
    <NuxtLink to="/catalog/2">2</NuxtLink>
    <NuxtLink to="/catalog/3">3</NuxtLink>
  </div>
</template>

<script>
export default {
  name: "Home",
   data() {
    return {
    };
  },
  async fetch({ store }) {
    await store.dispatch("User/getData");
  },
 
  head: {
    title: "Home page",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Home page description",
      },
    ],
  },
  
  
  
  computed: {
    user() {
      return this.$store.getters["User/getUser"];
    },
    counter() {
      return this.$store.getters["User/getCounter"];
    },
    data() {
      var i;
      return this.$store.getters["User/getData"];
    },
  },
  methods: {
    addCounter() {
      this.$store.commit("User/saveCounter");
    },
    vardf(){
    }
  },
};
</script>

<style lang="scss">
@import "@/scss/pages/_home.scss";
</style>
