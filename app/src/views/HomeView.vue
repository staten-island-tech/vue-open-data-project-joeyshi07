<template>
  <div>
    <div>
      <select id="school-select" v-model="selectedSchool">
        <option v-for="school in highSchool" :key="school.school_name" :value="school">
          {{ school.school_name }}
        </option>
      </select>

      <RadarChart v-if="selectedSchool" :school="selectedSchool" />
    </div>
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
import RadarChart from '../components/RadarChart.vue'

const highSchool = ref([])
const selectedSchool = ref(null)

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
