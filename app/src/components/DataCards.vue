<template>
  <div class="card">
    <h3>ID: {{ index + 1 }}</h3>
    <h2>{{ school.school_name }}</h2>
    <h3>Score: {{ school.overall_score }}</h3>
    <h3>Grade: {{ school.overall_grade }}</h3>
    <h3>Grade {{ school.overall_grade }}</h3>
    <h3>Percentile Rank: {{ school.percentile_rank }}</h3>
    <h3>Progress: {{ school.progress_grade }}</h3>
    <h3>Performance: {{ school.performance_grade }}</h3>
    <h3>Environment: {{ school.environment_grade }}</h3>
    <h3>College and Career Readiness: {{ school.college_and_career_readiness }}</h3>
  </div>
</template>

<script setup>
defineProps({
  school: Object,
  index: Number,
})
</script>
