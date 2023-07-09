<script setup>
const props = defineProps(['step'])
const pasos = ['generación', 'verificación', 'sugerencias', 'publicación'] 

</script>

<template>
    <div class="flex flex-row justify-around" >
        <div class="py-4 px-4 flex flex-col justify-center" v-for="(item, index) in pasos">
            <h3 :class="{'opacity-75': parseInt(step) !== index+1}">{{  item.charAt(0).toUpperCase() + item.slice(1) }}</h3>
            <p class="text-center text-lg rounded-full w-6 mx-auto mt-2 bg-color1F text-white" :class="{'bg-color3G': parseInt(step) === index + 1}">{{  index + 1 }}</p>
        </div>
    </div>
</template>