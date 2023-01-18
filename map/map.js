//宣告
let map;
const restDetaRequest = fetch("https://raw.githubusercontent.com/hu8345/FileStorage/main/map.json")
let restDeta = [];
let markers = L.markerClusterGroup();//marker叢集

//DOM
const countySelect = document.querySelector('#county');
const townText = document.querySelector('strong');
const tbody = document.querySelector('tbody');

//function
//初始化地圖
function initMap() {
    map = L.map('map', {
        center: [25.03416068163684, 121.56454962636319],
        zoom: 9

    })

    //圖層
    let osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    let osm = new L.TileLayer(osmUrl, { minZoom: 8, maxZoom: 19 })
    map.addLayer(osm);
}

function setMapItem() {
    Promise.all([restDetaRequest])
        .then(res => Promise.all(res.map(x => x.json())))
        .then(jsonDeta => {
            // console.log(jsonDeta[0].XML_Head.Infos.Info);
            let detas = jsonDeta[0].XML_Head.Infos.Info
            //console.log(detas)
            detas.forEach(x => {
                // console.log(x)
                restDeta.push({
                    name: x.Name, description: x.Description, add: x.Add, region: x.Region, town: x.Town, px: x.Px,
                    py: x.Py, tel: x.Tel, opentime: x.Opentime, picture1: x.Picture1
                })

            })
            // console.log(restDeta)
            renderMarker();
            initCountySelect();
        })
}

function renderMarker() {
    if (markers) markers.clearLayers();
    Object.keys(restDeta).forEach(key => {
        let deta = restDeta[key]
        // console.log(deta)
        let marker = L.marker([deta.py, deta.px])
        // console.log(marker)

        marker.bindPopup(
            `
        <h4>${deta.town}</h4>
        <p>店名:${deta.name}</p>
        <p>電話:${deta.tel}</p>
        <p>營業時間:${deta.opentime}</p>

        `
        )
        marker.addEventListener('click', function () {
            tbody.innerHTML = "";
            let nameTr = document.createElement('tr');
            let picTr = document.createElement('tr');
            let distTr = document.createElement('tr');
            let phoneTr = document.createElement('tr');
            let addressTr = document.createElement('tr');
            let timeTr = document.createElement('tr');

            let nameTd = document.createElement('td');
            nameTd.innerText = `${deta.name}`;
            nameTr.appendChild(nameTd);
            tbody.appendChild(nameTr);

            let picTd = document.createElement('td');
            picTd.innerHTML = `<img src="${deta.picture1}" alt="${deta.name}">`
            picTr.appendChild(picTd);
            tbody.appendChild(picTr);


            let distTd = document.createElement('td');
            distTd.innerText = `${deta.description}`;
            distTr.appendChild(distTd);
            tbody.appendChild(distTr);

            let phoneTd = document.createElement('td');
            phoneTd.innerText = `電話:${deta.tel}`;
            phoneTr.appendChild(phoneTd);
            tbody.appendChild(phoneTr);

            let addressTd = document.createElement('td');
            addressTd.innerText = `地址:${deta.add}`;
            addressTr.appendChild(addressTd);
            tbody.appendChild(addressTr);

            let timeTd = document.createElement('td');
            timeTd.innerText = `營業時間:${deta.opentime}`;
            timeTr.appendChild(timeTd);
            tbody.appendChild(timeTr);

        })


        markers.addLayer(marker)

    })
    map.addLayer(markers)
}

function initCountySelect() {
    let cityDeta = ['請選擇', ...new Set(restDeta.map(x => x.region))];
    cityDeta.splice(cityDeta.indexOf(null), 1);
    // console.log(cityDeta)
    cityDeta.forEach(city => {
        //console.log(city)
        let option = document.createElement('option')
        option.innerText = city;
        option.value = city == '請選擇' ? '' : city  //if(city == 請選擇)--回傳空字串 else city=city 回傳city
        countySelect.appendChild(option)
    })
    countySelect.onchange = function () {
        if (this.value != ' ') {
            let county = restDeta.filter(x => x.region == this.value)
            // console.log(county)
            map.setView([county[0].py, county[0].px], 12)
        }
    }

}


window.onload = function () {
    initMap();
    setMapItem();
}
