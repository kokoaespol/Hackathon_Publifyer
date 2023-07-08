<script setup>
import NavBar from "./NavBar.vue";
import influencerImg from "../assets/influencer-marketing-3648113899.png";
</script>

<template>
  <section class="pr-20 pl-20 pt-8 bg-color1F w-full h-full">
    <NavBar />
    <section class="flex-col">
      <div class="text-white font-bold flex justify-around items-center mt-20">
        <div class="text-6xl flex-col">
          <h1>Genera</h1>
          <h1>Verifica</h1>
          <h1 class="mb-16">Publica</h1>
          <div>
            <button class="bg-color4O rounded-full p-6 font-light  text-[1.3rem] w-[16rem] border-[1.8px] border-black mb-5">Empieza a crear</button>
          </div>
          
        </div>
        <img class = "w-[30rem]" :src="influencerImg" />
      </div>
    
       
    </section>
  </section>
</template>
