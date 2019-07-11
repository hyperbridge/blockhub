import { BrowserWindow, ipcMain } from 'electron'

export default run = () => {
    ipcMain.on('coinmarketcap-change:invokeAction', (_, data) => {
        console.log(data)
        //event.sender.send('actionReply', result)
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
    })

    const options = { frame: false, height: 768, width: 1024, x: 0, y: 0 }
    const win = new BrowserWindow(options)

    // goto next step when webpage is loaded
    win.webContents.once('did-stop-loading', () => {
        let code = `
            var ipc = require('electron').ipcRenderer;
            ipc.send('invokeAction', window.document.body.innerText);
        `

        win.webContents.executeJavaScript(code)
    })

    // open url
    win.loadURL('https://coinmarketcap.com/')
}
