/* eslint-disable no-console */
import Vue from 'vue'
import FormData from 'form-data'
import * as DB from '@/db'
import * as Bridge from '@/framework/desktop-bridge'

let localState = {
    externalState: {},
    brands: {
        blockhub: {
            name: 'BlockHub',
            domain: 'blockhub.gg',
            homeLink: 'https://blockhub.gg'
        },
        thor: {
            name: 'Thor',
            domain: 'thor.gg',
            homeLink: 'https://thor.gg'
        },
        gamemask: {
            name: 'GameMask',
            domain: 'gamemask.io',
            homeLink: 'https://gamemask.io'
        },
        netero: {
            name: 'Netero',
            domain: 'netero.com',
            homeLink: 'https://netero.com'
        }
    },
    activeBrand: 'thor',
    version: '0.8.1',
    initialized: false,
    adminMode: false,
    environmentMode: 'local',
    decentralizedMode: false,
    extensionMode: false,
    locked: false,
    signedIn: false,
    loading: false,
    simulatorMode: false,
    desktopMode: null,
    developerMode: null,
    profileChooser: false,
    accessOverride: false,
    operatingSystem: null,
    editorMode: 'viewing',
    activeModal: null,
    activeNotification: null,
    tokenCount: 0,
    settings: {
        client: {
            animations: true,
            autoplay: false,
            pagination: true,
            hideWelcomeModal: false,
            cookiePolicyAccepted: false,
            sounds: false,
            interfaceInteractionSounds: false
        }
    },
    currentEthereumNetwork: 'local',
    shortcuts: [
        {
            r: 255,
            g: 255,
            b: 255,
            image: '/img/icons/grid.png',
            textColor: '#43434d',
            eventKey: 'application/activeModal',
            eventValue: 'missionControl',
            text: 'Open Grid',
            sort: 1,
            removable: false
        },
        {
            r: 255,
            g: 255,
            b: 255,
            image: '/img/icons/store.png',
            to: '/',
            text: 'Go to store',
            sort: 2,
            removable: false
        },
        {
            r: 255,
            g: 255,
            b: 255,
            icon: 'fa fa-plus',
            textColor: '#43434d',
            eventKey: 'application/activeModal',
            eventValue: 'createShortcut',
            text: 'Create',
            sort: -1,
            removable: false
        }
    ],
    ethereum: {
        mainnet: {
            packages: {
                token: {
                    contracts: {
                        EternalStorage: {
                            name: 'EternalStorage',
                            link: 'https://github.com/hyperbridge/protocol/blob/master/packages/token/smart-contracts/ethereum/contracts/EternalStorage.sol',
                            createdAt: 1541861913124,
                            address: '0x306b5cf6f9ee067b676a3a6be0dff0b5df2f629f'
                        },
                        TokenLib: {
                            links: [],
                            name: 'TokenLib',
                            link: 'https://github.com/hyperbridge/protocol/blob/master/packages/token/smart-contracts/ethereum/contracts/TokenLib.sol',
                            createdAt: 1541862015914,
                            address: '0x1ee9faa44d313a1d2e4bfa135ffb15c6f0da8a27'
                        },
                        Token: {
                            links: [],
                            name: 'Token',
                            link: 'https://github.com/hyperbridge/protocol/blob/master/packages/token/smart-contracts/ethereum/contracts/Token.sol',
                            createdAt: 1541862092379,
                            address: '0x2be42c6d0c022a49258256cb2d46aeb7b1bb994d'
                        },
                        TokenDelegate: {
                            links: [
                                {
                                    name: 'TokenLib',
                                    address: null
                                }
                            ],
                            name: 'TokenDelegate',
                            link: 'https://github.com/hyperbridge/protocol/blob/master/packages/token/smart-contracts/ethereum/contracts/TokenDelegate.sol',
                            createdAt: 1541862170010,
                            address: '0x2793a23341012e0970cf478bab08606b56504c3e'
                        }
                    },
                    userFromAddress: '0x41bd0e132b2d09abb1259cbd245f90117a432c69'
                },
                reserve: {
                    contracts: {
                        TokenSale: {
                            name: 'TokenSale',
                            link: 'https://github.com/hyperbridge/protocol/blob/master/packages/reserve/smart-contracts/ethereum/contracts/TokenSale.sol',
                            createdAt: 1541870837408,
                            links: [],
                            address: '0xebf0027ef3b4b7a742a148cddb0f2b14e5d8f0e9'
                        }
                    },
                    userFromAddress: '0x41bd0e132b2d09abb1259cbd245f90117a432c69'
                },
                marketplace: {
                    contracts: {
                        MarketplaceStorage: {
                            name: 'MarketplaceStorage',
                            link: 'https://github.com/hyperbridge/protocol/blob/master/packages/marketplace/smart-contracts/ethereum/contracts/MarketplaceStorage.sol',
                            createdAt: null
                        },
                        Administration: {
                            links: [
                                {
                                    name: 'MarketplaceStorage',
                                    address: null
                                }
                            ],
                            name: 'Administration',
                            link: 'https://github.com/hyperbridge/protocol/blob/master/packages/marketplace/smart-contracts/ethereum/contracts/Administration.sol',
                            createdAt: null
                        },
                        DeveloperStorageAccess: {
                            name: 'DeveloperStorageAccess',
                            link: 'https://github.com/hyperbridge/protocol/blob/master/packages/marketplace/smart-contracts/ethereum/contracts/DeveloperStorageAccess.sol',
                            createdAt: null
                        },
                        ProductStorageAccess: {
                            name: 'ProductStorageAccess',
                            link: 'https://github.com/hyperbridge/protocol/blob/master/packages/marketplace/smart-contracts/ethereum/contracts/ProductStorageAccess.sol',
                            createdAt: null
                        },
                        AdministrationStorageAccess: {
                            name: 'AdministrationStorageAccess',
                            link: 'https://github.com/hyperbridge/protocol/blob/master/packages/marketplace/smart-contracts/ethereum/contracts/AdministrationStorageAccess.sol',
                            createdAt: null
                        },
                        Bytes32Utils: {
                            name: 'Bytes32Utils',
                            link: 'https://github.com/hyperbridge/protocol/blob/master/packages/marketplace/smart-contracts/ethereum/contracts/Bytes32Utils.sol',
                            createdAt: null
                        },
                        BytesUtils: {
                            name: 'BytesUtils',
                            link: 'https://github.com/hyperbridge/protocol/blob/master/packages/marketplace/smart-contracts/ethereum/contracts/BytesUtils.sol',
                            createdAt: null
                        },
                        StringUtils: {
                            name: 'StringUtils',
                            link: 'https://github.com/hyperbridge/protocol/blob/master/packages/marketplace/smart-contracts/ethereum/contracts/StringUtils.sol',
                            createdAt: null
                        },
                        ProductRegistration: {
                            links: [
                                {
                                    name: 'BytesUtils',
                                    address: null
                                },
                                {
                                    name: 'MarketplaceStorage',
                                    address: null
                                }
                            ],
                            name: 'ProductRegistration',
                            link: 'https://github.com/hyperbridge/protocol/blob/master/packages/marketplace/smart-contracts/ethereum/contracts/ProductRegistration.sol',
                            createdAt: null
                        },
                        ProductLanguageSupport: {
                            links: [
                                {
                                    name: 'MarketplaceStorage',
                                    address: null
                                }
                            ],
                            name: 'ProductLanguageSupport',
                            link: 'https://github.com/hyperbridge/protocol/blob/master/packages/marketplace/smart-contracts/ethereum/contracts/ProductLanguageSupport.sol',
                            createdAt: null
                        },
                        ProductSystemRequirement: {
                            links: [
                                {
                                    name: 'MarketplaceStorage',
                                    address: null
                                }
                            ],
                            name: 'ProductSystemRequirement',
                            link: 'https://github.com/hyperbridge/protocol/blob/master/packages/marketplace/smart-contracts/ethereum/contracts/ProductSystemRequirement.sol',
                            createdAt: null
                        },
                        ProductPricePlan: {
                            links: [
                                {
                                    name: 'MarketplaceStorage',
                                    address: null
                                }
                            ],
                            name: 'ProductPricePlan',
                            link: 'https://github.com/hyperbridge/protocol/blob/master/packages/marketplace/smart-contracts/ethereum/contracts/ProductPricePlan.sol',
                            createdAt: null
                        },
                        ProductVersion: {
                            links: [
                                {
                                    name: 'MarketplaceStorage',
                                    address: null
                                }
                            ],
                            name: 'ProductVersion',
                            link: 'https://github.com/hyperbridge/protocol/blob/master/packages/marketplace/smart-contracts/ethereum/contracts/ProductVersion.sol',
                            createdAt: null
                        },
                        ProductVersionVoting: {
                            links: [
                                {
                                    name: 'MarketplaceStorage',
                                    address: null
                                }
                            ],
                            name: 'ProductVersionVoting',
                            link: 'https://github.com/hyperbridge/protocol/blob/master/packages/marketplace/smart-contracts/ethereum/contracts/ProductVersionVoting.sol',
                            createdAt: null
                        },
                        ProductPurchase: {
                            links: [
                                {
                                    name: 'StringUtils',
                                    address: null
                                },
                                {
                                    name: 'MarketplaceStorage',
                                    address: null
                                }
                            ],
                            name: 'ProductPurchase',
                            link: 'https://github.com/hyperbridge/protocol/blob/master/packages/marketplace/smart-contracts/ethereum/contracts/ProductPurchase.sol',
                            createdAt: null
                        },
                        Developer: {
                            links: [
                                {
                                    name: 'DeveloperStorageAccess',
                                    address: null
                                },
                                {
                                    name: 'MarketplaceStorage',
                                    address: null
                                }
                            ],
                            name: 'Developer',
                            link: 'https://github.com/hyperbridge/protocol/blob/master/packages/marketplace/smart-contracts/ethereum/contracts/Developer.sol',
                            createdAt: null
                        }
                    },
                    userFromAddress: '0x41bd0e132b2d09abb1259cbd245f90117a432c69'
                },
                funding: {
                    contracts: {
                        FundingStorage: {
                            name: 'FundingStorage',
                            link: 'https://github.com/hyperbridge/protocol/blob/master/packages/funding/smart-contracts/ethereum/contracts/FundingStorage.sol',
                            createdAt: null
                        },
                        DeveloperStorageAccess: {
                            name: 'DeveloperStorageAccess',
                            link: 'https://github.com/hyperbridge/protocol/blob/master/packages/funding/smart-contracts/ethereum/contracts/DeveloperStorageAccess.sol',
                            createdAt: null
                        },
                        ProjectStorageAccess: {
                            name: 'ProjectStorageAccess',
                            link: 'https://github.com/hyperbridge/protocol/blob/master/packages/funding/smart-contracts/ethereum/contracts/ProjectStorageAccess.sol',
                            createdAt: null
                        },
                        ContributionStorageAccess: {
                            name: 'ContributionStorageAccess',
                            link: 'https://github.com/hyperbridge/protocol/blob/master/packages/funding/smart-contracts/ethereum/contracts/ContributionStorageAccess.sol',
                            createdAt: null
                        },
                        FundingVault: {
                            name: 'FundingVault',
                            link: 'https://github.com/hyperbridge/protocol/blob/master/packages/funding/smart-contracts/ethereum/contracts/FundingVault.sol',
                            createdAt: null
                        },
                        Developer: {
                            links: [
                                {
                                    name: 'DeveloperStorageAccess',
                                    address: null
                                }
                            ],
                            name: 'Developer',
                            link: 'https://github.com/hyperbridge/protocol/blob/master/packages/funding/smart-contracts/ethereum/contracts/Developer.sol',
                            createdAt: null
                        },
                        Contribution: {
                            links: [
                                {
                                    name: 'ContributionStorageAccess',
                                    address: null
                                },
                                {
                                    name: 'ProjectStorageAccess',
                                    address: null
                                }
                            ],
                            name: 'Contribution',
                            link: 'https://github.com/hyperbridge/protocol/blob/master/packages/funding/smart-contracts/ethereum/contracts/Contribution.sol',
                            createdAt: null
                        },
                        ProjectTimeline: {
                            name: 'ProjectTimeline',
                            link: 'https://github.com/hyperbridge/protocol/blob/master/packages/funding/smart-contracts/ethereum/contracts/ProjectTimeline.sol',
                            createdAt: null
                        },
                        ProjectTimelineHelpersLibrary: {
                            links: [
                                {
                                    name: 'ProjectStorageAccess',
                                    address: null
                                }
                            ],
                            name: 'ProjectTimelineHelpersLibrary',
                            link: 'https://github.com/hyperbridge/protocol/blob/master/packages/funding/smart-contracts/ethereum/contracts/ProjectTimelineHelpersLibrary.sol',
                            createdAt: null
                        },
                        ProjectTimelineProposal: {
                            links: [
                                {
                                    name: 'ProjectTimelineHelpersLibrary',
                                    address: null
                                }
                            ],
                            name: 'ProjectTimelineProposal',
                            link: 'https://github.com/hyperbridge/protocol/blob/master/packages/funding/smart-contracts/ethereum/contracts/ProjectTimelineProposal.sol',
                            createdAt: null
                        },
                        ProjectContributionTierHelpersLibrary: {
                            links: [
                                {
                                    name: 'ProjectStorageAccess',
                                    address: null
                                }
                            ],
                            name: 'ProjectContributionTierHelpersLibrary',
                            link: 'https://github.com/hyperbridge/protocol/blob/master/packages/funding/smart-contracts/ethereum/contracts/ProjectContributionTierHelpersLibrary.sol',
                            createdAt: null
                        },
                        ProjectMilestoneCompletion: {
                            links: [
                                {
                                    name: 'ProjectTimelineHelpersLibrary',
                                    address: null
                                }
                            ],
                            name: 'ProjectMilestoneCompletion',
                            link: 'https://github.com/hyperbridge/protocol/blob/master/packages/funding/smart-contracts/ethereum/contracts/ProjectMilestoneCompletion.sol',
                            createdAt: null
                        },
                        ProjectRegistrationHelpersLibrary: {
                            links: [
                                {
                                    name: 'ProjectStorageAccess',
                                    address: null
                                }
                            ],
                            name: 'ProjectRegistrationHelpersLibrary',
                            link: 'https://github.com/hyperbridge/protocol/blob/master/packages/funding/smart-contracts/ethereum/contracts/ProjectRegistrationHelpersLibrary.sol',
                            createdAt: null
                        },
                        ProjectRegistration: {
                            links: [
                                {
                                    name: 'FundingStorage',
                                    address: null
                                },
                                {
                                    name: 'ProjectRegistrationHelpersLibrary',
                                    address: null
                                },
                                {
                                    name: 'ProjectTimelineHelpersLibrary',
                                    address: null
                                },
                                {
                                    name: 'ProjectContributionTierHelpersLibrary',
                                    address: null
                                }
                            ],
                            name: 'ProjectRegistration',
                            link: 'https://github.com/hyperbridge/protocol/blob/master/packages/funding/smart-contracts/ethereum/contracts/ProjectRegistration.sol',
                            createdAt: null
                        },
                        CurationStorageAccess: {
                            name: 'CurationStorageAccess',
                            link: 'https://github.com/hyperbridge/protocol/blob/master/packages/funding/smart-contracts/ethereum/contracts/CurationStorageAccess.sol',
                            createdAt: null
                        },
                        Curation: {
                            links: [
                                {
                                    name: 'CurationStorageAccess',
                                    address: null
                                },
                                {
                                    name: 'ProjectStorageAccess',
                                    address: null
                                }
                            ],
                            name: 'Curation',
                            link: 'https://github.com/hyperbridge/protocol/blob/master/packages/funding/smart-contracts/ethereum/contracts/Curation.sol',
                            createdAt: null
                        }
                    },
                    userFromAddress: '0x41bd0e132b2d09abb1259cbd245f90117a432c69'
                }
            }
        },
        ropsten: {
            packages: {
                token: {
                    contracts: {}
                },
                reserve: {
                    contracts: {}
                },
                marketplace: {
                    contracts: {}
                },
                funding: {
                    contracts: {}
                }
            }
        },
        local: {
            packages: {
                token: {
                    contracts: {}
                },
                reserve: {
                    contracts: {}
                },
                marketplace: {
                    contracts: {}
                },
                funding: {
                    contracts: {}
                }
            }
        }
    },
    connection: {
        auto: false,
        internet: false,
        datasource: false,
        operator: false,
        ethereum: false,
        status: {
            code: null,
            message: `Launching..`
        }
    },
    userSubmittedConnectionMessages: [
        {
            id: 1,
            message: `wubba lubba dub dubbbb`,
            user: {
                id: 1,
                name: 'fr0stbyte'
            }
        },
        {
            id: 2,
            message: `The body achieves, what the mind believes`,
            user: {
                id: 2,
                name: 'GymTim'
            }
        },
        {
            id: 3,
            message: `Leeroooooy Jeeeenkiiiiins!`,
            user: {
                id: 1,
                name: 'fr0stbyte'
            }
        },
        {
            id: 4,
            message: `Well, at least I have chicken!`,
            user: {
                id: 1,
                name: 'fr0stbyte'
            }
        },
        {
            id: 6,
            message: `Your lack of faith is disturbing`,
            user: {
                id: 1,
                name: 'fr0stbyte'
            }
        },
        {
            id: 7,
            message: `Many whelps. Handle it! Who was that!? That's a 50 DKP minus!!`,
            user: {
                id: 1,
                name: 'fr0stbyte'
            }
        },
        {
            id: 8,
            message: `Maybe Elon was right about AI`,
            user: {
                id: 1,
                name: 'fr0stbyte'
            }
        },
        {
            id: 9,
            message: `I can dance all day, try to hit me, come on, try to hit me`,
            user: {
                id: 1,
                name: 'fr0stbyte'
            }
        },
        {
            id: 10,
            message: `My hands are shaking, but I'm still shooting, still getting headshots like BOOM headshot BOOM HEADSHOT!`,
            user: {
                id: 1,
                name: 'fr0stbyte'
            }
        },
        {
            id: 11,
            message: `Drinking too much will make chuck sick`,
            user: {
                id: 4,
                name: 'Spyder'
            }
        },
        {
            id: 12,
            message: `The cake is a lie.`,
            user: {
                id: 5,
                name: 'JordoBrooks'
            }
        }
    ],
    updates: [],
    currencies: [
        {
            code: 'USD',
            symbol: '$',
            name: 'United States Dollar',
            country: 'us'
        },
        {
            code: 'RUB',
            symbol: '₽',
            name: 'Russian ruble',
            country: 'ru'
        },
        {
            code: 'BTC',
            symbol: '₿',
            name: 'Bitcoin'
        },
        {
            code: 'ETH',
            symbol: 'E',
            name: 'Ethereum'
        },
        {
            code: 'DAI',
            symbol: 'D',
            name: 'Dau'
        }
    ],
    languages: [
        {
            code: 'pl',
            name: 'Poland',
            native: 'Polski'
        },
        {
            code: 'gb',
            name: 'United Kingdom',
            native: 'GB'
        },
        {
            code: 'us',
            name: 'English',
            native: 'English'
        },
        {
            code: 'ru',
            name: 'Russian',
            native: 'Русский'
        },
        {
            code: 'ua',
            name: 'Ukrainian',
            native: 'Українська'
        },
        {
            code: 'cn',
            name: 'Chinese',
            native: '繁體中文'
        }
    ],
    activeProfile: {
        id: null,
        name: 'Default',
        role: 'user',
        reputation: 0,
        badges: [],
        assets: [],
        licenses: [],
        products: [],
        messages: [],
        address: null,
        passphrase: null,
        privateKey: null,
        productWishlist: {},
        productFavorites: {},
        events: []
    },
    account: {
        address: null,
        verificationTimestamp: null,
        isVerified: false,
        isVerifying: false,
        firstName: null,
        lastName: null,
        birthday: null,
        password: null,
        email: null,
        currency: {},
        language: {},
        notifications: [],
        wallets: [],
        profiles: [],
        idts: [],
        projectWishlist: { 1: true },
        projectFavorites: {},
        savedPaths: [
            '/home/leafo/.config/itch/apps',
            'C:/Users/Tom/Program Files/apps',
            '/home/games'
        ],
        friendsList: [4, 5],
        tradeLinkId: '478',
        id: 1
    },
    video: {
        src: '',
        currentTime: 0,
        showPopup: false
    }
}

