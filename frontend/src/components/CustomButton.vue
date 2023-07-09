<script>
export default {
    props: {
        label: String,
        action: Function
    }
}
</script>

<template>
    <div>
        <button
            class="h-12 px-8 rounded bg-color1F hover:bg-opacity-80 focus:bg-opacity-95 flex items-center font-semibold text-white"
            @click="action">{{
                label
            }}</button>
    </div>
</template>