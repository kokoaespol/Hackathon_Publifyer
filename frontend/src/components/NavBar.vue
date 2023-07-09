<script setup>
</script>

<template>
    <div class="container flex justify-between text-white">
        <h1 class="text-3xl">Genie</h1>
        <div class="flex flex-row">
            <router-link to="/acerca">
                <button class="mx-5">Acerca</button>
            </router-link>
            <router-link to = "/sign-up">
            <button class="mx-5">Regístrate aquí</button>
            </router-link>
            <router-link to="/sesion">
                <button class="mx-5">Inicia sesión</button>
            </router-link>
        </div>
    </div>
</template>