import Tag from '../src/models/tag'


export const seed = async function (knex): Promise<any> {
    console.log('[BlockHub] Seeding tags')

    await knex('tags').del()
    await knex.raw('TRUNCATE TABLE tags RESTART IDENTITY CASCADE')


    const tags = [
        "Game",
        "Item",
        "Released",
        "RPG",
        "Fantasy",
        "Strategy",
        "Turn-Based",
        "Turn-Based Stategy",
        "Online Co-Op",
        "Multiplayer",
        "Action",
        "Platformer",
        "Indie",
        "Sci-fi",
        "Local Co-Op",
        "2D",
        "New",
        "Featured",
        "Upcoming",
        "sale",
        "specials",
        "Open World",
        "Singleplayer",
        "Third Person",
        "Adventure",
        "RTS",
        "Military",
        "Cold War",
        "Wargame",
        "Realistic",
        "Free to Play",
        "Shooter",
        "FPS",
        "Gore",
        "Demons",
        "First-Person",
        "Trending",
        "Top Seller",
        "Casual",
        "Shoot 'Em Up",
        "Puzzle",
        "Music",
        "Rhythm",
        "Great Soundtrack",
        "Sniper",
        "Stealth",
        "World War II",
        "Co-op",
        "Tactical",
        "War",
        "Fishing",
        "Simulation",
        "Sports",
        "Massively Multiplayer",
        "Medieval",
        "Historical",
        "Grand Strategy",
        "Turn-Based Strategy"
    ]

    const data: Array<any> = []

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
