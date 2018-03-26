import Immutable from 'immutable'

import Blockhub from 'blockhub-protocol'

import db from '../app/db/db'

export const APP_LISTING_REQUEST = 'network/APP_LISTING_REQUEST'


const initialApp = {
    name: null
}

const initialState = {
    apps: {
        upcoming: [],
        newTrending: [],
        topSellers: [],
        specials: []
    },
    games: {
        upcoming: [],
        newTrending: [],
        topSellers: [],
        specials: []
    },
    selectedApp: null
}

initialState.apps = {
    upcoming: db.marketplace.apps.find({ 'republicTags': { '$contains': ['app'] } }),
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


initialState.selectedApp = initialState.apps.specials[0]

export default (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        default:
            return state
    }
}

// get apps by tag topSellers upcoming newTrending 

export const getAppListing = (dispatch) => {

    return {
        type: APP_LISTING_REQUEST
    }
}

let abi = null

export const fetchABI = async () => {
    if (abi)
        return abi

    return await new Promise((resolve) => {
        fetch("/contracts/Marketplace.json").then((data) => {
            abi = data.json()

            resolve(abi)
        })
    })
}

export const getApp = async (id) => {
    const abi = await fetchABI()

    Blockhub.Ethereum.Models.Marketplace.init(abi, "0x6bfeee909953693ed3958b5dfca3876e0eb2a31a")

    return Blockhub.Ethereum.Models.Marketplace.apps[0]//db.marketplace.apps.findOne({ id: id })
}

export const submitApp = (name, version, category, files, checksum, permissions) => {
    return function action(dispatch) {
        fetchABI().then((abi) => {
            Blockhub.Ethereum.Models.Marketplace.init(abi, "0x6bfeee909953693ed3958b5dfca3876e0eb2a31a")

            Blockhub.Ethereum.Models.Marketplace.submitAppForReview(name, version, category, files, checksum, permissions).then(() => {
                dispatch({
                    type: APP_LISTING_REQUEST
                })
            })
        })
    }
}