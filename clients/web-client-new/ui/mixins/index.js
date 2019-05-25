export const debounce = {
    data() {
        return {
            timeout: 0
        }
    },
    methods: {
        debounce(fn, debounceTime = 250, timeout = 'timeout') {
            clearTimeout(this[timeout])
            this[timeout] = setTimeout(fn, debounceTime)
        }
    }
}

export const handleArray = {
    methods: {
        handleArray(val, arrayName) {
            const itemIndex = this[arrayName].indexOf(val)
            itemIndex > -1
                ? this[arrayName].splice(itemIndex, 1)
                : this[arrayName].push(val)
        }
    }
}

export const getWindowSize = {
    data() {
        return {
            windowHeight: 0,
            windowWidth: 0
        }
    },
    created() {
        if (!process.client) { return }
        window.addEventListener('resize', this.getWindowSize)
        this.getWindowSize()
    },
    mounted() {
        if (!process.client) { return }
        this.getWindowSize()
    },
    beforeDestroy() {
        if (!process.client) { return }
        window.removeEventListener('resize', this.getWindowSize)
    },
    methods: {
        getWindowSize() {
            if (!process.client) { return }
            this.windowHeight = document.body.clientHeight
            this.windowWidth = document.body.clientWidth
        }
    }
}

function getTitle(vm) {
    const { title } = vm.$options
    if (title) {
        return typeof title === 'function'
            ? title.call(vm)
            : title
    }
}

// const serverTitleMixin = {
//     created() {
//         const title = getTitle(this)
//         if (title) {
//             this.$ssrContext.title = `BlockHub | ${title}`
//         }
//     }
// }

// const clientTitleMixin = {
//     mounted() {
//         const title = getTitle(this)
//         if (title) {
//             document.title = `BlockHub | ${title}`
//         }
//     }
// }

// export const title = process.env.VUE_ENV === 'server'
//     ? serverTitleMixin
//     : clientTitleMixin