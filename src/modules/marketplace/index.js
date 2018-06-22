import { normalize } from 'normalizr'
import schema from './schema'
import * as ethereum from '../../framework/ethereum'

const rawData = {
    products: [
        {
            id: '1',
            name: 'Word',
            type: 'app',
            downloads: 1000,
            images: {},
            owner: '0x0',
            author: {
                id: '0x0'
            },
            systemTags: ['app', 'upcoming'],
            authorTags: ['office']
        },
        {
            id: '5',
            name: 'Far Cry® 5',
            version: '1',
            images: {
                headerUrl: '/static/img/products/bless/headerUrl.png',
                mediumTileUrl: '/static/img/products/bless/mediumTileUrl.png'
            },
            shortDescription: 'Welcome to Hope County, Montana, home to a fanatical doomsday cult known as Eden’s Gate. Stand up to cult leader Joseph Seed & his siblings, the Heralds, to spark the fires of resistance & liberate the besieged community.',
            about: `Far Cry comes to America in the latest installment of the award-winning franchise.
Welcome to Hope County, Montana, land of the free and the brave but also home to a fanatical doomsday cult known as Eden’s Gate.Stand up to cult leader Joseph Seed, and his siblings, the Heralds, to spark the fires of resistance and liberate the besieged community.
FIGHT AGAINST A DEADLY CULT
Free Hope County in solo or two- player co-op.Recruit Guns and Fangs for hire to help defeat the cult.
A WORLD THAT HITS BACK
Wreak havoc on the cult and its members but beware of the wrath of Joseph Seed and his followers.
CARVE YOUR OWN PATH
Build your character and choose your adventure in the largest customizable Far Cry game ever!
DYNAMIC TOYS
Take control of iconic muscle cars, ATV's, planes and a lot more to engage the cult forces in epic fights.
RE-DEFINED STEALTH MECHANICS
Enhance your gameplay with eye tracking. Tag enemies by looking at them to increase your stealth skills and help your teammates spot threats. 
Compatible with all Tobii Eye Tracking gaming devices.
Additional notes: Eye tracking features available with Tobii Eye Tracking.`,
            type: 'game',
            downloads: 4000,
            owner: '0x0',
            author: {
                id: '0x0'
            },
            releaseDate: '26 Mar, 2018',
            website: "http://far-cry.ubisoft.com",
            developers: [
                {
                    id: '0x0',
                    name: 'Ubisoft Montreal'
                },
                {
                    id: '0x0',
                    name: 'Red Storm'
                }
            ],
            publishers: [,
                {
                    id: '0x0',
                    name: 'Ubisoft'
                }
            ],
            systemTags: ['game', 'upcoming'],
            authorTags: ['moba'],
            genre: ['Action', 'Adventure'],
            features: [
                'Single-player',
                'Multi-player',
                'Co-op',
                'Captions available',
                'In-App Purchase',
                'Partial Controller Support',
                'Includes level editor'
            ],
            systemRequirements: {
                minimum: {

                },
                recommended: {

                }
            },
            copyright: '© 2018 Ubisoft Entertainment. All Rights Reserved. Far Cry, Ubisoft and the Ubisoft logo are registered or unregistered trademarks of Ubisoft Entertainment in the US and/or other countries. Based on Crytek’s original Far Cry directed by Cevat Yerli. Powered by Crytek’s technology “CryEngine”.',
            reviewKey: 'aaa',
            similarKey: 'aaa',
            rating: [
                {
                    agency: 'ESRB',
                    title: 'Mature',
                    image: 'https://steamstore-a.akamaihd.net/public/images/ratings/esrb_m.gif',
                    warnings: [
                        'Blood and Gore',
                        'Intense Violence',
                        'Sexual Themes',
                        'Strong Language',
                        'Use of Drugs and Alcohol',
                        'Online Interactions Not Rated by the ESRB'
                    ]
                }
            ]
        },
        {
            id: '2',
            name: 'Fortnite',
            type: 'game',
            images: {},
            downloads: 4000,
            owner: '0x0',
            author: {
                id: '0x0'
            },
            systemTags: ['game', 'specials'],
            authorTags: ['fps']
        },
        {
            id: "3",
            name: "Tibia",
            images: {
                headerUrl: '/static/img/products/tibia/headerUrl.png',
                mediumTileUrl: '/static/img/products/tibia/mediumTileUrl.png'
            },
            type: 'game',
            downloads: 20,
            systemTags: ['game', 'specials'],
            author: {
                id: '0x0'
            },
            authorTags: ['mmo']
        },
        {
            id: "4",
            name: "Divvy",
            images: {},
            type: 'app',
            downloads: 0,
            systemTags: ['app', 'productivity', 'specials'],
            author: {
                id: '0x0'
            },
            authorTags: ['hotkeys']
        }
    ]
}

ethereum.init()

export default {
    state: normalize(rawData, { products: [schema.product] }),
    getters: {
        getProduct(state) {
            return state.entities.products['5']
        }
    },
    actions: {
        viewProduct(id) {
            console.log('viewProduct', id)
        },
        updateProductTitle({ commit, state }, payload) {
            ethereum.getUserBalance().then((balance) => {
                commit('updateProductTitle', { id: '5', name: balance })
            })

            commit('updateProductTitle', payload)
        }
    },
    mutations: {
        updateProductTitle(state, { id, name }) {
            state.entities.products[id].name = name
        }
    }
}