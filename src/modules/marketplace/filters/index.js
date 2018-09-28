
const filters = {
    state: {
        filters: {
            phrase: '',
            price: {
                min: 0,
                max: 0
            },
            specials: [],
            genres: [],
            languages: [],
        }
    },
    mutations: {

    },
    actions: {},
    getters: {
        productsArr: state => state.products instanceof Array ? state.products : Object.values(state.products),
    }
};

export default filters;
