<template>
  <div id="app">
    <nav class="m-auto max-w-5xl pt-10" v-if="$route.path === '/about'">
      <router-link to="/" class="text-2xl hover:text-pink-500">Home</router-link>  
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">

</style>
