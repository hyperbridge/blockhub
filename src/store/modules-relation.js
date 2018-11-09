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
        trxs: { messages: COMMUNITY },
        transactions: { messages: COMMUNITY }
    },
    [COMMUNITY]: {

    }
};

export const findRelation = (module, target, prop) =>
    (relations[module][target] && relations[module][target][prop]) || module;

    /* Upgraded ver */
    const findRel = (module, target, prop) =>
        (relations[module][target] && relations[module][target][prop])
        || [module, prop];


export default relations;
