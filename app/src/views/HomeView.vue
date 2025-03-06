<!-- <script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template> -->
<template>
  <div class="card" v-for="(index, school) in highSchool" :key="school.school_name"></div>
  <h2>{{ school.school_name }}</h2>
  <h3>{{ index + 1 }}</h3>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const highSchool = ref('')
const schoolScores = ref('https://data.cityofnewyork.us/resource/dw8c-pxy2.json')

async function getData() {
  try {
    let res = await fetch(schoolScores)
    let data = await res.json()
    data = highSchool.value
    console.log(data)
    return data
  } catch (error) {
    console.error('Error fetching', error)
  }
}

onMounted(() => {
  getData()
})
</script>

<style lang="scss" scoped></style>

<!--
- radar chart for grades in progress, performance, env, college readiness to show each school 
- avg math and avg english 
- percentile rank and overall score charts from best to worst 
- ofc all of them can be filtered by borough 

-->
