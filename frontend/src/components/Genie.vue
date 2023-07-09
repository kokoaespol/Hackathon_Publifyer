<script setup>
defineProps(["subject", "brand", "status"]);
</script>

<template>
  <div class="flex flex-col p-4 gap-4 border shadow rounded">
    <span class="font-bold">{{ subject }}</span>
    <div class="flex gap-2">
      <span class="text-color1F">x</span>
      <span>{{ brand }}</span>
    </div>
    <div class="flex gap-2">
      <span class="text-color3G">o</span>
      <span>{{ status }}</span>
    </div>
  </div>
</template>
