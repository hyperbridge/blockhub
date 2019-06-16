import tokens from './tokens'
import exchanges from './exchanges'
import softwareWallets from './software-wallets'
import hardwareWallets from './hardware-wallets'
import books from './books'
import sites from './sites'
import courses from './courses'
import faq from './faq'
import videos from './videos'
import notifications from './notifications'

export default (DB) => ({
    tokens: tokens(DB),
    exchanges: exchanges(DB),
    softwareWallets: softwareWallets(DB),
    hardwareWallets: hardwareWallets(DB),
    books: books(DB),
    sites: sites(DB),
    courses: courses(DB),
    faq: faq(DB),
    videos: videos(DB),
    notifications: notifications(DB),
})