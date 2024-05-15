<template>
    <button class="btn" v-on:click="this.$emit('click')">{{ label }}</button>
</template>

<script>
export default {
    name: 'ButtonVue',
    props: [
        'label',
    ],
}
</script>

<style scoped>
.btn {
    background-color: aqua;
    padding: 12px;
    border-radius: 4px;
    cursor: pointer;
}
</style>