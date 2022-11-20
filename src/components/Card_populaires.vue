<!-- Voir https://vuejs.org/guide/components/props.html#prop-passing-details -->

<script setup>
defineProps(['image','title','text','emoji'])
</script>

<template>

  <div id="Mes_cartes" class="mt-8.5">
    <div><img :src="image"></div>
    <h1>{{title}}</h1>
    <h2>{{text}}</h2>
    <p>{{emoji}}</p>
  </div>
</template>
