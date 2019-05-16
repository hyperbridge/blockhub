if (!window.BlockHub)
    window.BlockHub = {}

window.BlockHub.GetMode = () => {
    const hostname = window.location.hostname
    let hash = document.location.hash.replace('#/', '')

    if (hash.slice(0, 5) === 'mode=') {
        return hash.replace('mode=', '')
    }

    if (hostname === 'blockhub.gg' || hostname === 'gamedelta.net') {
        return 'production'
    } else if (hostname === 'staging.blockhub.gg' || hostname === 'staging.gamedelta.net') {
        return 'staging'
    } else if (hostname === 'beta.blockhub.gg' || hostname === 'beta.gamedelta.net') {
        return 'beta'
    } else if (hostname === 'preview.blockhub.gg' || hostname === 'preview.gamedelta.net') {
        return 'preview'
    } else {
        return 'local'
    }
}