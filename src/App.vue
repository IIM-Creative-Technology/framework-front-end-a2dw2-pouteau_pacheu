<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Card from "./components/Card_populaires.vue";
</script>

<template>
  <div class="flex flex-row max-w-sm justify-between">
    <div class="text-txt_black mx-4">LES PLUS POPULAIRES &#x1F525</div>
      <div class="flex flex-row">
        <img src="Vector%202%20(1).png" class= "mr-2.5" >
        <img src="Vector%201%20(1).png" class="mr-4 ml-2.5">
      </div>
  </div>
  <Card image="Image Avion.png" title="MANAGEMENT & LEADERSHIP" text="Accueillir un.e collègue en situation de handicap" emoji="&#x1F468;&#x200D;&#x1F3EB"/>
  <div class="text-txt_black mx-4">TOUTES LES FORMATIONS &#x1F680</div>


</template>

<style scoped>

</style>
