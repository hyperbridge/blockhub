export const debouncer = {
    data() {
        return {
            timeout: null
        }
    },
    methods: {
        debounce(fn, debounceTime = 250, timeout = this.timeout) {
            clearTimeout(timeout);
            timeout = setTimeout(fn, debounceTime);
        }
    }
};
