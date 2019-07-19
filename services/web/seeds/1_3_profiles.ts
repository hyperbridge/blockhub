import Profile from '../src/models/profile'

export const seed = async function (knex): Promise<any> {
    console.log('[BlockHub] Seeding profiles')

    await knex('profiles').del()
    await knex.raw('TRUNCATE TABLE profiles RESTART IDENTITY CASCADE')

    const data = [
        {
            status: 'active',
            name: 'Profile name',
            accountId: 1,
            address: null,
            avatar: null,
            role: 'developer', // [developer, user]
            value: 'i dont even get why i need to set this',
            meta: {
                img: "https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1",
                default: false,
                edit: false,
                reputation: 0,
                assets: [],
                licenses: [],
                products: [],
                passphrase: null,
                privateKey: null,
                productFavorites: {},
                events: [],
                messages: [
                    {
                        id: 1,
                        author: {
                            name: "Nakatochi",
                            img: "https://www.shareicon.net/data/128x128/2015/09/20/104335_avatar_512x512.png"
                        },
                        time: "2014-11-05 16:02:21 -02:00",
                        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non maximus tellus"
                    },
                    {
                        id: 2,
                        author: {
                            name: "Watanabe",
                            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaeGUxfoKhj7XC5BMdwz8dQ9QbavjCMgk6ZXkn2biteSN1c7nL"
                        },
                        time: "2014-11-05 4:35:21 -02:00",
                        text: "Pellentesque in massa nec dui eleifend rhoncus. Etiam vitae est sit amet magna ornare ultrices"
                    },
                    {
                        id: 3,
                        author: {
                            name: "SatoshiSan",
                            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaeGUxfoKhj7XC5BMdwz8dQ9QbavjCMgk6ZXkn2biteSN1c7nL"
                        },
                        time: "2014-11-05 19:12:21 -02:00",
                        text: "Donec aliquet eros eu sapien pulvinar vulputate."
                    },
                    {
                        id: 4,
                        author: {
                            name: "Nakatochi",
                            img: "https://www.shareicon.net/data/128x128/2015/09/20/104335_avatar_512x512.png"
                        },
                        time: "2014-11-05 6:09:21 -02:00",
                        text: "Duis orci enim, blandit et libero a, luctus accumsan elit."
                    },
                    {
                        id: 5,
                        author: {
                            name: "Watanabe",
                            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaeGUxfoKhj7XC5BMdwz8dQ9QbavjCMgk6ZXkn2biteSN1c7nL"
                        },
                        time: "2014-11-05 11:58:21 -02:00",
                        text: "Praesent porta vulputate velit, sit amet scelerisque mauris suscipit eget. Aenean vel mi non metus consequat commodo quis vitae nibh."
                    }
                ],
                friends: [3, 4],
                hideFriends: false,
                owner: 1,
                inventory: [1, 2, 3, 4],
                transactions: [
                    "507f191e810c19729de860ea",
                    "31317f1we110c19729de8660"
                ],
                productWishlist: { 3: true },
                projectWishlist: {},
                badges: [
                    {
                        icon: 'fa-shield-alt',
                        title: 'Duis feugiat dictum porta',
                        description: 'Sed suscipit elementum accumsan. Morbi fringilla sem elit, ac elementum tellus egestas quis.',
                        disabled: false
                    },
                    {
                        icon: 'fa-leaf',
                        title: 'Nullam in libero',
                        description: 'Quisque ornare nisl a vestibulum feugiat. Proin nisl lorem, lacinia non mi nec, cursus sollicitudin nunc.',
                        disabled: true
                    },
                    {
                        icon: 'fa-crown',
                        title: 'Proin ac tellus tempus',
                        description: 'Nunc maximus nunc est. Nullam vulputate nisi eros, eget porta ex porta vitae.',
                        disabled: true
                    },
                    {
                        icon: 'fa-cannabis',
                        title: 'Suspendisse ac lorem rutrum',
                        description: 'Vivamus convallis, ligula id tincidunt egestas, nunc odio ultrices leo, in luctus nisi magna ut quam.',
                        disabled: false
                    },
                    {
                        icon: 'fa-certificate',
                        title: 'Class aptent taciti sociosqu ad',
                        description: 'Aliquam fringilla aliquet pellentesque. Class aptent taciti per conubia nostra, per inceptos himenaeos.',
                        disabled: false
                    },
                    {
                        icon: 'fa-bolt',
                        title: 'Sed vestibulum molestie',
                        description: 'Nulla in nibh nec urna laoreet gravida vel suscipit nulla',
                        disabled: false
                    },
                    {
                        icon: 'fa-award',
                        title: 'Ut lacinia nec ante vitae cursus',
                        description: 'Sed varius nisl vitae leo rhoncus, accumsan tincidunt orci sagittis. Donec dictum, lectus at accumsan rutrum.',
                        disabled: true
                    },
                    {
                        icon: 'fa-bell',
                        title: 'Suspendisse a varius nisi',
                        description: 'Quisque ornare nisl a vestibulum feugiat. Proin nisl lorem, lacinia non mi nec, cursus sollicitudin nunc.',
                        disabled: true
                    },
                    {
                        icon: 'fa-cookie',
                        title: 'Morbi lobortis laoreet neque',
                        description: 'Vestibulum ornare porttitor libero. Morbi lobortis laoreet neque a rhoncus.',
                        disabled: true
                    }
                ]
            },
        },
        {
            status: 'active',
            name: 'Satoshi',
            accountId: 1,
            address: null,
            avatar: null,
            role: 'developer', // [developer, user]
            value: 'i dont even get why i need to set this',
            meta: {
                "address": "0xf4636099c7Cd3656436F9f087070a429e4BfD91d",
                "img": "https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1",
                "default": false,
                "edit": false,
                "messages": [
                    {
                        "id": 1,
                        "author": {
                            "name": "Nakatochi",
                            "img": "https://www.shareicon.net/data/128x128/2015/09/20/104335_avatar_512x512.png"
                        },
                        "time": "2014-11-05 16:02:21 -02:00",
                        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non maximus tellus"
                    },
                    {
                        "id": 2,
                        "author": {
                            "name": "Watanabe",
                            "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaeGUxfoKhj7XC5BMdwz8dQ9QbavjCMgk6ZXkn2biteSN1c7nL"
                        },
                        "time": "2014-11-05 4:35:21 -02:00",
                        "text": "Pellentesque in massa nec dui eleifend rhoncus. Etiam vitae est sit amet magna ornare ultrices"
                    },
                    {
                        "id": 3,
                        "author": {
                            "name": "SatoshiSan",
                            "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaeGUxfoKhj7XC5BMdwz8dQ9QbavjCMgk6ZXkn2biteSN1c7nL"
                        },
                        "time": "2014-11-05 19:12:21 -02:00",
                        "text": "Donec aliquet eros eu sapien pulvinar vulputate."
                    },
                    {
                        "id": 4,
                        "author": {
                            "name": "Nakatochi",
                            "img": "https://www.shareicon.net/data/128x128/2015/09/20/104335_avatar_512x512.png"
                        },
                        "time": "2014-11-05 6:09:21 -02:00",
                        "text": "Duis orci enim, blandit et libero a, luctus accumsan elit."
                    },
                    {
                        "id": 5,
                        "author": {
                            "name": "Watanabe",
                            "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaeGUxfoKhj7XC5BMdwz8dQ9QbavjCMgk6ZXkn2biteSN1c7nL"
                        },
                        "time": "2014-11-05 11:58:21 -02:00",
                        "text": "Praesent porta vulputate velit, sit amet scelerisque mauris suscipit eget. Aenean vel mi non metus consequat commodo quis vitae nibh."
                    }
                ],
                "friends": [3, 4],
                "hideFriends": false,
                "owner": 1,
                "inventory": [1, 2, 3, 4],
                "transactions": [
                    "507f191e810c19729de860ea",
                    "31317f1we110c19729de8660"
                ],
                "productWishlist": { "3": true },
                "projectWishlist": {}
            }
        },
        {
            status: 'active',
            name: 'Nakamoto',
            accountId: 1,
            address: null,
            avatar: null,
            role: 'developer', // [developer, user]
            value: 'i dont even get why i need to set this',
            meta: {
                "wallet": "0xfe236119c7Cd3656436F9f087070a429e4BfD91d",
                "img": "https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1",
                "default": true,
                "edit": false,
                "messages": [],
                "friends": [5],
                "hideFriends": false,
                "owner": 1,
                "inventory": [2, 6, 9],
                "transactions": [
                    "651f1ew1312729de860e228a"
                ],
                "productWishlist": {},
                "projectWishlist": {}
            }
        },
        {
            status: 'active',
            name: 'San',
            accountId: 1,
            address: null,
            avatar: null,
            role: 'developer', // [developer, user]
            value: 'i dont even get why i need to set this',
            meta: {
                "wallet": "0xfe236119c7Cd3656436F9f087070a429e4BfD91d",
                "img": "https://pbs.twimg.com/media/CRsLt5HVAAEoI3N.png",
                "default": true,
                "edit": false,
                "messages": [],
                "friends": [],
                "hideFriends": false,
                "owner": 1,
                "inventory": [7, 8, 9],
                "transactions": [
                    "312f191e810c19729de860ea"
                ],
                "productWishlist": {},
                "projectWishlist": {}
            }
        },
        {
            status: 'active',
            name: 'Tomeh',
            accountId: 1,
            address: null,
            avatar: null,
            role: 'developer', // [developer, user]
            value: 'i dont even get why i need to set this',
            meta: {
                "wallet": "0xfe236119c7Cd3656436F9f087070a429e4BfD91d",
                "img": "https://d.facdn.net/art/echofireant/1420800644/1420800644.echofireant_sniper_avatar.jpg",
                "default": true,
                "edit": false,
                "messages": [],
                "friends": [],
                "hideFriends": true,
                "owner": 2,
                "inventory": [1, 2, 3, 4, 5, 6, 7],
                "productWishlist": {},
                "projectWishlist": {}
            }
        },
        {
            status: 'active',
            name: 'Predda',
            accountId: 1,
            address: null,
            avatar: null,
            role: 'developer', // [developer, user]
            value: 'i dont even get why i need to set this',
            meta: {
                "wallet": "0xfe236119c7Cd3656436F9f087070a429e4BfD91d",
                "img": "https://pbs.twimg.com/profile_images/794107415876747264/g5fWe6Oh.jpg",
                "default": true,
                "edit": false,
                "messages": [],
                "friends": [],
                "hideFriends": true,
                "owner": 2,
                "inventory": [8, 7, 4, 3, 3, 3, 1, 8],
                "productWishlist": {},
                "projectWishlist": {}
            }
        }
    ]

    await Profile
        .query(knex)
        .upsertGraph(data, {
            relate: true
        })
}