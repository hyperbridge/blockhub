let timeout = 0;

export const saveDB = store => {
    store.subscribe((mutation, state) => {

        const saveableMutations = ['application/UPDATE_CLIENT_SETTINGS'];

        if (saveableMutations.includes(mutation.type)) {
            timeout = setTimeout(window.BlockHub.DB.save, 500);
        };

    });
};
