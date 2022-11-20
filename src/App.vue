<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Card from "./components/Card_populaires.vue";
</script>

<template>
  <header class="bg-gradient-to-r from-cyan-500 to-blue-500 lg:px-20 px-4 mb-40">
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

    <div class="flex flex-col lg:flex-row gap-6 lg:gap-8 rounded-3xl bg-txt_white py-6 px-4 translate-y-24 lg:translate-y-14 shadow-md max-w-[1122px] m-auto">
      <div class="whitespace-normal flex items-center justify-between py-2 bg-bg_ligth_grey rounded-full px-2 w-full">
    <p class=" ml-7 truncate">Quelle formation recherchez vous ?</p>
    <img class="mr-7" src="/IMG_7142.png">
  </div>
  <div class="flex items-center justify-between bg-bg_ligth_grey rounded-full py-4 px-2 min-w-[187px]">
    <p class="ml-7">Filtrez</p>
    <img class="mr-7" src="/Vector.png">
  </div>
  </div>

  </header>
  <div class="flex flex-row max-w-sm justify-between">
    <div class="text-txt_black mx-4">LES PLUS POPULAIRES &#x1F525</div>
      <div class="flex flex-row">
        <img src="Vector%202%20(1).png" class= "mr-2.5" >
        <img src="Vector%201%20(1).png" class="mr-4 ml-2.5">
      </div>
  </div>
  <Card image="Avion.png" title="MANAGEMENT & LEADERSHIP" text="Accueillir un.e collègue en situation de handicap" emoji="&#x1F468;&#x200D;&#x1F3EB" emoji2="&#x1F468;&#x200D;&#x1F3EB" emoji3="&#x1F468;&#x200D;&#x1F3EB"/>
  <div class="text-txt_black mx-4">TOUTES LES FORMATIONS &#x1F680</div>

<footer class="bg-txt_black text-white">
  <div class="block lg:hidden">
    <h3 class="pt-9 pl-3 text-3xl">skillsday</h3>
    <p class="py-5 px-3 text-xs">Skillsday, l’agence du mobile learning qui accompagne la performance des collaborateurs sur des formats courts, ciblés et efficients.</p>

    <div class="w-full bg-bg_grey2 px-3 py-2 mb-1.5 flex items-center justify-between">
      <p class="font-semibold">SOLUTIONS</p>
      <img src="/Vector6white.png">
    </div>
    <div class="w-full bg-bg_grey2 px-3 py-2 mb-1.5 flex items-center justify-between">
      <p class="font-semibold">FORMATIONS</p>
      <img src="/Vector6white.png">
    </div>
    <div class="w-full bg-bg_grey2 px-3 py-2 mb-1.5 flex items-center justify-between">
      <p class="font-semibold">INFORMATIONS</p>
      <img src="/Vector6white.png">
    </div>

    <p class="px-3 py-4 font-extralight">©Skillsday 2022</p>
    <p class="px-3 py-3 text-xs">Mentions légales</p>
    <p class="px-3 py-3 text-xs">Politique de confidentialité</p>
    <p class="px-3 py-3 text-xs">CGV</p>

    <div class="flex items-center justify-between max-w-[181px] m-auto py-7">
      <img src="/Frame26.png">
      <img src="/Frame27.png">
      <img src="/Frame28.png">
      <img src="/Frame29.png">
    </div>
  </div>
  <div class="hidden lg:block py-28 px-24">
    <img class="pb-16" src="/image2.png" />
    <div class="w-full flex gap-12">
      <div class="pt-6">
        <p class="max-w-[208px] text-xs">Skillsday est un organisme nouvelle génération qui a pour mission de moderniser et digitaliser la formation en entreprise pour former, vraiment !</p>
      </div>
      <div>
        <h4 class="opacity-40 pb-5">SOLUTIONS</h4>
        <p class="pb-2">Développer les soft skills</p>
        <p class="pb-2">Digitaliser les formations</p>
        <p class="pb-2">Accompagner les déploiements</p>
      </div>
      <div class="ml-16">
        <h4 class="opacity-40 pb-5">FORMATIONS</h4>
        <p class="pb-2">Toutes les formations</p>
        <p class="pb-2">Télécharger le catalogue</p>
      </div>
      <div class="ml-24">
        <h4 class="opacity-40 pb-5">INFORMATIONS</h4>
        <p class="pb-2">Nous rejoindre</p>
        <p class="pb-2">Nous contacter</p>
        <p class="pb-2">FAQ</p>
      </div>
    </div>
    <p class="mt-5">©Imagify 2022</p>
    <div class="flex items-center">
      <p>Mentions légales • Politique de confidentialité • CGV</p>
      <div class="flex items-center justify-between  gap-4 max-w-[181px] pl-16">
        <img src="/Frame26.png">
        <img src="/Frame27.png">
        <img src="/Frame28.png">
        <img src="/Frame29.png">
      </div>
    </div>
  </div>

</footer>
</template>

<style scoped>

</style>
