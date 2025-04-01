<template>
  <div>
    <Radar :data="formattedData" :options="chartOptions" v-if="formattedData" />
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue'
import { Radar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  RadarController,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
} from 'chart.js'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  Filler,
  RadarController,
  RadialLinearScale,
  PointElement,
  LineElement,
)

const props = defineProps({
  school: Object,
})

const gradeToNumeric = (grade) => {
  switch (grade) {
    case 'A':
      return 5
    case 'B':
      return 4
    case 'C':
      return 3
    case 'D':
      return 2
    case 'F':
      return 1
    default:
      return 0
  }
}

const formattedData = computed(() => {
  return {
    labels: [
      'Progress Grade',
      'Performance Grade',
      'Environment Grade',
      'College and Career Readiness Grade',
    ],
    datasets: [
      {
        label: 'Scores',
        data: [
          gradeToNumeric(props.school.progress_grade),
          gradeToNumeric(props.school.performance_grade),
          gradeToNumeric(props.school.environment_grade),
          gradeToNumeric(props.school.college_and_career_readiness),
        ],
        fill: true,
        borderColor: '#42A5F5',
        borderWidth: 2,
        backgroundColor: 'rgba(66, 165, 245, 0.3)',
        tension: 0.05,
      },
    ],
  }
})

const chartOptions = {
  scales: {
    r: {
      min: 0,
      max: 5,
      ticks: {
        stepSize: 1,
      },
    },
  },
  elements: {
    line: {
      borderWidth: 2,
    },
  },
}
</script>

<style lang="scss" scoped></style>
