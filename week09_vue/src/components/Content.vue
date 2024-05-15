<template>
    <div>content</div>
    <table class="table table-bordered">
        <thead>
            <tr>
                <th>#.</th>
                <th>Title</th>
                <th>Author</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="book in books" v-bind:key="book.id">
                <td>{{ book.id }}</td>
                <td>{{ book.title }}</td>
                <td>{{ book.author }}</td>
            </tr>
        </tbody>
    </table>

    <br />

    <ButtonVue label="Click Me" v-on:click="testAlert" />

</template>

<script>
import ButtonVue from './Button.vue';

export default {
    name: 'ContentVue',
    components: {
        ButtonVue
    },
    data() {
        return {
            books: [
                { id: 1, title: 'Math book', author: 'Umar Mukhtar' },
                { id: 2, title: 'History book', author: 'Nurul' },
                { id: 3, title: 'English literature', author: 'Ahmad' },
            ]
        };
    },
    methods: {
        testAlert: function() {
            alert('Hello');
        },
    },
}
</script>

<style scoped>
</style>