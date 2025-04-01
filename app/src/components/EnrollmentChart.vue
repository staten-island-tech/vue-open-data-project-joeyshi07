<template>
  <div>
    <Bar :chart-data="chartData" :chart-options="chartOptions" />
  </div>
</template>

<script setup>
import { computed, defineProps } from 'vue'
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

import { Bar } from 'vue-chartjs'

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend)

const props = defineProps({
  schools: Array,
})

const getBorough = (dbn) => {
  const code = dbn.charAt(2)
  if (code === 'M') return 'Manhattan'
  if (code === 'K') return 'Brooklyn'
  if (code === 'R') return 'Staten Island'
  if (code === 'Q') return 'Queens'
  if (code === 'X') return 'Bronx'
  return null
}

const chartData = computed(() => {
  const boroughs = ['Manhattan', 'Brooklyn', 'Staten Island', 'Queens', 'Bronx']
  const enrollmentCounts = [0, 0, 0, 0, 0]

  props.schools.forEach((school) => {
    const borough = getBorough(school.dbn)

    const index = boroughs.indexOf(borough)
    if (index !== -1) {
      enrollmentCounts[index] += parseInt(school.enrollment) || 0
    }
  })

  return {
    labels: boroughs,
    datasets: [
      {
        label: 'Total Enrollment',
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
        data: enrollmentCounts,
      },
    ],
  }
})

const chartOptions = {
  responsive: true,
  plugins: {
    legend: { display: false },
    title: { display: true, text: 'Enrollment by Borough' },
  },
}
</script>
