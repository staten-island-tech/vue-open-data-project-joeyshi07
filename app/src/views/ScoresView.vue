<template>
  <div>
    <h2>Scores for Different Features</h2>
    <div class="radar">
      <select id="school-select" v-model="selectedSchool">
        <option v-for="school in highSchool" :key="school.school_name" :value="school">
          {{ school.school_name }}
        </option>
      </select>

      <RadarChart v-if="selectedSchool" :school="selectedSchool" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
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
