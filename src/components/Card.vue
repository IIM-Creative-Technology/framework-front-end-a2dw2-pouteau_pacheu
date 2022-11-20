<!-- Voir https://vuejs.org/guide/components/props.html#prop-passing-details -->

<script setup>
defineProps(['title', 'zozo'])
</script>

<template>
  Mon titre: {{ title }}
  <div> {{ zozo }}</div>
</template>
