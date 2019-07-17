import Tag from '../src/models/tag'

export const data = [
    'Game',
    'Item',
    'Released',
    'RPG',
    'Fantasy',
    'Strategy',
    'Turn-Based',
    'Turn-Based Stategy',
    'Online Co-Op',
    'Multiplayer'
    "Action",
    "Platformer",
    "Indie",
    "Sci-fi",
    "Local Co-Op",
    "2D",
    "New",
    "Featured",
    "Upcoming",
    "upcoming",
    "trending",
    "topSeller",
    "sale",
    "specials",
    "RPG",
    "Open World",
    "Singleplayer",
    "Fantasy",
    "Third Person",
    "Adventure",
    "Strategy",
    "RTS",
    "Military",
    "Cold War",
    "Wargame",
    "Realistic"
    "Free to Play",
    "Multiplayer",
    "2D",
    "Action",
    "Platformer",
    "Shooter"
    "FPS",
    "Action",
    "Gore",
    "Demons",
    "Shooter",
    "First-Person",
    "sale",
    "featured",
    "trending",
    "topSeller",
    "specials",
    "topSeller",
    "specials"
    "upcoming"
    "trending"
    "Action",
    "Action",
    "Indie",
    "Casual",
    "Shoot 'Em Up",
    "Casual",
    "Puzzle",
    "Music",
    "Rhythm",
    "Great Soundtrack",
    "Indie",
    "Sniper",
    "Action",
    "Stealth",
    "World War II",
    "Co-op",
    "Shooter",
    "Strategy",
    "World War II",
    "Tactical",
    "War",
    "RTS",
    "Multiplayer",
    "Free to Play",
    "Fishing",
    "Simulation",
    "Multiplayer",
    "Sports",
    "Massively Multiplayer",
    "Medieval",
    "Open World",
    "RPG",
    "Realistic",
    "Historical",
    "First-Person",
    "Strategy",
    "Simulation",
    "Grand Strategy",
    "Historical",
    "Turn-Based",
    "Turn-Based Strategy"
]

export const seed = async function (knex): Promise<any> {
    console.log('[BlockHub] Seeding tags')

    await knex('tags').del()
    await knex.raw('TRUNCATE TABLE tags RESTART IDENTITY CASCADE')

    const data = []

    for (const tag of tags) {
        data.push({
            status: 'active',
            key: tag.toLowerCase(),
            name: tag,
            value: 'why is this required',
            meta: {}
        })
    }

    await Tag
        .query(knex)
        .upsertGraph(data, {
            relate: true
        })
}
