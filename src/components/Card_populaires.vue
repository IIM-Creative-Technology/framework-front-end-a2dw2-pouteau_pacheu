<!-- Voir https://vuejs.org/guide/components/props.html#prop-passing-details -->

<script setup>
defineProps(['image','title','text','emoji','emoji2','emoji3'])
</script>

<template>

  <div class="flex flex-col mt-7 mx-4 ">
    <div><img :src="image"></div>
    <h1 class="mt-5 text-sm">{{title}}</h1>
    <h2 class="text-base">{{text}}</h2>
    <div class="flex flex-row border-solid border-red border-2">
    <div class="p-1 bg-transparent rounded-full border-solid border-red border-2">hola</div>
    <p class="mt-7">{{emoji2}}</p>
    <p class="mt-7">{{emoji3}}</p>
    </div>
  </div>
</template>
