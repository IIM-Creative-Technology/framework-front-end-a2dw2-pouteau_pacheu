<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import Nav from "./components/Nav.vue";
</script>

<template>

  <div class="bg-gradient-to-r from-cyan-500 to-blue-500 lg:px-20">
    <div class="py-7 px-2 flex flex-row justify-between items-center">
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
  </div>



</template>

<style scoped>

</style>
