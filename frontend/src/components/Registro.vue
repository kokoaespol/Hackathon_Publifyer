<script setup>
import CustomInput from "./CustomInput.vue"
import CustomButton from "./CustomButton.vue"
import NavBar from "./NavBar.vue"
import { useRouter } from "vue-router"

const router = useRouter()

const signUp = () => {
    router.push("/")
}

</script>

<template>
    <NavBar color="color1F" />
    <section class="flex h-full w-full flex-col justify-center">
        <div class="container m-auto mt-44">
            <!-- title -->
            <div class="w-full text-center">
                <h1 class="text-5xl font-semibold">Genie</h1>
            </div>
            <!-- subtitle -->
            <div class="w-full flex flex-row justify-center mt-4">
                <h2 class="text-lg font-light">Crea tu cuenta en Genie y empieza a generar contenido.</h2>
            </div>
            <!-- form -->
            <div class="flex mt-10 w-5/12 m-auto justify-between items-end gap-8">
                <div class="w-7/12 flex flex-col gap-8 justify-center">
                    <CustomInput placeholder="Correo Electronico" />
                    <CustomInput placeholder="Nombre Completo" />
                    <CustomInput placeholder="Nombre de Usuario" />
                    <CustomInput placeholder="Contraseña" />
                </div>
                <!-- Inputs for social networks users -->
                <div class="w-5/12 flex flex-col gap-8 mt-10 justify-end">
                    <h2 class="text-center">Ingresa tus usuarios</h2>
                    <div class="flex justify-center items-center">
                        <i class="fa-brands fa-facebook text-3xl"></i>
                        <CustomInput placeholder="Facebook" />
                    </div>
                    <div class="flex justify-center items-center">
                        <i class="fa-brands fa-instagram text-3xl"></i>
                        <CustomInput placeholder="Instagram" />
                    </div>
                    <div class="flex justify-center items-center">
                        <i class="fa-brands fa-tiktok text-3xl"></i>
                        <CustomInput placeholder="TikTok" />
                    </div>
                </div>
            </div>
            <p class="text-center mt-8 font-light">Automatiza tu proceso de creacion de contenido!</p>
            <!-- button -->
            <div class="flex justify-center mt-8">
                <CustomButton label="Regístrate" :action="signUp" />
            </div>
        </div>
    </section>
</template>