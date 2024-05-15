<template>
    <div>navbar</div>

    <ButtonVue label="I'm navbar button" v-on:click="promptHoi" />
</template>

<script>
import ButtonVue from './Button.vue';

export default {
    name: 'NavbarVue',
    components: {
        ButtonVue,
    },
    methods: {
        promptHoi: function() {
            alert('hoi');
        },
    }
}
</script>

<style scoped>
</style>