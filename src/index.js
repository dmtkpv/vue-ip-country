import IpCountry from './index.vue'

const defaults = {
    baseURL: 'https://get.geojs.io/v1/ip/country'
}

export default function (app, options) {
    app.component('IpCountry', IpCountry);
    app.provide('IpCountry', { ...defaults, ...options })
}