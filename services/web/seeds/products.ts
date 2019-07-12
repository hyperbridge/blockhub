import Product from '../src/models/product'

export const data = [
    {
        // TODO: Testing
        id: 100,
        name: "My Product Name",
        meta: {
            revision: 0,
            created: 1531430916082,
            version: 0,
            description: "Product description",
            type: "game",
            downloads: 20,
            price: 0,
            oldPrice: 0,
            images: {
                header: "https://picsum.photos/2000/300/?random",
                mediumTile: "https://picsum.photos/200/300/?random",
                main: "https://picsum.photos/200/300/?image=3",
                preview: [
                    "https://picsum.photos/200/300/?image=0",
                    "https://picsum.photos/200/300/?image=1",
                    "https://picsum.photos/200/300/?image=2"
                ]
            },
            tags: [
                {
                    key: "game",
                    value: "Game"
                },
                {
                    key: "new",
                    value: "New"
                }
            ],
            funds: {
                currency: "USD",
                obtained: 7613,
                goal: 8500
            },
            author: "0x0",
            developerTags: [
                "adventure"
            ],
            plans: [
                {
                    title: "Play Now",
                    link: "#"
                },
                {
                    title: "3 Month Subscription",
                    price: "12.95",
                    link: ""
                },
                {
                    title: "1 Year Subscription",
                    price: "120.95",
                    link: ""
                }
            ],
            content: "<h2>An adventure of a lifetime...</h2>\n<p>Any new features or tools which are added to the current store shall also be subject to the Terms of Service. You can review the most current version of the Terms of Service at any time on this page. We reserve the right to update, change or replace any part of these Terms of Service by posting updates and/or changes to our website. It is your responsibility to check this page periodically for changes. Your continued use of or access to the website following the posting of any changes constitutes acceptance of those changes.</p><p>Our store is hosted on Shopify Inc. They provide us with the online e-commerce platform that allows us to sell our products and services to you.</p> IMAGE LIST",
            frequentlyTradedAssets: [],
            rating: [
                {
                    name: "Game",
                    number: 0
                },
                {
                    name: "Developer",
                    number: 0
                },
                {
                    name: "Market",
                    number: 0
                }
            ],
            assets: [],
            community: {
                discussions: [
                    {
                        name: "Example Discussion",
                        count: "0",
                        link: ""
                    }
                ]
            },
            systemRequirements: [
                {
                    system: "Microsoft Windows",
                    requirements: "8GB storage space,\n4GB RAM, GTX 1050, or equivalent",
                    icon: "fab fa-windows"
                },
                {
                    system: "Linux/Debian",
                    requirements: "8GB storage space,\n4GB RAM, GTX 1050, or equivalent",
                    icon: "fab fa-linux"
                },
                {
                    system: "MacOS",
                    requirements: "macOS Hight Sierra,\n8GB storage space,\n8GB RAM, GTX 1050, or equivalent",
                    icon: "fab fa-apple"
                }
            ],
            languageSupport: [
                {
                    name: "English",
                    closedCaptioning: true,
                    audioDescription: true
                }
            ]
        }
    },
    {
        id: 1,
        name: "Might & Magic: Heroes VI",
        status: 'active',
        ownerId: 1,
        meta: {
            price: 0,
            oldPrice: 0,
            communitySize: 10000,
            activeUsers: 1000,
            images: {
                header: null,
                mediumTile: "https://cdn.hyperbridge.org/blockhub/images/products/might-&-magic-heroes-vi-4896/med-tile.jpg",
                main: null,
                icon: "https://cdn.hyperbridge.org/blockhub/images/products/might-&-magic-heroes-vi-4896/icon.jpg",
                preview: [
                    "https://cdn.hyperbridge.org/blockhub/images/products/might-&-magic-heroes-vi-4896/preview-01.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/might-&-magic-heroes-vi-4896/preview-02.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/might-&-magic-heroes-vi-4896/preview-03.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/might-&-magic-heroes-vi-4896/preview-04.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/might-&-magic-heroes-vi-4896/preview-05.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/might-&-magic-heroes-vi-4896/preview-06.jpg"
                ]
            },
            video: null,
            genre: "RPG",
            releaseDate: "13 Oct, 2011",
            developer: "Blackhole",
            publisher: "Ubisoft",
            content: "The adventure in Heroes VI, starting 400 years before events in Heroes V, catapults a family of heroes into a fast-paced epic story where Angels plot to end -- once and for all -- an unfinished war with their ancient rivals, the Faceless. <br><br>\t\t\t\t\t\tA legendary Archangel General is resurrected, but with his powers crippled. Plagued by horrible memories of the Elder Wars, he plots to recover his powers and take control of Ashan while destroying both Faceless and Demons in a series of carefully orchestrated attacks and betrayals. He underestimates, however, the power of the all-too-human Griffin dynasty. <br><br>\t\t\t\t\t\tThe destiny of these Griffin heroes will be determined by our players.<br><br>\t\t\t\t\t\t<ul><li>Soundtrack.<br>\t\t\t\t\t\t</li><li>Artbook/Poster.<br>\t\t\t\t\t\t</li><li>One month subscription on Heroes Kingdom.<br>\t\t\t\t\t\t</li><li>1 Bonus Single Player Skirmish Map.<br>\t\t\t\t\t\t</li><li>4 Dynasty Heroes : Aguirre, Sveltana, Yume and Kraal.<br>\t\t\t\t\t\t</li><li>2 Dynasty Weapon : Staff of Cleansing and Staff of Asha&#x2019;s Eightfold.</li></ul> Content is delivered via download only.<br><br>\t\t\t\t\t\t<ul><li>Enjoy the critically acclaimed Heroes gameplay, remasterized with the well-known developer, Black Hole, and in close partnership with the game&#x2019;s numerous fans.<br>\t\t\t\t\t\t</li><li><strong>Experience the unique mix of Turn-Based Strategy &amp; RPG:</strong> Explore extra-large adventure maps, collect tons of resources and build extraordinary cities. Perfect your tactics to level-up your heroes, recruit troops &amp; ready them for combat on exclusive battle maps.<br>\t\t\t\t\t\t</li><li><strong>Shape your destiny:</strong> Lead the Heroes of the Griffin dynasty through an intriguing scenario. Choose your path, assume your choices and customize your gaming experience thanks to a brand new Reputation system.<br>\t\t\t\t\t\t</li><li><strong>Rediscover the richness of the M&amp;M Universe:</strong> Discover fantastic landscapes and creatures from the world of Ashan.  Enjoy improved 3D designs and an exclusive new bestiary.<br>\t\t\t\t\t\t</li><li><strong>Share with the community:</strong> Post content &amp; compete with your friends using a new and intelligent, online community interface.</li></ul>",
            developerTags: [
                "Strategy",
                "RPG",
                "Turn-Based Strategy",
                "Turn-Based",
                "Fantasy",
                "Multiplayer"
            ],
            languageSupport: [
                {
                    name: "English",
                    interface: true,
                    fullAudio: false,
                    subtitles: false,
                    code: "en"
                },
                {
                    name: "Czech",
                    interface: true,
                    fullAudio: false,
                    subtitles: false,
                    code: "cz"
                },
                {
                    name: "French",
                    interface: true,
                    fullAudio: false,
                    subtitles: false,
                    code: "fr"
                },
                {
                    name: "German",
                    interface: true,
                    fullAudio: false,
                    subtitles: false,
                    code: "gr"
                },
                {
                    name: "Hungarian",
                    interface: true,
                    fullAudio: false,
                    subtitles: false,
                    code: "hr"
                },
                {
                    name: "Italian",
                    interface: true,
                    fullAudio: false,
                    subtitles: false,
                    code: "it"
                },
                {
                    name: "Korean",
                    interface: true,
                    fullAudio: false,
                    subtitles: false,
                    code: "en"
                },
                {
                    name: "Polish",
                    interface: true,
                    fullAudio: false,
                    subtitles: false,
                    code: "pl"
                },
                {
                    name: "Russian",
                    interface: true,
                    fullAudio: false,
                    subtitles: false,
                    code: "ru"
                },
                {
                    name: "Spanish",
                    interface: true,
                    fullAudio: false,
                    subtitles: false,
                    code: "en"
                }
            ],
            systemRequirements: [
                {
                    os: "win",
                    system: "Windows XP, Windows Vista, Windows 7 (all 32/64 bit)",
                    processor: "Intel Pentium Core 2 @ Duo E6400 @ 2.00 Ghz, AMD Athlon II X2 240 @ 2.8 Ghz",
                    memory: "2 GB for Windows XP and 2GB for Vista / Windows 7",
                    graphics: "1 GB, DirectX 9.0c",
                    directx: "9.0c",
                    hardDrive: "8 GB",
                    sound: "DirectX 9.0c compatible",
                    specialInfo: "ATI® RADEON® HD 6000 Series"
                }
            ],
            systemTags: [
                "new",
                "featured",
                "upcoming"
            ],
            type: "game",
            downloads: 0,
            plans: [],
            frequentlyTradedAssets: [],
            rating: {
                overall: 4,
                items: [
                    {
                        name: "Joe Murray",
                        number: 5
                    },
                    {
                        name: "Jake Marshall",
                        number: 3.5
                    },
                    {
                        name: "Dylan Greene",
                        number: 4.5
                    },
                    {
                        name: "Emma Wilkins",
                        number: 2.5
                    }
                ],
                fullReviewsPath: "/",
                rateGamePath: "/"
            },
            assets: [],
            community: {
                discussions: []
            },
            crowdfund: true,
            stateTag: "trending",
            followers: 591,
            players: 12,
            streams: [
                {
                    userName: "GodOfDota",
                    userAvatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVIOE5IdK4MWeI-iEphf-BhZh2XsXBrBn_fcsGXbFGSF-xwH8h",
                    previews: "http://dota2-videos.com/wp-content/uploads/2018/07/jx3Oj0O-G8Ihqdefault.jpg",
                    src: "#",
                    views: 3768
                },
                {
                    userName: "SomeBoy",
                    userAvatar: "https://pbs.twimg.com/media/BQUlcXwCIAAtLmY.jpg",
                    previews: "https://clips-media-assets2.twitch.tv/26827260992-offset-21596-preview-480x272.jpg",
                    src: "#",
                    views: 87658
                }
            ],
            reviews: [
                {
                    "id" : 1,
                    author: {
                        name: "Nakatochi",
                        img: "https://www.shareicon.net/data/128x128/2015/09/20/104335_avatar_512x512.png"
                    },
                    setup: {
                        system: "Windows 10",
                        gpu: "GTX 1080",
                        cpu: "Core i7 7980x",
                        ram: "8 GB",
                        storage: "HyperX 1TB SSD"
                    },
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut luctus ante, a volutpat velit. Cras in arcu a sem ultrices id luctus sem. Cras a venenatis mauris. Nullam non tortor nec neque accumsan euismod. Fusce tempus nunc ac varius gravida. Fusce at lacus pharetra, elementum risus a, bibendum ante. Morbi velit est, tincidunt id auctor sit amet, varius non nunc. Vestibulum elementum nulla et condimentum vulputate. Nullam id eleifend velit, quis aliquam elit. In maximus non orci eget maximus.",
                    date: "2018-08-19T04:09:00.000Z",
                    rating: 1.5,
                    minutes_played: 56543,
                    title: "Good game with very nice graphics made by very smart people.",
                    helpful: true,
                    recent: true
                },
                {
                    "id" : 2,
                    author: {
                        name: "Nakatochi",
                        img: "https://www.shareicon.net/data/128x128/2015/09/20/104335_avatar_512x512.png"
                    },
                    setup: {
                        system: "Windows 10",
                        gpu: "GTX 1080",
                        cpu: "Core i7 7980x",
                        ram: "8 GB",
                        storage: "HyperX 1TB SSD"
                    },
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut luctus ante, a volutpat velit. Cras in arcu a sem ultrices id luctus sem. Cras a venenatis mauris. Nullam non tortor nec neque accumsan euismod. Fusce tempus nunc ac varius gravida. Fusce at lacus pharetra, elementum risus a, bibendum ante. Morbi velit est, tincidunt id auctor sit amet, varius non nunc. Vestibulum elementum nulla et condimentum vulputate. Nullam id eleifend velit, quis aliquam elit. In maximus non orci eget maximus.",
                    date: "2018-08-19T04:09:00.000Z",
                    rating: 2.5,
                    minutes_played: 3453,
                    title: "Good game with very nice graphics made by very smart people.",
                    helpful: false,
                    recent: true
                },
                {
                    "id" : 3,
                    author: {
                        name: "Nakatochi",
                        img: "https://www.shareicon.net/data/128x128/2015/09/20/104335_avatar_512x512.png"
                    },
                    setup: {
                        system: "Windows 10",
                        gpu: "GTX 1080",
                        cpu: "Core i7 7980x",
                        ram: "8 GB",
                        storage: "HyperX 1TB SSD"
                    },
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut luctus ante, a volutpat velit. Cras in arcu a sem ultrices id luctus sem. Cras a venenatis mauris. Nullam non tortor nec neque accumsan euismod. Fusce tempus nunc ac varius gravida. Fusce at lacus pharetra, elementum risus a, bibendum ante. Morbi velit est, tincidunt id auctor sit amet, varius non nunc. Vestibulum elementum nulla et condimentum vulputate. Nullam id eleifend velit, quis aliquam elit. In maximus non orci eget maximus.",
                    date: "2018-08-19T04:09:00.000Z",
                    rating: 3.5,
                    minutes_played: 1239,
                    title: "Good game with very nice graphics made by very smart people.",
                    helpful: true,
                    recent: false
                }
            ]
        }
    },
    {
        id: 2,
        name: "Capsized",
        status: 'active',
        ownerId: 1,
        meta: {
            price: 0,
            oldPrice: 0,
            communitySize: 0,
            activeUsers: 0,
            images: {
                header: null,
                mediumTile: "https://cdn.hyperbridge.org/blockhub/images/products/capsized-5004/med-tile.jpg",
                main: null,
                icon: "https://cdn.hyperbridge.org/blockhub/images/products/capsized-5004/icon.jpg",
                preview: [
                    "https://cdn.hyperbridge.org/blockhub/images/products/capsized-5004/preview-01.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/capsized-5004/preview-02.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/capsized-5004/preview-03.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/capsized-5004/preview-04.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/capsized-5004/preview-05.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/capsized-5004/preview-06.jpg"
                ]
            },
            video: null,
            genre: "Action",
            releaseDate: "29 Apr, 2011",
            developer: "Alientrap",
            publisher: "Alientrap",
            content: "<strong>Capsized</strong> is a fast paced 2D platformer focused on intense action and exploration. As a intrepid space traveler, your ship has crash landed on a mysterious alien planet. You must navigate through the perilous environment and fight off blood-thirsty creatures to save your crewmates and escape with your lives!<br>\t\t\t\t\t\tArtist Jesse McGibney and programmer Lee Vermeulen create an immersive alien world teeming with bizarre life-forms and strange landscapes presented in a unique hand-drawn art style. Combining control elements of first person shooters and innovative physics based combat, Capsized emphasizes action without giving up the smart problem solving of classic platform games.<br>\t\t\t\t\t\tUse your jetpack to fly through the alien jungle, and tools such as the Gravity Hook to manipulate your environment to skilfully dodge and defeat attacking enemies. You will be challenged - with platforming, puzzle solving, and deadly skirmishing, often all at the same time!<br>\t\t\t\t\t\t\t\t\t\t\t\t<ul><li>Highly detailed alien environments and creatures, lovingly rendered with high resolution hand-drawn artwork.<br>\t\t\t\t\t\t</li><li>12 mission Campaign featuring: massive non-linear environments, diverse objectives and enemies, and exciting comic-style cutscenes.<br>\t\t\t\t\t\t</li><li>4 extra Arcade Modes to unlock, including: local Deathmatch and Coop, Survival mode, Time Trials, and Armless fighting.<br>\t\t\t\t\t\t</li><li>Lethal arsenal of futuristic weapons and gadgets such as: the Gravity Ram, Jetpack, Energy Shield, and Quasar Array<br>\t\t\t\t\t\t</li><li>Classic First Person Shooter inspired controls, with a focus on skilled movement, creative tactics, and insane action.<br>\t\t\t\t\t\t</li></ul>",
            developerTags: [
                "Action",
                "Platformer",
                "Indie",
                "Sci-fi",
                "Local Co-Op",
                "2D"
            ],
            languageSupport: [
                {
                    name: "English",
                    interface: true,
                    fullAudio: false,
                    subtitles: false,
                    code: "en"
                }
            ],
            systemRequirements: [
                {
                    os: "win",
                    system: "XP/Vista/Windows 7",
                    processor: "Dual-core processor (Intel Dual Core 2.0 GHz or AMD Athlon X2 5200+ 2.6 GHz)",
                    memory: "1.5 GB RAM",
                    hardDiskSpace: "1.0 GB free space",
                    videoCard: "DirectX 9.0c compatible",
                    sound: "DirectX 9.0c compatible sound cards"
                },
                {
                    os: "mac",
                    system: "Lion 10.7.5, Yosemite strongly recommended",
                    processor: "Dual Core CPU",
                    memory: "1.5 GB RAM",
                    hardDiskSpace: "1.0 GB free space",
                    videoCard: "OpenGL 3.0+ support (2.1 with ARB extensions acceptable)"
                },
                {
                    os: "linux",
                    system: "glibc 2.15+, 32/64-bit. S3TC is NOT required.",
                    processor: "Dual Core CPU",
                    memory: "1.5 GB RAM",
                    hardDiskSpace: "1.0 GB free space",
                    videoCard: "OpenGL 3.0+ support (2.1 with ARB extensions acceptable)"
                }
            ],
            systemTags: [
                "upcoming",
                "trending"
            ],
            type: "game",
            downloads: 0,
            plans: [],
            frequentlyTradedAssets: [],
            rating: {
                overall: 3.5,
                items: [
                    {
                        name: "Dan Dyer",
                        number: 3
                    },
                    {
                        name: "Jake Clark",
                        number: 4.5
                    },
                    {
                        name: "Victoria Jones",
                        number: 1.5
                    },
                    {
                        name: "Anne Bower",
                        number: 1
                    }
                ],
                fullReviewsPath: "/",
                rateGamePath: "/"
            },
            assets: [],
            community: {
                discussions: []
            },
            crowdfund: false,
            stateTag: "trending",
            followers: 163,
            players: 43
        }
    },
    {
        id: 3,
        name: "DOOM",
        status: 'active',
        ownerId: 1,
        meta: {
            price: 0,
            oldPrice: 0,
            communitySize: 0,
            activeUsers: 0,
            images: {
                header: null,
                mediumTile: "https://cdn.hyperbridge.org/blockhub/images/products/doom-20087/med-tile.jpg",
                main: null,
                icon: "/img/doom-20087/icon.jpg",
                preview: [
                    "https://cdn.hyperbridge.org/blockhub/images/products/doom-20087/preview-01.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/doom-20087/preview-02.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/doom-20087/preview-03.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/doom-20087/preview-04.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/doom-20087/preview-05.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/doom-20087/preview-06.jpg"
                ]
            },
            video: "https://cdn.hyperbridge.org/blockhub/videos/products/doom-20087/trailer.mp4",
            genre: "Action",
            releaseDate: "12 May, 2016",
            developer: "id Software",
            publisher: "Bethesda Softworks",
            content: "Developed by id software, the studio that pioneered the first-person shooter genre and created multiplayer Deathmatch, DOOM returns as a brutally fun and challenging modern-day shooter experience. Relentless demons, impossibly destructive guns, and fast, fluid movement provide the foundation for intense, first-person combat &#x2013; whether you&#x2019;re obliterating demon hordes through the depths of Hell in the single-player campaign, or competing against your friends in numerous multiplayer modes. Expand your gameplay experience using DOOM SnapMap game editor to easily create, play, and share your content with the world. <br><br><img src=\"https://steamcdn-a.akamaihd.net/steam/apps/379720/extras/doom-giffy-under-10.jpg?t=1533678963\"><br><br><strong>STORY:</strong><br>You&#x2019;ve come here for a reason. The Union Aerospace Corporation&#x2019;s massive research facility on Mars is overwhelmed by fierce and powerful demons, and only one person stands between their world and ours.  As the lone DOOM Marine, you&#x2019;ve been activated to do one thing &#x2013; kill them all.<ul><li><strong>A Relentless Campaign</strong><br>There is no taking cover or stopping to regenerate health as you beat back Hell&#x2019;s raging demon hordes.  Combine your arsenal of futuristic and iconic guns, upgrades, movement and an advanced melee system to knock-down, slash, stomp, crush, and blow apart demons in creative and violent ways. <br><br></li><li><strong>Return of id Multiplayer</strong><br>Dominate your opponents in DOOM&#x2019;s signature, fast-paced arena-style combat. In both classic and all-new game modes, annihilate your enemies utilizing your personal blend of skill, powerful weapons, vertical movement, and unique power-ups that allow you to play as a demon.<br><br></li><li><strong>Endless Possibilities</strong><br>DOOM SnapMap &#x2013; a powerful, but easy-to-use game and level editor &#x2013; allows for limitless gameplay experiences on every platform.  Without any previous experience or special expertise, any player can quickly and easily snap together and visually customize maps, add pre-defined or completely custom gameplay, and even edit game logic to create new modes.  Instantly play your creation, share it with a friend, or make it available to players around the world &#x2013; all in-game with the push of a button.</li></ul>",
            developerTags: [
                "FPS",
                "Action",
                "Gore",
                "Demons",
                "Shooter",
                "First-Person"
            ],
            languageSupport: [
                {
                    name: "English",
                    interface: true,
                    fullAudio: true,
                    subtitles: true
                },
                {
                    name: "French",
                    interface: true,
                    fullAudio: true,
                    subtitles: true
                },
                {
                    name: "Italian",
                    interface: true,
                    fullAudio: true,
                    subtitles: true
                },
                {
                    name: "German",
                    interface: true,
                    fullAudio: true,
                    subtitles: true
                },
                {
                    name: "Spanish",
                    interface: true,
                    fullAudio: true,
                    subtitles: true
                },
                {
                    name: "Japanese",
                    interface: true,
                    fullAudio: true,
                    subtitles: true
                },
                {
                    name: "Polish",
                    interface: true,
                    fullAudio: true,
                    subtitles: true
                },
                {
                    name: "Portuguese-Brazil",
                    interface: true,
                    fullAudio: true,
                    subtitles: true
                },
                {
                    name: "Russian",
                    interface: true,
                    fullAudio: true,
                    subtitles: true
                },
                {
                    name: "Traditional Chinese",
                    interface: true,
                    fullAudio: false,
                    subtitles: true
                }
            ],
            systemRequirements: [
                {
                    os: "win",
                    system: "Windows 7/8.1/10 (64-bit versions)",
                    processor: "Intel Core i7-3770/AMD FX-8350 or better",
                    memory: "8 GB RAM",
                    graphics: "NVIDIA GTX 970 4GB/AMD Radeon R9 290 4GB or better",
                    storage: "55 GB available space",
                    additional_notes: "Requires BlockHub activation and broadband internet connection for Multiplayer and SnapMap"
                }
            ],
            systemTags: [
                "sale",
                "featured",
                "trending",
                "topSeller",
                "specials"
            ],
            type: "game",
            downloads: 0,
            plans: [],
            frequentlyTradedAssets: [],
            rating: {
                overall: 5,
                items: [
                    {
                        name: "Keith Reid",
                        number: 5
                    },
                    {
                        name: "Neil Buckland",
                        number: 5
                    }
                ],
                fullReviewsPath: "/",
                rateGamePath: "/"
            },
            assets: [],
            community: {
                discussions: []
            },
            crowdfund: false,
            stateTag: "trending",
            followers: 91,
            players: 34
        }
    },
    {
        id: 4,
        name: "A Game of Thrones - Genesis",
        status: 'active',
        ownerId: 1,
        meta: {
            price: 0,
            oldPrice: 0,
            communitySize: 0,
            activeUsers: 0,
            images: {
                header: null,
                mediumTile: "https://cdn.hyperbridge.org/blockhub/images/products/a-game-of-thrones---genesis-4221/med-tile.jpg",
                main: null,
                icon: "https://cdn.hyperbridge.org/blockhub/images/products/a-game-of-thrones---genesis-4221/icon.jpg",
                preview: [
                    "https://cdn.hyperbridge.org/blockhub/images/products/a-game-of-thrones---genesis-4221/preview-01.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/a-game-of-thrones---genesis-4221/preview-02.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/a-game-of-thrones---genesis-4221/preview-03.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/a-game-of-thrones---genesis-4221/preview-04.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/a-game-of-thrones---genesis-4221/preview-05.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/a-game-of-thrones---genesis-4221/preview-06.jpg"
                ]
            },
            video: null,
            genre: "Strategy",
            releaseDate: "29 Sep, 2011",
            developer: "Cyanide Studios",
            publisher: "Focus Home Interactive",
            content: "What King will you be?<br>\t\t\t\t\t\t\tConqueror, Usurper or Diplomat?<br>\t\t\t\t\t\t\t<strong>&quot;A Game of Thrones - Genesis&quot;</strong> immerses you into the heart of the battles and intrigues between the Houses that shaped the Kingdom of Westeros. From Nymeria&apos;s arrival in the Kingdom of Dorne to the awakening of the &quot;Others&quot; beyond the Wall, you&apos;ll live the origins of A Game of Thrones saga through more than 1000 years of history, by taking part in Westeros&apos; founding events and largest battles.<br>\t\t\t\t\t\t\tIn this great strategy game, victory does not necessarily result from brute force. You can choose to use a military approach and besiege your opponents, strangle them in an economical war, or even use dirty tricks and diplomacy to politically crush them. Treachery and deception are everywhere and can be more efficient than the most powerful army. So watch your back and show no mercy if you want to keep sat on the Iron Throne.<br>\t\t\t\t\t\t\t<ul><li>The video game adaptation of the fantasy saga &quot;A Song of Ice and Fire&quot; by George RR Martin.<br>\t\t\t\t\t\t\t</li><li>A deep and exciting gameplay combining strategy, diplomacy and politics.<br>\t\t\t\t\t\t\t</li><li>Discover the origins of the universe of the Iron Throne through the Story mode, and participate in major conflicts that have shaped Westeros.<br>\t\t\t\t\t\t\t</li><li>Compete against up to 7 other players in multiplayer. Form alliances, break them, show subtle tactics and crush your opponents!</li></ul>",
            developerTags: [
                "Strategy",
                "RTS",
                "Fantasy",
                "Multiplayer"
            ],
            languageSupport: [
                {
                    name: "English",
                    interface: true,
                    fullAudio: false,
                    subtitles: false
                },
                {
                    name: "French",
                    interface: true,
                    fullAudio: false,
                    subtitles: false
                },
                {
                    name: "German",
                    interface: true,
                    fullAudio: false,
                    subtitles: false
                },
                {
                    name: "Italian",
                    interface: true,
                    fullAudio: false,
                    subtitles: false
                },
                {
                    name: "Spanish",
                    interface: true,
                    fullAudio: false,
                    subtitles: false
                }
            ],
            systemRequirements: [
                {
                    os: "win",
                    system: "WINDOWS XP SP2/VISTA SP1/WINDOWS 7",
                    processor: "AMD/INTEL DUAL-CORE 2.2 GHZ",
                    memory: "1024 MB (XP) / 2048 MB (VISTA/7)",
                    graphics: "256 MB 100% DIRECTX 9 AND SHADERS 3.0 COMPATIBLE.  ATI RADEON X1600 XT/INTEL HD/NVIDIA GEFORCE 6600 GT OR HIGHER",
                    directx: "9",
                    hardDrive: "10 GB",
                    sound: "DIRECTX 9 COMPATIBLE",
                    internet: "INTERNET CONNECTION REQUIRED FOR ONLINE GAMING AND GAME ACTIVATION"
                }
            ],
            systemTags: [
                "topSeller",
                "specials"
            ],
            type: "game",
            downloads: 0,
            plans: [],
            frequentlyTradedAssets: [],
            rating: {
                overall: 3.5,
                items: [
                    {
                        name: "Dan Dyer",
                        number: 3
                    },
                    {
                        name: "Jake Clark",
                        number: 4.5
                    },
                    {
                        name: "Victoria Jones",
                        number: 1.5
                    },
                    {
                        name: "Anne Bower",
                        number: 1
                    }
                ],
                fullReviewsPath: "/",
                rateGamePath: "/"
            },
            assets: [],
            community: {
                discussions: []
            },
            followers: 591,
            players: 12
        }
    },
    {
        id: 5,
        name: "Teeworlds",
        status: 'active',
        ownerId: 1,
        meta: {
            price: 0,
            oldPrice: 0,
            communitySize: 0,
            activeUsers: 0,
            images: {
                header: null,
                mediumTile: "https://cdn.hyperbridge.org/blockhub/images/products/teeworlds-20137/med-tile.jpg",
                main: null,
                icon: "https://cdn.hyperbridge.org/blockhub/images/products/teeworlds-20137/icon.jpg",
                preview: [
                    "https://cdn.hyperbridge.org/blockhub/images/products/teeworlds-20137/preview-01.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/teeworlds-20137/preview-02.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/teeworlds-20137/preview-03.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/teeworlds-20137/preview-04.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/teeworlds-20137/preview-05.jpg"
                ]
            },
            video: "https://cdn.hyperbridge.org/blockhub/videos/products/teeworlds-20137/trailer.mp4",
            genre: "Action",
            releaseDate: "27 May, 2007",
            developer: "Teeworlds Team",
            publisher: "Teeworlds Team",
            content: "Play together with your friends and have a fun time! In Teeworlds you can play in three gamemodes (Deathmatch, Team-Deathmatch and Capture The Flag) and tons more of community-made modifications with up to 16 players!<br><br>Customize your own player character, your personal tee, to your liking. With hundreds of possible combinations, you will always look unique!<br><br>Teeworlds is a game that gives you a lot of freedom and plenty of gameplay mechanics to use or abuse. With a full focus on multiplayer games you will never be bored.<br><br>And the best thing: It&apos;s open-source! Anyone can help to develop this game, create new game types, skins or brand new maps via the built-in map editor!<br><br>Key Features:<br><ul><li>Easy to learn, hard to master. You will never stop learning new tricks while playing Teeworlds, no matter how long you play. At the same time it&apos;s easy for new players to just pick it up and have a blast.<br><br></li><li>Engaging and motivated community. Teeworlds&apos; one-of-a-kind community is the thing keeping the game alive. Be it the community servers or maps or all the other innovative content.<br><br></li><li>Play with your friends for free. Teeworlds has been free since the very start and will stay that way forever. With up to 16 players in a match, challenge your friends - the fun is only a mouseclick away!</li></ul>",
            developerTags: [
                "Free to Play",
                "Multiplayer",
                "2D",
                "Action",
                "Platformer",
                "Shooter"
            ],
            languageSupport: [
                {
                    name: "English",
                    interface: true,
                    fullAudio: false,
                    subtitles: false
                },
                {
                    name: "French",
                    interface: true,
                    fullAudio: false,
                    subtitles: false
                },
                {
                    name: "Italian",
                    interface: true,
                    fullAudio: false,
                    subtitles: false
                },
                {
                    name: "German",
                    interface: true,
                    fullAudio: false,
                    subtitles: false
                },
                {
                    name: "Spanish",
                    interface: true,
                    fullAudio: false,
                    subtitles: false
                },
                {
                    name: "Bulgarian",
                    interface: true,
                    fullAudio: false,
                    subtitles: false
                },
                {
                    name: "Czech",
                    interface: true,
                    fullAudio: false,
                    subtitles: false
                },
                {
                    name: "Danish",
                    interface: true,
                    fullAudio: false,
                    subtitles: false
                },
                {
                    name: "Dutch",
                    interface: true,
                    fullAudio: false,
                    subtitles: false
                },
                {
                    name: "Finnish",
                    interface: true,
                    fullAudio: false,
                    subtitles: false
                },
                {
                    name: "Hungarian",
                    interface: true,
                    fullAudio: false,
                    subtitles: false
                },
                {
                    name: "Norwegian",
                    interface: true,
                    fullAudio: false,
                    subtitles: false
                },
                {
                    name: "Polish",
                    interface: true,
                    fullAudio: false,
                    subtitles: false
                },
                {
                    name: "Portuguese",
                    interface: true,
                    fullAudio: false,
                    subtitles: false
                },
                {
                    name: "Portuguese-Brazil",
                    interface: true,
                    fullAudio: false,
                    subtitles: false
                },
                {
                    name: "Romanian",
                    interface: true,
                    fullAudio: false,
                    subtitles: false
                },
                {
                    name: "Russian",
                    interface: true,
                    fullAudio: false,
                    subtitles: false
                },
                {
                    name: "Swedish",
                    interface: true,
                    fullAudio: false,
                    subtitles: false
                },
                {
                    name: "Turkish",
                    interface: true,
                    fullAudio: false,
                    subtitles: false
                }
            ],
            systemRequirements: [
                {
                    os: "win",
                    system: "Microsoft® Windows® XP or newer",
                    processor: "1.4GHz or faster",
                    memory: "512 MB RAM",
                    storage: "10 MB available space"
                },
                {
                    os: "mac",
                    processor: "1.4GHz or faster",
                    memory: "512 MB RAM",
                    storage: "10 MB available space"
                },
                {
                    os: "linux",
                    processor: "1.4GHz or faster",
                    memory: "512 MB RAM",
                    storage: "10 MB available space"
                }
            ],
            systemTags: [
                "new",
                "trending"
            ],
            type: "game",
            downloads: 0,
            plans: [],
            frequentlyTradedAssets: [],
            rating: {
                overall: 3.5,
                items: [
                    {
                        name: "Dan Dyer",
                        number: 3
                    },
                    {
                        name: "Jake Clark",
                        number: 4.5
                    },
                    {
                        name: "Victoria Jones",
                        number: 1.5
                    },
                    {
                        name: "Anne Bower",
                        number: 1
                    }
                ],
                fullReviewsPath: "/",
                rateGamePath: "/"
            },
            assets: [],
            community: {
                discussions: []
            },
            followers: 9037,
            players: 101
        }
    },
    {
        id: 6,
        name: "Wargame: European Escalation",
        status: 'active',
        ownerId: 1,
        meta: {
            price: 0,
            oldPrice: 0,
            communitySize: 0,
            activeUsers: 0,
            images: {
                header: null,
                mediumTile: "https://cdn.hyperbridge.org/blockhub/images/products/wargame-european-escalation-4226/med-tile.jpg",
                main: null,
                icon: "https://cdn.hyperbridge.org/blockhub/images/products/wargame-european-escalation-4226/icon.jpg",
                preview: [
                    "https://cdn.hyperbridge.org/blockhub/images/products/wargame-european-escalation-4226/preview-01.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/wargame-european-escalation-4226/preview-02.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/wargame-european-escalation-4226/preview-03.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/wargame-european-escalation-4226/preview-04.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/wargame-european-escalation-4226/preview-05.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/wargame-european-escalation-4226/preview-06.jpg"
                ]
            },
            video: null,
            genre: "Strategy",
            releaseDate: "22 Feb, 2012",
            developer: "Eugen Systems",
            publisher: "Focus Home Interactive",
            content: "<strong>2 sides, 8 nations, and one battlefield: Europe!</strong><br>\t\t\t\t\t\tWargame: European Escalation is an intense and spectacular Real Time Strategy game, where realism and strategy are brought to the front lines. <br>\t\t\t\t\t\tWith a phenomenal range of vehicles and units (over 350 different models), build your army and enter a huge military campaign across Europe of the 80&apos;s, as the Cold War is about to become World War 3.<br>\t\t\t\t\t\tWith the powerful IRISZOOM &#x2122;, Wargame offers breathtaking graphics and battles as spectacular as they are strategic. Prepare to bring hundreds of units of all kinds--tanks, helicopters, squad Infantry, etc.--under your command in intense battles on gigantic maps stretching up to 60 square miles!<br>\t\t\t\t\t\tOnline service EugenNet&#xA9; provides a full multiplayer experience with creation of clans, organizing games, and world rankings where up to 8 players can compete simultaneously in massive battles involving hundreds of units!",
            developerTags: [
                "Strategy",
                "RTS",
                "Military",
                "Cold War",
                "Wargame",
                "Realistic"
            ],
            languageSupport: [
                {
                    name: "English",
                    interface: true,
                    fullAudio: true,
                    subtitles: true
                },
                {
                    name: "French",
                    interface: true,
                    fullAudio: true,
                    subtitles: true
                },
                {
                    name: "German",
                    interface: true,
                    fullAudio: true,
                    subtitles: true
                },
                {
                    name: "Italian",
                    interface: true,
                    fullAudio: false,
                    subtitles: true
                },
                {
                    name: "Spanish",
                    interface: true,
                    fullAudio: false,
                    subtitles: true
                },
                {
                    name: "Russian",
                    interface: true,
                    fullAudio: false,
                    subtitles: true
                },
                {
                    name: "Traditional Chinese",
                    interface: true,
                    fullAudio: false,
                    subtitles: true
                }
            ],
            systemRequirements: [
                {
                    os: "win",
                    system: "WINDOWS XP SP3/WINDOWS VISTA SP2/WINDOWS 7",
                    processor: "AMD/INTEL DUAL-CORE 2.5 GHZ",
                    memory: "1024 MB (XP)/2048 MB (VISTA/7)",
                    graphics: "256 MB 100% DIRECTX 9 AND SHADERS 3.0 COMPATIBLE.  ATI RADEON X1800 GTO/NVIDIA GEFORCE 7600 GT OR HIGHER",
                    directx: "9",
                    hardDrive: "10 GB",
                    sound: "DIRECTX 9 COMPATIBLE",
                    other: "INTERNET CONNECTION REQUIRED FOR ONLINE GAMING AND GAME ACTIVATION"
                },
                {
                    os: "mac",
                    system: "MAC OS X 10.6.8",
                    processor: "INTEL CORE 2 DUO 2.4 GHZ",
                    memory: "2048 MB",
                    graphics: "256 MB ATI RADEON HD 4670/NVIDIA GEFORCE GT120/320M OR HIGHER",
                    hardDrive: "10 GB",
                    other: "INTERNET CONNECTION REQUIRED FOR ONLINE GAMING"
                },
                {
                    os: "linux",
                    system: "UBUNTU 12.04 LTS/UBUNTU 12.10",
                    processor: "AMD/INTEL DUAL-CORE 2.5 GHZ",
                    memory: "2048 MB",
                    graphics: "256 MB SHADERS 3.0 COMPATIBLE.  ATI RADEON X1800 GTO/NVIDIA GEFORCE 7600 GT/INTEL HD 3000 OR HIGHER",
                    hardDrive: "10 GB",
                    sound: "SOUND CARD",
                    other: "INTERNET CONNECTION REQUIRED FOR ONLINE GAMING"
                }
            ],
            systemTags: [
                "trending",
                "topSeller"
            ],
            type: "game",
            downloads: 0,
            plans: [],
            frequentlyTradedAssets: [],
            rating: {
                overall: 3.5,
                items: [
                    {
                        name: "Dan Dyer",
                        number: 3
                    },
                    {
                        name: "Jake Clark",
                        number: 4.5
                    },
                    {
                        name: "Victoria Jones",
                        number: 1.5
                    },
                    {
                        name: "Anne Bower",
                        number: 1
                    }
                ],
                fullReviewsPath: "/",
                rateGamePath: "/"
            },
            assets: [],
            community: {
                discussions: []
            }
        }
    },
    {
        id: 7,
        name: "ArcaniA",
        status: 'active',
        ownerId: 1,
        meta: {
            price: 0,
            oldPrice: 0,
            communitySize: 0,
            activeUsers: 0,
            images: {
                header: null,
                mediumTile: "https://cdn.hyperbridge.org/blockhub/images/products/arcania-4380/med-tile.jpg",
                main: null,
                icon: "https://cdn.hyperbridge.org/blockhub/images/products/arcania-4380/icon.jpg",
                preview: [
                    "https://cdn.hyperbridge.org/blockhub/images/products/arcania-4380/preview-01.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/arcania-4380/preview-02.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/arcania-4380/preview-03.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/arcania-4380/preview-04.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/arcania-4380/preview-05.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/arcania-4380/preview-06.jpg"
                ]
            },
            video: "https://cdn.hyperbridge.org/blockhub/videos/products/arcania-4380/trailer.mp4",
            genre: "RPG",
            releaseDate: "11 Oct, 2010",
            developer: "Spellbound Studios",
            publisher: "THQ Nordic",
            content: "War covers the southern islands until it finally reaches the idyllic isle of Feshyr.  You take on the role as the new nameless hero after your village has been pillaged and destroyed by paladins of the king. Seeking revenge, you soon realize that this cowardly attack did not just happen on a reckless mercenary`s whim.  A mysterious evil power lies in waiting and fortunately you&#x2019;re not alone to unravel the ancient secrets: your fate is linked to a beautiful lady wearing a powerful artifact from the long-forgotten past...<ul><li><strong>COMBAT SYSTEM:</strong> An intuitive system that offers a gradual learning curve, special moves and three different basic attack types.<br>\t\t\t\t\t</li><li><strong>STORYLINE:</strong> A deep, strong story embedded in the successful Gothic universe franchise accompanied by highly diversified side quests. And most can be solved in different ways.<br>\t\t\t\t\t</li><li><strong>ACCESSIBILITY:</strong> The amenable story, an Intuitive interface and controls, lock on targets and a sophisticated hint system.<br>\t\t\t\t\t</li><li><strong>CONTINUOUS ACTION:</strong> Pace is kept up along the main plot through regular surprises, cliffhangers and vigorous cut scenes.<br>\t\t\t\t\t</li><li><strong>HERO DEVELOPMENT:</strong> Gain experience points and level up to upgrade your attributes, skills and crafting abilities.<br>\t\t\t\t\t</li><li><strong>A COMPLETELY OPEN WORLD:</strong> Enjoy the complete freedom &amp; the almost unlimited options known from the Gothic series.</li></ul>",
            developerTags: [
                "RPG",
                "Open World",
                "Singleplayer",
                "Fantasy",
                "Third Person",
                "Adventure"
            ],
            languageSupport: [
                {
                    name: "English",
                    interface: true,
                    fullAudio: false,
                    subtitles: false
                },
                {
                    name: "French",
                    interface: true,
                    fullAudio: false,
                    subtitles: false
                },
                {
                    name: "German",
                    interface: true,
                    fullAudio: false,
                    subtitles: false
                },
                {
                    name: "Italian",
                    interface: true,
                    fullAudio: false,
                    subtitles: false
                },
                {
                    name: "Spanish",
                    interface: true,
                    fullAudio: false,
                    subtitles: false
                },
                {
                    name: "Polish",
                    interface: true,
                    fullAudio: false,
                    subtitles: false
                },
                {
                    name: "Russian",
                    interface: true,
                    fullAudio: false,
                    subtitles: false
                }
            ],
            systemRequirements: [
                {
                    os: "win",
                    system: "Microsoft® Windows® XP / Vista / Windows 7",
                    processor: "Intel Quad Core / AMD Phenom X4",
                    memory: "4 GB RAM",
                    graphics: "GeForce GTX 250, GeForce GTX 260, GeForce GTX 280",
                    directx: "DirectX 9.0c or higher",
                    hardDrive: "10 GB + 600 MB virtual memory",
                    sound: "DirectX 8.1 compatible sound card"
                }
            ],
            systemTags: [
                "sale",
                "specials"
            ],
            type: "game",
            downloads: 0,
            plans: [],
            frequentlyTradedAssets: [],
            rating: {
                overall: 3.5,
                items: [
                    {
                        name: "Dan Dyer",
                        number: 3
                    },
                    {
                        name: "Jake Clark",
                        number: 4.5
                    },
                    {
                        name: "Victoria Jones",
                        number: 1.5
                    },
                    {
                        name: "Anne Bower",
                        number: 1
                    }
                ],
                fullReviewsPath: "/",
                rateGamePath: "/"
            },
            assets: [],
            community: {
                discussions: []
            }
        }
    },
    {
        id: 8,
        name: "Pride of Nations",
        status: 'active',
        ownerId: 1,
        meta: {
            price: 0,
            oldPrice: 0,
            communitySize: 0,
            activeUsers: 0,
            images: {
                header: null,
                mediumTile: "https://cdn.hyperbridge.org/blockhub/images/products/pride-of-nations-4591/med-tile.jpg",
                main: null,
                icon: "https://cdn.hyperbridge.org/blockhub/images/products/pride-of-nations-4591/icon.jpg",
                preview: [
                    "https://cdn.hyperbridge.org/blockhub/images/products/pride-of-nations-4591/preview-01.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/pride-of-nations-4591/preview-02.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/pride-of-nations-4591/preview-03.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/pride-of-nations-4591/preview-04.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/pride-of-nations-4591/preview-05.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/pride-of-nations-4591/preview-06.jpg"
                ]
            },
            video: "https://cdn.hyperbridge.org/blockhub/videos/products/pride-of-nations-4591/trailer.mp4",
            genre: "Simulation",
            releaseDate: "8 Jun, 2011",
            developer: "Ageod",
            publisher: "Slitherine Ltd.",
            content: "Pride of Nations is a turn-based historical strategy game set in the colonial era of the 19th century, where the player takes control of a country and guides it through industrialization, military conquest, and colonization. <br>\t\t\t\t\t\tPride of Nations follows such successful historical strategy games as Birth of America, American Civil War, Napoleon&apos;s Campaigns, and Wars in America.<br>\t\t\t\t\t\t\t\t\t\t\t\t<ul><li>Immerse yourself in realistic historical gameplay set on a global map<br>\t\t\t\t\t\t</li><li>Play as the world&#x2019;s Great Powers between 1850 and 1920<br>\t\t\t\t\t\t</li><li>Lead one of eight different countries, each with their own personality and agenda: USA, Great Britain, Germany, France, Japan, Russia, Austria-Hungary, and Italy <br>\t\t\t\t\t\t</li><li>Experience the most original diplomacy model ever created for a grand strategy game <br>\t\t\t\t\t\t</li><li>Explore a revolutionary system for building armies and fleets <br>\t\t\t\t\t\t</li><li>Fight against a strong AI through a number of new game mechanisms <br>\t\t\t\t\t\t</li><li>Battle it out with others in multiplayer with a new simultaneous turn-based engine <br>\t\t\t\t\t\t</li><li>Engage in a detailed world economy with realistic components<br>\t\t\t\t\t\t</li></ul>",
            developerTags: [
                "Strategy",
                "Simulation",
                "Grand Strategy",
                "Historical",
                "Turn-Based",
                "Turn-Based Strategy"
            ],
            languageSupport: [
                {
                    name: "English",
                    interface: true,
                    fullAudio: false,
                    subtitles: false
                },
                {
                    name: "French",
                    interface: true,
                    fullAudio: false,
                    subtitles: false
                },
                {
                    name: "German",
                    interface: true,
                    fullAudio: false,
                    subtitles: false
                },
                {
                    name: "Spanish",
                    interface: true,
                    fullAudio: false,
                    subtitles: false
                }
            ],
            systemRequirements: [
                {
                    os: "win",
                    system: "Windows XP/Vista/ Windows 7 / Windows 8 / Windows 10",
                    processor: "Pentium® IV 1800+ MHz",
                    memory: "1 GB (XP) or 2 GB (Vista or W7)",
                    hardDiskSpace: "3 GB free on hard disk",
                    videoCard: "512 Mb V-RAM or better",
                    directx: "9.0c or more",
                    sound: "DirectX 9.0c compatible sound card",
                    additional: "Internet Connection required for multiplayer"
                }
            ],
            systemTags: [
                "upcoming"
            ],
            type: "game",
            downloads: 0,
            plans: [],
            frequentlyTradedAssets: [],
            rating: {
                overall: 3.5,
                items: [
                    {
                        name: "Dan Dyer",
                        number: 3
                    },
                    {
                        name: "Jake Clark",
                        number: 4.5
                    },
                    {
                        name: "Victoria Jones",
                        number: 1.5
                    },
                    {
                        name: "Anne Bower",
                        number: 1
                    }
                ],
                fullReviewsPath: "/",
                rateGamePath: "/"
            },
            assets: [],
            community: {
                discussions: []
            }
        }
    },
    {
        id: 9,
        name: "Car Mechanic Simulator 2015 Demo",
        status: 'active',
        ownerId: 1,
        meta: {
            price: 0,
            oldPrice: 0,
            communitySize: 0,
            activeUsers: 0,
            images: {
                header: null,
                mediumTile: "https://cdn.hyperbridge.org/blockhub/images/products/car-mechanic-simulator-2015-demo-20147/med-tile.jpg",
                main: null,
                icon: "https://cdn.hyperbridge.org/blockhub/images/products/car-mechanic-simulator-2015-demo-20147/icon.jpg",
                preview: [
                    "https://cdn.hyperbridge.org/blockhub/images/products/car-mechanic-simulator-2015-demo-20147/preview-01.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/car-mechanic-simulator-2015-demo-20147/preview-02.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/car-mechanic-simulator-2015-demo-20147/preview-03.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/car-mechanic-simulator-2015-demo-20147/preview-04.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/car-mechanic-simulator-2015-demo-20147/preview-05.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/car-mechanic-simulator-2015-demo-20147/preview-06.jpg"
                ]
            },
            video: null,
            genre: "Simulation",
            releaseDate: "17 Jun, 2015",
            developer: "Red Dot Games",
            publisher: "PlayWay S. A.",
            content: "Create and expand your auto repairs service empire. Car Mechanic Simulator 2015 will take you behind the scenes of daily routine in car workshop.<br>Take on the role of the car mechanic and repair cars for your clients. Spend the earned money on expanding your workshop and improving your skills.  Buy worn out cars, renovate them and sell with profit or become a famous car collector. If you manage your business well, you will surely succeed in the market.The essence of the game. It is your job. It is the way you get cash. It is the way you live... Ok, it is maybe not that important, anyway that is the basic activity in the game. Customer comes in and mysteriously says that his car is broken but he needs it for tomorrow. The clock starts right now.Jobs are generated randomly so you&apos;ll have to choose on which car you will work. It seems like there is a group of customers waiting in front of the workshop for the mechanic...<br>Additionally you can take limited amount of jobs in the same time and every one of them is time-restricted. With different difficulty and complexity levels and of course, different payment levels, wise management is the key here.After whole day of hard work it is time to count your cash and then look around your business. What should I buy to improve my performance? What would attract more clients? You can always just buy more posters on the wall but it is not something called &apos;great investment&apos; for such a serious business, right?Speaking of investments.There is a chance for making even more money in the car auction house. Choose wisely, buy used or old cars and renovate them to sell with profit... Or, if you are one of those vintage car lovers, you can have your own collection.Cars are fully dismountable to the car frame with amazing level of detail. Every car is made of more than 200 interactive parts, which includes  an interior, a car body and the whole engine.",
            developerTags: [
                "Simulation"
            ],
            languageSupport: [
                {
                    name: "English",
                    interface: true,
                    fullAudio: false,
                    subtitles: true
                },
                {
                    name: "French",
                    interface: true,
                    fullAudio: false,
                    subtitles: true
                },
                {
                    name: "Italian",
                    interface: true,
                    fullAudio: false,
                    subtitles: true
                },
                {
                    name: "German",
                    interface: true,
                    fullAudio: false,
                    subtitles: true
                },
                {
                    name: "Spanish",
                    interface: true,
                    fullAudio: false,
                    subtitles: true
                },
                {
                    name: "Czech",
                    interface: true,
                    fullAudio: false,
                    subtitles: true
                },
                {
                    name: "Hungarian",
                    interface: true,
                    fullAudio: false,
                    subtitles: true
                },
                {
                    name: "Polish",
                    interface: true,
                    fullAudio: false,
                    subtitles: true
                },
                {
                    name: "Russian",
                    interface: true,
                    fullAudio: false,
                    subtitles: true
                },
                {
                    name: "Turkish",
                    interface: true,
                    fullAudio: false,
                    subtitles: true
                }
            ],
            systemRequirements: [
                {
                    os: "win",
                    system: "Windows XP SP3 / Vista / 7 / 8",
                    processor: "Core i5-2300 / AMD Athlon X4 760K or better",
                    memory: "4 GB RAM",
                    graphics: "GeForce GTX  650 Ti or better w/ 1024MB VRAM",
                    directx: "Version 9.0c",
                    storage: "1200 MB available space",
                    sound_card: "DirectX compatble"
                }
            ],
            systemTags: [
                "sale",
                "new",
                "specials"
            ],
            type: "game",
            downloads: 0,
            plans: [],
            frequentlyTradedAssets: [],
            rating: {
                overall: 3.5,
                items: [
                    {
                        name: "Dan Dyer",
                        number: 3
                    },
                    {
                        name: "Jake Clark",
                        number: 4.5
                    },
                    {
                        name: "Victoria Jones",
                        number: 1.5
                    },
                    {
                        name: "Anne Bower",
                        number: 1
                    }
                ],
                fullReviewsPath: "/",
                rateGamePath: "/"
            },
            assets: [],
            community: {
                discussions: []
            }
        }
    },
    {
        id: 10,
        name: "Kingdom Come: Deliverance",
        status: 'active',
        ownerId: 1,
        meta: {
            price: 0,
            oldPrice: 0,
            communitySize: 0,
            activeUsers: 0,
            images: {
                header: null,
                mediumTile: "https://cdn.hyperbridge.org/blockhub/images/products/kingdom-come-deliverance-20030/med-tile.jpg",
                main: null,
                icon: "https://cdn.hyperbridge.org/blockhub/images/products/kingdom-come-deliverance-20030/icon.jpg",
                preview: [
                    "https://cdn.hyperbridge.org/blockhub/images/products/kingdom-come-deliverance-20030/preview-01.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/kingdom-come-deliverance-20030/preview-02.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/kingdom-come-deliverance-20030/preview-03.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/kingdom-come-deliverance-20030/preview-04.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/kingdom-come-deliverance-20030/preview-05.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/kingdom-come-deliverance-20030/preview-06.jpg"
                ]
            },
            video: "https://cdn.hyperbridge.org/blockhub/videos/products/kingdom-come-deliverance-20030/trailer.mp4",
            genre: "Action",
            releaseDate: "13 Feb, 2018",
            developer: "Warhorse Studios",
            publisher: "Warhorse Studios",
            content: "You&apos;re Henry, the son of a blacksmith. Thrust into a raging civil war, you watch helplessly as invaders storm your village and slaughter your friends and family.  Narrowly escaping the brutal attack, you grab your sword to fight back. Avenge the death of your parents and help repel the invading forces! Bohemia &#x2013; located in the heart of Europe, the region is rich in culture, silver, and sprawling castles. The death of its beloved ruler, Emperor Charles IV, has plunged the kingdom into dark times: war, corruption, and discord are tearing this jewel of the Holy Roman Empire apart.<br><br>One of Charles&apos; sons, Wenceslas, has inherited the crown. Unlike his father, Wenceslas is a naive, self-indulgent, unambitious monarch. His half-brother and King of Hungary, Sigismund the Red Fox, senses weakness in Wenceslas. Feigning good will, Sigismund travels to Bohemia and kidnaps his half-brother. With no king on the throne, Sigismund is now free to plunder Bohemia and seize its riches.<br><br>In the midst of this chaos, you&apos;re Henry, the son of a blacksmith. Your peaceful life is shattered when a mercenary raid, ordered by King Sigismund himself, burns your village to the ground. By bittersweet fortune, you are one of the few survivors of this massacre. <br><br>Without a home, family, or future you end up in the service of Lord Radzig Kobyla, who is forming a resistance against the invasion. Fate drags you into this bloody conflict and shoves you into a raging civil war, where you help fight for the future of Bohemia.<ul><li><strong>Massive realistic open world:</strong> Majestic castles, vast fields, all rendered in stunning high-end graphics.<br></li><li><strong>Non-linear story:</strong> Solve quests in multiple ways, then face the consequences of your decisions.<br></li><li><strong>Challenging combat:</strong> Distance, stealth, or melee. Choose your weapons and execute dozens of unique combos in battles that are as thrilling as they are merciless.<br></li><li><strong>Character development:</strong> Improve your skills, earn new perks, and forge and upgrade your equipment.<br></li><li><strong>Dynamic world:</strong> Your actions influence the reactions of the people around you. Fight, steal, seduce, threaten, persuade, or bribe. It&#x2019;s all up to you.<br></li><li><strong>Historical accuracy:</strong> Meet real historical characters and experience the genuine look and feel of medieval Bohemia.</li></ul>",
            developerTags: [
                "Medieval",
                "Open World",
                "RPG",
                "Realistic",
                "Historical",
                "First-Person"
            ],
            languageSupport: [
                {
                    name: "English",
                    interface: true,
                    fullAudio: true,
                    subtitles: true
                },
                {
                    name: "French",
                    interface: true,
                    fullAudio: true,
                    subtitles: true
                },
                {
                    name: "German",
                    interface: true,
                    fullAudio: true,
                    subtitles: true
                },
                {
                    name: "Spanish",
                    interface: true,
                    fullAudio: false,
                    subtitles: true
                },
                {
                    name: "Czech",
                    interface: true,
                    fullAudio: false,
                    subtitles: true
                },
                {
                    name: "Polish",
                    interface: true,
                    fullAudio: false,
                    subtitles: true
                },
                {
                    name: "Russian",
                    interface: true,
                    fullAudio: false,
                    subtitles: true
                },
                {
                    name: "Italian",
                    interface: true,
                    fullAudio: false,
                    subtitles: true
                },
                {
                    name: "Simplified Chinese",
                    interface: true,
                    fullAudio: false,
                    subtitles: true
                },
                {
                    name: "Turkish",
                    interface: true,
                    fullAudio: false,
                    subtitles: true
                }
            ],
            systemRequirements: [
                {
                    os: "win",
                    specialInfo: "Requires a 64-bit processor and operating system",
                    system: "OS 64-bit Windows 7 or 64-bit Windows 8 (8.1) or Windows 10",
                    processor: "Intel CPU Core i7 3770 3,4 GHz, AMD CPU AMD FX-8350 4 GHz",
                    memory: "16 GB RAM",
                    graphics: "Nvidia GPU GeForce GTX 1060, AMD GPU Radeon RX 580",
                    directx: "Version 11",
                    storage: "40 GB available space",
                    sound_card: "Creative SOUND BLASTER Zx"
                }
            ],
            systemTags: [
                "sale"
            ],
            type: "game",
            downloads: 0,
            plans: [],
            frequentlyTradedAssets: [],
            rating: {
                overall: 3.5,
                items: [
                    {
                        name: "Dan Dyer",
                        number: 3
                    },
                    {
                        name: "Jake Clark",
                        number: 4.5
                    },
                    {
                        name: "Victoria Jones",
                        number: 1.5
                    },
                    {
                        name: "Anne Bower",
                        number: 1
                    }
                ],
                fullReviewsPath: "/",
                rateGamePath: "/"
            },
            assets: [],
            community: {
                discussions: []
            }
        }
    },
    {
        id: 11,
        name: "Fishing Planet",
        status: 'active',
        ownerId: 1,
        meta: {
            price: 0,
            oldPrice: 0,
            communitySize: 0,
            activeUsers: 0,
            images: {
                header: null,
                mediumTile: "https://cdn.hyperbridge.org/blockhub/images/products/fishing-planet-20121/med-tile.jpg",
                main: null,
                icon: "https://cdn.hyperbridge.org/blockhub/images/products/fishing-planet-20121/icon.jpg",
                preview: [
                    "https://cdn.hyperbridge.org/blockhub/images/products/fishing-planet-20121/preview-01.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/fishing-planet-20121/preview-02.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/fishing-planet-20121/preview-03.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/fishing-planet-20121/preview-04.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/fishing-planet-20121/preview-05.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/fishing-planet-20121/preview-06.jpg"
                ]
            },
            video: "https://cdn.hyperbridge.org/blockhub/videos/products/fishing-planet-20121/trailer.mp4",
            genre: "Free to Play",
            releaseDate: "11 Aug, 2015",
            developer: "Fishing Planet LLC",
            publisher: "Fishing Planet LLC",
            content: "Fishing Planet is a unique and highly realistic online first-person multiplayer fishing simulator developed by avid fishing enthusiasts for anglers to bring you the full thrill of actual angling! Choose your lures, make your trophy catches, discover new possibilities and sharpen your real angling skills anywhere, anytime with your friends! <br><br>The game is FREE to play and just a download away!<br><br>Aside from a rare few, there were no decent fishing games created over the whole 30-year history of game development. And not a single one in recent years! Don&#x2019;t we anglers deserve better than that? <br><br>Fishing Planet decided to set this historic injustice right and finally make a game that fishing enthusiasts were waiting for all these years! And according to our Beta Testers, we hit the mark!<br><br>Fishing Planet isn&#x2019;t just another game about fishing. Stunning eye-candy graphics, superb hydro and aerodynamics, realistic tackle behavior and damage based on actual simulation physics and, most importantly, fish with artificial intelligence for completely lifelike behavior make this a true-to-life fishing simulator that can help you improve your actual angling skills! <br><br>The combination of unique graphics, realistic game physics and sophisticated AI will bring the realistic world of fishing directly to your computer screen!<ul><li>72+ species of fish, each with its unique behavior and AI. <br><br></li><li>12 scenic waterways with multiple locations, various climatic conditions, bottom terrains and vegetation. <br><br></li><li>Thousands of tackle combinations with unique physical and hydrodynamic properties. <br><br></li><li>Superb dynamic water graphics with ripples and surface that changes depending on wind, current and depth. <br><br></li><li>Weather &#x2013; day/night alternation, change of seasons, different weather conditions (rain, fog, bright sunshine) <br><br></li><li>Multiplayer capacity &#x2013; online tournaments with personal and team scores, system of achievements, leader boards and top-player lists.</li></ul><ul><li>Complex AI system for fish behavior that correlates with seasonal and climatic change, time of day, speed of water current, bottom contour and type (color and structure), water and air temperature, wind, etc. Biting/striking reactions for each fish species are completely realistic and natural as well as specifics of lure attacks. <br><br></li><li>Photorealistic graphics &#x2013; using latest high-end tools for ultimate photo-realism: photogrammetry, all waterways are based on real location. <br><br></li><li>Unique system of game physics and realistic tackle damage &#x2013; rods, lines and reels break according to their actual individual characteristics. Realistic aero and hydrodynamic environment for lures and retrieves.<br><br></li><li>Dynamic water graphics &#x2013; splashes, waves and ripples on the water create a fully realistic fishing atmosphere. <br><br></li><li>Weather &#x2013; change of conditions depending on location, season and time of day. Possibility of sudden rain or sunshine breaking through the clouds. <br><br></li><li>Tournaments and fishing duels &#x2013; created based on world&#x2019;s most popular fishing competitions.</li></ul>",
            developerTags: [
                "Free to Play",
                "Fishing",
                "Simulation",
                "Multiplayer",
                "Sports",
                "Massively Multiplayer"
            ],
            languageSupport: [
                {
                    name: "English",
                    interface: true,
                    fullAudio: false,
                    subtitles: true
                },
                {
                    name: "French",
                    interface: true,
                    fullAudio: false,
                    subtitles: true
                },
                {
                    name: "German",
                    interface: true,
                    fullAudio: false,
                    subtitles: true
                },
                {
                    name: "Polish",
                    interface: true,
                    fullAudio: false,
                    subtitles: true
                },
                {
                    name: "Russian",
                    interface: true,
                    fullAudio: false,
                    subtitles: true
                },
                {
                    name: "Ukrainian",
                    interface: true,
                    fullAudio: false,
                    subtitles: true
                },
                {
                    name: "Spanish",
                    interface: true,
                    fullAudio: false,
                    subtitles: true
                },
                {
                    name: "Dutch",
                    interface: true,
                    fullAudio: false,
                    subtitles: true
                },
                {
                    name: "Portuguese-Brazil",
                    interface: true,
                    fullAudio: false,
                    subtitles: true
                },
                {
                    name: "Simplified Chinese",
                    interface: true,
                    fullAudio: false,
                    subtitles: true
                }
            ],
            systemRequirements: [
                {
                    os: "win",
                    system: "Windows 7,8,10 x64, Mac OS X",
                    processor: "Quad-Core 3.0 GHz",
                    memory: "8 GB RAM",
                    graphics: "Graphics Card with 2 GB Video RAM Nvidia Geforce GTX 660 or equivalent",
                    directx: "Version 11",
                    network: "Broadband Internet connection",
                    storage: "12 GB available space",
                    additional_notes: "External mouse or compatible Xbox controller required"
                },
                {
                    os: "mac",
                    system: "10.11 El Capitan",
                    processor: "Intel Quad-Core 2.2 GHz",
                    memory: "8 GB RAM",
                    graphics: "AMD Radeon R9 M370X 2 GB GDDR5",
                    network: "Broadband Internet connection",
                    storage: "12 GB available space",
                    additional_notes: "External mouse or compatible Xbox controller required"
                },
                {
                    os: "linux",
                    system: "Ubuntu 12.04",
                    processor: "Dual core from Intel or AMD at 2.8 GHz",
                    memory: "8 GB RAM",
                    graphics: "Graphics Card with 2 GB Video RAM Nvidia Geforce GTX 660 or equivalent",
                    network: "Broadband Internet connection",
                    storage: "12 GB available space",
                    additional_notes: "External mouse or compatible Xbox controller required"
                }
            ],
            systemTags: [
                "topSeller",
                "specials"
            ],
            type: "game",
            downloads: 0,
            plans: [],
            frequentlyTradedAssets: [],
            rating: {
                overall: 5,
                items: [
                    {
                        name: "Dan Dyer",
                        number: 3
                    },
                    {
                        name: "Jake Clark",
                        number: 4.5
                    },
                    {
                        name: "Victoria Jones",
                        number: 1.5
                    },
                    {
                        name: "Anne Bower",
                        number: 1
                    }
                ],
                fullReviewsPath: "/",
                rateGamePath: "/"
            },
            assets: [],
            community: {
                discussions: []
            }
        }
    },
    {
        id: 12,
        name: "Men of War: Assault Squad",
        status: 'active',
        ownerId: 1,
        meta: {
            price: 0,
            oldPrice: 0,
            communitySize: 0,
            activeUsers: 0,
            images: {
                header: null,
                mediumTile: "https://cdn.hyperbridge.org/blockhub/images/products/men-of-war-assault-squad-4305/med-tile.jpg",
                main: null,
                icon: "https://cdn.hyperbridge.org/blockhub/images/products/men-of-war-assault-squad-4305/icon.jpg",
                preview: [
                    "https://cdn.hyperbridge.org/blockhub/images/products/men-of-war-assault-squad-4305/preview-01.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/men-of-war-assault-squad-4305/preview-02.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/men-of-war-assault-squad-4305/preview-03.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/men-of-war-assault-squad-4305/preview-04.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/men-of-war-assault-squad-4305/preview-05.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/men-of-war-assault-squad-4305/preview-06.jpg"
                ]
            },
            video: null,
            genre: "Strategy",
            releaseDate: "24 Feb, 2011",
            developer: "Digitalmindsoft",
            publisher: "1C Company",
            content: "Men of War: Assault Squad features a completely new cooperative skirmish game mode with access to five different nations (Russia, Germany, USA, Commonwealth and, for the first time ever in the Men of War series, Japan) as well as increased realism and accessibility.<br>\t\t\t\t\t\tPlayers can get behind the controls of a tank to smash through obstacles, crush soldiers under their tracks and fire high-explosive shells at enemy emplacements, they can even take control of individual soldiers as they fight.  As in previous games in the series, Men of War: Assault Squad includes the unique &quot;direct control&quot; feature which enables players to be in command of any unit using the WASD controls, rather than pointing and clicking.<br>\t\t\t\t\t\t<ul><li>Different historical settings and battlegrounds for every nation presented in the game allowing players to face distinct varieties of enemies and tactics<br>\t\t\t\t\t\t</li><li>Unique hero units with powerful abilities such as increasing units&apos; firepower, boosting morale or providing other advantages to defeat the enemy against all odds<br>\t\t\t\t\t\t</li><li>Bonuses featuring remote controlled bombs that can flatten entire residential blocks, airstrikes to destroy incoming tank columns, special &quot;For the Motherland!&quot; charge attacks and many more<br>\t\t\t\t\t\t</li><li>Improved and dynamic AI ensures that no two missions in the game will play out the same way, making each battle a new experience against an AI that really fights back<br>\t\t\t\t\t\t</li><li>A great choice of various locations including Western Europe to Eastern Europe, North Africa and the Pacific area<br>\t\t\t\t\t\t</li><li>The ability to play together with up to four friends in LAN or cooperative online play<br>\t\t\t\t\t\t</li><li>New multiplayer maps and game settings<br>\t\t\t\t\t\t</li><li>Improved multiplayer providing authentic use of equipment and vehicles<br>\t\t\t\t\t\t</li><li>Overhauled infantry squads and the ability to purchase specific soldiers<br>\t\t\t\t\t\t</li><li>More realistic weapon behavior and penetration values<br>\t\t\t\t\t\t</li><li>A reworked artillery system providing innovative assault and defense strategies<br>\t\t\t\t\t\t</li><li>New types of ammunition which increase the tanks&apos; strength</li></ul>",
            developerTags: [
                "Strategy",
                "World War II",
                "Tactical",
                "War",
                "RTS",
                "Multiplayer"
            ],
            languageSupport: [
                {
                    name: "English",
                    interface: true,
                    fullAudio: false,
                    subtitles: false
                },
                {
                    name: "Russian",
                    interface: true,
                    fullAudio: false,
                    subtitles: false
                },
                {
                    name: "Italian",
                    interface: true,
                    fullAudio: false,
                    subtitles: false
                },
                {
                    name: "Spanish",
                    interface: true,
                    fullAudio: false,
                    subtitles: false
                },
                {
                    name: "French",
                    interface: true,
                    fullAudio: false,
                    subtitles: false
                },
                {
                    name: "German",
                    interface: true,
                    fullAudio: false,
                    subtitles: false
                },
                {
                    name: "Polish",
                    interface: true,
                    fullAudio: false,
                    subtitles: false
                }
            ],
            systemRequirements: [
                {
                    os: "win",
                    system: "Windows XP/Vista/7",
                    processor: "2.6GHz Processor or higher",
                    memory: "1GB or higher",
                    graphics: "DX9c compatible GPU",
                    directx: "DX9c",
                    hardDrive: "4GB",
                    sound: "any OS compatible"
                }
            ],
            systemTags: [
                "new",
                "trending"
            ],
            type: "game",
            downloads: 0,
            plans: [],
            frequentlyTradedAssets: [],
            rating: {
                overall: 3.5,
                items: [
                    {
                        name: "Dan Dyer",
                        number: 3
                    },
                    {
                        name: "Jake Clark",
                        number: 4.5
                    },
                    {
                        name: "Victoria Jones",
                        number: 1.5
                    },
                    {
                        name: "Anne Bower",
                        number: 1
                    }
                ],
                fullReviewsPath: "/",
                rateGamePath: "/"
            },
            assets: [],
            community: {
                discussions: []
            }
        }
    },
    {
        id: 13,
        name: "Sniper Elite V2",
        status: 'active',
        ownerId: 1,
        meta: {
            price: 0,
            oldPrice: 0,
            communitySize: 0,
            activeUsers: 0,
            images: {
                header: null,
                mediumTile: "https://cdn.hyperbridge.org/blockhub/images/products/sniper-elite-v2-4275/med-tile.jpg",
                main: null,
                icon: "https://cdn.hyperbridge.org/blockhub/images/products/sniper-elite-v2-4275/icon.jpg",
                preview: [
                    "https://cdn.hyperbridge.org/blockhub/images/products/sniper-elite-v2-4275/preview-01.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/sniper-elite-v2-4275/preview-02.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/sniper-elite-v2-4275/preview-03.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/sniper-elite-v2-4275/preview-04.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/sniper-elite-v2-4275/preview-05.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/sniper-elite-v2-4275/preview-06.jpg"
                ]
            },
            video: "https://cdn.hyperbridge.org/blockhub/videos/products/sniper-elite-v2-4275/trailer.mp4",
            genre: "Action",
            releaseDate: "3 May, 2012",
            developer: "Rebellion",
            publisher: "Rebellion",
            content: "In the dark days of the end of World War Two amidst the ruins of Berlin, one bullet can change history&#x2026;<br><br>Sniper Elite V2 is an award-winning and authentic World War II sniping experience. You are elite US sniper Karl Fairburne. Parachuted into Berlin amidst the Germans&#x2019; final stand, your mission is to prevent Nazi V2 rocket program technology from falling into the hands of the besieging Red Army. You must aid key scientists keen to defect to the US, and terminate those who would help the Russians.<br><br>Take advantage of authentic weaponry, learn how to stalk your targets, fortify your position, set up the shot, use your skill, patience and cunning to achieve your mission.  Stealth gameplay is the key as you find yourself trapped between two desperate armies in a race against time. <br><br>Watch as the celebrated &#x2018;bullet cam&#x2019; from Sniper Elite returns, bloodier and more gruesome than ever &#x2013; skilful shots are rewarded with a slow-motion flight of the bullet, then targets are graphically rendered in X-Ray as the bullet enters and destroys your victim. Organs shred, bones splinter, teeth shatter, as the true impact of the sniper&#x2019;s bullet is brought to life.<br><br>As World War Two ends and the Cold War begins, every shot counts. Use it wisely.<ul><li><strong>Sniping Simulation</strong> - Sniper Elite V2 features detailed sniping simulation with advanced ballistics, taking into account gravity, wind, velocity, bullet penetration, aim stability and more. Guaranteed to provide players with the most realistic simulation of military sharpshooting yet available.<br></li><li><strong>X-Ray Kill Cam</strong> - Amazing &#x2018;kill cam&#x2019; technology showcases what really happens when a bullet enters an enemy&#x2019;s body, allowing players to see hearts and lungs tear, livers burst, and bones shatter.<br></li><li><strong>Authenticity</strong> - The game features authentic World War II Berlin locations as well as vehicles, weapons such as the Springfield M1903 the Gewehr 43 and the Mosin-Nagant 1891/30, and uniforms modeled after the original versions.<br></li><li><strong>Use the Environment</strong> - The slightest changes in the environment need to be taken into account to move into the perfect position, observe the quarry, take the shot and slip away unnoticed.<br></li><li><strong>Sniper&apos;s Choice</strong> - Players will often find themselves facing a choice of the perfect shot that leaves them catastrophically exposed or a more difficult route that means they can continue their mission.<br></li><li><strong>Multiplayer Game Types</strong> - Team Deathmatch, Deathmatch, Team Distance King, Distance King, Team Dogtag Harvest, Dogtag Harvest and Capture the Flag.</li></ul>Since its release, Sniper Elite V2 has been continually supported by Rebellion, adding new features and content - <u>including an additional 10 free multiplayer maps</u>.<br><br>Four additional single-player mission packs are available for purchase, including the ultimate sniping mission - <u>Kill Hitler</u>. Each DLC pack also contains 2 new authentic weapons for your arsenal.",
            developerTags: [
                "Sniper",
                "Action",
                "Stealth",
                "World War II",
                "Co-op",
                "Shooter"
            ],
            languageSupport: [
                {
                    name: "English",
                    interface: true,
                    fullAudio: false,
                    subtitles: false
                },
                {
                    name: "French",
                    interface: true,
                    fullAudio: false,
                    subtitles: false
                },
                {
                    name: "German",
                    interface: true,
                    fullAudio: false,
                    subtitles: false
                },
                {
                    name: "Italian",
                    interface: true,
                    fullAudio: false,
                    subtitles: false
                },
                {
                    name: "Polish",
                    interface: true,
                    fullAudio: false,
                    subtitles: false
                },
                {
                    name: "Russian",
                    interface: true,
                    fullAudio: false,
                    subtitles: false
                },
                {
                    name: "Spanish",
                    interface: true,
                    fullAudio: false,
                    subtitles: false
                }
            ],
            systemRequirements: [
                {
                    os: "win",
                    system: "Microsoft® Windows® Vista (Service Pack 2) or Windows® 7 or Windows® 8.",
                    processor: "Dual-core CPU with SSE3 (Intel® Pentium® D 3GHz / AMD Athlon™ 64 X2 4200) or better",
                    memory: "2GB system memory",
                    hardDiskSpace: "10GB of free drive space",
                    videoCard: "with 256 MB of memory (NVIDIA® GeForce® 8800 series / ATI Radeon™ HD 3870) or better",
                    sound: "Microsoft® DirectX® 10.0 compatible sound card or better",
                    directx: "Microsoft® DirectX® 11.0"
                }
            ],
            systemTags: [
                "sale",
                "new"
            ],
            type: "game",
            downloads: 0,
            plans: [],
            frequentlyTradedAssets: [],
            rating: {
                overall: 3.5,
                items: [
                    {
                        name: "Dan Dyer",
                        number: 3
                    },
                    {
                        name: "Jake Clark",
                        number: 4.5
                    },
                    {
                        name: "Victoria Jones",
                        number: 1.5
                    },
                    {
                        name: "Anne Bower",
                        number: 1
                    }
                ],
                fullReviewsPath: "/",
                rateGamePath: "/"
            },
            assets: [],
            community: {
                discussions: []
            }
        }
    },
    {
        id: 14,
        name: "Chime",
        status: 'active',
        ownerId: 1,
        meta: {
            price: 0,
            oldPrice: 0,
            communitySize: 0,
            activeUsers: 0,
            images: {
                header: null,
                mediumTile: "https://cdn.hyperbridge.org/blockhub/images/products/chime-4259/med-tile.jpg",
                main: null,
                icon: "https://cdn.hyperbridge.org/blockhub/images/products/chime-4259/icon.jpg",
                preview: [
                    "https://cdn.hyperbridge.org/blockhub/images/products/chime-4259/preview-01.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/chime-4259/preview-02.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/chime-4259/preview-03.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/chime-4259/preview-04.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/chime-4259/preview-05.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/chime-4259/preview-06.jpg"
                ]
            },
            video: null,
            genre: "Casual",
            releaseDate: "6 Sep, 2010",
            developer: "Zo&#xEB; Mode",
            publisher: "OneBigGame",
            content: "A Zo&#xEB; Mode production for the video game charity initiative OneBigGame, Chime pits gamers against the melody in an all-new puzzle experience. Place blocks against the clock, \n\t\t\t\t\t\tcomplete solid quads and try to cover the whole playing surface, all the while remixing and embellishing pieces by musicians from across the planet. And you get to feel good about yourself, \n\t\t\t\t\t\ttoo: The console version of Chime was originally developed for OneBigGame with all the developer&#x2019;s royalties going to Charity for sales up to June 2010, and Zoe Mode will continue to donate a proportion of its royalties (equivalent to 5% of purchase price) for sales of the BlockHub version. OneBigGame always aims to donate a minimum of 80% of all donations to its charity partners Save the Children and the Starlight Children&apos;s foundation.\n\t\t\t\t\t\t <p>\n\t\t\t\t\t\tKey features:\n\t\t\t\t\t\t</p><ul>\n\t\t\t\t\t\t<li> Puzzle: Rotate and place shapes to form solid quads and fill up the grid before the time runs out\n\n\t\t\t\t\t\t</li><li> Listen: Chime features music by Moby, Paul Hartnoll (Orbital), and more\n\n\t\t\t\t\t\t</li><li> Remix: Fill the grid to alter the track loop, place pieces to play notes, and create quads to trigger a range of song samples\n\n\t\t\t\t\t\t</li><li> Replay: Reset the grid by reaching 100% and continue playing and beat your high score\n\n\t\t\t\t\t\t</li><li>Experience: Each of the six unique levels is made up of its own music, grid, and shape sets, including the new Portal-inspired sixth level: &#x201C;Still Alive&#x201D;.\n\t\t\t\t\t\t</li><li> Free-play mode: Choose between three different levels of difficulty or just play for the sake of making music with no time pressure\n\t\t\t\t\t\t</li></ul>",
            developerTags: [
                "Casual",
                "Puzzle",
                "Music",
                "Rhythm",
                "Great Soundtrack",
                "Indie"
            ],
            languageSupport: [
                {
                    name: "English",
                    interface: true,
                    fullAudio: false,
                    subtitles: false
                },
                {
                    name: "French",
                    interface: true,
                    fullAudio: false,
                    subtitles: false
                },
                {
                    name: "German",
                    interface: true,
                    fullAudio: false,
                    subtitles: false
                },
                {
                    name: "Italian",
                    interface: true,
                    fullAudio: false,
                    subtitles: false
                },
                {
                    name: "Spanish",
                    interface: true,
                    fullAudio: false,
                    subtitles: false
                }
            ],
            systemRequirements: [
                {
                    os: "win"
                }
            ],
            systemTags: [
                "specials"
            ],
            type: "game",
            downloads: 0,
            plans: [],
            frequentlyTradedAssets: [],
            rating: {
                overall: 3.5,
                items: [
                    {
                        name: "Dan Dyer",
                        number: 3
                    },
                    {
                        name: "Jake Clark",
                        number: 4.5
                    },
                    {
                        name: "Victoria Jones",
                        number: 1.5
                    },
                    {
                        name: "Anne Bower",
                        number: 1
                    }
                ],
                fullReviewsPath: "/",
                rateGamePath: "/"
            },
            assets: [],
            community: {
                discussions: []
            }
        }
    },
    {
        id: 15,
        name: "Who's That Flying?!",
        status: 'active',
        ownerId: 1,
        meta: {
            price: 0,
            oldPrice: 0,
            communitySize: 0,
            activeUsers: 0,
            images: {
                header: null,
                mediumTile: "https://cdn.hyperbridge.org/blockhub/images/products/who's-that-flying!-4190/med-tile.jpg",
                main: null,
                icon: "https://cdn.hyperbridge.org/blockhub/images/products/who's-that-flying!-4190/icon.jpg",
                preview: [
                    "https://cdn.hyperbridge.org/blockhub/images/products/who's-that-flying!-4190/preview-01.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/who's-that-flying!-4190/preview-02.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/who's-that-flying!-4190/preview-03.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/who's-that-flying!-4190/preview-04.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/who's-that-flying!-4190/preview-05.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/who's-that-flying!-4190/preview-06.jpg"
                ]
            },
            video: null,
            genre: "Action",
            releaseDate: "31 Jan, 2011",
            developer: "Mediatonic",
            publisher: "Kalypso Media Digital",
            content: "As the mysterious and powerful &quot;Guardian of Earth&quot; your steely eye and HYPER-POWERED LASER ARM have kept the citizens of Earth safe for generations (as well as proving a hit with the ladies). <br><br>\t\t\t\t\t\tWith all your awesome TALENT and FLAIR, surely it would be IMPOSSIBLE for a devastating invasion of Doom Beasts to descend on your cities and cause havoc without your knowledge? (Even if you were MAYBE showboating for a magazine photo-shoot at the time...)<br><br>\t\t\t\t\t\tNow, you must not only defend your cities from the ravenous hordes of Doom Beasts - you must defend yourself against accusations of gross incompetence from the Galactic Council of Justice! And this is all BEFORE you can even start to get to the bottom of just who OR what is really behind the attacks...<br><br>\t\t\t\t\t\t\t\t\t\t\t\t<ul><li>Story mode featuring 15 levels over 5 unique stages<br>\t\t\t\t\t\t</li><li>11 enemy types<br>\t\t\t\t\t\t</li><li>5 gigantic boss battles<br>\t\t\t\t\t\t</li><li>4 Infinite Mode Stages<br>\t\t\t\t\t\t</li><li>24 Challenge Mode Stages<br>\t\t\t\t\t\t</li><li>14 Bonus Magazine articles to unlock<br>\t\t\t\t\t\t</li><li>12 Glittering Awards to discover<br>\t\t\t\t\t\t</li><li>6 Dramatic Courtroom cutscenes <br>\t\t\t\t\t\t</li><li>BlockHub Achievements, Global Leaderboards &amp; BlockHub Cloud Support<br>\t\t\t\t\t\t</li><li>Controller Support<br>\t\t\t\t\t\t</li></ul>",
            developerTags: [
                "Action",
                "Indie",
                "Casual",
                "Shoot 'Em Up"
            ],
            languageSupport: [
                {
                    name: "English",
                    interface: true,
                    fullAudio: false,
                    subtitles: false
                }
            ],
            systemRequirements: [
                {
                    os: "win",
                    system: "Windows XP",
                    processor: "2Ghz or Higher",
                    memory: "1 Gb",
                    hardDrive: "400 mb",
                    sound: "Windows compatible sound card"
                }
            ],
            systemTags: [
                "sale"
            ],
            type: "game",
            downloads: 0,
            plans: [],
            frequentlyTradedAssets: [],
            rating: {
                overall: 3.5,
                items: [
                    {
                        name: "Dan Dyer",
                        number: 3
                    },
                    {
                        name: "Jake Clark",
                        number: 4.5
                    },
                    {
                        name: "Victoria Jones",
                        number: 1.5
                    },
                    {
                        name: "Anne Bower",
                        number: 1
                    }
                ],
                fullReviewsPath: "/",
                rateGamePath: "/"
            },
            assets: [],
            community: {
                discussions: []
            }
        }
    },
    {
        id: 16,
        name: "Fallout New Vegas: Dead Money",
        status: 'active',
        ownerId: 1,
        meta: {
            price: 0,
            oldPrice: 0,
            communitySize: 0,
            activeUsers: 0,
            images: {
                header: null,
                mediumTile: "https://cdn.hyperbridge.org/blockhub/images/products/fallout-new-vegas-dead-money-4513/med-tile.jpg",
                main: null,
                icon: "https://cdn.hyperbridge.org/blockhub/images/products/fallout-new-vegas-dead-money-4513/icon.jpg",
                preview: [
                    "https://cdn.hyperbridge.org/blockhub/images/products/fallout-new-vegas-dead-money-4513/preview-01.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/fallout-new-vegas-dead-money-4513/preview-02.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/fallout-new-vegas-dead-money-4513/preview-03.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/fallout-new-vegas-dead-money-4513/preview-04.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/fallout-new-vegas-dead-money-4513/preview-05.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/fallout-new-vegas-dead-money-4513/preview-06.jpg"
                ]
            },
            video: null,
            genre: "Action",
            releaseDate: "5 Apr, 2011",
            developer: "Obsidian Entertainment",
            publisher: "Bethesda Softworks",
            content: "As the victim of a raw deal you must work alongside three other captured wastelanders to recover the legendary treasure of the Sierra Madre Casino. In <strong>Dead Money</strong>, your life hangs in the balance as you face new terrain, foes, and choices. It is up to you how you play your cards in the quest to survive.<br><br>\t\t\t\t\t\t\t\t\t\t\t\tWelcome to the Sierra Madre Casino! The casino&#x2019;s mythical contents are lusted after by desperate wasteland scavengers, who tell stories of intact treasure of the old world buried deep within its vault. Lured here by a mysterious radio signal advertising the long-awaited grand opening of the casino, you are thrown into a high stakes game where you&#x2019;ll have to work with three other lost souls if you want to survive.<br><br>\t\t\t\t\t\t\t\t\t\t\t\t<ul><li>Take part in a suspenseful post-apocalyptic casino heist in which you&#x2019;ll need to work with three companions, each of whom has their own motivation for helping you.<br>\t\t\t\t\t\t</li><li>Add hours of extended gameplay where you&#x2019;ll encounter the mysterious Ghost People, pre-war death traps and the holographic security system of the Sierra Madre.<br>\t\t\t\t\t\t</li><li>Navigate your way through a challenging new storyline, with even tougher choices.<br>\t\t\t\t\t\t</li><li>New perks, achievements, and a raised level cap to 35!<br>\t\t\t\t\t\t</li></ul>",
            developerTags: [
                "Action",
                "RPG"
            ],
            languageSupport: [
                {
                    name: "English",
                    interface: true,
                    fullAudio: false,
                    subtitles: false
                },
                {
                    name: "Czech",
                    interface: true,
                    fullAudio: false,
                    subtitles: false
                },
                {
                    name: "Polish",
                    interface: true,
                    fullAudio: false,
                    subtitles: false
                },
                {
                    name: "Russian",
                    interface: true,
                    fullAudio: false,
                    subtitles: false
                }
            ],
            systemRequirements: [
                {
                    os: "win",
                    system: "Windows 7/Vista/XP",
                    processor: "Dual Core 2.0GHz",
                    memory: "2 GB RAM",
                    graphics: "NVIDIA GeForce 6 series, ATI 1300XT serie",
                    storage: "10 GB available space"
                }
            ],
            systemTags: [
                "sale"
            ],
            type: "game",
            downloads: 0,
            plans: [],
            frequentlyTradedAssets: [],
            rating: {
                overall: 3.5,
                items: [
                    {
                        name: "Dan Dyer",
                        number: 3
                    },
                    {
                        name: "Jake Clark",
                        number: 4.5
                    },
                    {
                        name: "Victoria Jones",
                        number: 1.5
                    },
                    {
                        name: "Anne Bower",
                        number: 1
                    }
                ],
                fullReviewsPath: "/",
                rateGamePath: "/"
            },
            assets: [],
            community: {
                discussions: []
            }
        }
    },
    {
        id: 17,
        name: "Fallout New Vegas: Honest Hearts",
        status: 'active',
        ownerId: 1,
        price: 0,
        oldPrice: 0,
        communitySize: 0,
        activeUsers: 0,
        images: {
            header: null,
            mediumTile: "https://cdn.hyperbridge.org/blockhub/images/products/fallout-new-vegas-honest-hearts-4514/med-tile.jpg",
            main: null,
            icon: "https://cdn.hyperbridge.org/blockhub/images/products/fallout-new-vegas-honest-hearts-4514/icon.jpg",
            preview: [
                "https://cdn.hyperbridge.org/blockhub/images/products/fallout-new-vegas-honest-hearts-4514/preview-01.jpg",
                "https://cdn.hyperbridge.org/blockhub/images/products/fallout-new-vegas-honest-hearts-4514/preview-02.jpg",
                "https://cdn.hyperbridge.org/blockhub/images/products/fallout-new-vegas-honest-hearts-4514/preview-03.jpg",
                "https://cdn.hyperbridge.org/blockhub/images/products/fallout-new-vegas-honest-hearts-4514/preview-04.jpg",
                "https://cdn.hyperbridge.org/blockhub/images/products/fallout-new-vegas-honest-hearts-4514/preview-05.jpg",
                "https://cdn.hyperbridge.org/blockhub/images/products/fallout-new-vegas-honest-hearts-4514/preview-06.jpg"
            ]
        },
        video: null,
        genre: "Action",
        releaseDate: "20 May, 2011",
        developer: "Obsidian Entertainment",
        publisher: "Bethesda Softworks",
        content: "An expedition into the unspoiled wilderness of Utah&apos;s Zion National Park goes horribly wrong when your caravan is ambushed by a tribal raiding band. As you try to find a way back to the Mojave you become embroiled in a war between tribes and a conflict between a New Canaanite missionary and the mysterious Burned Man. The decisions you make will determine the fate of Zion.<br>\t\t\t\t\t\t\t\t\t\t\t\t<ul><li>New Terrain: Navigate the highs and lows of the steep canyon walls, caves, riverbeds, waterfalls and explore the lush landscapes and rugged terrain in beautiful and sprawling Zion Canyon.<br>\t\t\t\t\t\t</li><li>New Enemies: From the deadly Yao Guai and exotically lethal Greek Geckos to new hostile tribals, Zion Canyon is as dangerous as it is beautiful.<br>\t\t\t\t\t\t</li><li>New Perks and Weapons: Survive the wild with Tribal Wisdom or exact increased damage with Eye for Eye. Honest Hearts offers a host of new perks and weapons including the .45 Auto Pistol, .45 Auto Submachine Gun, the Compliance Regular, Fire Bombs, War Clubs, and Yao Guai Gauntlets.<br>\t\t\t\t\t\t</li></ul>",
        developerTags: [
            "Action",
            "RPG"
        ],
        languageSupport: [
            {
                name: "English",
                interface: true,
                fullAudio: false,
                subtitles: false
            },
            {
                name: "Spanish",
                interface: true,
                fullAudio: false,
                subtitles: false
            },
            {
                name: "Czech",
                interface: true,
                fullAudio: false,
                subtitles: false
            },
            {
                name: "Polish",
                interface: true,
                fullAudio: false,
                subtitles: false
            },
            {
                name: "Russian",
                interface: true,
                fullAudio: false,
                subtitles: false
            }
        ],
        systemRequirements: [
            {
                os: "win",
                processor: "Dual Core 2.0GHz",
                graphics: "NVIDIA GeForce 6 series, ATI 1300XT series"
            }
        ],
        systemTags: [
            "sale"
        ],
        type: "game",
        downloads: 0,
        plans: [],
        frequentlyTradedAssets: [],
        rating: {
            overall: 3.5,
            items: [
                {
                    name: "Dan Dyer",
                    number: 3
                },
                {
                    name: "Jake Clark",
                    number: 4.5
                },
                {
                    name: "Victoria Jones",
                    number: 1.5
                },
                {
                    name: "Anne Bower",
                    number: 1
                }
            ],
            fullReviewsPath: "/",
            rateGamePath: "/"
        },
        assets: [],
        community: {
            discussions: []
        }
    },
    {
        id: 18,
        name: "Call of Duty®: Black Ops",
        status: 'active',
        ownerId: 1,
        price: 0,
        oldPrice: 0,
        communitySize: 0,
        activeUsers: 0,
        images: {
            header: null,
            mediumTile: "https://cdn.hyperbridge.org/blockhub/images/products/call-of-duty%C2%AE-black-ops-4930/med-tile.jpg",
            main: null,
            icon: "https://cdn.hyperbridge.org/blockhub/images/products/call-of-duty%C2%AE-black-ops-4930/icon.jpg",
            preview: [
                "https://cdn.hyperbridge.org/blockhub/images/products/call-of-duty%C2%AE-black-ops-4930/preview-01.jpg",
                "https://cdn.hyperbridge.org/blockhub/images/products/call-of-duty%C2%AE-black-ops-4930/preview-02.jpg",
                "https://cdn.hyperbridge.org/blockhub/images/products/call-of-duty%C2%AE-black-ops-4930/preview-03.jpg",
                "https://cdn.hyperbridge.org/blockhub/images/products/call-of-duty%C2%AE-black-ops-4930/preview-04.jpg",
                "https://cdn.hyperbridge.org/blockhub/images/products/call-of-duty%C2%AE-black-ops-4930/preview-05.jpg",
                "https://cdn.hyperbridge.org/blockhub/images/products/call-of-duty%C2%AE-black-ops-4930/preview-06.jpg"
            ]
        },
        video: null,
        genre: "Action",
        releaseDate: "8 Nov, 2010",
        developer: "Treyarch",
        publisher: "Activision",
        content: "The biggest first-person action series of all time and the follow-up to last year&#x2019;s blockbuster Call of Duty&#xAE;: Modern Warfare 2 returns with <strong>Call of Duty&#xAE;: Black Ops</strong>.<br>\t\t\t\t\t   <strong>Call of Duty&#xAE;: Black Ops</strong> will take you behind enemy lines as a member of an elite special forces unit engaging in covert warfare, classified operations, and explosive conflicts across the globe. With access to exclusive weaponry and equipment, your actions will tip the balance during the most dangerous time period mankind has ever known.<br>\t\t\t\t\t   \t\t\t\t\t   <ul><li><strong>Cinematic Single Player Campaign</strong>: An epic campaign and story that takes you to a variety of locations and conflicts all over the world where you will play as an elite Black Ops soldier in deniable operations where if you are caught, captured or killed, your country will disavow all knowledge of your existence.<br>\t\t\t\t\t\t\t</li><li><strong>Signature Multiplayer</strong>: Call of Duty&#x2019;s signature multiplayer gameplay returns with new perks and killstreaks, deeper levels of character and weapon customization, and all new modes including:<br>\t\t\t\t\t\t\t   <ul class=\"bb_ul\"><li><strong>Wager Matches</strong>: One in the Chamber, Gun Game, Sticks and Stones, Sharpshooter<br>\t\t\t\t\t\t\t\t   </li><li><strong>Theater Mode</strong>: View, record, and edit your favorite moments from multiplayer, and share with your friends<br>\t\t\t\t\t\t\t\t   </li><li><strong>Combat Training</strong>: Test your skill solo or Co-Op with friends against AI enemy players<br>\t\t\t\t\t\t\t   </li></ul></li><li><strong>Zombies!</strong>: Fan favorite Zombie mode is back providing endless hours of Zombie-slaying entertainment, solo or Co-Op<br>\t\t\t\t\t   </li></ul>",
        developerTags: [
            "Action",
            "FPS",
            "Zombies",
            "Multiplayer",
            "Shooter",
            "Singleplayer"
        ],
        languageSupport: [
            {
                name: "English",
                interface: true,
                fullAudio: false,
                subtitles: false
            },
            {
                name: "German",
                interface: true,
                fullAudio: false,
                subtitles: false
            },
            {
                name: "Italian",
                interface: true,
                fullAudio: false,
                subtitles: false
            },
            {
                name: "Spanish",
                interface: true,
                fullAudio: false,
                subtitles: false
            },
            {
                name: "French",
                interface: true,
                fullAudio: false,
                subtitles: false
            }
        ],
        systemRequirements: [
            {
                os: "win",
                system: "Windows® Vista / XP / 7",
                processor: "Intel® Core™2 Duo E6600 or AMD Phenom™ X3 8750 or better",
                memory: "2GB",
                graphics: "Shader 3.0 or better 256MB NVIDIA® GeForce® 8600GT / ATI Radeon® X1950Pro or better",
                directx: "DirectX® 9.0c",
                hardDrive: "12GB*",
                sound: "DirectX® 9.0c-compatible"
            }
        ],
        systemTags: [
            "new"
        ],
        type: "game",
        downloads: 0,
        plans: [],
        frequentlyTradedAssets: [],
        rating: {
            overall: 3.5,
            items: [
                {
                    name: "Dan Dyer",
                    number: 3
                },
                {
                    name: "Jake Clark",
                    number: 4.5
                },
                {
                    name: "Victoria Jones",
                    number: 1.5
                },
                {
                    name: "Anne Bower",
                    number: 1
                }
            ],
            fullReviewsPath: "/",
            rateGamePath: "/"
        },
        assets: [],
        community: {
            discussions: []
        }
    },
    {
        id: 19,
        name: "Homefront",
        status: 'active',
        ownerId: 1,
        price: 0,
        oldPrice: 0,
        communitySize: 0,
        activeUsers: 0,
        images: {
            header: null,
            mediumTile: "https://cdn.hyperbridge.org/blockhub/images/products/homefront-4059/med-tile.jpg",
            main: null,
            icon: "https://cdn.hyperbridge.org/blockhub/images/products/homefront-4059/icon.jpg",
            preview: [
                "https://cdn.hyperbridge.org/blockhub/images/products/homefront-4059/preview-01.jpg",
                "https://cdn.hyperbridge.org/blockhub/images/products/homefront-4059/preview-02.jpg",
                "https://cdn.hyperbridge.org/blockhub/images/products/homefront-4059/preview-03.jpg",
                "https://cdn.hyperbridge.org/blockhub/images/products/homefront-4059/preview-04.jpg",
                "https://cdn.hyperbridge.org/blockhub/images/products/homefront-4059/preview-05.jpg",
                "https://cdn.hyperbridge.org/blockhub/images/products/homefront-4059/preview-06.jpg"
            ]
        },
        video: null,
        genre: "Action",
        releaseDate: "14 Mar, 2011",
        developer: "Kaos Studios",
        publisher: "Deep Silver",
        content: "The year is 2027. The world as we know it is unraveling after fifteen years of economic meltdown and widespread global conflict over dwindling natural resources.<br>\t\t\t\t\tA once proud America has fallen, her infrastructure shattered and military in disarray. Crippled by a devastating EMP strike, the USA is powerless to resist the ever expanding occupation of a savage, nuclear armed Greater Korean Republic.<br>\t\t\t\t\tAbandoned by her former allies, the United States is a bleak landscape of walled towns and abandoned suburbs.  This is a police state where high school stadiums have become detention centers, and shopping malls shelter armored attack vehicles. A once-free people are now prisoners&#x2026; or collaborators&#x2026; or revolutionaries.<br>\t\t\t\t\tJoin the Resistance, stand united and fight for freedom against an overwhelming military force in Homefront&#x2019;s gripping single player campaign penned by John Milius (Apocalypse Now, Red Dawn). Stand alongside a cast of memorable characters as an emotional plot unfolds in this terrifyingly plausible near-future world. Experience  visceral, cinematic first-person shooter action as you fight your way across Occupied USA using guerrilla tactics, and commandeer military vehicles and advanced drone technology to defeat the enemy. <br>\t\t\t\t\tMultiplayer brings epic warfare to the online arena as infantry, tanks, attack helicopters and combat drones battle across huge, open battlefields. A rich feature set offering layers of tactical depth combined with a game-changing innovation in the multiplayer space will set a new benchmark in online warfare.<br>\t\t\t\t\t<ul><li><strong>Discover a terrifyingly plausible near-future world</strong> &#x2013; the familiar has become alien in this nightmare vision of Occupied USA<br>\t\t\t\t\t</li><li><strong>Fight for a cause</strong> &#x2013; join a cast of memorable characters as your resistance cell wages a guerrilla war against overwhelming military odds in the name of Freedom<br>\t\t\t\t\t</li><li><strong>Witness the human cost of war</strong> &#x2013; a gripping story from the pen of John Milius is told through immersive, interactive 1st person cut scenes<br>\t\t\t\t\t</li><li><strong>Experience explosive FPS gameplay</strong> &#x2013; battle through a dynamic mix of infantry and vehicle combat in a gripping single player campaign boasting intense, memorable set pieces<br>\t\t\t\t\t</li><li><strong>Take the battle online</strong> &#x2013; experience large scale multiplayer action like never before in epic infantry and vehicle warfare<br>\t\t\t\t\t</li></ul>",
        developerTags: [
            "Action",
            "FPS",
            "Multiplayer",
            "Shooter",
            "Singleplayer",
            "First-Person"
        ],
        languageSupport: [
            {
                name: "English",
                interface: true,
                fullAudio: false,
                subtitles: false
            },
            {
                name: "French",
                interface: true,
                fullAudio: false,
                subtitles: false
            },
            {
                name: "German",
                interface: true,
                fullAudio: false,
                subtitles: false
            },
            {
                name: "Italian",
                interface: true,
                fullAudio: false,
                subtitles: false
            },
            {
                name: "Spanish",
                interface: true,
                fullAudio: false,
                subtitles: false
            },
            {
                name: "Dutch",
                interface: true,
                fullAudio: false,
                subtitles: false
            }
        ],
        systemRequirements: [
            {
                os: "win",
                system: "Windows Vista or Windows 7",
                processor: "Intel Core i7 processor",
                memory: "2 GB RAM",
                graphics: "3D Compatible NVIDIA GeForce 480/570 Series GPU, NVIDIA 3D Vision Kit",
                directx: "",
                hardDrive: "10GB of free hard drive space",
                sound: "",
                other: "3D Vision-Ready Display"
            }
        ],
        systemTags: [
            "upcoming",
            "trending"
        ],
        type: "game",
        downloads: 0,
        plans: [],
        frequentlyTradedAssets: [],
        rating: {
            overall: 3.5,
            items: [
                {
                    name: "Dan Dyer",
                    number: 3
                },
                {
                    name: "Jake Clark",
                    number: 4.5
                },
                {
                    name: "Victoria Jones",
                    number: 1.5
                },
                {
                    name: "Anne Bower",
                    number: 1
                }
            ],
            fullReviewsPath: "/",
            rateGamePath: "/"
        },
        assets: [],
        community: {
            discussions: []
        }
    },
    {
        id: 21,
        name: "Mafia II",
        status: 'active',
        ownerId: 1,
        price: 0,
        oldPrice: 0,
        communitySize: 0,
        activeUsers: 0,
        images: {
            header: null,
            mediumTile: "https://cdn.hyperbridge.org/blockhub/images/products/mafia-ii-4001/med-tile.jpg",
            main: null,
            icon: "https://cdn.hyperbridge.org/blockhub/images/products/mafia-ii-4001/icon.jpg",
            preview: [
                "https://cdn.hyperbridge.org/blockhub/images/products/mafia-ii-4001/preview-01.jpg",
                "https://cdn.hyperbridge.org/blockhub/images/products/mafia-ii-4001/preview-02.jpg",
                "https://cdn.hyperbridge.org/blockhub/images/products/mafia-ii-4001/preview-03.jpg",
                "https://cdn.hyperbridge.org/blockhub/images/products/mafia-ii-4001/preview-04.jpg",
                "https://cdn.hyperbridge.org/blockhub/images/products/mafia-ii-4001/preview-05.jpg",
                "https://cdn.hyperbridge.org/blockhub/images/products/mafia-ii-4001/preview-06.jpg"
            ]
        },
        video: null,
        genre: "Action",
        releaseDate: "22 Mar, 2011",
        developer: "2K Czech",
        publisher: "2K",
        content: "Vito Scaletta has started to make a name for himself on the streets of Empire Bay as someone who can be trusted to get a job done. Together with his buddy Joe, he is working to prove himself to the Mafia, quickly escalating up the family ladder with crimes of larger reward, status and consequence&#x2026; the life as a wise guy isn&#x2019;t quite as untouchable as it seems.<br><strong><h2 class=\"bb_tag\">Action-Packed Gameplay:</h2></strong> Intense gunplay, white-knuckle car chases and visceral hand-to-hand combat &#x2014;it will take all that and more to become a &#x201C;made man&#x201D;.<br><strong><h2 class=\"bb_tag\">Epic Gangster Story:</h2></strong> Inspired by iconic mafia drama, the compelling characters and cinematic presentation will pull players into the allure and impossible escape of life in the Mafia.<br><strong><h2 class=\"bb_tag\">Immersive World and Period:</h2></strong> Enter the world of Empire Bay - World War II is raging in Europe and the architecture, cars, music and clothing all echo the period in stunning detail. As time passes, hot rod cars, 50s fashion and some of the era&#x2019;s best music reflect the birth of a cool new era.<br><strong><h2 class=\"bb_tag\">Illusion Engine&#x2122;:</h2></strong> 2K Czech&#x2019;s proprietary Illusion Engine, allows gamers to explore Empire Bay&#x2019;s 10 square miles of beautifully rendered outdoor environments and intricately designed interiors.<br><strong><h2 class=\"bb_tag\">Soundtrack Reflects the Mood of the Era:</h2></strong> Players will be immersed in the Golden Era of America as <strong>Mafia II</strong> features tracks from some of the era&#x2019;s most influential artists.<br>[/list]",
        developerTags: [
            "Action",
            "Open World",
            "Crime",
            "Story Rich",
            "Atmospheric",
            "Singleplayer"
        ],
        languageSupport: [
            {
                name: "English",
                interface: true,
                fullAudio: true,
                subtitles: true
            },
            {
                name: "French",
                interface: true,
                fullAudio: true,
                subtitles: true
            },
            {
                name: "German",
                interface: true,
                fullAudio: true,
                subtitles: true
            },
            {
                name: "Italian",
                interface: true,
                fullAudio: true,
                subtitles: true
            },
            {
                name: "Spanish",
                interface: true,
                fullAudio: true,
                subtitles: true
            },
            {
                name: "Czech",
                interface: true,
                fullAudio: true,
                subtitles: true
            },
            {
                name: "Polish",
                interface: true,
                fullAudio: false,
                subtitles: false
            },
            {
                name: "Russian",
                interface: true,
                fullAudio: true,
                subtitles: true
            }
        ],
        systemRequirements: [
            {
                os: "win",
                system: "Microsoft Windows XP (SP2 or later) / Windows Vista / Windows 7",
                processor: "2.4 GHz Quad Core processor",
                ram: "2GB",
                hardDiskSpace: "10GB",
                videoCard: "nVidia GeForce 9800 GTX / ATI Radeon HD 3870 or better",
                sound_card: "100% DirectX 9.0c compatible sound card",
                peripherals: "Keyboard and mouse or Windows compatible gamepad",
                other_requirements: "Initial installation requires one-time internet connection for BlockHub authentication; software installations required (included with the game)include nVidia PhysX_drivers 10.04.02_9.10.0522and nVidia GPU drivers 197.13 or latest, BlockHub Client and Microsoft DirectX."
            },
            {
                os: "mac",
                system: "10.10.5",
                processor: "2.0GHz Intel Core i3 or greater",
                memory: "4GB",
                graphics: "512Mb AMD 5650, 512Mb Nvidia 650M, Intel HD4000* (See Notes for more details)",
                storage: "8GB",
                additional_notes: "The game is supported on the following Macs. To check your Mac model and when it was released, select About This Mac from the Apple menu on your menu bar.",
                specialInfo: "*    All MacBooks released since Early 2016"
            }
        ],
        systemTags: [
            "featured"
        ],
        type: "game",
        downloads: 0,
        plans: [],
        frequentlyTradedAssets: [],
        rating: {
            overall: 3.5,
            items: [
                {
                    name: "Dan Dyer",
                    number: 3
                },
                {
                    name: "Jake Clark",
                    number: 4.5
                },
                {
                    name: "Victoria Jones",
                    number: 1.5
                },
                {
                    name: "Anne Bower",
                    number: 1
                }
            ],
            fullReviewsPath: "/",
            rateGamePath: "/"
        },
        assets: [],
        community: {
            discussions: []
        }
    },
    {
        id: 22,
        name: "The Witcher 2: Assassins of Kings Enhanced Edition",
        status: 'active',
        ownerId: 1,
        meta: {
            price: 0,
            oldPrice: 0,
            communitySize: 0,
            activeUsers: 0,
            images: {
                header: null,
                mediumTile: "https://cdn.hyperbridge.org/blockhub/images/products/the-witcher-2-assassins-of-kings-enhanced-edition-4664/med-tile.jpg",
                main: null,
                icon: "https://cdn.hyperbridge.org/blockhub/images/products/the-witcher-2-assassins-of-kings-enhanced-edition-4664/icon.jpg",
                preview: [
                    "https://cdn.hyperbridge.org/blockhub/images/products/the-witcher-2-assassins-of-kings-enhanced-edition-4664/preview-01.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/the-witcher-2-assassins-of-kings-enhanced-edition-4664/preview-02.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/the-witcher-2-assassins-of-kings-enhanced-edition-4664/preview-03.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/the-witcher-2-assassins-of-kings-enhanced-edition-4664/preview-04.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/the-witcher-2-assassins-of-kings-enhanced-edition-4664/preview-05.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/the-witcher-2-assassins-of-kings-enhanced-edition-4664/preview-06.jpg"
                ]
            },
            video: null,
            genre: "RPG",
            releaseDate: "17 May, 2011",
            developer: "CD PROJEKT RED",
            publisher: "CD PROJEKT RED",
            content: "The player is Geralt of Rivia, a professional monster slayer, a witcher. Entangled in the political turmoil that engulfed Temeria, Geralt helped quell the rebellion of the Order of the Flaming Rose. Soon after, he saved King Foltest&#x2019;s life when the monarch was attacked by a witcher-like assassin. He continues to protect the king, serving as his bodyguard as Foltest strives to bring peace to his kingdom. The Order&#x2019;s last bastions have yielded to the royal army, yet one more task remains - the Baroness La Valette announced her secession from the realm, and her fortress must be taken. A month after the attempted assassination, Foltest&#x2019;s armies stand at the gates of La Valette Castle, preparing for a final assault. Still at Foltest&#x2019;s side, Geralt is among them, unable to begin his personal quest to discover the mysterious assassin&#x2019;s origin and profile&#x2026;<br>Thanks to the new, ultra-modern REDengine, The Witcher 2: Assassins of Kings features both beautiful graphics and sophisticated in-game mechanics, drawing players into the most lively and believable world ever created in a video game.<br>Defining new standards for realistic, non-linear game narration, The Witcher 2 spins a mature, thought-provoking tale to produce one of the most complex and unique RPGs ever released on PC. In addition to its epic story, the game features a complex combat system that uniquely combines dynamic action and tactical depth.Compared to the initial award winning PC release, the Enhanced Edition features lots of new and exciting content:<br><ul><li>Additional hours of gameplay: New major adventures set in previously unseen locations, expanding the story and introducing new characters, mysteries and monsters.<br></li><li>New Game Introduction and cinematics: All new animations and cut scenes, including a new, three and a half minute pre-rendered cinematic depicting the assassination of King Demavend of Aedirn. </li><li>BAFTA Award winner and Academy Award nominee Tomasz Baginski brings this key historical event to life, setting the stage for the story told in The Witcher 2. <br></li><li>All of the up-to-date DLC and improvements introduced in the 2.0 version of the PC game, including:<br><ul class=\"bb_ul\"><li>Arena Mode &#x2013; an arcade mode that allows players to fight against endless waves of enemies and test their combat skills.<br>Players can share their results with their friends by uploading high scores to the forums or to Facebook .<br></li><li>A new, extensive tutorial system - allows gamers to be gradually and smoothly immersed in the game world and Geralt&#x2019;s<br>adventures.<br></li><li>Dark Mode &#x2013; a difficulty level designed for hardcore players, with unique dark-themed items. At this difficulty level, even<br>greater emphasis is placed on battle preparation, defensive maneuvers and opportunistic attacking.</li></ul></li><li>Official soundtrack in MP3 format.<br></li><li>World Map - A map of the game&apos;s world.<br></li><li>Quest Handbook - The Witcher 2 quest handbook for both novice and experienced role-playing fans.<br></li><li>Game Manual - A rulebook and interface explanation to help you get started.<br></li><li>Digital Comic Book - <i>Reasons of state</i> comic book</li></ul>",
            developerTags: [
                "RPG",
                "Fantasy",
                "Mature",
                "Choices Matter",
                "Story Rich",
                "Third Person"
            ],
            languageSupport: [
                {
                    name: "English",
                    interface: true,
                    fullAudio: true,
                    subtitles: true
                },
                {
                    name: "German",
                    interface: true,
                    fullAudio: true,
                    subtitles: true
                },
                {
                    name: "French",
                    interface: true,
                    fullAudio: true,
                    subtitles: true
                },
                {
                    name: "Spanish",
                    interface: true,
                    fullAudio: false,
                    subtitles: true
                },
                {
                    name: "Russian",
                    interface: true,
                    fullAudio: true,
                    subtitles: true
                },
                {
                    name: "Czech",
                    interface: true,
                    fullAudio: false,
                    subtitles: true
                },
                {
                    name: "Hungarian",
                    interface: true,
                    fullAudio: false,
                    subtitles: true
                },
                {
                    name: "Japanese",
                    interface: true,
                    fullAudio: false,
                    subtitles: true
                },
                {
                    name: "Polish",
                    interface: true,
                    fullAudio: true,
                    subtitles: true
                },
                {
                    name: "Turkish",
                    interface: true,
                    fullAudio: false,
                    subtitles: true
                },
                {
                    name: "Traditional Chinese",
                    interface: true,
                    fullAudio: false,
                    subtitles: true
                },
                {
                    name: "Italian",
                    interface: true,
                    fullAudio: false,
                    subtitles: true
                }
            ],
            systemRequirements: [
                {
                    os: "win",
                    system: "Windows XP/Vista/7",
                    processor: "Intel or AMD Quad-Core",
                    memory: "3 GB (Win XP), 4GB (Win Vista/Win 7)",
                    graphics: "GeForce 260 (1 GB) or Radeon HD 4850 (1 GB). Resolution 1440x900.",
                    directx: "DirectX 9.29 has to be installed.",
                    hardDrive: "25GB",
                    sound: ""
                },
                {
                    os: "mac",
                    system: "OS X 10.8.5 or higher",
                    processor: "Quad Core Intel",
                    memory: "8 GB RAM",
                    graphics: "GeForce GTX 675MX 1GB (on 1920x1080, medium), Radeon HD 6970M 1 GB (on 1920x1080, medium), Intel integrated graphics chipsets are not supported",
                    hardDrive: "25 GB HD space"
                },
                {
                    os: "linux",
                    system: "Ubuntu 14.04, Linux Mint 17, BlockHub OS",
                    processor: "Quad Core Intel",
                    memory: "4 GB RAM",
                    graphics: "GeForce GT 640 1GB (1440x900, medium)",
                    hardDrive: "25 GB HD space"
                }
            ],
            systemTags: [
                "sale",
                "frontpage"
            ],
            type: "game",
            downloads: 0,
            plans: [],
            frequentlyTradedAssets: [],
            rating: {
                overall: 3.5,
                items: [
                    {
                        name: "Dan Dyer",
                        number: 3
                    },
                    {
                        name: "Jake Clark",
                        number: 4.5
                    },
                    {
                        name: "Victoria Jones",
                        number: 1.5
                    },
                    {
                        name: "Anne Bower",
                        number: 1
                    }
                ],
                fullReviewsPath: "/",
                rateGamePath: "/"
            },
            assets: [],
            community: {
                discussions: []
            },
            steam_id: 20920
        }
    },
    {
        id: 23,
        name: "Dungeon Defenders",
        status: 'active',
        ownerId: 1,
        meta: {
            price: 0,
            oldPrice: 0,
            communitySize: 0,
            activeUsers: 0,
            images: {
                header: null,
                mediumTile: "https://cdn.hyperbridge.org/blockhub/images/products/dungeon-defenders-4398/med-tile.jpg",
                main: null,
                icon: "https://cdn.hyperbridge.org/blockhub/images/products/dungeon-defenders-4398/icon.jpg",
                preview: [
                    "https://cdn.hyperbridge.org/blockhub/images/products/dungeon-defenders-4398/preview-01.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/dungeon-defenders-4398/preview-02.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/dungeon-defenders-4398/preview-03.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/dungeon-defenders-4398/preview-04.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/dungeon-defenders-4398/preview-05.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/dungeon-defenders-4398/preview-06.jpg"
                ]
            },
            video: null,
            genre: "Action",
            releaseDate: "18 Oct, 2011",
            developer: "Trendy Entertainment",
            publisher: "Trendy Entertainment",
            content: "Dungeon Defenders is a Tower Defense Action-RPG where you must save the land of Etheria from an Ancient Evil! Create a hero from one of four distinct classes to fight back wave after wave of enemies by summoning defenses and directly participating in the action-packed combat!<br>\t\t\t\t\t\t\t\t\tCustomize and level your character, forge equipment, gather loot, collect pets and more! Take your hero through multiple difficulty modes and challenge/survival missions to earn more experience &amp; even better treasure. Join your friends with 4-player online and local (splitscreen) co-op to plan your strategies together or compete in PvP Deathmatch.<br>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul><li><strong>4-player Online and Local Co-Op</strong> - Team-up with up to 3 friends to defend cooperatively, with character classes that support each other&#x2019;s strengths and weaknesses. Dynamically combine local (splitscreen) and online players and leave/join any time, so that the game&#x2019;s always full.<br>\t\t\t\t\t\t\t\t\t</li><li><strong>Tower-Defense Meets Action-RPG</strong> - Choose your class, customize your character &amp; equipment, strategically assemble your defenses, and participate directly in action-packed battle to preserve your castle against the invading horde!<br>\t\t\t\t\t\t\t\t\t</li><li><strong>4 Distinct Character Classes</strong> - Each character class has a different skill tree, set of towers, and even basic attacks! You can choose if you want to play stealthy, turn invisible, and plant traps behind enemy lines with the Huntress or go all out, block off choke points, and brutally beat your foes into submission with the Squire!<br>\t\t\t\t\t\t\t\t\t</li><li><strong>Loot and Level-Up</strong> - Grab the mounds of money and items that your defeated foes drop and trade them or store them for later use in your Item Box! Getting kills and completing waves earns you experience points, which can be used to upgrade your characters, skills, equipment, and towers on a per-statistic basis. Do you want to enhance Hit Points, Attack Rate, Damage, etc? The choice is yours... Store your massive overflow of money in the &apos;Mana Bank&apos; and then spend it to improve your equipment or trade with other players. Proudly show off your best equipment in your own &apos;Adventurer&#x2019;s Tavern&apos;, without fear of item theft!<br>\t\t\t\t\t\t\t\t\t</li><li><strong>Tons of Enemies and Huge Boss Fights</strong> - Over 100 simultaneous enemies will attempt to tear through your defenses and gigantic Boss Monsters will appear to rain down havoc upon everyone. Only by employing the most effective defensive strategies, teamwork, and strong characters will you defeat such devilish foes! Many enemy types run the gamut from big dumb Orcs swinging huge axes, to lithe Dark Elves that strike from the shadows, to crazy kamikaze goblins! Can you defeat the epic boss battles and collect the special loot while still defending your crystals?<br>\t\t\t\t\t\t\t\t\t</li><li><strong>Mission &amp; Game Play Variety</strong> - Each level has a different visual setting, layout, enemy types, traps, and distinct surprises. To collect all the loot and reach the highest levels you must take your character through 4 difficulty modes, survival missions, challenge maps, and more! Some maps force you to have mobile defenses, guarding a crystal which warps around the map. Others have YOU attacking enemy encampments!<br>\t\t\t\t\t\t\t\t\t</li><li><strong>Collect and Trade Pets Online</strong> - A variety of pets exist to assist you in the land of Etheria, each with distinct behaviors. These pets can be leveled-up and customized to match your unique play-style. They can even be traded online with other players!<br>\t\t\t\t\t\t\t\t\t</li><li><strong>Secure Trading System</strong> - Afraid another player won&apos;t live up to their word? Use our secure trading system to trade your precious weapons, armor, and pets with other players online! Watch your name and fame spread online, as people seek out the best pet raisers or item forgers!<br>\t\t\t\t\t\t\t\t\t</li><li><strong>A Mountain of Stats</strong> - Every shot you take, kill you make, and defense you build is logged and recorded for posterity. Pore over the voluminous charts and graphs at the end of each session to analyze your team&#x2019;s performance, quickly review your best statistics for each level, and compare your data online with other players to see who is the greatest hero of all. Furthermore, your Achievements are visible for all to see within your very own Adventurer&#x2019;s Tavern, and the highest scores for each of your heroes are ranked on the worldwide leaderboards!<br>\t\t\t\t\t\t\t\t\t</li><li><strong>Dungeon Defenders Development Kit</strong> - Dungeon Defenders includes a free development kit where you can create and edit new Dungeon Defenders missions and more utilizing all of the existing Dungeon Defenders assets. Download and share these user created levels via BlockHub Workshop for an endless Dungeon Defenders experience!</li></ul>",
            developerTags: [
                "Tower Defense",
                "RPG",
                "Co-op",
                "Strategy",
                "Action",
                "Online Co-Op"
            ],
            languageSupport: [
                {
                    name: "English",
                    interface: true,
                    fullAudio: false,
                    subtitles: false
                },
                {
                    name: "French",
                    interface: true,
                    fullAudio: false,
                    subtitles: false
                },
                {
                    name: "German",
                    interface: true,
                    fullAudio: false,
                    subtitles: false
                },
                {
                    name: "Italian",
                    interface: true,
                    fullAudio: false,
                    subtitles: false
                },
                {
                    name: "Spanish",
                    interface: true,
                    fullAudio: false,
                    subtitles: false
                }
            ],
            systemRequirements: [
                {
                    os: "win",
                    system: "Windows 7",
                    processor: "2Ghz Dual-Core CPU",
                    memory: "2GB RAM",
                    hardDiskSpace: "2GB",
                    videoCard: "Graphics Card with Shader Model 3 support, 512 MB video memory",
                    directx: "9.0c",
                    sound: "DirectSound-compatible sound device",
                    additional: ""
                },
                {
                    os: "mac",
                    system: "OS X version Snow Leopard 10.6.3, or later.",
                    processor: "1.3 GHz Intel CPU",
                    memory: "2 GB RAM",
                    hardDiskSpace: "3 GB",
                    videoCard: "Open GL 2.1 / Shader Model 3 capable graphics card with 256 MB video RAM"
                },
                {
                    os: "linux",
                    system: "Ubuntu 12.04 LTS",
                    processor: "2 GHz CPU",
                    memory: "2 GB",
                    hardDiskSpace: "6 Gb",
                    videoCard: "ATI Radeon HD 2400 or NVIDIA GeForce 7600, equivalent or greater",
                    opengl: "2.1"
                }
            ],
            systemTags: [
                "specials"
            ],
            type: "game",
            downloads: 0,
            plans: [],
            frequentlyTradedAssets: [],
            rating: {
                overall: 3.5,
                items: [
                    {
                        name: "Dan Dyer",
                        number: 3
                    },
                    {
                        name: "Jake Clark",
                        number: 4.5
                    },
                    {
                        name: "Victoria Jones",
                        number: 1.5
                    },
                    {
                        name: "Anne Bower",
                        number: 1
                    }
                ],
                fullReviewsPath: "/",
                rateGamePath: "/"
            },
            assets: [],
            community: {
                discussions: []
            }
        }
    },
    {
        id: 24,
        name: "Worms Ultimate Mayhem",
        meta: {
            price: 0,
            oldPrice: 0,
            communitySize: 0,
            activeUsers: 0,
            images: {
                header: null,
                mediumTile: "https://cdn.hyperbridge.org/blockhub/images/products/worms-ultimate-mayhem-4439/med-tile.jpg",
                main: null,
                icon: "https://cdn.hyperbridge.org/blockhub/images/products/worms-ultimate-mayhem-4439/icon.jpg",
                preview: [
                    "https://cdn.hyperbridge.org/blockhub/images/products/worms-ultimate-mayhem-4439/preview-01.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/worms-ultimate-mayhem-4439/preview-02.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/worms-ultimate-mayhem-4439/preview-03.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/worms-ultimate-mayhem-4439/preview-04.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/worms-ultimate-mayhem-4439/preview-05.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/worms-ultimate-mayhem-4439/preview-06.jpg"
                ]
            },
            video: null,
            genre: "Strategy",
            releaseDate: "28 Sep, 2011",
            developer: "Team17 Digital Ltd",
            publisher: "Team17 Digital Ltd",
            content: "<strong>Worms&#x2122;: Ultimate Mayhem</strong> is the definitive 3D &quot;Worms&#x2122;&quot; game! Load your weapons and experience a whole new dimension in destructive turn-based cartoon action! Taking the game into 3D creates all-new strategic and gameplay possibilities. With over 70 single-player missions and challenges, online and local multi-player for up to 4 players, 5 multi-player modes, BlockHub Achievements, unprecedented customization of both worms and weapons, and fully destructible environments, it&#x2019;s bursting with anarchic mayhem. Battle and puzzle your way through all of the missions from both &quot;Worms&#x2122; 3D&quot; and &quot;Worms&#x2122; 4: Mayhem&quot; - it&#x2019;s essentially two games in one. With the addition of HD visuals, gameplay enhancements and new extra content, it is the ultimate 3D &quot;Worms&#x2122;&quot; collection!<br>\t\t\t\t\t\t\t\t\t\t<strong>EXTENSIVE SINGLE-PLAYER CONTENT:</strong><br>\t\t\t\t\t<ul><li>A vast array of single-player content spanning the very best of the 3D &quot;Worms&#x2122;&quot; games, ranging from shooting challenges to speed runs, whilst a collection of crazy missions, interspersed with newly fully voiced narrative FMV sequences, make up the single-player campaign. Additionally, a huge number of challenges ask the player to master the individual skills of the game (such as piloting a Jetpack or steering a Parachute) in order to complete tasks such as target shooting or collecting targets, all against the clock.<br>\t\t\t\t\t</li></ul><strong>ONLINE AND LOCAL MULTI-PLAYER:</strong><br>\t\t\t\t\t<ul><li>Full online play for up to 4 players over a wealth of game modes such as &quot;Statue Defend&quot;, &quot;Homelands&quot; or just plain &quot;Deathmatch&quot;, plus the ability to create your own custom game settings to play against your friends! Because of the turn-based nature of the game, it can be played multi-player offline on one screen.<br>\t\t\t\t\t\t   </li><li>Fight on the randomly generated landscapes, even save and share them, which allows for a huge amount of multi-player map options!<br>\t\t\t\t\t</li></ul><strong>GET COMPETITIVE:</strong><br>\t\t\t\t\t<ul><li>Play standard or ranked games in a bid to scale the BlockHub Leaderboards!<br>\t\t\t\t\t</li></ul><strong>MASSIVE CUSTOMIZATION OPTIONS:</strong><br>\t\t\t\t\t<ul><li>Players are able to name their teams, choose which hats they want their worms to wear, whether they wear glasses, have moustaches, what they say, which flag represents them, and even what gravestone they leave behind when they die.<br>\t\t\t\t\t</li></ul><strong>Worms&#x2122; WEAPONS AND UTILITIES:</strong><br>\t\t\t\t\t<ul><li>Many of the classic Worms&#x2122; weapons are present and correct, with the Holy Hand Grenade, Bazooka, Dynamite, Banana Bomb, Baseball Bat, Super Sheep and many more in your arsenal of destruction.<br>\t\t\t\t\t\t   </li><li>There is also a sprinkling of even more crazy and surreal weapons too, such as Alien Abduction, Fatkins Strike, Flood, Inflatable Scouser, Old Woman, Starburst and Bovine Blitz with which to wage war on your enemies.<br>\t\t\t\t\t</li></ul><strong>CUSTOM BUILT WEAPONRY:</strong><br>\t\t\t\t\t<ul><li>Players are also able to construct their own weapons from a wide selection of components. These weapons are added to the players&#x2019; arsenals and remain secret until deployed, giving opponents a nasty shock. <br>\t\t\t\t\t</li></ul><strong>TALK TRASH:</strong><br>\t\t\t\t\t<ul><li>In-game voice-chat so you can cheer on team mates or indeed win the battle against opponents verbally!<br>\t\t\t\t\t</li></ul><strong>FULLY DESTRUCTIBLE ENVIRONMENTS:</strong><br>\t\t\t\t\t<ul><li>Deform everything in real-time.<br>\t\t\t\t\t </li></ul><strong>NEW PICTURE-IN-PICTURE DISPLAY:</strong><br>\t\t\t\t\t<ul><li>This tracks every action a player makes when attacking, whilst at the same time allowing the player to retreat and not miss a single moment of the glorious action.<br>\t\t\t\t\t </li></ul><strong>NUMEROUS GAMEPLAY IMPROVEMENTS &amp; ENHANCEMENTS</strong><br>\t\t\t\t\t<ul><li>New camera enhancements make it easier to follow the action; optimized AI means more intelligent enemies, and the addition of speech and lip-synching to the single-player missions makes for even more cinematic fun!<br>\t\t\t\t\t\t   </li><li>New visual improvements, with dynamic real time lighting and post process effects and shaders, make the mayhem look even more impressive.<br>\t\t\t\t\t </li></ul>",
            developerTags: [
                "Strategy",
                "Multiplayer",
                "Funny",
                "Turn-Based",
                "Comedy",
                "Third Person"
            ],
            languageSupport: [
                {
                    name: "English",
                    interface: true,
                    fullAudio: false,
                    subtitles: false
                },
                {
                    name: "French",
                    interface: true,
                    fullAudio: false,
                    subtitles: false
                },
                {
                    name: "German",
                    interface: true,
                    fullAudio: false,
                    subtitles: false
                },
                {
                    name: "Italian",
                    interface: true,
                    fullAudio: false,
                    subtitles: false
                },
                {
                    name: "Spanish",
                    interface: true,
                    fullAudio: false,
                    subtitles: false
                }
            ],
            systemRequirements: [
                {
                    os: "win",
                    system: "Windows 7 / Vista / XP",
                    processor: "3.0 GHz P4, Dual Core 2.0 (or higher) or AMD64X2 (or higher)",
                    memory: "2GB",
                    graphics: "512 MB NVIDIA GeForce 8400 / ATI Radeon HD 4650 or higher",
                    directx: "9.0c",
                    hardDrive: "At least 1.8 GB of Space",
                    sound: "DirectX 9.0c compatible",
                    other: "Internet connection required"
                }
            ],
            systemTags: [
                "specials",
                "sale"
            ],
            type: "game",
            downloads: 0,
            plans: [],
            frequentlyTradedAssets: [],
            rating: {
                overall: 3.5,
                items: [
                    {
                        name: "Dan Dyer",
                        number: 3
                    },
                    {
                        name: "Jake Clark",
                        number: 4.5
                    },
                    {
                        name: "Victoria Jones",
                        number: 1.5
                    },
                    {
                        name: "Anne Bower",
                        number: 1
                    }
                ],
                fullReviewsPath: "/",
                rateGamePath: "/"
            },
            assets: [],
            community: {
                discussions: []
            }
        }
    },
    {
        id: 25,
        name: "Saints Row: The Third",
        status: 'active',
        ownerId: 1,
        meta: {
            price: 0,
            oldPrice: 0,
            communitySize: 0,
            activeUsers: 0,
            images: {
                header: null,
                mediumTile: "https://cdn.hyperbridge.org/blockhub/images/products/saints-row-the-third-4089/med-tile.jpg",
                main: null,
                icon: "https://cdn.hyperbridge.org/blockhub/images/products/saints-row-the-third-4089/icon.jpg",
                preview: [
                    "https://cdn.hyperbridge.org/blockhub/images/products/saints-row-the-third-4089/preview-01.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/saints-row-the-third-4089/preview-02.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/saints-row-the-third-4089/preview-03.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/saints-row-the-third-4089/preview-04.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/saints-row-the-third-4089/preview-05.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/saints-row-the-third-4089/preview-06.jpg"
                ]
            },
            video: null,
            genre: "Action",
            releaseDate: "17 Nov, 2011",
            developer: "Volition",
            publisher: "Deep Silver",
            content: "Years after taking Stilwater for their own, the Third Street Saints have evolved from street gang to household brand name, with Saints sneakers, Saints energy drinks and Johnny Gat bobble head dolls all available at a store near you.<br>\n\t\t\t\t\t\tThe Saints are kings of Stilwater, but their celebrity status has not gone unnoticed. The Syndicate, a legendary criminal fraternity with pawns in play all over the globe, has turned its eye on the Saints and demands tribute. Refusing to kneel to the Syndicate, you take the fight to Steelport, a once-proud metropolis reduced to a struggling city of sin under Syndicate control.<br>\n\t\t\t\t\t\tTake a tank skydiving, call in a satellite-targeted airstrike on a Mexican wrestling gang, and defend yourself against a highly-trained military force using only a sex toy in the most out- landish gameplay scenarios ever seen, igniting a city-wide war that will set Steelport on fire. Strap it on.",
            developerTags: [
                "Open World",
                "Action",
                "Comedy",
                "Third-Person Shooter",
                "Co-op",
                "Sandbox"
            ],
            languageSupport: [
                {
                    name: "English",
                    interface: true,
                    fullAudio: true,
                    subtitles: false
                },
                {
                    name: "Czech",
                    interface: true,
                    fullAudio: false,
                    subtitles: false
                },
                {
                    name: "Dutch",
                    interface: true,
                    fullAudio: false,
                    subtitles: false
                },
                {
                    name: "French",
                    interface: true,
                    fullAudio: false,
                    subtitles: false
                },
                {
                    name: "German",
                    interface: true,
                    fullAudio: false,
                    subtitles: false
                },
                {
                    name: "Italian",
                    interface: true,
                    fullAudio: false,
                    subtitles: false
                },
                {
                    name: "Polish",
                    interface: true,
                    fullAudio: false,
                    subtitles: false
                },
                {
                    name: "Russian",
                    interface: true,
                    fullAudio: false,
                    subtitles: false
                },
                {
                    name: "Spanish",
                    interface: true,
                    fullAudio: false,
                    subtitles: false
                }
            ],
            systemRequirements: [
                {
                    os: "win",
                    system: "Microsoft® Windows® 7",
                    processor: "Any Quad Core Processor (Intel® Core i5 or AMD Phenom™ II X4) or 3.0+ Dual Core CPU",
                    memory: "4GB System RAM or more",
                    graphics: "1GB Video RAM GPU w/ Shader Model 4.0 support.  NVIDIA® GeForce® GTX 400 series or better.  ATI Radeon™ HD5000 series or better",
                    directx: "DirectX® 11",
                    hardDrive: "10 GB",
                    sound: "100% DirectX® 9.0C compliant sound card or equivalent onboard sound",
                    "coop_play: "NVIDIA® GeForce® 8800 cards require 640MB of Video RAM.  ATI Radeon™ HD3800 cards require 1GB of Video RAM"
                },
                {
                    os: "linux",
                    system: "Ubuntu 14.04.3 LTS, Ubuntu 15.04, Linux Mint 17.1, BlockHub OS Brewmaster",
                    cpu: "Intel Core i5-4670K (3.4 GHz) or equivalent or AMD Athlon X4 860K (3.7 GHz) or equivalent",
                    gpu: "GeForce GTX 760 (2048 MB) or equivalent or Radeon HD 7950 (2048 MB) or equivalent",
                    recommended_graphics_drivers: "Nvidia 352, 355 or 358 series driver / AMD: AMD Catalyst (fglrx) 15.9 or better. MESA drivers and Intel Graphics are not currently supported.",
                    ram: "8192 MB",
                    disk_space: "Around 7 GB"
                }
            ],
            systemTags: [
                "sale"
            ],
            type: "game",
            downloads: 0,
            plans: [],
            frequentlyTradedAssets: [],
            rating: {
                overall: 3.5,
                items: [
                    {
                        name: "Dan Dyer",
                        number: 3
                    },
                    {
                        name: "Jake Clark",
                        number: 4.5
                    },
                    {
                        name: "Victoria Jones",
                        number: 1.5
                    },
                    {
                        name: "Anne Bower",
                        number: 1
                    }
                ],
                fullReviewsPath: "/",
                rateGamePath: "/"
            },
            assets: [],
            community: {
                discussions: []
            }
        }
    },
    {
        id: 26,
        name: "World of Warcraft",
        status: 'active',
        ownerId: 1,
        meta: {
            price: 0,
            oldPrice: 0,
            communitySize: 0,
            activeUsers: 0,
            images: {
                header: null,
                mediumTile: "https://cdn.hyperbridge.org/blockhub/images/products/might-&-magic-heroes-vi-4896/med-tile.jpg",
                main: null,
                icon: "https://cdn.hyperbridge.org/blockhub/images/products/might-&-magic-heroes-vi-4896/icon.jpg",
                preview: [
                    "https://cdn.hyperbridge.org/blockhub/images/products/might-&-magic-heroes-vi-4896/preview-01.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/might-&-magic-heroes-vi-4896/preview-02.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/might-&-magic-heroes-vi-4896/preview-03.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/might-&-magic-heroes-vi-4896/preview-04.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/might-&-magic-heroes-vi-4896/preview-05.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/might-&-magic-heroes-vi-4896/preview-06.jpg"
                ]
            },
            video: null,
            genre: "RPG",
            releaseDate: "13 Oct, 2005",
            developer: "Blizzard",
            publisher: "Blizzard",
            content: "",
            developerTags: [
                "RPG",
                "Fantasy",
                "MMO"
            ],
            languageSupport: [
                {
                    name: "English",
                    interface: true,
                    fullAudio: false,
                    subtitles: false
                },
                {
                    name: "Czech",
                    interface: true,
                    fullAudio: false,
                    subtitles: false
                },
                {
                    name: "French",
                    interface: true,
                    fullAudio: false,
                    subtitles: false
                },
                {
                    name: "German",
                    interface: true,
                    fullAudio: false,
                    subtitles: false
                },
                {
                    name: "Hungarian",
                    interface: true,
                    fullAudio: false,
                    subtitles: false
                },
                {
                    name: "Italian",
                    interface: true,
                    fullAudio: false,
                    subtitles: false
                },
                {
                    name: "Korean",
                    interface: true,
                    fullAudio: false,
                    subtitles: false
                },
                {
                    name: "Polish",
                    interface: true,
                    fullAudio: false,
                    subtitles: false
                },
                {
                    name: "Russian",
                    interface: true,
                    fullAudio: false,
                    subtitles: false
                },
                {
                    name: "Spanish",
                    interface: true,
                    fullAudio: false,
                    subtitles: false
                }
            ],
            systemRequirements: [
                {
                    os: "win",
                    system: "Windows XP, Windows Vista, Windows 7 (all 32/64 bit)",
                    processor: "Intel Pentium Core 2 @ Duo E6400 @ 2.00 Ghz, AMD Athlon II X2 240 @ 2.8 Ghz",
                    memory: "2 GB for Windows XP and 2GB for Vista / Windows 7",
                    graphics: "1 GB, DirectX 9.0c",
                    directx: "9.0c",
                    hardDrive: "8 GB",
                    sound: "DirectX 9.0c compatible",
                    specialInfo: "ATI® RADEON® HD 6000 Series"
                }
            ],
            systemTags: [
                "new",
                "featured",
                "upcoming"
            ],
            type: "game",
            downloads: 0,
            plans: [],
            frequentlyTradedAssets: [],
            rating: {
                overall: 4,
                items: [
                    {
                        name: "Joe Murray",
                        number: 5
                    },
                    {
                        name: "Jake Marshall",
                        number: 3.5
                    },
                    {
                        name: "Dylan Greene",
                        number: 4.5
                    },
                    {
                        name: "Emma Wilkins",
                        number: 2.5
                    }
                ],
                fullReviewsPath: "/",
                rateGamePath: "/"
            },
            assets: [],
            community: {
                discussions: []
            },
            crowdfund: true,
            stateTag: "trending",
            followers: 591,
            players: 12
        }
    },
    {
        id: 27,
        name: "Fishbank",
        status: 'active',
        ownerId: 1,
        meta: {
            price: 0,
            oldPrice: 0,
            communitySize: 1000,
            activeUsers: 10,
            currentVersion: "v3.3.0",
            releases: [
                {
                    version: "v3.3.0",
                    playLink: "https://play.fishbank.io/",
                    downloads: [],
                    meta: {
                        created: 29239728
                    }
                }
            ],
            images: {
                header: null,
                mediumTile: "https://cdn.hyperbridge.org/blockhub/images/products/might-&-magic-heroes-vi-4896/med-tile.jpg",
                main: null,
                icon: "https://cdn.hyperbridge.org/blockhub/images/products/might-&-magic-heroes-vi-4896/icon.jpg",
                preview: [
                    "https://cdn.hyperbridge.org/blockhub/images/products/might-&-magic-heroes-vi-4896/preview-01.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/might-&-magic-heroes-vi-4896/preview-02.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/might-&-magic-heroes-vi-4896/preview-03.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/might-&-magic-heroes-vi-4896/preview-04.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/might-&-magic-heroes-vi-4896/preview-05.jpg",
                    "https://cdn.hyperbridge.org/blockhub/images/products/might-&-magic-heroes-vi-4896/preview-06.jpg"
                ]
            },
            video: null,
            genre: "MMO",
            releaseDate: "13 Oct, 2017",
            developer: "Fishbank",
            publisher: "Fishbank",
            content: "",
            developerTags: [
                "MMO",
                "Battle"
            ],
            languageSupport: [
                {
                    name: "English",
                    interface: true,
                    fullAudio: false,
                    subtitles: false,
                    code: "en"
                }
            ],
            systemRequirements: [
                {
                    os: "win",
                    system: "Windows XP, Windows Vista, Windows 7 (all 32/64 bit)",
                    processor: "Intel Pentium Core 2 @ Duo E6400 @ 2.00 Ghz, AMD Athlon II X2 240 @ 2.8 Ghz",
                    memory: "2 GB for Windows XP and 2GB for Vista / Windows 7",
                    graphics: "1 GB, DirectX 9.0c",
                    directx: "9.0c",
                    hardDrive: "8 GB",
                    sound: "DirectX 9.0c compatible",
                    specialInfo: "ATI® RADEON® HD 6000 Series"
                }
            ],
            systemTags: [
                "new",
                "featured",
                "upcoming"
            ],
            type: "game",
            downloads: 0,
            plans: [],
            frequentlyTradedAssets: [],
            rating: {
                overall: 0,
                items: [
                ],
                fullReviewsPath: "/",
                rateGamePath: "/"
            },
            assets: [],
            community: {
                discussions: []
            },
            crowdfund: true,
            stateTag: "trending",
            followers: 0,
            players: 0,
            streams: [
            ],
            reviews: [
            ]
        }
    }
]

export const seed = async function (knex): Promise<any> {
    await knex('products').del()

    Product
        .query(knex)
        .upsertGraph(data)
}