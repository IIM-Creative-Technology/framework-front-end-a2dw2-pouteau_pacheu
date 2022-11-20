<!-- Voir https://vuejs.org/guide/components/props.html#prop-passing-details -->

<script setup>
defineProps(['image','title','text','emoji','emoji2','emoji3'])
</script>

<template>

  <div class="flex flex-col mx-4 ">
    <div class="images-perso mb-7"><img :src="image"></div>
    <h1 id="titres" class="mt-7 text-xs">{{title}}</h1>
    <h2 id="textes" class="text-base">{{text}}</h2>
    <div id="emojis" class="flex flex-row justify-between">
    <div id="emoji1" class="mt-7 w-3">{{emoji}}</div>
    <div id="emoji2" class="mt-7">{{emoji2}}</div>
    <div id="emoji3" class="mt-7">{{emoji3}}</div>
    </div>
  </div>
</template>
<style scoped>
.images-perso{
  width: 356px !important;
  margin: 0;
  padding: 0;
}
#titres{
  font-size: x-small;
  margin-top: 15px;
  margin-left: 16px;
}
#textes{
  margin-left: 16px;
}
#emojis{
  font-size: 30px;
  padding-bottom: 20px;
  padding-top: 20px;
  margin-left: 16px;
  width: 50%;
}

</style>
