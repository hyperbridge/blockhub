// import * as DB from '../ui/db'
// import store from '../ui/store'

export default function () {
    console.log("hello from modules");

    this.nuxt.hook("render:before", (renderer, options) => {
        console.log("render:before");

    });
}