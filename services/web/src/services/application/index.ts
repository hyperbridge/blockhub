import defaultData from './data'

import hooks = require('./hooks')

export default function(app) {
    const paginate = app.get('paginate')

    const options = {
        name: 'application',
        paginate: {
            default: 10,
            max: 25,
            ...paginate
        }
    }

    app.use('/application/state', {
        async find(params) {
            console.log('[service=/application/state, action=find]')

            return defaultData
        }
    })

    app.use('/application/updates', {
        async find(params) {
            console.log('[service=/application/updates, action=find]')

            return [
                {
                    "version": "0.7.1",
                    "title": "BlockHub v0.7.1",
                    "description": "Business manager improvements, hotfixes, UI updates and more!",
                    "content": "<div data-v-cb9cc0f6=\"\" class=\"heading-bar-colored margin-bottom-15 margin-top-20 text-position-left\"><div data-v-cb9cc0f6=\"\" class=\"h3 heading-bar-colored__title\" style=\"color: lightgreen;\"><strong data-v-cb9cc0f6=\"\">IN THIS UPDATE</strong></div> <span data-v-cb9cc0f6=\"\" class=\"heading-bar-colored__right-line\" style=\"background-color: lightgreen;\"></span></div> <ul data-v-4cd80098=\"\" class=\"doted-list-container\"><li data-v-4cd80098=\"\">Business manager improvements</li> <li data-v-4cd80098=\"\">Product creation (locally)</li> <li data-v-4cd80098=\"\">Various UI improvements</li> <li data-v-4cd80098=\"\">Hotfixes</li> <li data-v-4cd80098=\"\">To review screens, see the sitemap: https://preview.blockhub.gg/sitemap</li></ul> <div data-v-cb9cc0f6=\"\" class=\"heading-bar-colored margin-bottom-15 margin-top-20 text-position-left\"><div data-v-cb9cc0f6=\"\" class=\"h3 heading-bar-colored__title\" style=\"color: deepskyblue;\"><strong data-v-cb9cc0f6=\"\">UPDATED PORTALS</strong></div> <span data-v-cb9cc0f6=\"\" class=\"heading-bar-colored__right-line\" style=\"background-color: deepskyblue;\"></span></div> <ul data-v-4cd80098=\"\" class=\"doted-list-container\"><li data-v-4cd80098=\"\"><a data-v-4cd80098=\"\" href=\"https://blockhub.gg\">https://blockhub.gg</a></li> <li data-v-4cd80098=\"\"><a data-v-4cd80098=\"\" href=\"https://preview.blockhub.gg\">https://preview.blockhub.gg</a></li> <li data-v-4cd80098=\"\"><a data-v-4cd80098=\"\" href=\"https://beta.blockhub.gg\">https://beta.blockhub.gg</a></li></ul>"
                },
                {
                    "version": "0.7.0",
                    "title": "BlockHub v0.7.0",
                    "description": "Token purchase flow, simplified sign up, account recovery and more!",
                    "content": "<div data-v-cb9cc0f6=\"\" class=\"heading-bar-colored margin-bottom-15 margin-top-20 text-position-left\"><div data-v-cb9cc0f6=\"\" class=\"h3 heading-bar-colored__title\" style=\"color: lightgreen;\"><strong data-v-cb9cc0f6=\"\">IN THIS UPDATE</strong></div> <span data-v-cb9cc0f6=\"\" class=\"heading-bar-colored__right-line\" style=\"background-color: lightgreen;\"></span></div> <ul data-v-4cd80098=\"\" class=\"doted-list-container\"><li data-v-4cd80098=\"\">Token purchase flow</li> <li data-v-4cd80098=\"\">Copy to address works</li> <li data-v-4cd80098=\"\">Account recovery</li> <li data-v-4cd80098=\"\">Simplify sign up</li> <li data-v-4cd80098=\"\">Hold ALT and click to give feedback!</li> <li data-v-4cd80098=\"\">Hide incomplete features :)</li> <li data-v-4cd80098=\"\">Integrate token</li> <li data-v-4cd80098=\"\">To review screens, see the sitemap: https://preview.blockhub.gg/sitemap</li></ul> <div data-v-cb9cc0f6=\"\" class=\"heading-bar-colored margin-bottom-15 margin-top-20 text-position-left\"><div data-v-cb9cc0f6=\"\" class=\"h3 heading-bar-colored__title\" style=\"color: deepskyblue;\"><strong data-v-cb9cc0f6=\"\">UPDATED PORTALS</strong></div> <span data-v-cb9cc0f6=\"\" class=\"heading-bar-colored__right-line\" style=\"background-color: deepskyblue;\"></span></div> <ul data-v-4cd80098=\"\" class=\"doted-list-container\"><li data-v-4cd80098=\"\"><a data-v-4cd80098=\"\" href=\"https://preview.blockhub.gg\">https://preview.blockhub.gg</a></li> <li data-v-4cd80098=\"\"><a data-v-4cd80098=\"\" href=\"https://beta.blockhub.gg\">https://beta.blockhub.gg</a></li> <li data-v-4cd80098=\"\"><a data-v-4cd80098=\"\" href=\"https://blockhub.gg\">https://blockhub.gg</a></li></ul>"
                },
                {
                    "version": "0.6.3",
                    "title": "BlockHub v0.6.3",
                    "description": "Improved Windows experience, KYC flow, account file import/export and more!",
                    "content": "<div data-v-cb9cc0f6=\"\" class=\"heading-bar-colored margin-bottom-15 margin-top-20 text-position-left\"><div data-v-cb9cc0f6=\"\" class=\"h3 heading-bar-colored__title\" style=\"color: lightgreen;\"><strong data-v-cb9cc0f6=\"\">IN THIS UPDATE</strong></div> <span data-v-cb9cc0f6=\"\" class=\"heading-bar-colored__right-line\" style=\"background-color: lightgreen;\"></span></div> <ul data-v-4cd80098=\"\" class=\"doted-list-container\"><li data-v-4cd80098=\"\">Greatly improved UX on Windows</li> <li data-v-4cd80098=\"\">KYC flow</li> <li data-v-4cd80098=\"\">Account file import/export</li> <li data-v-4cd80098=\"\">UI improvements</li> <li data-v-4cd80098=\"\">Easier to change your current profile when needed</li> <li data-v-4cd80098=\"\">Developer mode &amp; application improvements (dev only)</li> <li data-v-4cd80098=\"\">To review screens, see the sitemap: https://preview.blockhub.gg/sitemap</li></ul> <div data-v-cb9cc0f6=\"\" class=\"heading-bar-colored margin-bottom-15 margin-top-20 text-position-left\"><div data-v-cb9cc0f6=\"\" class=\"h3 heading-bar-colored__title\" style=\"color: deepskyblue;\"><strong data-v-cb9cc0f6=\"\">UPDATED PORTALS</strong></div> <span data-v-cb9cc0f6=\"\" class=\"heading-bar-colored__right-line\" style=\"background-color: deepskyblue;\"></span></div> <ul data-v-4cd80098=\"\" class=\"doted-list-container\"><li data-v-4cd80098=\"\"><a data-v-4cd80098=\"\" href=\"https://preview.blockhub.gg\">https://preview.blockhub.gg</a></li> <li data-v-4cd80098=\"\"><a data-v-4cd80098=\"\" href=\"https://beta.blockhub.gg\">https://beta.blockhub.gg</a></li> <li data-v-4cd80098=\"\"><a data-v-4cd80098=\"\" href=\"https://blockhub.gg\">https://blockhub.gg</a></li></ul>"
                },
                {
                    "version": "0.6.1",
                    "title": "BlockHub v0.6.1",
                    "description": "Improved profile manager, UI improvements, fixed Windows build and more!",
                    "content": "<div data-v-cb9cc0f6=\"\" class=\"heading-bar-colored margin-bottom-15 margin-top-20 text-position-left\"><div data-v-cb9cc0f6=\"\" class=\"h3 heading-bar-colored__title\" style=\"color: lightgreen;\"><strong data-v-cb9cc0f6=\"\">IN THIS UPDATE</strong></div> <span data-v-cb9cc0f6=\"\" class=\"heading-bar-colored__right-line\" style=\"background-color: lightgreen;\"></span></div> <ul data-v-4cd80098=\"\" class=\"doted-list-container\"><li data-v-4cd80098=\"\">Fixed Windows build 🙌</li> <li data-v-4cd80098=\"\">Improved profile manager</li> <li data-v-4cd80098=\"\">UI improvements</li> <li data-v-4cd80098=\"\">Protocol integration + deployment (dev only)</li> <li data-v-4cd80098=\"\">More feature previews. See the sitemap: https://preview.blockhub.gg/sitemap</li></ul> <div data-v-cb9cc0f6=\"\" class=\"heading-bar-colored margin-bottom-15 margin-top-20 text-position-left\"><div data-v-cb9cc0f6=\"\" class=\"h3 heading-bar-colored__title\" style=\"color: deepskyblue;\"><strong data-v-cb9cc0f6=\"\">UPDATED PORTALS</strong></div> <span data-v-cb9cc0f6=\"\" class=\"heading-bar-colored__right-line\" style=\"background-color: deepskyblue;\"></span></div> <ul data-v-4cd80098=\"\" class=\"doted-list-container\"><li data-v-4cd80098=\"\"><a data-v-4cd80098=\"\" href=\"https://preview.blockhub.gg\">https://preview.blockhub.gg</a></li> <li data-v-4cd80098=\"\"><a data-v-4cd80098=\"\" href=\"https://beta.blockhub.gg\">https://beta.blockhub.gg</a></li> <li data-v-4cd80098=\"\"><a data-v-4cd80098=\"\" href=\"https://blockhub.gg\">https://blockhub.gg</a></li></ul>"
                },
                {
                    "version": "0.6.0",
                    "title": "BlockHub v0.6.0",
                    "description": "Revamped account creation, token sale screen, lots of UI improvements, and more!",
                    "content": "<p>In this update:</p> <ul><li>Revamped account creation</li> <li>Token sale screen (transactions pending)</li> <li>Better desktop error integration</li> <li>Fixed profile bugs</li> <li>Added native menu options</li> <li>Lots of UI stuff: new welcome box, left sidebar scroller, slim header version, token in header</li></ul> <p>Portals have been updated as well:</p> <ul><li>https://preview.blockhub.gg</li> <li>https://beta.blockhub.gg</li> <li>https://blockhub.gg</li></ul>"
                },
                {
                    "version": "0.1.0",
                    "title": "BlockHub v0.1.0",
                    "description": "Harder, Better, Faster, Stronger",
                    "content": "<ul><li><blockquote>You can now sign up for an account</blockquote> <p></p></li> <li><blockquote>You are now notified when we change things, isn't that great?</blockquote> <ul><li>Add notification system</li> <li>User is prompted to relaunch when version changes</li></ul></li> <li><blockquote>Persist changes &amp; sync with Ethereum + peer network</blockquote></li> <li><blockquote>Check for offline status</blockquote></li> <li><blockquote>Load account, profiles &amp; wallets via Ethereum</blockquote></li></ul>"
                },
                {
                    "version": "0.0.1",
                    "title": "BlockHub v0.0.1",
                    "description": "Welcome to the Genesis Block",
                    "content": "<ul><li><blockquote>Built things</blockquote> <ul><li>\n            Initial build - vue.js, web3.js\n    </li></ul></li></ul>"
                }
            ]
        }
    })

    app.service('/application/state').hooks(hooks)
    app.service('/application/updates').hooks(hooks)
}
