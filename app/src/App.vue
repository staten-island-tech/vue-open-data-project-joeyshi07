<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <h1>NYC High School Metrics: 2012-2013</h1>
    <nav>
      <RouterLink to="/englishmath">English and Math Proficiency</RouterLink>
      <RouterLink to="/enrollment">Enrollment</RouterLink>
      <RouterLink to="/scores">School Performance</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>

<style scoped>
header {
  margin-right: 3rem;
}
nav {
  display: flex;
  gap: 1rem;
}
</style>
