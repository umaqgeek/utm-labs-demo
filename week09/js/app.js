const App = Vue.createApp({
    data() {
        return {
            books: [
                { id: 1, title: 'Math book', author: 'Umar Mukhtar' },
                { id: 2, title: 'History book', author: 'Nurul' },
                { id: 3, title: 'English literature', author: 'Ahmad' },
            ],
            id: '',
            title: '',
            author: '',
        };
    },
    methods: {
        greet: function() {
            alert('haha');
        },
        addBook: function() {
            this.books.push({
                id: this.id,
                title: this.title,
                author: this.author,
            });
        },
    },
});

App.mount("#app");