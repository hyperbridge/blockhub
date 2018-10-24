export const mapElement = ({ name, module, prop = module, id, action = false, setFn = 'update' }) => {

    if (name == null || module == null) {
        throw new Error(`Map element method requires at least these properties: 'name, module, id':
            • Name - Name of the computed property
            • Module - Vuex module
            • Id - Saved in data property (in format like 'name + Id' eg. productId: 3), or as 'id' prop, or hardcoded to mapElement method.
        `);
    }

    return {
        [name]: {
            set(data) {
                const id = id || this[name + 'Id'] || this.id;
                this.$store[action ? 'dispatch' : 'commit'](`${module}/${setFn}`, { id, data, prop });
            },
            get() {
                const id = id || this[name + 'Id'] || this.id;
                return this.$store.state[module][prop][id];
            }
        }
    };
};

/*  Example usage

    import { mapElement } from '@/store/helpers';

    data: () => ({ assetId: 2 }),
    computed: {
        ...mapElement({
            name: 'asset',
            module: 'assets',
        })
    }

*/
