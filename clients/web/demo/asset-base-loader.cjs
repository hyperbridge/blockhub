// The 2019 templates use root-relative assets, while Pages serves /blockhub/.
module.exports = function(source) {
    const { base } = this.query
    return source
        .replace(/(["'`(=])\/static\/img\//g, '$1/img/')
        .replace(/(["'`(=])\/(img|images|fonts|font|videos|sounds)\//g, `$1${base}$2/`)
        .replace(/\/deep\//g, '::v-deep ')
        .replace(/https?:\/\/via\.placeholder\.com\/[^"'`\s)]+/g, `${base}img/no_img.jpg`)
}
