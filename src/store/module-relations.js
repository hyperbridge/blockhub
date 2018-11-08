const COMMUNITY = 'community';
const ASSETS = 'assets';


const relations = {
    [ASSETS]: {
        trxs: { messages: COMMUNITY },
        transactions: { messages: COMMUNITY }
    },
    [COMMUNITY]: {

    }
};

export const findRelation = (module, target, prop) =>
    (relations[module][target] && relations[module][target][prop]) || module;


export default relations;
