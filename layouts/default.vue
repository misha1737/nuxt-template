<template>
  <div>
    <div v-if="$nuxt.isOffline">You are offline</div>
    <Nuxt keep-alive />
  </div>
</template>
