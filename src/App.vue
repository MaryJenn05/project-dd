<script setup>
import FooterContent from "@/public/components/footer/footer-content.component.vue";
import HeaderContent from "@/public/components/header/header-content.component.vue";

</script>

<template>
  <header>
    <header-content></header-content>
  </header>

  <main>
    <router-view></router-view>
  </main>

  <footer>
    <footer-content></footer-content>
  </footer>
</template>

<style scoped>

</style>