export const state = () => localState

const getOS = () => {
    if (!process.client) {
        return 'node'
    }

    const { userAgent } = window.navigator
    const { platform } = window.navigator
    const macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K']
    const windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE']
    const iosPlatforms = ['iPhone', 'iPad', 'iPod']
    const os = null

    if (macosPlatforms.indexOf(platform) !== -1) {
        return 'mac'
    } else if (iosPlatforms.indexOf(platform) !== -1) {
        return 'ios'
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
        return 'windows'
    } else if (/Android/.test(userAgent)) {
        return 'android'
    } else if (!os && /Linux/.test(platform)) {
        return 'linux'
    }
    return 'unknown'
}

const updateState = (savedData, updatedState = {}) => {
    localState = {
        ...localState,
        ...savedData,
        status: {
            code: null,
            message: null
        },
        settings: {},
        shortcuts: savedData.shortcuts != null ? savedData.shortcuts : [],
        operatingSystem: savedData.operatingSystem != null ? savedData.operatingSystem : getOS(),
        ...updatedState
    }

    localState.connection.internet = true
    localState.connection.datasource = true

    if (updatedState.locked !== undefined) {
        localState.locked = updatedState.locked
    }

    if (localState.desktopMode === null) {
        localState.desktopMode = process.client && window.isElectron
    }
}

