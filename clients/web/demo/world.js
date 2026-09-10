import seed from './seed-world.json'

const asset = value => `${process.env.PAGES_BASE}${value.replace(/^\//, '')}`
const date = '2018-08-15T12:00:00.000Z'

export function createWorld(products) {
    const world = JSON.parse(JSON.stringify(seed), (key, value) => typeof value === 'string'
        ? value.replace(/(^|["'(])\/(img|assets-3d)\//g, `$1${process.env.PAGES_BASE}$2/`)
        : value)
    const image = asset('img/no_img.jpg')
    const avatar = asset('img/user.png')
    const images = { main: image, mediumTile: image, icon: image, header: asset('img/realm_bg.jpg'), preview: [asset('img/realm_bg.jpg')] }
    world.profiles = world.profiles.map(profile => ({
        ...profile, role: 'user', img: avatar, avatar, reputation: 120, badges: [], events: [], assets: [], licenses: [], products, wallets: [],
        productFavorites: {}, projectFavorites: {}, projectWishlist: {},
        meta: { images: { avatar }, description: 'A sample member of the BlockHub community.', badges: [], location: 'BlockHub' }
    }))
    world.assets = world.assets.map(item => ({
        ...item, image, logo: asset('img/logo-only.png'), tags: [], images,
        meta: { images, description: `${item.name} from the original BlockHub item catalog.`, rarity: 'Rare' }
    }))
    world.assets.forEach(item => {
        item.offersList = item.offersList.map(id => world.assets.find(asset => asset.id === id)).filter(Boolean).map(asset => ({ id: asset.id, name: asset.name, image: asset.image, price: asset.price, count: asset.count }))
        item.inventoryList = item.inventoryList.map(id => world.assets.find(asset => asset.id === id)).filter(Boolean).map(asset => ({ id: asset.id, name: asset.name, image: asset.image, price: asset.price, count: asset.count }))
    })
    world.collections = world.collections.map((collection, index) => ({
        id: collection.id,
        name: ['Armory', 'Rare Finds', 'Adventure Kit', 'Trading Shelf', 'Collector Favorites'][index],
        updatedAt: date,
        meta: { author: collection.author, estimatedValue: collection.estimatedValue, assets: collection.assets, background: asset('img/collection-bg-1.jpeg') },
        resources: collection.assets.filter(id => world.assets.some(item => item.id === id)).map((id, index) => ({ id: index + 1, relationType: 'Asset', toAssetId: id }))
    }))
    world.projects = world.projects.map(project => ({
        ...project, description: 'A virtual gym adventure built around movement, exploration, and community challenges.',
        images, tags: ['lifestyle', 'vr', 'gym'], community: { discussions: [] }, ownerId: 1, createdAt: date, updatedAt: date,
        meta: { ...project.meta, images, description: 'A virtual gym adventure.', content: project.about, badges: [], owner: world.profiles[0], plans: project.pledges, about: { funds: project.meta.funds } }
    }))
    world.ideas = world.ideas.map(idea => ({
        ...idea, description: 'A community proposal for exploring a classic fantasy world together.', tags: ['MMORPG', 'Community'], ownerId: 1,
        meta: { images: { ...images, header: asset('img/realms/3/bg.png') }, description: 'A community proposal for exploring a classic fantasy world together.', owner: world.profiles[0], badges: [], content: '<p>Join the conversation about a community-run classic realm, shared quests, and new adventures.</p>' }
    }))
    world.realms = world.realms.map(realm => ({ ...realm, products }))
    world.messages = world.messages.map((message, index) => ({ ...message, id: index + 1, value: message.content, replies: [], meta: { author: { id: 1, name: 'Satoshi', img: avatar }, rate: index + 1 } }))
    world.communities = ['General Discussion', 'Game Forums', 'Support'].map((name, index) => ({ id: index + 1, name, type: 'forum', author: 'Satoshi', tags: [], category: ['general', 'gameForums', 'support'][index], meta: { icon: 'fas fa-comments', lastPostTime: date, discussionsCount: 2, images, description: 'Meet the BlockHub community.' }, discussions: [] }))
    world.discussions = [
        ['Welcome to BlockHub', 'Explore games, collect items, and meet the community. These posts use sample data.'],
        ['What are you playing?', 'Share your next adventure and browse the game catalog.'],
        ['Getting started', 'Use the demo navigation to explore account, marketplace, and creator screens.']
    ].map(([name, value], index) => ({ id: index + 1, name, value, slug: ['welcome', 'games', 'getting-started'][index], communityId: index + 1, community: world.communities[index], createdAt: date, messages: world.messages.slice(index, index + 2), meta: { author: { id: 1, name: 'Satoshi', img: avatar }, actionStatus: 'starred', rate: 24, commentsCount: 2 } }))
    world.communities.forEach(community => { community.discussions = world.discussions.filter(item => item.communityId === community.id).map(item => ({ ...item, community: undefined })) })
    world.products = products
    world.licenses = products.slice(0, 3).map((product, index) => ({ id: index + 1, name: product.name, productId: product.id, product, meta: { status: 'Owned', images: product.meta.images } }))
    world.bounties = world.bounties.map((bounty, index) => ({ ...bounty, id: index + 1, name: ['Explore the demo', 'Share game feedback'][index], title: ['Explore the demo', 'Share game feedback'][index], meta: { description: bounty.text, prize: bounty.prize } }))
    world.tags = ['Action', 'Adventure', 'RPG', 'Indie', 'Multiplayer'].map((name, index) => ({ id: index + 1, name }))
    world.search = products.map(product => ({ ...product, resourceType: 'Product' }))
    world.transactions = world['asset-transactions'].map((transaction, index) => ({ ...transaction, id: index + 1, createdAt: date, updatedAt: date, createdBy: transaction.author, you: world.profiles.find(profile => profile.id === transaction.you), contractor: world.profiles.find(profile => profile.id === transaction.contractor), yourOffer: transaction.yourOffer.map(id => world.assets.find(asset => asset.id === id)), contractorOffer: transaction.contractorOffer.map(id => world.assets.find(asset => asset.id === id)), messages: [] }))
    return world
}
