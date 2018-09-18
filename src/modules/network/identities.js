const identites = {
    state: {
        identities: []
    },
    mutations: {
        ADD_IDENTITY (state) {
            state.identites.push({
                name: '',
                wallet: '',
                img: 'https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
                default: false,
                edit: false
            });
        },
        UPDATE_IDENTIY (state, payload) {
            const { identityKey, data } = payload;
            for (let key in data) {
                state.identites[identityKey][key] = data[key];
            }
        },
        DELETE_IDENTITY (state, identityKey) {
            state.identites.splice(identityKey, 1);
        }
    }
}

export default identities;
