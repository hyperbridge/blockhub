export default [
    {
        path: '/',
        name: 'Home',
        component: () => import('~/pages/home').then(m => m.default || m)
    },
    {
        path: "*",
        name: 'Not Found',
        component: () => import('~/pages/not-found').then(m => m.default || m)
    },
    // Internal
    { path: '/go/faucet', beforeEnter(to, from, next) { window.location = 'https://crypto.in5mins.com/faucet' } },
    { path: '/go/dictionary', beforeEnter(to, from, next) { window.location = 'https://crypto.in5mins.com/dictionary' } },
    { path: '/go/in5mins', beforeEnter(to, from, next) { window.location = 'https://crypto.in5mins.com/' } },
    // Exchanges
    { path: '/go/binance', beforeEnter(to, from, next) { window.location = 'https://www.binance.com/?ref=10031868' } },
    { path: '/go/bittrex', beforeEnter(to, from, next) { window.location = 'https://bittrex.com/Home/Markets' } },
    { path: '/go/bitfinex', beforeEnter(to, from, next) { window.location = 'https://www.bitfinex.com/' } },
    { path: '/go/bitstamp', beforeEnter(to, from, next) { window.location = 'https://www.bitstamp.net/' } },
    { path: '/go/gemini', beforeEnter(to, from, next) { window.location = 'https://gemini.com/' } },
    { path: '/go/coinbase', beforeEnter(to, from, next) { window.location = 'https://coinbase.com/' } },
    { path: '/go/kraken', beforeEnter(to, from, next) { window.location = 'https://www.kraken.com/' } },
    { path: '/go/bitflyer', beforeEnter(to, from, next) { window.location = 'https://bitflyer.com/en-us/' } },
    { path: '/go/bitthumb', beforeEnter(to, from, next) { window.location = 'https://www.bithumb.com/' } },
    { path: '/go/idex', beforeEnter(to, from, next) { window.location = 'https://idex.market/' } },
    { path: '/go/huobi', beforeEnter(to, from, next) { window.location = 'https://www.huobi.pro/' } },
    { path: '/go/kucoin', beforeEnter(to, from, next) { window.location = 'http://kucoin.com/' } },
    { path: '/go/etoro', beforeEnter(to, from, next) { window.location = 'https://www.etoro.com/' } },
    // Wallets
    { path: '/go/trezor', beforeEnter(to, from, next) { window.location = 'https://trezor.io/' } },
    { path: '/go/ledger', beforeEnter(to, from, next) { window.location = 'https://www.ledgerwallet.com/' } },
    { path: '/go/jaxx', beforeEnter(to, from, next) { window.location = 'https://jaxx.io/' } },
    { path: '/go/metamask', beforeEnter(to, from, next) { window.location = 'https://metamask.io/' } },
    { path: '/go/exodus', beforeEnter(to, from, next) { window.location = 'https://www.exodus.io/' } },
    // Books
    { path: '/go/book/mb', beforeEnter(to, from, next) { window.location = 'https://www.amazon.com/Mastering-Bitcoin-Programming-Open-Blockchain/dp/1491954388/ref=sr_1_1_sspa?s=books&ie=UTF8&qid=1529271913&sr=1-1-spons&keywords=mastering+bitcoin&psc=1' } },
    { path: '/go/book/btfom', beforeEnter(to, from, next) { window.location = 'https://www.amazon.com/Bitcoin-The-Future-Of-Money/dp/B00OUQLMTI/ref=sr_1_3?ie=UTF8&qid=1529271695&sr=8-3&keywords=Bitcoin+The+Future+of+Money' } },
    { path: '/go/book/tbb', beforeEnter(to, from, next) { window.location = 'https://www.amazon.com/Bitcoin-Bible-Benjamin-Guttmann/dp/3732284328/ref=sr_1_3?s=books&ie=UTF8&qid=1529271949&sr=1-3&keywords=The+Bitcoin+Bible' } },
    { path: '/go/book/tsotb', beforeEnter(to, from, next) { window.location = 'https://www.amazon.com/Science-Blockchain-Roger-Wattenhofer/dp/1522751831/ref=sr_1_3?s=books&ie=UTF8&qid=1529271972&sr=1-3&keywords=The+Science+of+the+Blockchain' } },
    // Other
    { path: '/go/cmc', beforeEnter(to, from, next) { window.location = 'https://coinmarketcap.com/' } },
    { path: '/go/rcryptocurrency', beforeEnter(to, from, next) { window.location = 'https://www.reddit.com/r/CryptoCurrency/' } },
    { path: '/go/rbitcoinmarkets', beforeEnter(to, from, next) { window.location = 'https://www.reddit.com/r/BitcoinMarkets/' } },
    { path: '/go/cryptocurrencycalendar', beforeEnter(to, from, next) { window.location = 'http://coinmarketcal.com/' } },
    { path: '/go/cryptocompare', beforeEnter(to, from, next) { window.location = 'https://www.cryptocompare.com/' } },
    { path: '/go/bitcointalk', beforeEnter(to, from, next) { window.location = 'https://bitcointalk.org/index.php' } },
    { path: '/go/bitcoinity', beforeEnter(to, from, next) { window.location = 'http://bitcoinity.org/markets/list' } },
    // Reviews
    { path: '/review/elf', beforeEnter(to, from, next) { window.location = 'https://aelf-elf.review' } },
    { path: '/review/aion', beforeEnter(to, from, next) { window.location = 'https://aion-token.review' } },
    { path: '/review/abt', beforeEnter(to, from, next) { window.location = 'https://arcblock-abt.review' } },
    { path: '/review/ardr', beforeEnter(to, from, next) { window.location = 'https://ardor-ardr.review' } },
    { path: '/review/ark', beforeEnter(to, from, next) { window.location = 'https://ark-token.review' } },
    { path: '/review/rep', beforeEnter(to, from, next) { window.location = 'https://augur-rep.review' } },
    { path: '/review/bnt', beforeEnter(to, from, next) { window.location = 'https://bancor-bnt.review' } },
    { path: '/review/bat', beforeEnter(to, from, next) { window.location = 'https://basic-attention-token-bat.review' } },
    { path: '/review/bee', beforeEnter(to, from, next) { window.location = 'https://bee-token.review' } },
    { path: '/review/bnb', beforeEnter(to, from, next) { window.location = 'https://binance-coin-bnb.review' } },
    { path: '/review/btc', beforeEnter(to, from, next) { window.location = 'https://bitcoin-btc.review' } },
    { path: '/review/bch', beforeEnter(to, from, next) { window.location = 'https://bitcoin-cash-bch.review' } },
    { path: '/review/bcd', beforeEnter(to, from, next) { window.location = 'https://bitcoin-diamond-bcd.review' } },
    { path: '/review/btg', beforeEnter(to, from, next) { window.location = 'https://bitcoin-gold-btg.review' } },
    { path: '/review/btcp', beforeEnter(to, from, next) { window.location = 'https://bitcoin-private-btcp.review' } },
    { path: '/review/bcn', beforeEnter(to, from, next) { window.location = 'https://bytecoin-bcn.review' } },
    { path: '/review/btm', beforeEnter(to, from, next) { window.location = 'https://bytom-btm.review' } },
    { path: '/review/ada', beforeEnter(to, from, next) { window.location = 'https://cardano-ada.review' } },
    { path: '/review/coss', beforeEnter(to, from, next) { window.location = 'https://coss-token.review' } },
    { path: '/review/cs', beforeEnter(to, from, next) { window.location = 'https://credits-cs.review' } },
    { path: '/review/dash', beforeEnter(to, from, next) { window.location = 'https://dash-token.review' } },
    { path: '/review/dgd', beforeEnter(to, from, next) { window.location = 'https://digixdao-dgd.review' } },
    { path: '/review/doge', beforeEnter(to, from, next) { window.location = 'https://dogecoin-doge.review' } },
    { path: '/review/drgn', beforeEnter(to, from, next) { window.location = 'https://dragonchain-drgn.review' } },
    { path: '/review/eng', beforeEnter(to, from, next) { window.location = 'https://enigma-eng.review' } },
    { path: '/review/eos', beforeEnter(to, from, next) { window.location = 'https://eos-token.review' } },
    { path: '/review/etc', beforeEnter(to, from, next) { window.location = 'https://ethereum-classic-etc.review' } },
    { path: '/review/eth', beforeEnter(to, from, next) { window.location = 'https://ethereum-eth.review' } },
    { path: '/review/ethos', beforeEnter(to, from, next) { window.location = 'https://ethos-token.review' } },
    { path: '/review/gnt', beforeEnter(to, from, next) { window.location = 'https://golem-gnt.review' } },
    { path: '/review/hsr', beforeEnter(to, from, next) { window.location = 'https://hshare-hsr.review' } },
    { path: '/review/icx', beforeEnter(to, from, next) { window.location = 'https://icon-icx.review' } },
    { path: '/review/iota', beforeEnter(to, from, next) { window.location = 'https://iota-token.review' } },
    { path: '/review/kin', beforeEnter(to, from, next) { window.location = 'https://kin-token.review' } },
    { path: '/review/kcs', beforeEnter(to, from, next) { window.location = 'https://kucoin-kcs.review' } },
    { path: '/review/knc', beforeEnter(to, from, next) { window.location = 'https://kyber-knc.review' } },
    { path: '/review/lsk', beforeEnter(to, from, next) { window.location = 'https://lisk-lsk.review' } },
    { path: '/review/ltc', beforeEnter(to, from, next) { window.location = 'https://litecoin-ltc.review' } },
    { path: '/review/lrc', beforeEnter(to, from, next) { window.location = 'https://loopring-lrc.review' } },
    { path: '/review/mkr', beforeEnter(to, from, next) { window.location = 'https://maker-mkr.review' } },
    { path: '/review/mith', beforeEnter(to, from, next) { window.location = 'https://mithril-mith.review' } },
    { path: '/review/mona', beforeEnter(to, from, next) { window.location = 'https://monacoin-mona.review' } },
    { path: '/review/xmr', beforeEnter(to, from, next) { window.location = 'https://monero-xmr.review' } },
    { path: '/review/nano', beforeEnter(to, from, next) { window.location = 'https://nano-token.review' } },
    { path: '/review/nas', beforeEnter(to, from, next) { window.location = 'https://nebulas-nas.review' } },
    { path: '/review/xem', beforeEnter(to, from, next) { window.location = 'https://nem-xem.review' } },
    { path: '/review/neo', beforeEnter(to, from, next) { window.location = 'https://neo-token.review' } },
    { path: '/review/ncash', beforeEnter(to, from, next) { window.location = 'https://nucleus-vision-ncash.review' } },
    { path: '/review/omg', beforeEnter(to, from, next) { window.location = 'https://omisego-omg.review' } },
    { path: '/review/ont', beforeEnter(to, from, next) { window.location = 'https://ontology-ont.review' } },
    { path: '/review/ppt', beforeEnter(to, from, next) { window.location = 'https://populous-ppt.review' } },
    { path: '/review/npxs', beforeEnter(to, from, next) { window.location = 'https://pundi-npxs.review' } },
    { path: '/review/qash', beforeEnter(to, from, next) { window.location = 'https://qash-token.review' } },
    { path: '/review/qtum', beforeEnter(to, from, next) { window.location = 'https://qtum-token.review' } },
    { path: '/review/rhoc', beforeEnter(to, from, next) { window.location = 'https://rchain-rhoc.review' } },
    { path: '/review/xrp', beforeEnter(to, from, next) { window.location = 'https://ripple-xrp.review' } },
    { path: '/review/salt', beforeEnter(to, from, next) { window.location = 'https://salt-token.review' } },
    { path: '/review/sc', beforeEnter(to, from, next) { window.location = 'https://siacoin-sc.review' } },
    { path: '/review/steem', beforeEnter(to, from, next) { window.location = 'https://steem-token.review' } },
    { path: '/review/xlm', beforeEnter(to, from, next) { window.location = 'https://stellar-xlm.review' } },
    { path: '/review/strat', beforeEnter(to, from, next) { window.location = 'https://stratis-strat.review' } },
    { path: '/review/usdt', beforeEnter(to, from, next) { window.location = 'https://tether-usdt.review' } },
    { path: '/review/trx', beforeEnter(to, from, next) { window.location = 'https://tron-trx.review' } },
    { path: '/review/ven', beforeEnter(to, from, next) { window.location = 'https://vechain-ven.review' } },
    { path: '/review/xvg', beforeEnter(to, from, next) { window.location = 'https://verge-xvg.review' } },
    { path: '/review/veri', beforeEnter(to, from, next) { window.location = 'https://veritaseum-veri.review' } },
    { path: '/review/wanchain', beforeEnter(to, from, next) { window.location = 'https://wanchain.review' } },
    { path: '/review/wan', beforeEnter(to, from, next) { window.location = 'https://wanchain-wan.review' } },
    { path: '/review/waves', beforeEnter(to, from, next) { window.location = 'https://waves-token.review' } },
    { path: '/review/wpr', beforeEnter(to, from, next) { window.location = 'https://wepower-wpr.review' } },
    { path: '/review/zec', beforeEnter(to, from, next) { window.location = 'https://zcash-zec.review' } },
    { path: '/review/iota', beforeEnter(to, from, next) { window.location = 'https://zilliqa-zil.review' } },
]
