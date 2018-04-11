import Immutable from 'immutable'

import Blockhub from 'blockhub-protocol'

import db from '../app/db/db'

export const APP_LISTING_REQUEST = 'network/APP_LISTING_REQUEST'
export const APP_LISTING_RESPONSE = 'network/APP_LISTING_RESPONSE'
export const APP_DETAIL_REQUEST = 'network/APP_DETAIL_REQUEST'
export const APP_DETAIL_RESPONSE = 'network/APP_DETAIL_RESPONSE'
export const VOTE_FOR_APP_REQUEST = 'network/VOTE_FOR_APP_REQUEST'
export const VOTE_FOR_APP_RESPONSE = 'network/VOTE_FOR_APP_RESPONSE'
export const UPDATE_APP_VOTES_REQUEST = 'network/UPDATE_APP_VOTES_REQUEST'
export const UPDATE_APP_VOTES_RESPONSE = 'network/UPDATE_APP_VOTES_RESPONSE'
export const SUBMIT_APP_FOR_REVIEW_REQUEST = 'network/SUBMIT_APP_FOR_REVIEW_REQUEST'
export const SUBMIT_APP_FOR_REVIEW_RESPONSE = 'network/SUBMIT_APP_FOR_REVIEW_RESPONSE'
export const SETUP_CONTRACTS_REQUEST = 'network/SETUP_CONTRACTS_REQUEST'
export const SETUP_CONTRACTS_RESPONSE = 'network/SETUP_CONTRACTS_RESPONSE'
export const FETCH_CONTRACT_META_RESPONSE = 'network/FETCH_CONTRACT_META_RESPONSE'
export const LOCAL_DATA_TO_BLOCKCHAIN_SYNC_REQUEST = 'network/LOCAL_DATA_TO_BLOCKCHAIN_SYNC_REQUEST'
export const LOCAL_DATA_TO_BLOCKCHAIN_SYNC_RESPONSE = 'network/LOCAL_DATA_TO_BLOCKCHAIN_SYNC_RESPONSE'


const network = {
    ropsten: {
        marketplaceContract: "0x7ed7885cbc32668242a53b806ce676980ebb084e",
        userFromAddress: "0x66fb0ff9a23e90f3f205a406fd3253532919fb69",
        userToAddress: ""
    },
    local: {
        marketplaceContract: "0x8cdaf0cd259887258bc13a92c0a6da92698644c0",
        userFromAddress: "0x627306090abaB3A6e1400e9345bC60c78a8BEf57",
        userToAddress: ""
    }
}

const currentNetwork = "local"

const initialApp = {
    name: null
}

const initialState = {
    contractMeta: null,
    contractAddress: null,
    user: {
        permissions: {
            auditing: false
        }
    },
    apps: {
        all: [],
        upcoming: [],
        newTrending: [],
        topSellers: [],
        specials: []
    },
    games: {
        all: [],
        upcoming: [],
        newTrending: [],
        topSellers: [],
        specials: []
    },
    selectedApp: null
}

initialState.apps = {
    all: db.marketplace.apps.find({ 'republicTags': { '$contains': ['app'] } }),
    upcoming: db.marketplace.apps.find({ 'republicTags': { '$contains': ['app', 'upcoming'] } }),
    newTrending: db.marketplace.apps.find({ 'republicTags': { '$contains': ['app', 'newTrending'] } }),
    topSellers: db.marketplace.apps.find({ 'republicTags': { '$contains': ['app', 'topSellers'] } }),
    specials: db.marketplace.apps.find({ 'republicTags': { '$contains': ['app', 'specials'] } })
}

initialState.games = {
    all: db.marketplace.apps.find({ 'republicTags': { '$contains': ['game'] } }),
    upcoming: db.marketplace.apps.find({ 'republicTags': { '$contains': ['upcoming', 'game'] } }),
    newTrending: db.marketplace.apps.find({ 'republicTags': { '$contains': ['newTrending', 'game'] } }),
    topSellers: db.marketplace.apps.find({ 'republicTags': { '$contains': ['topSellers', 'game'] } }),
    specials: db.marketplace.apps.find({ 'republicTags': { '$contains': ['specials', 'game'] } })
}

