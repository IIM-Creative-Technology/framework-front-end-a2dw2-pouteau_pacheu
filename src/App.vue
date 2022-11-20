<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Card from "./components/Card_populaires.vue";
</script>

<template>
  <div class="bg-gradient-to-r from-cyan-500 to-blue-500 lg:px-20 px-4">
    <div class="py-10 flex flex-row justify-between items-center">
      <img src="/image2.png" />

      <div class="hidden lg:flex flex-row justify-between items-center w-full">
        <nav class="pl-10">
          <ul class="list-none text-txt_white flex flex-row">
            <li class="pl-4">Offres</li>
            <li class="pl-4 font-semibold">Formations</li>
            <li class="pl-4">Ressources</li>
            <li class="pl-4">A propos</li>
          </ul>
        </nav>
        <div class="flex flex-row justify-between items-center">
          <div class="py-[19px] px-[24px] text-txt_white bg-bg_grey rounded-full">06 74 49 03 21</div>
          <div class="py-[19px] px-[24px] ml-[24px] text-txt_purple bg-txt_white rounded-full">Je prends contact</div>
        </div>
      </div>

      <div class="block lg:hidden ">
        <img class="py-0.5" src="/Vector3.png">
        <img class="py-0.5" src="/Vector3.png">
        <img class="py-0.5" src="/Vector6.png">
      </div>
    </div>
    <h1 class="text-center text-txt_white font-bold text-2xl lg:text-4xl mb-3 lg:mb-6">Découvrez nos formations sur étagère !</h1>
    <p class="text-center text-txt_white max-w-4xl m-auto">Notre catalogue de formations soft skills est le meilleur allié de vos managers et collaborateurs. Management, vente, ressources humaines, efficacité professionnelle... Composez votre parcours de formation et mixez les modalités pédagogiques pour développer leurs compétences.</p>

    <div class="flex flex-col lg:flex-row gap-8 rounded-3xl bg-txt_white py-8 px-4 mt-20 translate-y-40">
      <div class="whitespace-normal flex items-center justify-between py-2 bg-bg_ligth_grey rounded-full py-4 px-2">
    <p>Quelle formation recherchez vous ?</p>
    <img src="/IMG_7142.png">
  </div>
  <div class="flex items-center justify-between py-2 bg-bg_ligth_grey rounded-full py-4  px-2">
    <p>Filtrez</p>
    <img src="/Vector.png">
  </div>
  </div>

  </div>
  <div class="flex flex-row max-w-sm justify-between">
    <div class="text-txt_black mx-4">LES PLUS POPULAIRES &#x1F525</div>
      <div class="flex flex-row">
        <img src="Vector%202%20(1).png" class= "mr-2.5" >
        <img src="Vector%201%20(1).png" class="mr-4 ml-2.5">
      </div>
  </div>
  <Card image="Avion.png" title="MANAGEMENT & LEADERSHIP" text="Accueillir un.e collègue en situation de handicap" emoji="&#x1F468;&#x200D;&#x1F3EB" emoji2="&#x1F468;&#x200D;&#x1F3EB" emoji3="&#x1F468;&#x200D;&#x1F3EB"/>
  <div class="text-txt_black mx-4">TOUTES LES FORMATIONS &#x1F680</div>
</template>

<style scoped>

</style>
