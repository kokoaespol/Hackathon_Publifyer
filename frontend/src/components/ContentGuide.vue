<script setup>
import { inject } from "vue"

const videoService = inject("services.video");

const video = videoService.getScript();

</script>

<template>
    <div>
        <p>Aquí un par de sugerencias antes de crear tu contenido</p>
        <div class="grid grid-cols-2 gap-4">
            <p>g</p>
            <p>p</p>
        </div>
    </div>
</template>