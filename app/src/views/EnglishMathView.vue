<template>
  <div>
    <h2>English and Math Proficiency</h2>
    <div class="polar">
      <select id="school-select" v-model="selectedSchool">
        <option v-for="school in highSchool" :key="school.school_name" :value="school">
          {{ school.school_name }}
        </option>
      </select>

      <EnglishMathChart v-if="selectedSchool" :school="selectedSchool" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import EnglishMathChart from '../components/EnglishMathChart.vue'

const highSchool = ref([])
const selectedSchool = ref(null)

const schoolScores = 'https://data.cityofnewyork.us/resource/dw8c-pxy2.json'

async function getData() {
  try {
    let res = await fetch(schoolScores)
    let data = await res.json()
    highSchool.value = data
  } catch (error) {
    console.error('Error fetching', error)
  }
}

onMounted(() => {
  getData()
})
</script>
