<template>
  <div>
    <PolarArea v-if="chartData" :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup>
import { computed, defineProps } from 'vue'
import { PolarArea } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, RadialLinearScale, PointElement, LineElement, Filler)

const props = defineProps({
  school: Object,
})

const englishScores = parseFloat(props.school.average_english_proficiency)
const mathScores = parseFloat(props.school.average_math_proficiency)

const chartData = computed(() => {
  return {
    labels: ['English Proficiency', 'Math Proficiency'],
    datasets: [
      {
        label: props.school.school_name,
        data: [englishScores, mathScores],
        backgroundColor: ['rgba(75, 192, 192, 0.5)', 'rgba(255, 99, 132, 0.5)'],
        borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
        borderWidth: 1,
      },
    ],
  }
})

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    r: {
      beginAtZero: true,
      suggestedMax: 5,
    },
  },
}
</script>
