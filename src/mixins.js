export const debouncer = {
    data() {
        return {
            timeout: null,
            debounceTime: 300
        }
    },
    methods: {
        debounce(fn) {
            clearTimeout(this.timeout);
            this.timeout = setTimeout(fn, this.debounceTime);
        }
    }
};
