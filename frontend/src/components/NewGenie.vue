<script setup>
import { inject, ref } from "vue"
import CustomLabeledInput from "./CustomLabeledInput.vue"
import CustomButton from "./CustomButton.vue";
import NavBar from "./NavBar.vue";


const genieService = inject("services.genie");

const name = 'Alina'
const action = () => {
    const information = {
        duration: duration.value,
        objective: objective.value,
        productName: productName.value,
        idea: idea.value,
        audience: audience.value,
        keywords: keywords.value
    }
    genieService.generateSuggestions(information);
}
// variables bind to the inputs
const duration = ref(0);
const objective = ref("");
const productName = ref("");
const idea = ref("");
const audience = ref("");
const keywords = ref("");

</script>

<template>
    <section class="relative w-full h-full p-10 bg-opacity-30 bg-color3G">
        <!-- Navbar -->
        <NavBar color="color1F" />
        <div class="w-4/6 m-auto">


            <!-- Title -->
            <div>
                <h1 class="text-2xl">{{ name + ", que quieres publicar hoy?" }}</h1>
            </div>
            <!-- Breadcrumbs -->

            <!-- Content -->
            <div class="relative flex flex-col justify-center w-full p-10 gap-10 mt-10 mx-auto">
                <CustomLabeledInput v-model="duration" label="Duracion del video"
                    placeholder="Ingrese el tiempo en segundos" />
                <CustomLabeledInput v-model="objective" label="Objetivo"
                    placeholder="Ejemplo: Promocionar una marca de cerveza" />
                <CustomLabeledInput v-model="productName" label="Nombre del producto" placeholder="Ejemplo: Pilsener" />
                <div class="w-full flex flex-row justify-between">
                    <span class="h-10 w-1/4 flex items-center justify-end">Idea</span>
                    <textarea v-model="idea"
                        class="h-40 border-0 shadow shadow-color5P focus:shadow-color3G hover:shadow-color1F rounded w-3/4 mx-10 p-5"
                        placeholder="Ingresa que es lo que quisieras hacer, lo que te han solicitado mencionar..."></textarea>
                </div>
                <CustomLabeledInput v-model="audience" label="Publico"
                    placeholder="Ninos, jovenes, amas de casa, publico general..." />
                <CustomLabeledInput v-model="keywords" label="Palabras clave"
                    placeholder="pilsener, promocion, cerveza..." />
                <!-- Footer -->
                <div class="flex justify-end">
                    <CustomButton label="Generar Sugerencias" icon="" :action="action" />
                </div>
            </div>
        </div>
    </section>
</template>
