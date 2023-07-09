<script>
export default {
    props: {
        label: String,
        icon: String,
        action: Function
    }
}
</script>

<template>
    <div>
        <button class="h-10 p-5 rounded bg-color1F hover:bg-opacity-80 focus:bg-opacity-95 flex items-center"
            @click="action">{{
                label
            }}</button>
    </div>
</template>