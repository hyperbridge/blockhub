const APPLICATION = 'application';
const ASSETS = 'assets';
const COMMUNITY = 'community';


const relations = {
    [APPLICATION]: {
        account: {
            idts: [COMMUNITY, 'identities'],
            friends_list: [COMMUNITY, 'identities']
        }
    },
    [ASSETS]: {
        trxs: {
            messages: [COMMUNITY, 'messages']
        },
        transactions: {
            messages: [COMMUNITY, 'messages'],
            yourOffer: [ASSETS, 'assets'],
            contractorOffer: [ASSETS, 'assets']
        }
    },
    [COMMUNITY]: {

    }
};

export const findRelationV1 = (module, target, prop) =>
    (relations[module][target] && relations[module][target][prop]) || module;

    /* Upgraded ver */
export const findRelation = (module, target, prop) =>
    (relations[module][target] && relations[module][target][prop])
    || [module, prop];


const decompose = (data, destination) => {
    const [module, target] = destination.split('/');
    const relation = relations[module][target];

    const decomposed = data.map(item => {
        const decompItem = { ...item };

        for (let key in item) {
            if (relation && relation[key]) {
                decompItem[key].map(val => val.id);
            }
        }


    });
};


const data = [
    { id: 1, yourOffer: [{ id: 1, name: 'Armor'}, { id: 1, name: 'Armor'}] },
    { id: 2, yourOffer: [{ id: 3, name: 'Armor'}, { id: 4, name: 'Armor'}] },
]


// decompose(data, ['assets/transactions']);



export default relations;
