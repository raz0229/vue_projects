const app = Vue.createApp({
    //template: '<p>This is a template</p>'
    data() {
        return {
            persons: [
                {name: 'Raja Abdullah Zafar', age: 18, ismarried: false},
                {name: 'Rabbia Naz', age: 20, ismarried: false},
                {name: 'Ghausia Naz', age: 30, ismarried: true},
                {name: 'Wajia Sahreen', age: 16, ismarried: false},
                {name: 'Raja Zafar Iqbal', age: 64, ismarried: true},
            ],
            src: 'assets/vuejs.png',
            showInfo: false,
            x: 0,
            y: 0
        }
    },
    methods: {
        resetAge() {
            this.persons[0].age = 0;
        },
        event(e) {
            console.log(e.type);
        },
        handlePos(e) {
            this.x = e.offsetX;
            this.y = e.offsetY;
        },
        togglemarried(person) {
            person.ismarried = !person.ismarried;
        }
    },
    computed: {
        filterMarried() {
            return this.persons.filter((person) => person.ismarried);
        }
    }
});

app.mount('#app');