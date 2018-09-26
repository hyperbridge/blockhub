export const debouncer = {
    data() {
        return {
            timeout: 0
        }
    },
    methods: {
        debounce(fn, debounceTime = 250, timeout = 'timeout') {
            clearTimeout(this[timeout]);
            this[timeout] = setTimeout(fn, debounceTime);
        }
    }
};

export const arrayHandler = {
    methods: {
        handleArray(val, arrayName) {
            const itemIndex = this[arrayName].indexOf(val);
            itemIndex > -1
                ? this[arrayName].splice(itemIndex, 1)
                : this[arrayName].push(val);
        }
    }
};
