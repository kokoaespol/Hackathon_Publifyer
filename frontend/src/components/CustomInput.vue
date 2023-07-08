<script>
export default {
  props: {
    label: String,
    placeholder: String,
  }
}
</script>

<template>
  <div class="w-full flex flex-row justify-between">
    <span class="h-10 w-1/4 flex items-center justify-end">{{ label }}</span>
    <input class="h-10 shadow shadow-color5P rounded w-3/4 mx-10 p-5 border-0 focus:shadow-color3G hover:shadow-color1F"
      :placeholder="placeholder" />
  </div>
</template>