// var specials = db.marketplace.apps.addDynamicView('specials')
// specials.applyFind({ 'republicTags': { '$contains': 'specials' } })
// specials.applySimpleSort('id')

// initialState.apps.specials = specials.data()



let contractMeta = null
let contractAddress = null

export default (state = initialState, action) => {
    switch (action.type) {
        case APP_LISTING_RESPONSE:
            return state //{ ...state, apps: { ...state.apps, all: action.apps } }

        case FETCH_CONTRACT_META_RESPONSE:
            contractMeta = state.contractMeta
            return { ...state, contractMeta: action.contractMeta }

        case SETUP_CONTRACTS_RESPONSE:
            contractAddress = state.contractAddress
            return { ...state, contractAddress: action.contractAddress }

        case APP_DETAIL_RESPONSE:
            const app = db.marketplace.apps.findOne({ 'id': action.app.id })
            app.name = action.app.name

            db.marketplace.apps.update(app)

            const apps = db.marketplace.apps.find({ 'republicTags': { '$contains': ['app'] } })
            
            return { ...state, selectedApp: action.app, apps: { ...state.apps, all: apps } }

        default:
            return state
    }
}

export const fetchContractMeta = async (key) => {
    console.log("Fetching contract meta from server", arguments)

    if (contractMeta)
        return contractMeta

    return await new Promise((resolve) => {
        fetch("/contracts/" + key + ".json").then((data) => {
            contractMeta = data.json()

            resolve(contractMeta)
        })
    })
}



export const getApp = (id) => {
    console.log("Getting app by ID: ", id)

    return dispatch => {
        // let app = db.marketplace.apps.findOne({ id: id })

        // if (app) {
        //     dispatch({
        //         type: APP_DETAIL_RESPONSE,
        //         app: app
        //     })
        // }

        Blockhub.Ethereum.Models.Marketplace.getApp(id).then((res) => {
            const app = {
                id: id,
                name: res.name,
                author: {
                    id: res.appOwner
                },
                type: "game",
                rating: res.votes,
                downloads: 100,
                category: res.category,
                files: res.files,
                authorTags: ["demo"],
                repubicTags: ["demo"]
            }

            dispatch({
                type: APP_DETAIL_RESPONSE,
                app: app
            })
        })

        return {
            type: APP_DETAIL_REQUEST
        }
    }
}

export const setupContracts = () => {
    console.log("Setting up contracts", arguments)

    return dispatch => {
        fetchContractMeta("Marketplace").then((contractMeta) => {
            dispatch({
                type: FETCH_CONTRACT_META_RESPONSE,
                contractMeta: contractMeta
            })

            const contract = new window.web3.eth.Contract(contractMeta.abi)

            contract.deploy({
                data: contractMeta.bytecode
            }).send({
                from: network[currentNetwork].userFromAddress,
                gas: 4500000
            }).then((res) => {
                contractAddress = res._address

                dispatch({
                    type: SETUP_CONTRACTS_RESPONSE,
                    contractAddress: contractAddress
                })
            })
        })

        return {
            type: SETUP_CONTRACTS_REQUEST
        }
    }
}

// get apps by tag topSellers upcoming newTrending 

export const getAppListing = () => {
    console.log("Geting app listing by filters: ", [null])

    return dispatch => {
        // let apps = null

        // if (apps) {
        //     dispatch({
        //         type: APP_LISTING_RESPONSE,
        //         apps: apps
        //     })
        //     return
        // }

        Blockhub.Ethereum.Models.Marketplace.listApps(0, 0).then((res) => {
            const apps = res

            if (!apps) return

            dispatch({
                type: APP_LISTING_RESPONSE,
                apps: apps
            })

            apps.forEach((appId) => {
                getApp(appId)(dispatch)
            })
        })

        return {
            type: APP_LISTING_REQUEST
        }
    }
}


