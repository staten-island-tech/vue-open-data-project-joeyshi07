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
import { useRoute } from 'vue-router'
import SchoolCard from '../components/DataCards.vue'

const highSchool = ref([])
const scoreData = ref([])

const schoolScores = 'https://data.cityofnewyork.us/resource/dw8c-pxy2.json'

async function getData() {
  try {
    let res = await fetch(schoolScores)
    let data = await res.json()
    highSchool.value = data
    console.log(data)

    // data.forEach((item) => {
    //   const schoolScores = {
    //     school: item.school_name,
    //     progress: item.progress_grade,
    //     performance: item.performance_grade,
    //     env: item.environment_grade,
    //     college: item.college_and_career_readiness,
    //   }
    //   scoreData.value.push(schoolScores)
    // })

    // console.log('scores', scoreData.value)
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
