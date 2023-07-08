<script setup>
import { inject } from "vue"
import CustomInput from "./CustomInput.vue"


const genieService = inject("services.genie");

const name = 'Alina'
</script>

<template>
    <section class="relative w-full h-full p-10 bg-color1F bg-opacity-30">
        <!-- Navbar -->

        <!-- Title -->
        <div>
            <h1>{{ name + ", que quieres publicar hoy?" }}</h1>
        </div>
        <!-- Breadcrumbs -->

        <!-- Content -->
        <div class="relative flex flex-col justify-start w-4/6 p-10 gap-10">
            <CustomInput label="Duracion del video" placeholder="Ingrese el tiempo en segundos" />
            <!-- <CustomInput label="Tipo de Contenido" /> -->
            <CustomInput label="Objetivo" placeholder="Ejemplo: Promocionar una marca de cerveza" />
            <CustomInput label="Nombre del producto" placeholder="Ejemplo: Pilsener" />
            <div class="w-full flex flex-row justify-between">
                <span class="h-10 w-1/2 flex items-center justify-end">Idea</span>
                <textarea class="h-30 border rounded w-1/2 mx-10 text-white p-5"
                    placeholder="Ingresa que es lo que quisieras hacer, lo que te han solicitado mencionar..."></textarea>
            </div>
            <CustomInput label="Publico" placeholder="Ninos, jovenes, amas de casa, publico general..." />
            <CustomInput label="Palabras clave" placeholder="pilsener, promocion, cerveza..." />
        </div>
    </section>
</template>
