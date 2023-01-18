[
    {
        "name": "望海巴耐餐廳/咖啡",
        "add": "花蓮縣974壽豐鄉鹽寮村大橋22號",
        "region": "花蓮縣",
        "town": "壽豐鄉",
        "px": 121.606110,
        "py": 23.918950,
        "description": "非常有特色的原住民餐點餐廳，位於台十一線8K區段上，是東海岸行經花蓮大橋進入東海岸國家風景區之後，花蓮遊客中心前，第一家餐飲服務業者；業者於建物外部以當地竹子搭蓋起大門及挑高竹亭，呈顯其自然風格建築形式是其特色。望海巴耐野菜餐廳位於台十一線8K區段上，是東海岸行經花蓮大橋進入東海岸國家風景區之後，花蓮遊客中心前，第一家餐飲服務業者；業者於建物外部以當地竹子搭蓋起大門及挑高竹亭，呈顯其自然風格建築形式是其特色。",
        "tel": "886-9-37533483",
        "opentime": "11:30 - 20:00",
        "picture1": "https://www.eastcoast-nsa.gov.tw/image/41530/640x480",
    }

]


jsonData.forEach(x => {
    taiwanShop.push(x.stores.map(y => {
        return {
            // ...x,   
            city: x.city_name, Address: y.Address, POIName: y.POIName, lat: y.Y,
            lng: y.X, Dining: y.isDining, Parking: y.isParking,
            Lavatory: y.isLavatory, Atm: y.isATM, WiFi: y.is7WiFi, CityCafe: y.isCityCafe
        }
    }))
})