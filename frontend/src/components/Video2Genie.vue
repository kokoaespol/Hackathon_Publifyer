<script setup>
import NavBar from "./NavBar.vue";
</script>

<template>
  <section class="container w-full h-full p-10">
    <!-- Navbar -->
    <NavBar />
    <!-- Title -->
    <div class="flex w-full h-30 items-center justify-center bg-grey-lighter">
      <label
        class="w-full flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg tracking-wide"
      >
        <h1 style="font-size: 32px">
          Sube tu video y mira que tal lo hiciste...
        </h1>
      </label>
    </div>
    <div class="flex w-full h-40 items-center justify-center bg-grey-lighter">
      <label
        class="w-2/3 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide border border-blue cursor-pointer"
      >
        <div>
          <p>
            Graba el video en un lugar cerrado, mencionándo por qué es
            importante para las personas utilizar el producto (muéstralo entre
            tus manos) y no te olvides de mencionar el nombre de la marca
            correctamente en el minuto 0:56
          </p>
        </div>
      </label>
    </div>

    <div class="flex w-full h-40 items-center justify-center bg-grey-lighter">
      <label
        class="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer"
      >
        <svg
          class="w-8 h-8"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"
          />
        </svg>
        <span class="mt-2 text-base leading-normal">Seleccionar video</span>
        <input type="file" class="hidden" />
      </label>
    </div>
  </section>
</template>
