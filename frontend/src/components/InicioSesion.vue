<script setup>
import CustomInput from "./CustomInput.vue";
</script>

<template>
  <div class="container flex justify-center m-auto w-full h-full">
    <div
      class="m-auto flex-col justify-center flex items-center h-[20rem] w-[30rem]"
    >
      <i class="fa-solid fa-user text-5xl mb-5"></i>
      <h1 class="text-2xl mb-20">Inicia sesión</h1>
      <form>
        <div class="flex flex-col justify-around">
          <label class="text-gray-700 text-md font-bold mb-5"
            >Correo electrónico</label
          >
          <CustomInput
            placeholder="influencer@ejemplo.com "
            class="w-[28rem]"
          />
        </div>
        <div class="flex flex-col mt-7">
          <label class="text-gray-700 font-bold text-md mb-5" for="password"
            >Contraseña</label
          >
          <CustomInput placeholder="contraseña" />
        </div>
      </form>
      <button class="bg-color1F p-4 rounded-md text-white font-semibold mt-10">
        Iniciar Sesión
      </button>
    </div>
  </div>
</template>
