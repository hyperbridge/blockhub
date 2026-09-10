// The 2019 templates use root-relative assets, while Pages serves /blockhub/.
module.exports = function(source) {
    const { base } = this.query
    return source
        .replace(/(["'`(=])\/?static\/img\//g, '$1/img/')
        .replace(/(["'`(=])\/static\/assets-3d\//g, `$1${base}assets-3d/`)
        .replace(/(["'`(=])\/(img|images|fonts|font|videos|sounds|assets-3d)\//g, `$1${base}$2/`)
        .replace(/\/deep\//g, '::v-deep ')
        .replace(/https?:\/\/via\.placeholder\.com\/[^"'`\s)]+/g, `${base}img/no_img.jpg`)
        .replace(/https?:\/\/[^"'`\s)<>]+\.(?:png|jpe?g|gif|webp|svg)(?:\?[^"'`\s)<>]*)?/gi, `${base}img/no_img.jpg`)
        .replace(/https?:\/\/steamuserimages[^"'`\s)<>]+/g, `${base}img/realm_bg.jpg`)
        .replace(/(["'`(])\/assets\/fonts\//g, `$1${base}fonts/`)
        .replace(/https?:\/\/encrypted-tbn[^"'`\s)<>]+/g, `${base}img/user.png`)
}
