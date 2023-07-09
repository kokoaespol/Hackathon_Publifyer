<script setup></script>

<template>
  <section class="flex">
    <section class="bg-color3G w-[300px]">
        <div
        class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-xl font-bold"
      >
      Genie
      </div>
      <div
        class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600"
      >
        <i class="fa-solid fa-star"></i>
        <router-link to="/genies">
          <span class="text-[15px] ml-4 text-gray-200"
            >Mis Genies</span
          >
        </router-link>
      </div>
      <div
        class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600"
      >
        <i class="fa-solid fa-plus "></i>
        <router-link to="/new">
          <span class="text-[15px] ml-4 text-gray-200"
            >Nuevo Genie</span
          >
        </router-link>
      </div>
    </section>

    <section class="bg-color2Y w-full">
      <h1>hi</h1>
    </section>
  </section>
</template>
