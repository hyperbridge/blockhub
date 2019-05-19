import Vue from 'vue'
import moment from 'moment'


export default ({ store }) => {

    Vue.filter('convertCurrency', function (value) {
        const currencyCode = store.state.application.account ? store.state.application.account.currency.code : 'USD'
        const currencyMap = {
            'USD': {
                'USD': 1,
                'BTC': 0.00016,
                'ETH': 0.0047,
                'DAI': 1,
                'RUB': 0.66
            },
            // 'BTC': {
            //     'USD': 6455,
            //     'ETH': 30.28,
            //     'DAI': 6455
            // },
            // 'ETH': {
            //     'USD': 213.5,
            //     'BTC': 0.033,
            //     'DAI': 213.5
            // }
        }

        const price = parseFloat(value)

        return Vue.options.filters.currency(price * currencyMap['USD'][currencyCode])
    })

    Vue.filter('formatDate', function (value) {
        if (value) {
            return moment(value).format('MMMM D, YYYY')
        }
    })

    Vue.filter('customDate', (val, dateFormat = 'MMMM D, YYYY') => moment(val).format(dateFormat))

    Vue.filter('formatTime', function (value) {
        if (value) {
            return moment(value).format('hh:mm:ss') + ' GMT'
        }
    })

    Vue.filter('addTime', (date, number = 1, period = 'days') => moment(date).add(number, period))

    Vue.filter('timeAgo', (date) => moment(date).fromNow())

    Vue.filter('timeAgoShort', (date) => moment(date).fromNow().replace(/ ago|in /, ''))

    Vue.filter('timeAgoSShort', date => moment(date).fromNow()
        .replace(/ ago|in /, '')
        .replace('hours', 'hrs')
        .replace('minutes', 'mins')
        .replace('years', 'yrs')
    )

    Vue.filter('statusIcon', status => {
        const getClass = status => {
            switch (status) {
                case 'info': return 'info'
                case 'success': return 'check'
                case 'success-circle': return 'check-circle'
                case 'warning': return 'exclamation'
                case 'danger': return 'times'
                case 'danger-circle': return 'times-circle'
                case 'settings': return 'cog'
                case 'support': return 'life-ring'
                case 'share': return 'share'
                default: return ''
            }
        }
        const statusClass = getClass(status)
        return statusClass.length ? 'fa-' + statusClass : ''
    })

    Vue.filter('upperFirstChar', (value) => value.charAt(0).toUpperCase() + value.substring(1, value.length))

    Vue.filter('highlightPhrase', (value, phrase, tag = 'strong') => {
        if (!phrase) return value

        const valueLowered = value.toLowerCase()
        const phraseLowered = phrase.toLowerCase()

        const cut = (start, end) => value.substring(start, end)

        const firstCharIndex = valueLowered.indexOf(phraseLowered)
        if (firstCharIndex < 0) return value

        const phraseEndPos = firstCharIndex + phrase.length
        let valueWithPhrase =
            cut(0, firstCharIndex) +
            `<${tag}>` + cut(firstCharIndex, phraseEndPos) + `</${tag}>` +
            cut(phraseEndPos, value.length)

        return valueWithPhrase
    })

    Vue.filter('roundNum', num => Math.round(num * 100) / 100)

    Vue.filter('space', val => val.replace(/-|_/g, ' '))


}
