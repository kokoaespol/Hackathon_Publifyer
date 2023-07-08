<script setup>
import { inject } from "vue"

import Step from "./Step.vue"

const videoService = inject("services.video");

const video = await videoService.getScript();
const data = Object.entries(video);
</script>

<template>
    <section class="w-full h-full">
        <h1 class="mx-4 my-6">Aquí un par de sugerencias antes de crear tu contenido</h1>
        <Step step="2"/>
        <div class="w-2/3 px-10 py-5 m-auto rounded-lg">
            <div class="grid grid-cols-[50%_50%] gap-2">
                <h2 class="my-3 text-center text-2xl mt-16">Ambiente</h2>
                <div class="my-3 px-6 bg-color2Y rounded-br-2xl w-full h-full drop-shadow-lg bg-opacity-50">
                    <p class="pt-4 my-3">{{ data[0][1] }}</p>
                </div>
                <div class="my-3 px-6 bg-color4O rounded-bl-2xl w-full h-full drop-shadow-lg mt-6 bg-opacity-50">
                    <p class="pt-4 my-3">{{  data[1][1] }}</p>
                </div>
                <h2 class="my-3 text-center text-2xl mt-20">Guión</h2>
            </div>
        </div>
    </section>
</template>