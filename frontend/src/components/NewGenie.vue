<script setup>
import { inject } from "vue"
const genieService = inject("services.genie");

const name = 'Alina'
</script>

<template>
    <section class="container w-full h-full p-10 bg-color1F ">
        <!-- Navbar -->

        <!-- Title -->
        <div>
            <h1>{{ name + ", que quieres publicar hoy?" }}</h1>
        </div>
        <!-- Breadcrumbs -->

        <!-- Content -->
        <div class="relative">
            <div class="">
                <span class="w-2/4 text-right">Tipo de contenido</span>
                <input class="border rounded" />
            </div>
        </div>
    </section>
</template>
