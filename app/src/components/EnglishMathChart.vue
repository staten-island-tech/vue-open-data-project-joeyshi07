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
  ArcElement,
  PointElement,
  LineElement,
  Filler,
} from 'chart.js'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  RadialLinearScale,
  PointElement,
  ArcElement,
  LineElement,
  Filler,
)

const props = defineProps({
  school: Object,
})

const chartData = computed(() => {
  return {
    labels: ['English Proficiency', 'Math Proficiency'],
    datasets: [
      {
        label: props.school.school_name,
        data: [
          parseFloat(props.school.average_english_proficiency),
          parseFloat(props.school.average_math_proficiency),
        ],
        backgroundColor: ['rgba(255, 99, 132,0.5)', 'rgba(66, 165, 245, 0.5)'],
        borderColor: ['#FF6384', '#42A5F5'],
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
  plugins: {
    legend: {
      display: true,
    },
  },
}
</script>
