<script setup>
import { ref } from 'vue'

defineProps({
    msg: String,
})

const count = ref(0)
</script>

<template>
    <h1>{{ msg }}</h1>

    <button class="bg-gray-400 p-3 rounded-md hover:bg-gray-300 hover:text-lg transition-all h-20 w-40" type="button" @click="count++">count is: {{ count }} 5</button>
</template>

<style scoped>
a {
    color: #42b983;
}
</style>
