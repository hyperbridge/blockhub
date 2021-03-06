const path = require('path')
const { BrowserWindow, shell } = require('electron')

const initMenu = () => {

}

const init = (devMode, showTools) => {
    let window = new BrowserWindow({
        width: 1440,
        height: 800,
        minWidth: 420,
        minHeight: 300,
        resizable: true,
        frame: true,
        show: false,
        icon: __dirname + 'static/Icon-512.icns',
        scrollBounce: true,
        backgroundColor: '#000000',
        webPreferences: {
            preload: path.join(__dirname, '../../preload.js'),
            zoomFactor: 0,
            experimentalFeatures: true,
            nodeIntegration: false,
            webSecurity: false
        }
    })

    window.webContents.on('new-window', (event, uri) => {
        event.preventDefault()
        window.webContents.loadURL(uri)
    })

    window.webContents.once('did-finish-load', () => {
        initMenu()

        window.show()
        window.focus()
    })

    // Emitted when the window is closed.
    window.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        window = null
    })

    window.on('app-command', (e, cmd) => {
        // Navigate the window back when the user hits their mouse back button
        if (cmd === 'browser-backward' && window.webContents.canGoBack()) {
            window.webContents.goBack()
        }
    })

    return window
}

const loadDefaultUri = (window) => {
    window.webContents.loadURL('http://localhost:8081/')

    window.webContents.openDevTools()
}

module.exports = {
    init,
    loadDefaultUri
}

// if (!$('.game_area_description').length) return setTimeout(monitor, 500);

// const fetchers = {
//     steam: () => {
//         return {
//             title: $('.apphub_AppName').text().trim(),
//             description: $('.game_description_snippet').text().trim(),
//             about: $('#game_area_description').html().trim(),
//             developers: Object.values($('#developers_list a').map((i, el) => $(el).text().trim()).get()),
//             publishers: Object.values($('#developers_list').parent().next().find('a').map((i, el) => $(el).text().trim()).get()),
//             tags: Object.values($('.popular_tags a').map((i, el) => $(el).text().trim()).get()),
//             releaseDate: $('.releaseDate .date').text().trim(),
//             images: {
//                 preview: Object.values($('.highlight_strip_item.highlight_strip_screenshot').map((i, el) => $(el).find('img').attr('src')).get())
//             },
//             videos: Object.values($('.highlight_strip_item.highlight_strip_movie').map((i, el) => ({
//                 preview: $(el).find('img').attr('src'),
//                 url: 'https://cdn.hyperbridge.org/blockhub/videos/products/doom-20087/trailer.mp4'
//             })).get())
//         }
//     },
//     gog: () => {

//     },
//     itch: () => {

//     }
// };
