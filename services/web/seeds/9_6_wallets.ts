const data = [
    {
        name: 'Bitcoin',
        icon: '',
        shortName: 'BTC',
        count: '0.00827',
        history: [
            {
                time: '14:00',
                percent: '0.93',
                direction: 'up'
            },
            {
                time: '14:30',
                percent: '0.53',
                direction: 'down'
            },
            {
                time: '15:00',
                percent: '0.67',
                direction: 'up'
            }
        ],
        walletNumber: 'QMdp32odsoN45insPS91ninZPEld9',
        preferredSwitcher: true
    },
    {
        name: 'Ethereum',
        icon: '',
        shortName: 'ETH',
        count: '0.00015',
        history: [
            {
                time: '11:00',
                percent: '0.03',
                direction: 'up'
            },
            {
                time: '12:30',
                percent: '0.027',
                direction: 'down'
            },
            {
                time: '13:00',
                percent: '0.031',
                direction: 'up'
            }
        ],
        walletNumber: 'kKJV798BIUFvu6ibkvVV7',
        preferredSwitcher: false
    },
    {
        name: 'Viacoin',
        icon: '',
        shortName: 'VIA',
        count: '0.00045',
        history: [
            {
                time: '11:00',
                percent: '0.03',
                direction: 'up'
            },
            {
                time: '12:30',
                percent: '0.027',
                direction: 'down'
            },
            {
                time: '13:00',
                percent: '0.031',
                direction: 'up'
            }
        ],
        walletNumber: 'kKJV798BIUFvu6ibkvVV7',
        preferredSwitcher: false
    },
    {
        name: 'Monero',
        icon: '',
        shortName: 'XMR',
        count: '0.00045',
        history: [
            {
                time: '11:00',
                percent: '0.03',
                direction: 'up'
            },
            {
                time: '12:30',
                percent: '0.027',
                direction: 'down'
            },
            {
                time: '13:00',
                percent: '0.031',
                direction: 'up'
            }
        ],
        walletNumber: 'kKJV798BIUFvu6ibkvVV7',
        preferredSwitcher: true
    }
]

export const seed = async function (knex): Promise<any> {
}
