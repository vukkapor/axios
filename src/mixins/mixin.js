var user = ''
var now = ""
var currentDate = ''
export const mixin1 = {
    created() {
        this.user = "MIXA"
        console.log('Mixin1');
    },
    methods: {
        getUserName() {
            alert(this.user)
        }
    }
}

export const mixin2 = {
    created() {
        this.user = "MIXIC"
        console.log('Mixin2');
    }
}

export const mixin3 = {
    mounted() {
        console.log('Mixin3');
    }
}

export const mixin4 = {
    mounted() {
        console.log('Mixin4');
    }
}

export const date = {
    data() {
        return {
            now: new Date(),
            currentDate: ''
        }
    },

    methods: {
        dateFormat() {
            now = new Date()
            return currentDate = new Intl.DateTimeFormat().format(now)
        }
    }
}