<script setup>
import CustomInput from "./CustomInput.vue"
</script>

<template>
    <section class="flex flex-col justify-center h-full w-full relative">
        <!-- title -->
        <div class="w-full flex flex-row justify-center">
            <h1 class="text-5xl font-semibold">Genie</h1>
        </div>
        <!-- subtitle -->
        <div class="w-full flex flex-row justify-center mt-4">
            <h2 class="text-lg font-light">Crea tu cuenta en Genie y empieza a generar contenido.</h2>
        </div>
        <!-- form -->
        <div class="flex mt-10 w-5/12 m-auto justify-between">
            <div class="w-7/12 flex flex-col gap-8">
                <CustomInput placeholder="Correo Electronico" />
                <CustomInput placeholder="Nombre Completo" />
                <CustomInput placeholder="Nombre de Usuario" />
                <CustomInput placeholder="Contraseña" />
            </div>
            <!-- Inputs for social networks users -->
            <div class="w-5/12 flex flex-col gap-8 mt-10 justify-end">
                <div class="flex justify-center items-center">
                    <i class="fa-brands fa-facebook"></i>
                    <CustomInput placeholder="Facebook" />
                </div>
                <div class="flex justify-center items-center">
                    <i class="fa-brands fa-instagram"></i>
                    <CustomInput placeholder="Instagram" />
                </div>
                <div class="flex justify-center items-center">
                    <i class="fa-brands fa-tiktok"></i>
                    <CustomInput placeholder="TikTok" />
                </div>
            </div>
        </div>
    </section>
</template>