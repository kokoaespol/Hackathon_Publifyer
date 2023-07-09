<script>
export default {
    props: {
        color: {
            type: String,
            default: "white"
        }
    }
}
</script>

<template>
    <div :class="`w-full flex justify-between text-${color}`">
        <h1 class="text-3xl">Genie</h1>
        <div class="flex flex-row justify-center items-center">
            <router-link to="/acerca">
                <button class="mx-5 flex">Acerca</button>
            </router-link>
            <router-link to="/sign-up">
                <button class="mx-5">Regístrate aquí</button>
            </router-link>
            <router-link to="/sesion">
                <button class="mx-5">Inicia sesión</button>
            </router-link>
        </div>
    </div>
</template>