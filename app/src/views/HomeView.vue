<!-- <script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template> -->
<template>
  <div class="card" v-for="(score,index) in satScores" :key = </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const satScores = ref('https://data.cityofnewyork.us/resource/f9bf-2cp4.json')
async function getData() {
  let res = await fetch('')
  let data = await res.json()
  satScores.value = data.results
}

onMounted(() => {
  getData()
})
</script>

<style lang="scss" scoped></style>
