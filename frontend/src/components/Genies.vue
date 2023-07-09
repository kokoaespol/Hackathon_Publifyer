<script setup>
import { inject } from "vue";

import Genie from "./Genie.vue";

const genieService = inject("services.genies");

const genies = await genieService.findAll();
console.log(genies);
</script>

<template>
  <section class="flex w-full">
    <section
      id="sidebar"
      class="bg-white w-1/5 shadow-sm h-screen border border-1 border-gray"
    >
      <span
        class="p-2.5 mt-3 flex items-center rounded-md px-4 cursor-pointer text-xl text-color1F"
      >
        Genie
      </span>
      <div class="p-2.5 mt-3 flex items-center rounded-md px-4 cursor-pointer">
        <i class="fa-solid fa-star text-color1F"></i>
        <router-link to="/genies">
          <span class="ml-4 text-gray-200">Mis Genies</span>
        </router-link>
      </div>
      <div class="p-2.5 mt-3 flex items-center rounded-md px-4 cursor-pointer">
        <i class="fa-solid fa-plus text-color1F"></i>
        <router-link to="/new">
          <span class="ml-4 text-gray-200">Nuevo Genie</span>
        </router-link>
      </div>
    </section>

    <section class="w-full">
      <!-- Insert navbar -->
      <h1 class="text-color1F text-xl">Mis Genies</h1>
      <genie
        v-for="genie of genies"
        :key="genie.id"
        :subject="genie.subject"
        :brand="genie.brand"
        status="Verifying"
      />
    </section>
  </section>
</template>
