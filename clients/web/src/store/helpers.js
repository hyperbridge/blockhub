export const mapElement = ({ name, module, prop = module, id, action = false, setFn = 'update' }) => {

    if (name == null || module == null) {
        throw new Error(`Map element method requires these properties: 'name, module, id'.
            • Name - Name of the computed property that will evaluate to
            • Module - Vuex module
            • Id - Saved in data property (in format like 'name + Id' eg. productId: 3), or as 'id' prop, or hardcoded to mapElement method.
        `)
    }

    return {
        [name]: {
            set(data) {
                const id = id || this[name + 'Id'] || this.id
                this.$store[action ? 'dispatch' : 'commit'](`${module}/${setFn}`, { id, data, prop })
            },
            get() {
                const id = id || this[name + 'Id'] || this.id
                return this.$store.state[module][prop][id]
            }
        },
        [name + 'Clone']() {
            return { ...this[name] }
        }
    }
}

/* v2 */

export const mapEl = ({ name, module, target, id, idSource, action, getter = true, singular }) => {

    const path = `${module}/${target}`
    const propertyName = name || path

    if (!singular) {
        return {
            [propertyName]: {
                set(data) {
                    const id = id || this[idSource] || this.id
                    this.$store[action ? 'dispatch' : 'commit']('update', [path, id, data])
                },
                get() {
                    const id = id || this[idSource] || this.id
                    return getter
                        ? this.$store.getters[path][id]
                        : this.$store.state[module][target][id]
                }
            }
        }
    }

    return {
        [propertyName]: {
            set(data) {
                this.$store[action ? 'dispatch' : 'commit']('updateSingle', [path, data])
            },
            get() {
                return getter
                    ? this.$store.getters[path]
                    : this.$store.state[module][target]
            }
        }
    }
}

/* ...mapEl({
    name: 'asset'
    module: 'assets',
    target: 'transactions',
    idSource: 'id'
}) */

/*

    call Store._delete while null was assigned to mapped el e.g.
    asset = null

*/

/*  Example usage

    import { mapElement } from '@/store/helpers'

    data: () => ({ assetId: 2 }),
    computed: {
        ...mapElement({
            name: 'asset',
            module: 'assets',
        })
    }

*/
