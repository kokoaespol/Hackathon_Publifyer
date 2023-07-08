<script setup>
const props = defineProps(['step'])

const pasos = ['generación', 'verificación', 'sugerencias', 'publicación'];

</script>

<template>
    <div class="flex flex-row" >
        <div v-for="(item, index) in pasos">
            <h3>{{  item.charAt(0).toUpperCase() + item.slice(1) }}</h3>
            <p class="text-center">{{  index + 1 }}</p>
        </div>
    </div>
</template>