export const voteForApp = (id, version, vote) => {
    console.log("Voting for app", arguments)

    return dispatch => {
        Blockhub.Ethereum.Models.Marketplace.voteForApp(id, version, vote).then(() => {
            dispatch({
                type: VOTE_FOR_APP_RESPONSE
            })
        })

        return {
            type: VOTE_FOR_APP_REQUEST
        }
    }
}

export const updateAppVotes = (id, version) => {
    console.log("Updating app votes", arguments)

    return dispatch => {
        Blockhub.Ethereum.Models.Marketplace.updateAppVotes(id, version).then(() => {
            dispatch({
                type: UPDATE_APP_VOTES_RESPONSE
            })
        })

        return {
            type: UPDATE_APP_VOTES_REQUEST
        }
    }
}


export const submitApp = (name, version, category, files, checksum, permissions) => {
    console.log("Submitting app", arguments)

    return dispatch => {
        Blockhub.Ethereum.Models.Marketplace.submitAppForReview(name, version, category, files, checksum, permissions).then((res) => {
            const app = db.marketplace.apps.findOne({ 'name': name })
            app.id = res[0]

            db.marketplace.apps.update(app)

            dispatch({
                type: SUBMIT_APP_FOR_REVIEW_RESPONSE,
                app: app
            })
        })

        return {
            type: SUBMIT_APP_FOR_REVIEW_REQUEST
        }
    }
}

export const syncLocalToBlockchain = () => {
    console.log("Syncing local data to blockchain", arguments)

    return (dispatch, getState, store) => {
        if (getState == null) {
            getState = store.getState
        }

        setupContracts()((event) => {
            dispatch(event)

            if (event.type === SETUP_CONTRACTS_RESPONSE) {
                Blockhub.Ethereum.Models.Marketplace.init(contractMeta, event.contractAddress, network[currentNetwork].userFromAddress)
                
                {
                    // get local apps
                    const apps = getState().marketplace.apps.all
                    const promises = []

                    // submit each app
                    apps.forEach((app, i) => {
                        console.log("Submitting local app: ", app)

                        const promise = new Promise((resolve, reject) => {
                            submitApp(app.name, '1', '1', '1', '1', 1)((event) => {
                                dispatch(event)
                                console.log(event.app.name, app.name, event.app)
                                if (event.type === SUBMIT_APP_FOR_REVIEW_RESPONSE && event.app.name === app.name) {
                                    const id = event.app.id

                                    voteForApp(id, '1', 1)((event) => {
                                        dispatch(event)

                                        updateAppVotes(id, 1)((event) => {
                                            dispatch(event)

                                            resolve()
                                        })
                                    })
                                }
                            })
                        })

                        promises.push(promise)
                    })

                    Promise.all(promises).then((values) => {
                        console.log("Submitted all apps")

                        // update listing
                        getAppListing(0, 0)((event) => {
                            dispatch(event)

                            dispatch({
                                type: LOCAL_DATA_TO_BLOCKCHAIN_SYNC_RESPONSE
                            })
                        })
                    })
                }

                {
                    const users = [] // TODO
                    const promises = []

                    // get user profiles
                    users.forEach((i, user) => {
                        const promise = new Promise((resolve, reject) => {
                            // submit each profile

                        })

                        promises.push(promise)
                    })
                }
            }
        })

        return {
            type: LOCAL_DATA_TO_BLOCKCHAIN_SYNC_REQUEST
        }
    }
}

export const syncBlockchainToLocal = () => {
    return dispatch => {
        fetchContractMeta("Marketplace").then((contractMeta) => {
            // get app listing

            // get app details

            // get user profile
        })

        return {
            type: SETUP_CONTRACTS_REQUEST
        }
    }
}
