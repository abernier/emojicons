// ==UserScript==
// @name         emojicons
// @version      0.1.1
// @author       abernier
// @namespace    name.abernier
// @description  Custom emojis favicons for the www
// @include      /^https?:\/\/.*/
// @grant        none
// @homepage     https://github.com/abernier/emojicons
// @updateURL    https://github.com/abernier/emojicons/raw/master/emojicons.user.js
// @downloadURL  https://github.com/abernier/emojicons/raw/master/emojicons.user.js
// @supportURL   https://github.com/abernier/emojicons/issues
// ==/UserScript==

function getHref(emoji) {
    // https://css-tricks.com/emojis-as-favicons/

    // https://codepen.io/abernier/pen/MWKwjwo?editors=1000
    //const ih = "<path fill=%22%232DC5FB%22 d=%22M47.1068 99.252L7.17642 77.1813C5.21906 76.0993 4 74.0119 4 71.7422V28.2578C4 25.9882 5.21906 23.9006 7.17642 22.8189L47.1068 0.748168C48.9114 -0.249389 51.0884 -0.249389 52.893 0.748168L92.8236 22.8189C94.7809 23.9006 96 25.9882 96 28.2578V71.7422C96 74.0119 94.7809 76.0993 92.8236 77.1813L52.893 99.252C51.0884 100.249 48.9114 100.249 47.1068 99.252Z%22/>"
    //return `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22>${ih}<text x=%2215%22 y=%2270%22 font-size=%2270%22>${emoji}</text></svg>`

    return `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${emoji}</text></svg>`
}

const emojis = {
    'docs.google.com/spreadsheets/d/1HqjvTl0ONss9lQnmEAcEbGaTNJ7W-oupCmkG_cdbQJo/edit': '💵',
    'docs.google.com/spreadsheets/d/1SV7fxA7ZOnxgHgmgMLa-HD2awOKQXCPVu-vt8OoGXmE/edit': '💰'
}

const _ = Object.keys(emojis).find(str => location.href.includes(str))
const emoji = emojis[_] // 'my.'

if (emoji) {
    document.querySelector('link[rel*="icon"]').href = getHref(emoji)
}
