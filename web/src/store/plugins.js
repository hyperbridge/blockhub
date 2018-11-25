let timeout = 0;

export const saveDB = store => {
    store.subscribe((mutation, state) => {

        const saveableMutations = ['application/UPDATE_CLIENT_SETTINGS'];

        if (saveableMutations.includes(mutation.type)) {
            timeout = setTimeout(window.BlockHub.DB.save, 500);
        };
    });

    // store.subscribeAction((action, state) => {
        // console.log('action', action)

        // if (mutation.payload) {
        //     const { payload, type } = mutation;
        //     const [payloadKey] = Object.keys(payload);

        //     if (payloadKey.includes('_')) {
        //         const [prop, id] = payloadKey.split('_');
        //         store.commit(type, { id, prop, data: payload });
        //     }
        // }
        // console.log(action.type)
        // console.log(action.payload)
    // })
};
