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



export default relations;
