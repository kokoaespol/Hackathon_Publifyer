<script>
export default {
    props: {
        placeholder: String,
    }
}
</script>

<template>
    <div class="w-full flex flex-row justify-between">
        <input class="h-12 shadow shadow-color5P rounded w-full mx-2 p-5 border-0 focus:shadow-color3G hover:shadow-color1F"
            :placeholder="placeholder" />
    </div>
</template>