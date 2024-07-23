import { makeAutoObservable } from 'mobx'


export default class DeviceStore {
    constructor() {
        this._types = [
            { id: 1, name: 'Холодильники' },
            { id: 2, name: 'Смартфоны' }
        ]

        this._brands = [
            { id: 1, name: 'Samsung' },
            { id: 2, name: 'Apple' }
        ]

        this._devices = [
            { id: 1, name: 'Iphone 12 pro', price: 25000, rating: 5, img: 'https://media.wired.com/photos/6500ad57fe61eb702d721b58/master/w_2240,c_limit/Apple-iPhone-15-Pro-Hero-Gear.jpg' },
            { id: 2, name: 'Iphone 12 pro', price: 25000, rating: 5, img: 'https://media.wired.com/photos/6500ad57fe61eb702d721b58/master/w_2240,c_limit/Apple-iPhone-15-Pro-Hero-Gear.jpg' },
            { id: 3, name: 'Iphone 12 pro', price: 25000, rating: 5, img: 'https://media.wired.com/photos/6500ad57fe61eb702d721b58/master/w_2240,c_limit/Apple-iPhone-15-Pro-Hero-Gear.jpg' },
        ]
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    seBrands(brands) {
        this._brands = brands
    }

    setDevices(devices) {
        this._devices = devices
    }

    get User() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get devices() {
        return this._devices
    }
}