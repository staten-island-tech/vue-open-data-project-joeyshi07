<template>
  <div>
    <Radar :data="highSchool" :options=""></Radar>
  </div>
</template>

<script setup>
import { Radar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js'

export default {
  name: 'ScoreChart',
  components: {
    Radar,
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped></style>
