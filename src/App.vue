<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Card from "./components/Card_populaires.vue";
</script>

<template>
  <div class="bg-gradient-to-r from-cyan-500 to-blue-500 lg:px-20 px-4">
    <div class="py-10 flex flex-row justify-between items-center">
      <img src="/image2.png"/>

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
  <div class="flex flex-row max-w-sm justify-between mt-40 mb-8">
    <div class="text-txt_black mx-4">LES PLUS POPULAIRES &#x1F525</div>
      <div class="flex flex-row">
        <img src="Vector%202%20(1).png" class= "mr-2.5" >
        <img src="Vector%201%20(1).png" class="mr-4 ml-2.5">
      </div>
  </div>
  <div class="lg:flex lg:items-center lg:justify-between">
  <Card class="rounded-3xl shadow" image="avion.png" title="MANAGEMENT & LEADERSHIP" text="Accueillir un.e collègue en situation de handicap" emoji="&#x1F468;&#x200D;&#x1F3EB" emoji2="&#x1F468;&#x200D;&#x1F3EB" emoji3="&#x1F468;&#x200D;&#x1F3EB"/>
  <Card class="hidden md:block mt-6 rounded-3xl shadow" image="Intersect9.png" title="Thématique 1" text="Accueillir un.e collègue en situation de handicap" emoji="&#x1F468;&#x200D;&#x1F3EB"/>
  <Card class="hidden md:block mt-6 rounded-3xl shadow" image="Intersect10.png" title="Thématique 1" text="Accueillir un.e collègue en situation de handicap" emoji="&#x1F468;&#x200D;&#x1F3EB" emoji2="&#x1F468;&#x200D;&#x1F3EB"/>
  <Card class="hidden md:block mt-6 rounded-3xl shadow" image="Intersect11.png" title="Thématique 1" text="Accueillir un.e collègue en situation de handicap" emoji="&#x1F468;&#x200D;&#x1F3EB" emoji2="&#x1F468;&#x200D;&#x1F3EB" emoji3="&#x1F468;&#x200D;&#x1F3EB"/>
  </div>
    <div class="text-txt_black mt-20 mx-4">TOUTES LES FORMATIONS &#x1F680</div>
  <div class="lg:flex lg:items-center lg:justify-between">
  <Card class="mt-6 rounded-3xl shadow" image="Intersect.png" title="Thématique 1" text="Accueillir un.e collègue en situation de handicap" emoji="&#x1F468;&#x200D;&#x1F3EB" emoji2="&#x1F468;&#x200D;&#x1F3EB" emoji3="&#x1F468;&#x200D;&#x1F3EB"/>
  <Card class="mt-6 rounded-3xl shadow" image="Intersect8.png" title="Thématique 1" text="Accueillir un.e collègue en situation de handicap" emoji="&#x1F468;&#x200D;&#x1F3EB"/>
  <Card class="mt-6 rounded-3xl shadow" image="Intersect2.png" title="Thématique 1" text="Accueillir un.e collègue en situation de handicap" emoji="&#x1F468;&#x200D;&#x1F3EB" emoji2="&#x1F468;&#x200D;&#x1F3EB"/>
  <Card class="hidden md:block mt-6 rounded-3xl shadow" image="Intersect12.png" title="Thématique 1" text="Accueillir un.e collègue en situation de handicap" emoji="&#x1F468;&#x200D;&#x1F3EB" emoji2="&#x1F468;&#x200D;&#x1F3EB"/>
  </div>
    <div class="lg:flex lg:items-center lg:justify-between">
  <Card class="hidden md:block mt-6 rounded-3xl shadow" image="Intersect13.png" title="Thématique 1" text="Accueillir un.e collègue en situation de handicap" emoji="&#x1F468;&#x200D;&#x1F3EB"/>
  <Card class="hidden md:block mt-6 rounded-3xl shadow" image="Intersect14.png" title="Thématique 1" text="Accueillir un.e collègue en situation de handicap" emoji="&#x1F468;&#x200D;&#x1F3EB"/>
  <Card class="hidden md:block mt-6 rounded-3xl shadow" image="Intersect15.png" title="Thématique 1" text="Accueillir un.e collègue en situation de handicap" emoji="&#x1F468;&#x200D;&#x1F3EB"/>
  <Card class="mt-6 rounded-3xl shadow" image="Intersect3.png" title="Thématique 1" text="Accueillir un.e collègue en situation de handicap" emoji="&#x1F468;&#x200D;&#x1F3EB"/>
    </div>
      <div class="lg:flex lg:items-center lg:justify-between">
      <Card class="mt-6 rounded-3xl shadow" image="Intersect4.png" title="Thématique 1" text="Accueillir un.e collègue en situation de handicap" emoji="&#x1F468;&#x200D;&#x1F3EB"/>
  <Card class="mt-6 rounded-3xl shadow" image="Intersect5.png" title="Thématique 1" text="Accueillir un.e collègue en situation de handicap" emoji="&#x1F468;&#x200D;&#x1F3EB" emoji2="&#x1F468;&#x200D;&#x1F3EB" emoji3="&#x1F468;&#x200D;&#x1F3EB"/>
  <Card class="mt-6 rounded-3xl shadow" image="Intersect6.png" title="Thématique 1" text="Accueillir un.e collègue en situation de handicap" emoji="&#x1F468;&#x200D;&#x1F3EB"/>
  <Card class="mt-6 rounded-3xl shadow" image="Intersect7.png" title="Thématique 1" text="Accueillir un.e collègue en situation de handicap" emoji="&#x1F468;&#x200D;&#x1F3EB"/>
      </div>
    <div class="lg:mr-20 lg:w-44 lg:ml-[1167px] flex flex-row  justify-around mt-16 mx-16">
    <p class="text-txt_orange">1</p>
    <p class="text-txt_grey">2</p>
    <p class="text-txt_grey">3</p>
    <p class="text-txt_grey">4</p>
    <p class="text-txt_grey">...</p>
    <p class="text-txt_grey">8</p>
    </div>

  <div class="lg:mx-72 bg-bg_ligth_purple text-center mx-4 mt-12 rounded-3xl py-6">
    <h1 class="bg-bg_gradient text-2xl">C'est votre dernier mot ?</h1>
    <h2 class="text-txt_black mt-4">Si vous n'avez pas trouvé ce que vous cherchez, dites-le nous</h2>
    <div class="lg:flex lg:flex-row lg:items-center lg:justify-center">
    <div class="text-txt_white px-4 py-3 rounded-full bg-txt_purple mx-6 mt-6">Je prends contact</div>
    <div class="text-txt_black bg-bg_ligth_purple border-2 border-orange-500 mx-6 mt-6 px-4 py-3 rounded-full">Je télécharge le catalogue</div>
    </div>
    </div>

</template>

<style scoped>

</style>
