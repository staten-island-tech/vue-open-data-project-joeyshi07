<template>
  <div>
    <SchoolCard
      v-for="(school, index) in highSchool"
      :key="school.school_name"
      :school="school"
      :index="index"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import SchoolCard from '../components/DataCards.vue'

const highSchool = ref([])
const schoolScores = 'https://data.cityofnewyork.us/resource/dw8c-pxy2.json'

async function getData() {
  try {
    let res = await fetch(schoolScores)
    let data = await res.json()
    highSchool.value = data
    console.log(data)
  } catch (error) {
    console.error('Error fetching', error)
  }
}

onMounted(() => {
  getData()
})
</script>

<!--
- radar chart for grades in progress, performance, env, college readiness to show each school 
- avg math and avg english 
- percentile rank and overall score charts from best to worst 
- ofc all of them can be filtered by borough 

-->
