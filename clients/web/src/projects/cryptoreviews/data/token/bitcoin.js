export default (DB) => ({
    name: "Bitcoin",
    header: {
        logo: "/Apps/Site/Projects/cryptoreviews/Assets/Other/images/logos/bitcoin.png"
    },
    intro: {
        stats: {
            released: "2009",
            ledger: "blockchain",
            architecture: "bitcoin",
            type: "currency"
        }
    },
    network: {
        items: DB.tokens.find({
            'symbol': { '$in': ['btc', 'eth', 'xrp', 'bch', 'ltc'] }
        })
    },
    history: {
        content: `<p className="iq-mb-30">Bitcoin is the original cryptocurrency. It's the king daddy of crypto. It tooks the learnings of the cypher punk era in the 90s and built on it, combining blockchain, consensus and proof of work to create a safe to use currency with no double spending. Bitcoin was created in 2009 by Satoshi Nakamoto. Nobody knows who it was, if it was a group or an individual.</p>`,
        timeline: {
            items: []
        }
    },
    quickLinks: {
        social: {
            content: `<p>Bitcoin has <strong>no official website or social networks</strong>, as it's ownerless. It has a core development team, but no organization management. Bitcoin.com is an unofficial portal by Roger Ver.</p>`
        },
        forums: {
            items: DB.sites.find({
                'id': { '$in': ['rcryptocurrency', 'rbitcoinmarkets', 'bitcointalk'] }
            })
        },
        other: {
            items: DB.sites.find({
                'id': { '$in': ['cryptocurrencycalendar', 'cryptocompare', 'coinmastery'] }
            })
        }
    },
    notifications: {
        content: `<p>If there's big news or problems with Bitcoin, we'll let you know here first.</p>`,
        alerts: {
            items: [
                DB.notifications.findOne({ 'id': 'binancebittrexusdpair' })
            ]
        },
        warnings: {
            items: [
                DB.notifications.findOne({ 'id': 'gizascam' })
            ]
        }
    },
    compare: {
        content: `<p>No cryptocurrencies are exactly alike. Each have pros and cons. We'll touch on some of those, but ultimately you'll have to do your own research to figure out which one is for you. But don't worry, we'll be here to guide you along with way.</p>`,
        items: [
            DB.tokens.findOne({ 'symbol': 'btc' }),
            DB.tokens.findOne({ 'symbol': 'iota' }),
            DB.tokens.findOne({ 'symbol': 'bch' }),
        ]
    },
    media: {
        content: `<p>Bitcoin and blockchain can be confusing at times. We promise these videos will make it clearer.</p>`,
        items: DB.videos.find({
            'id': { '$in': ['bettinablockchain', 'charlesdecentralized'] }
        })
    },
    education: {
        content: `<p>We've compiled a list of the only the top rated books on Bitcoin.</p>`,
        books: DB.books.find({
            'id': { '$in': ['mb', 'btfom', 'tbb', 'tsotb'] }
        })
    },
    exchanges: {
        content: `<p>So where can we buy &amp; sell Bitcoin? Which is most popular? Which is safest?</p>`,
        spotlight: DB.exchanges.find({
            'title': { '$in': ['Binance', 'Bittrex'] }
        }),
        items: DB.exchanges.data
    },
    softwareWallets: {
        content: `<div>
            <p>What are the best software wallets to store Bitcoin?</p>
            <p><strong>Software Wallet:</strong> an app for desktop or mobile that stores cryptocurrency (usually less safe than a hardware wallet unless the device has TEE (trusted execution environment).</p>
        </div>`,
        items: DB.softwareWallets.find({
            'company': { '$in': ['Jaxx', 'Exodus'] }
        })
    },
    hardwareWallets: {
        content: `<div>
            <p>What are the best hardware wallets to store Bitcoin?</p>
            <p><strong>Hardware Wallet:</strong> a device dedicated to storing cryptocurrency (usually pretty safe).</p>
        </div>`,
        items: DB.hardwareWallets.find({
            'company': { '$in': ['Trezor', 'Ledger'] }
        })
    },
    faq: {
        content: `<p></p>`,
        items: [
            {
                id: "created",
                collapsed: false,
                question: "Who created Bitcoin?",
                answer: `<p>Nobody knows for sure. Some believe it was the government (NSA), or a large corporation (Japan's Softbank). A common guess is Hal Finney, the first user aside from Satoshi, who lived in the same town as a Satoshi Nakamoto; Unforunately Hal passed away in 2014. Since then, Craig Wright has attempted to claim the fame, but others such as Vitalik Buterin have been quick to point of the unlikelihood of that being true.</p>`
            },
            {
                id: "howfast",
                collapsed: true,
                question: "How fast is Bitcoin?",
                answer: `<p>It depends on the day, but on average it's currently 3 transactions per second. This is considered quite low. In fact there is often thousands of pending transactions.</p>`
            },
            {
                id: "forks",
                collapsed: true,
                question: "What's up with all the forks?",
                answer: `<p>A fork is when an individual or organization starts going a different direction than the original chain (usually due to different source code). This happened with Bitcoin a lot due to improvements wanting to be made that the Bitcoin core team either didn't get to yet or do not support. Since Bitcoin is the dominate cryptocurrency that most people hold, it makes for a good chain to fork. And since most people are holding not selling, it leads to low liquidity, which is sometimes preceived as strength (people not wanting to sell). This leads to a higher market cap. Thus, some organizations are looking at it as quick way to make money.</p>`
            },
            {
                id: "die",
                collapsed: true,
                question: "Can Bitcoin die?",
                answer: `<p>It's possible in theory, but very very unlikely for Bitcoin to die at this point. The worst thing that could happen is the source code is hacked, but miners would quickly react and ignore the corrupt source code. Since it's deployed to thousands of computers world wide, it's unlikely every single one will stop mining for the foreseeable future. Even if it fades away, there will always be somebody willing to bet on a comeback.</p>`
            },
            {
                id: "maximalist",
                collapsed: true,
                question: "What is a Bitcoin maximalist?",
                answer: `<p>A maximalist is somebody who believes Bitcoin is the only solution needed. They are typically early adopters and see blockchain's major use case as a currency, and Bitcoin as the defacto implementation.</p>`
            }
        ]
    }

})