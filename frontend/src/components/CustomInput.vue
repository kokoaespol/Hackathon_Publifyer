<script>
export default {
    props: {
      label: String,
      placeholder: String,
    },
    setup(props) {
      console.log(props.title)
    }
  }
</script>

<template>
    <div class="w-full flex flex-row justify-between">
        <span class="h-10 w-1/2 flex items-center justify-end">{{ label }}</span>
        <input class="h-10 border rounded w-1/2 mx-10 text-white p-5" :placeholder="placeholder"/>
    </div>
</template>