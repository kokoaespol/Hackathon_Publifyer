<script setup>
import { inject, ref } from "vue"
import CustomLabeledInput from "./CustomLabeledInput.vue"
import CustomButton from "./CustomButton.vue";
import NavBar from "./NavBar.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const genieService = inject("services.genie");
const name = 'Alina'
const action = () => {
    const information = {
        brand: brand.value,
        subject: subject.value,
        idea: idea.value,
        audience: audience.value,
        keywords: keywords.value,
        durationInSeconds: durationInSeconds.value,
    }
    // genieService.generateSuggestions(information);
    console.log(information);
    router.push("/guide");
}
const selectedValue = ref(0);
const options = [
    { label: 'Personal', value: 0 },
    { label: 'Publicidad', value: 1 },
]
const durationInSeconds = ref(0);
const subject = ref("");
const brand = ref("");
const idea = ref("");
const audience = ref("");
const keywords = ref("");

</script>

<template>
    <section class="relative w-full h-full p-10">
        <!-- Navbar -->
        <NavBar color="color1F" />
        <div class="w-full max-w-4xl m-auto mt-10">
            <!-- Title -->
            <div>
                <h1 class="text-2xl">{{ name + ", que quieres publicar hoy?" }}</h1>
            </div>
            <!-- Breadcrumbs -->
            <!-- Content -->
            <div class="relative flex flex-col justify-center w-full gap-10 mt-10 mx-auto">
                <!-- Type of content options -->
                <div class="w-full flex flex-row justify-between">
                    <span class="h-10 w-1/4 flex items-center justify-end">Tipo de Publicacion</span>
                    <div class="h-10 w-3/4 mx-10 p-5 flex gap-10 items-center">

                        <label v-for="option in options" :key="option.value">
                            <input type="radio" :value="option.value" v-model="selectedValue" />
                            {{ option.label }}
                        </label>
                    </div>
                </div>
                <CustomLabeledInput v-if="selectedValue === 1" v-model="brand" label="Nombre de la Marca"
                    placeholder="Ejemplo: Pilsener" />
                <CustomLabeledInput v-model="subject" label="Tema de la publicacion"
                    placeholder="Ejemplo: Promocionar una marca de cerveza" />
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
                <CustomLabeledInput v-model="durationInSeconds" label="Duracion del video"
                    placeholder="Ingrese el tiempo en segundos" />
                <!-- Footer -->
                <div class="flex justify-end">
                    <CustomButton label="Generar Sugerencias" :action="action" />
                </div>
            </div>
        </div>
    </section>
</template>
