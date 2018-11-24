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
        },
        offers: {
            bids: [ASSETS, 'offerBids'],
            seller: [COMMUNITY, 'offersSeller']
        }
    },
    [COMMUNITY]: {
        identities: {
            inventory: [ASSETS, 'assets'],
            messages: [COMMUNITY, 'messages'],
            friends: [COMMUNITY, 'identities']
        }
    }
};



export const findRelation = (module, target, prop) =>
    (relations[module][target] && relations[module][target][prop])
    || [module, prop];


export const decompose = (destination, data) =>
    data.reduce((mutations, singleItem) => {
        const item = { ...singleItem };

        const [module, target] = destination.split('/');
        const relation = relations[module][target];

        const decompRelation = (relation, items) => {
            for (let item of items) {
                for (let prop in relation) {
                    if (item[prop]) {

                        const [propModule, propTarget] = relation[prop];
                        const mutName = `${propModule}/${propTarget}`;

                        mutations[mutName] = mutations[mutName] || [];
                        const checkType = arr => Array.isArray(arr) ? arr : [arr];
                        mutations[mutName] = [...mutations[mutName], ...checkType(item[prop])];

                        const subRelation = relations[propModule][propTarget];
                        if (subRelation) {
                            const subValue = Array.isArray(item[prop]) ? item[prop] : [item[prop]];
                            decompRelation(subRelation, subValue);
                        }

                        if (Array.isArray(item[prop])) item[prop] = item[prop].map(el => el.id);
                        else item[prop] = item[prop].id;
                    }
                }
            }
        }

        decompRelation(relation, [item]);

        mutations[destination].push(item);
        return mutations;
    }, { [destination]: [] });


export const findRelationPaths = destination => {
    const [module, target] = destination.split('/');
    const relationPaths = [`${module}/${target}`];

    const relation = relations[module] && relations[module][target];

    const findRelation = relation => {
        for (let key in relation) {
            const [module, target] = relation[key];
            relationPaths.push(`${module}/${target}`);

            const subRelation = relations[module] && relations[module][target];

            if (subRelation) findRelation(subRelation);
        }
    }

    findRelation(relation);
    return relationPaths;
}


/* example usage

(parsing/normalizing posts data)

const posts = [
    {
        id: 11,
        messages: [{
            id: 22,
            txt: 'Hi',
            authors: [{
                id: 33,
                inventory: [{ id: 41, name: 'Armor' }],
                images: [{ id: 42, src: 'someimgsrc' }]
            }]
        }]
    }
];

decompose('community/posts', posts);
=>> ** output **
{
  'community/posts': [ { id: 11, messages: [22] } ],
  'community/messages': [ { id: 22, txt: 'Hi', authors: [33] } ],
  'community/identities': [ { id: 33, inventory: [41], images: [42] } ],
  'assets/assets': [ { id: 41, name: 'Armor' } ],
  'community/pictures': [ { id: 42, src: 'someimgsrc' } ] }
}

*/

export default relations;
