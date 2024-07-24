import { makeAutoObservable } from 'mobx'


export default class DeviceStore {
    constructor() {
        this._types = [
            { id: 1, name: 'Холодильники' },
            { id: 2, name: 'Смартфоны' },
            { id: 3, name: 'Стиральные машины' },
            { id: 4, name: 'Чайники' }

        ]

        this._brands = [
            { id: 1, name: 'Samsung' },
            { id: 2, name: 'Apple' },
            { id: 3, name: 'LG' },
            { id: 4, name: 'Asus' },
            { id: 5, name: 'Xerox' },
            { id: 6, name: 'Xioami' },
            { id: 7, name: 'Lenovo' }
        ]

        this._devices = [
            { id: 1, name: 'Iphone 12 pro', price: 25000, rating: 5, img: 'https://media.wired.com/photos/6500ad57fe61eb702d721b58/master/w_2240,c_limit/Apple-iPhone-15-Pro-Hero-Gear.jpg' },
            { id: 2, name: 'Iphone 12 pro', price: 25000, rating: 5, img: 'https://media.wired.com/photos/6500ad57fe61eb702d721b58/master/w_2240,c_limit/Apple-iPhone-15-Pro-Hero-Gear.jpg' },
            { id: 3, name: 'Iphone 12 pro', price: 25000, rating: 5, img: 'https://media.wired.com/photos/6500ad57fe61eb702d721b58/master/w_2240,c_limit/Apple-iPhone-15-Pro-Hero-Gear.jpg' },
            { id: 4, name: 'Iphone 12 pro', price: 25000, rating: 5, img: 'https://media.wired.com/photos/6500ad57fe61eb702d721b58/master/w_2240,c_limit/Apple-iPhone-15-Pro-Hero-Gear.jpg' },
            { id: 5, name: 'Iphone 12 pro', price: 25000, rating: 5, img: 'https://media.wired.com/photos/6500ad57fe61eb702d721b58/master/w_2240,c_limit/Apple-iPhone-15-Pro-Hero-Gear.jpg' },
        ]
        this._selectedType = {}
        this._selectedBrand = {}

        makeAutoObservable(this)

    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }

    setSelectedType(type) {
        this.setPage(1)
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this.setPage(1)
        this._selectedBrand = brand
    }
    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
}