export const getters = {
    privileges(state) {
        const result = []

        if (state.desktopMode) {
            result.push('desktopMode')
        }

        if (state.signedIn) {
            result.push('signedIn')
        }

        if (state.developerMode) {
            result.push('developerMode')
        }

        if (state.verifiedAccount) {
            result.push('verifiedAccount')
        }

        if (state.hyperbridgeAccount) {
            result.push('hyperbridgeAccount')
        }

        return result
    }
}

export const actions = {
    init(store, payload) {
        console.log('[BlockHub][Application] Initializing...')

        updateState(DB.store.data[0].application, store.state)

        localState.connection.status.code = null
        localState.connection.status.message = 'Establishing connection...'

        store.commit('updateState', localState)

        store.dispatch('checkInternetConnection')
        store.dispatch('checkEthereumConnection')

        setInterval(() => {
            if (store.state.connection.auto) {
                store.dispatch('checkEthereumConnection')
            }
        }, 5000)
    },
    updateState(store, payload) {
        console.log('[BlockHub][Application] Updating store...')

        updateState(store.state, payload)

        store.commit('updateState', localState)
    },
    activeModal(store, payload) {
        if (payload) {
            if (process.client) {
                window.ga('send', 'event', 'Modal', 'Show Modal', 'Show Modal', payload, { 'NonInteraction': 1 })
            }
        }

        if (store.state.desktopMode) {
            if (store.state.signedIn) {
                store.commit('activeModal', payload)
            } else {
                store.commit('activeModal', 'login')
            }
        } else {
            store.commit('activeModal', 'welcome')
        }
    },
    async login(store, payload) {
        await store.dispatch('auth/authenticate', { strategy: 'local', email: payload.email, password: payload.password }, { root: true })

        await store.dispatch('authenticate')

        store.commit('signedIn', true)
    },
    logout(store) {
        store.commit('signedIn', false)
    },
    async authenticate(store, payload) {
        await store.dispatch('profiles/find', {
            query: {
                accountId: store.rootState.accounts.currentId,
                $sort: {
                    createdAt: -1
                },
                $limit: 25
            }
        }, { root: true })

        store.state.activeProfile = store.rootState.profiles.keyedById[(store.state.activeProfile && store.state.activeProfile.id) || store.rootState.profiles.ids[0]]
        store.state.developerMode = store.state.activeProfile && store.state.activeProfile.role === 'developer'
        store.state.editorMode = 'viewing'
        store.commit('signedIn', true)
    },
    setEditorMode(store, payload) {
        store.commit('setEditorMode', payload)

        // if (!store.state.settings.client.hideEditorWelcomeModal) {
        //     store.commit('activeModal', 'editor-welcome')
        // }
    },
    // unlockAccount(store, payload) {
    //     Bridge.resolvePromptPasswordRequest(payload.password.value)

    //     // Bridge.sendCommand('getAccountRequest', data).then((res) => {
    //     //     store.state.account.address = res.account.address

    //     //     store.state.password_required = true
    //     //     //store.state.signedIn = true
    //     // })
    // },
    initEthereum(store, payload) {
        // Bridge.initProtocol({ protocolName: 'application' }).then((config) => {
        //     store.state.ethereum[store.state.currentEthereumNetwork] = config
        //     store.dispatch('updateState')
        // })
    },
    checkEthereumConnection(store, payload) {
        const success = () => {
            store.state.connection.ethereum = true
            store.state.connection.datasource = true

            store.state.connection.status.code = null
            store.state.connection.status.message = null
        }

        const failure = err => {
            store.state.connection.ethereum = true
            store.state.connection.datasource = true

            // store.state.connection.status.code = 344
            // store.state.connection.status.message = err

            // TODO: fallback to peer datasource
        }

        // TODO
        // Ethereum.init().then(success, failure).catch(failure)
    },
    checkInternetConnection(store, payload) {
        return // stop DDOSing
        // console.log('[BlockHub] Connection status: ' + JSON.stringify(store.state.connection))

        if (!navigator.onLine) {
            store.commit('setInternetConnection', { connected: false, message: `Could not connect to the internet. Some features may not be available. Please check your firewall or internet connection.` })
        }

        const xhr = new XMLHttpRequest()
        const file = 'https://blockhub.gg/static/img/blank.png'
        const randomNum = Math.round(Math.random() * 10000)

        xhr.open('HEAD', `${file}?rand=${randomNum}`, true)
        xhr.send()

        function processRequest(e) {
            if (xhr.readyState === 4) {
                try {
                    if (xhr.status >= 200 && xhr.status < 304) {
                        store.commit('setInternetConnection', { connected: true, message: `Connected.` })
                        store.state.connection.datasource = true // TEMP
                    } else {
                        store.commit('setInternetConnection', { connected: false, message: `Could not connect to the internet. Some features may not be available. Please check your firewall or internet connection.` })
                    }
                } catch (err) {
                    console.log(err)
                }
            }
        }

        xhr.addEventListener('readystatechange', processRequest, false)
    },
    deployContract(store, { protocolName, contractName, oldContractAddress }) {
        return new Promise((resolve, reject) => {
            Bridge
                .deployContract({ protocolName, contractName, oldContractAddress })
                .then(contract => {
                    localState.ethereum[localState.currentEthereumNetwork].packages[protocolName].contracts[contractName] = contract
                    store.dispatch('updateState')

                    resolve(contract)
                })
        })
    },
    async sendCommand(store, { key, data }) {
        await Bridge.sendCommand(key, data)
    },
    createTradeUrl({ commit, state }) {
        // async call => delete previous trade url
        // state.account.tradeLinkId
        commit('createTradeUrl', getId())
    }
}

