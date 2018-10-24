export const mapElement = ({ name, module, prop = module, id, self }) => {

    if (name == null || module == null || id == null) {
        throw new Error(`Map element method requires these properties: 'name, module, id'`);
    }

    return {
        [name]: {
            set(data) {
                this.$store.commit('assets/update', { id, data, prop });
            },
            get() {
                return this.$store.state[module][prop][id];
            }
        }
    };
};

/* Example usage
    import { mapElement } from '@/store/helpers';

    ...mapElement({
        name: 'asset',
        module: 'assets',
        id: 3
    })
*/
