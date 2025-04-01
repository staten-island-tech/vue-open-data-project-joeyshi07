<template>
  <div>
    <Bar :data="chartData" :options="chartOptions" />
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
  if (code === 'X') return 'The Bronx'
  return null
}

const chartData = computed(() => {
  const boroughs = ['Manhattan', 'Brooklyn', 'Staten Island', 'Queens', 'The Bronx']
  const enrollmentCounts = [0, 0, 0, 0, 0]

  props.schools.forEach((school) => {
    const borough = getBorough(school.dbn)

    const index = boroughs.indexOf(borough)
    enrollmentCounts[index] += parseInt(school.enrollment) || 0
  })

  return {
    labels: boroughs,
    datasets: [
      {
        label: 'Total Enrollment',
        backgroundColor: ['#FF6384', '#42A5F5', '#FFCE56', '#4BC0C0', '#9966FF'],
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
