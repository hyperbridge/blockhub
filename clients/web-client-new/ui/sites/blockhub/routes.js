export default [
    {
        path: '/download/desktop/mac',
        beforeEnter(to, from, next) {
            if (!process.client) return
            window.location = `https://github.com/hyperbridge/blockhub/releases/download/v0.8.0/BlockHub-0.8.0.dmg`
        }
    },
    {
        path: '/download/desktop/windows',
        beforeEnter(to, from, next) {
            if (!process.client) return
            window.location = `https://github.com/hyperbridge/blockhub/releases/download/v0.8.0/BlockHub-Setup-0.8.0.exe`
        }
    },
    {
        path: '/download/desktop/windows-32bit',
        beforeEnter(to, from, next) {
            if (!process.client) return
            window.location = `https://github.com/hyperbridge/blockhub/releases/download/v0.8.0/BlockHub-Setup-0.8.0.exe`
        }
    },
    {
        path: '/download/desktop/linux',
        beforeEnter(to, from, next) {
            window.location = `https://github.com/hyperbridge/blockhub/releases/download/v0.8.0/blockhub-desktop-client-0.8.0-x86_64.AppImage`
        }
    },
    {
        path: '/download/desktop/linux-64bit',
        beforeEnter(to, from, next) {
            if (!process.client) return
            window.location = `https://github.com/hyperbridge/blockhub/releases/download/v0.8.0/blockhub-desktop-client-0.8.0.tar.gz`
        }
    },
    {
        path: '/download/desktop/linux-32bit',
        beforeEnter(to, from, next) {
            if (!process.client) return
            window.location = `https://github.com/hyperbridge/blockhub/releases/download/v0.8.0/blockhub-desktop-client-0.8.0-ia32.tar.gz`
        }
    },
    {
        path: '/download/desktop/linux-64bit-debian',
        beforeEnter(to, from, next) {
            if (!process.client) return
            window.location = `https://github.com/hyperbridge/blockhub/releases/download/v0.8.0/blockhub-desktop-client_0.8.0_amd64.deb`
        }
    },
    {
        path: '/download/desktop/linux-32bit-debian',
        beforeEnter(to, from, next) {
            if (!process.client) return
            window.location = `https://github.com/hyperbridge/blockhub/releases/download/v0.8.0/blockhub-desktop-client_0.8.0_i386.deb`
        }
    }
