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
      return 100
    case 'B':
      return 75
    case 'C':
      return 50
    case 'D':
      return 25
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
        label: props.school.school_name,
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
        tension: 0.1,
      },
    ],
  }
})

const chartOptions = {
  scales: {
    r: {
      min: 0,
      max: 100,
      ticks: {
        stepSize: 25,
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
