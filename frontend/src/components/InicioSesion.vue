<script setup>
  import CustomInput from './CustomInput.vue'
</script>

<template>
  <div class="container flex justify-center m-auto w-full h-full ">
    <div class="m-auto flex-col justify-center flex items-center h-[20rem] w-[30rem]">
      <i class="fa-solid fa-user "></i>
      <h1 class="text">Inicia sesión</h1>
      <form >
        <div class="flex flex-col justify-around">
        <label class="text-gray-700 text-sm font-bold"
          >Correo electronico</label
        >
        <CustomInput placeholder="influencer@ejemplo.com"/>

        <!-- <input
          class="shadow appearance-none border w-[25rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="text"
          placeholder="influencer@gmail.com"
        /> -->
      </div>
      <div class="flex flex-col">
        <label class="text-gray-700 text-sm font-bold" for="password">Contraseña</label>
        <input
          class="shadow appearance-none border w-[25rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="text"
          placeholder="Password"
                  />
      </div>
      </form>
      <button class="bg-color1F p-4 rounded-md text-white font-semibold">
        Iniciar Sesión
      </button>
    </div>
  </div>
</template>