export const mutations = {
    updateState(state, payload) {
        for (const x in payload) {
            Vue.set(state, x, payload[x])
        }
    },
    addShortcut(state, shortcut) {
        state.shortcuts.push(shortcut)
    },
    removeShortcut(state, index) {
        state.shortcuts.splice(index, 1)
    },
    updateShortcut(state, shortcut) {
        if (state.shortcuts.find(s => s.id === shortcut.id)) {
            state.shortcuts.splice(state.shortcuts.findIndex(s => s.id === shortcut.id), 1)
        } else {
            state.shortcuts.push(shortcut)
        }
    },
    showNotification(state, notification) {
        state.activeNotification = notification
        state.activeModal = 'notification'
    },
    updateFavorites2({ account }, { prop = 'productWishlist', id }) {
        const foundKey = account[prop].findIndex(savedId => savedId === id)
        foundKey
            ? account[prop].push(id)
            : account[prop].splice(foundKey, 0)
        return Boolean(foundKey)
    },
    updateFavorites({ account }, { prop = 'productWishlist', id }) {
        // Optional -> object
        if (account[prop][id]) {
            const { [id]: deleted, ...rest } = account[prop]
            delete rest[id]
            account[prop] = rest
        } else {
            account[prop] = { ...account[prop], [id]: true }
        }
    },
    async updateEnvironmentMode(state, payload) {
        state.environmentMode = payload

        await this.$desktop.sendCommand('setEnvironmentMode', payload)
    },
    createTradeUrl(state, id) {
        state.account.tradeLinkId = id
    },
    signedIn(state, payload) {
        state.signedIn = payload
    },
    setEditorMode(state, payload) {
        state.editorMode = payload
    },
    setInternetConnection(state, payload) {
        state.connection.internet = payload.connected
        state.connection.status.message = payload.message
    },
    setSimulatorMode(state, payload) {
        state.simulatorMode = payload
    },
    showProfileChooser(state, payload) {
        state.profileChooser = payload
    },
    enableDarklaunch(state, payload) {
        const darklaunch = state.account.darklaunchFlags.find(darklaunch => darklaunch.code === payload)

        if (darklaunch) {
            darklaunch.enabled = true
        } else {
            state.account.darklaunchFlags.push({
                code: payload,
                enabled: true
            })
        }
    },
    disableDarklaunch(state, payload) {
        const darklaunch = state.account.darklaunchFlags.find(darklaunch => darklaunch.code === payload)

        if (darklaunch) {
            darklaunch.enabled = false
        } else {
            state.account.darklaunchFlags.push({
                code: payload,
                enabled: false
            })
        }
    },
    beforeLoadRoute(state, payload) {
        state.loading = true
    },
    afterLoadRoute(state, payload) {
        state.loading = false
    },
    submitTransaction(state, payload) {
        const success = id => {
        }
    },
    entry(state, payload) {
        // send .key and .value to sheet
        const bodyFormData = new FormData()

        bodyFormData.set('entry.524169597', payload.key)
        bodyFormData.set('entry.399172045', payload.value)
        bodyFormData.set('entry.832916558', payload.user || '')

        this.$axios({
            method: 'post',
            url: 'https://docs.google.com/forms/d/1W1_7UuaDjjCKp08vSllvyKZTQRCSej9kd743Z2N1NvY/formResponse',
            data: bodyFormData,
            config: { headers: { 'Content-Type': 'multipart/form-data' } }
        })
            .then(res => {
                // cb && cb()
            })
            .catch(err => {
                console.log('An error occurred. Please check your input or try again later.')
            })
    },
    activeModal(state, payload) {
        console.log('[BlockHub] Activating modal:', payload)
        state.activeModal = payload
    },
    convertCurator(state, payload) {
        Bridge.sendCommand('createCuratorRequest', payload.profile).then(data => {
            payload.profile.role = 'curator'
            state.curatorMode = true

            // TODO: just redirect here?
        })
    },
    updateClientSettings(state, { key, value }) {
        value = value || !state.settings.client[key]

        Vue.set(state.settings.client, key, value)

        state.settings.client[key] = value
    },
    activeModalData(state, payload) {
        state.activeModalData = payload
    }
}
