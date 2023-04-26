
const house = fetch("../lib/housing_details/housing_details.json")
let temp = document.querySelector('#temp')
let main = document.querySelector('main');
let card = temp.content.cloneNode(true);
let name = card.querySelector(".name")
let area = card.querySelector(".area")
let house_name = card.querySelector("#house_name")
let house_type = card.querySelector("#house_type")
let house_rent = card.querySelector("#house_rent")
let house_size = card.querySelector("#house_size")

// console.log(house_name)

let map
let markers = L.markerClusterGroup()

window.onload = function () {
    setMapItem()
}

function setMapItem() {
    Promise.all([house])
        .then(res => Promise.all(res.map(x => x.json())))
        .then(json => json.forEach(x => {
            console.log(x)
            name.innerText = x.name
            area.innerText = x.Area
            house_name.innerText = x.name
            house_type.innerText = x.type
            house_rent.innerText = x.price
            house_size.innerText = x.m
            initMap(x.Y, x.X)
            renderMarker(x.Y, x.X, x.name)
        }))
}

main.append(card)
function initMap(lat, lng) {
    // 初始地圖
    map = L.map("map", {
        center: [lat, lng],
        zoom: 12
    })

    // 設定圖層 openstreetmap
    let osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    let osm = new L.TileLayer(osmUrl, { minZoom: 12, maxZoom: 17 })
    map.addLayer(osm)
}

function renderMarker(lat, lng) {
    if (markers) {
        markers.clearLayers()
    }
    let marker = L.marker([lat, lng])

    markers.addLayer(marker)
    map.addLayer(markers)
}

let rent_btn = document.querySelector(".btn.rent")
rent_btn.addEventListener("click", picker())

function picker() {

    let date = document.querySelector(".js-flatpickr")

    flatpickr(date, {
        minDate: "today",       //起始日期
        enableTime: false,      //啟用時間選擇器
        dateFormat: "Y-m-d",    //日期格式
        "locale": "zh_tw",      //設定語言
    });
}