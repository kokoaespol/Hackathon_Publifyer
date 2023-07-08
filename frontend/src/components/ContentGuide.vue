<script setup>
import { inject, ref } from "vue"

const videoService = inject("services.video");

const video = await videoService.getScript();

</script>

<template>
    <div>
        <p>Aquí un par de sugerencias antes de crear tu contenido</p>
        <div class="grid grid-cols-2 gap-4" v-for="[key, value] in Object.entries(video)" :key="key.id">
            <h2>{{key}}</h2>
            <p>{{value}}</p>
        </div>
    </div>
</template>