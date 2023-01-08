let iPhone14Arr = [
    { rgb: '#000000', color: "midnight", pic: './apple/iphone14/midnight/iphone-14-midnight.jfif', storage: "128GB", price: 27900 },
    { rgb: '#000000', color: "midnight", pic: './apple/iphone14/midnight/iphone-14-midnight.jfif', storage: "256GB", price: 31400 },
    { rgb: '#000000', color: "midnight", pic: './apple/iphone14/midnight/iphone-14-midnight.jfif', storage: "512GB", price: 38400 },
    { rgb: '#00bfff', color: "blue", pic: './apple/iphone14/blue/iphone-14-blue.jfif', storage: "128GB", price: 27900 },
    { rgb: '#00bfff', color: "blue", pic: './apple/iphone14/blue/iphone-14-blue.jfif', storage: "256GB", price: 31400 },
    { rgb: '#00bfff', color: "blue", pic: './apple/iphone14/blue/iphone-14-blue.jfif', storage: "512GB", price: 38400 },
    { rgb: '#dda0dd', color: "purple", pic: './apple/iphone14/purple/iphone-14-purple.jfif', storage: "128GB", price: 27900 },
    { rgb: '#dda0dd', color: "purple", pic: '../apple/iphone14/purple/iphone-14-purple.jfif', storage: "256GB", price: 31400 },
    { rgb: '#dda0dd', color: "purple", pic: './apple/iphone14/purple/iphone-14-purple.jfif', storage: "512GB", price: 38400 },
    { rgb: '#ff0000', color: "red", pic: './apple/iphone14/red/iphone-14-red.jfif', storage: "128GB", price: 27900 },
    { rgb: '#ff0000', color: "red", pic: './apple/iphone14/red/iphone-14-red.jfif', storage: "256GB", price: 31400 },
    { rgb: '#ff0000', color: "red", pic: './apple/iphone14/red/iphone-14-red.jfif', storage: "512GB", price: 38400 },
    { rgb: '#fffaf0', color: "starlight", pic: './apple/iphone14/starlight/iphone-14-starlight.jfif', storage: "128GB", price: 27900 },
    { rgb: '#fffaf0', color: "starlight", pic: './apple/iphone14/starlight/iphone-14-starlight.jfif', storage: "256GB", price: 31400 },
    { rgb: '#fffaf0', color: "starlight", pic: './apple/iphone14/starlight/iphone-14-starlight.jfif', storage: "512GB", price: 38400 }


];
let iPadArr = [
    { rgb: '#00bfff', color: "blue", pic: "./apple/ipad/blue/ipad-10th-blue.jfif", storage: "64GB", price: 14900 },
    { rgb: '#00bfff', color: "blue", pic: "./apple/ipad/blue/ipad-10th-blue.jfif", storage: "256GB", price: 19900 },
    { rgb: '#ffc0cb', color: "pink", pic: "./apple/ipad/pink/ipad-10th-pink.jfif", storage: "64GB", price: 14900 },
    { rgb: '#ffc0cb', color: "pink", pic: "./apple/ipad/pink/ipad-10th-pink.jfif", storage: "256GB", price: 19900 },
    { rgb: '#c0c0c0', color: "silver", pic: "./apple/ipad/silver/ipad-10th-silver.jfif", storage: "64GB", price: 14900 },
    { rgb: '#c0c0c0', color: "silver", pic: "./apple/ipad/silver/ipad-10th-silver.jfif", storage: "256GB", price: 19900 },
    { rgb: '#ffff00', color: "yellow", pic: "./apple/ipad/yellow/ipad-10th-yellow.jfif", storage: "64GB", price: 14900 },
    { rgb: '#ffff00', color: "yellow", pic: "./apple/ipad/yellow/ipad-10th-yellow.jfif", storage: "256GB", price: 19900 }
]
let MacArr = [
    { rgb: '#ffd700', color: "gold", pic: "./apple/mac/macbook-air-gold.jfif", storage: "256GB", price: 36900 },
    { rgb: '#ffd700', color: "gold", pic: "./apple/mac/macbook-air-gold.jfif", storage: "512GB", price: 42900 },
    { rgb: '#ffd700', color: "gold", pic: "./apple/mac/macbook-air-gold.jfif", storage: "1TB", price: 48900 },
    { rgb: '#ffd700', color: "gold", pic: "./apple/mac/macbook-air-gold.jfif", storage: "2TB", price: 60900 },
    { rgb: '#c0c0c0', color: "silver", pic: "./apple/mac/macbook-air-silver.jfif", storage: "256GB", price: 36900 },
    { rgb: '#c0c0c0', color: "silver", pic: "./apple/mac/macbook-air-silver.jfif", storage: "512GB", price: 42900 },
    { rgb: '#c0c0c0', color: "silver", pic: "./apple/mac/macbook-air-silver.jfif", storage: "1TB", price: 48900 },
    { rgb: '#c0c0c0', color: "silver", pic: "./apple/mac/macbook-air-silver.jfif", storage: "2TB", price: 60900 },
    { rgb: '#808080', color: "space-gray", pic: "./apple/mac/macbook-air-space-gray.jfif", storage: "256GB", price: 36900 },
    { rgb: '#808080', color: "space-gray", pic: "./apple/mac/macbook-air-space-gray.jfif", storage: "512GB", price: 42900 },
    { rgb: '#808080', color: "space-gray", pic: "./apple/mac/macbook-air-space-gray.jfif", storage: "1TB", price: 48900 },
    { rgb: '#808080', color: "space-gray", pic: "./apple/mac/macbook-air-gold.jfif", storage: "2TB", price: 60900 }
]
let allArr = [];
allArr.push(iPhone14Arr);
allArr.push(iPadArr);
allArr.push(MacArr);
let picAllcolor = ["./apple/iphone14/iphone14-hero_all_colors.jpg", "./apple/ipad/ipad10th-hero.jpg", "./apple/mac/Apple-MacBook-Air-M2.jpg"]
let product = document.querySelector(".product");
let btn = document.querySelectorAll(".main_btn");

btn.forEach((item, index) => {

    //main_btn點選做product更換"事件" product --> col-12(pic&color)
    item.addEventListener('click', () => {

        //產品圖
        product.innerHTML = "";
        let phone = allArr[index];

        let picfamily= document.createElement("div");
        picfamily.classList.add("w-50");


        // 
        let picBox = document.createElement("div");
        picBox.classList.add("col-12", "col-md-6", "px-3", "d-flex", "justify-content-center", "align-items-center");
        let img = document.createElement("img");
        img.classList.add("w-100");
        img.src = picAllcolor[index];
        picBox.append(img);
        product.append(picBox);

        //detailBox(div)
        let detailBox = document.createElement("div");
        detailBox.classList.add("col-12", "col-md-6");

        //detailBox-->color-h2
        let colorBox = document.createElement("div");
        colorBox.classList.add("item");
        let color_text = document.createElement("span");
        color_text.innerText = "外觀。 挑選你喜愛的外觀。"
        let color_h2 = document.createElement("h2");
        color_h2.innerText = "顏色";
        color_h2.classList.add("fw-bolder");
        colorBox.append(color_text);
        colorBox.append(color_h2);
        

        //detailBox-->color(allArr)
        let colorData = document.createElement("div");
        colorData.classList.add("color-box", "row");
        let countArr = [];
        phone.forEach((thisPhone, ind) => {
            countArr.push(thisPhone['color']);
        });

        let set1 = new Set(countArr);//Set:陣列Array)的元素不會重複
        let colorArr = [];

        phone.forEach((thisPhone, ind) => {
            colorArr.push(thisPhone['rgb']);
        })
        let set21 = new Set(colorArr);
        let set2 = [];
        set21.forEach(x => {
            set2.push(x)
        });

        let set = [];
        set1.forEach(x => {
            set.push(x);
        })

        set.forEach((color, ind) => {
            let outside = document.createElement("div");
            outside.classList.add("box", "col-6", "col-md-4");
            let content = document.createElement("div");
            content.classList.add("content", "p-3", "border","rounded");
            let circle = document.createElement("div");
            circle.classList.add("color", "mx-auto");
            circle.style.backgroundColor = set2[ind];
            content.append(circle);
            let p = document.createElement("div");
            p.innerText = color;
            p.classList.add("pt-2", "text-center");
            content.append(p);
            outside.append(content);
            colorData.append(outside);

        });
        //detailBox-->規格生成
        colorBox.append(colorData);

        //detailBox-->storage-h2
        let storageBox = document.createElement("div");
        storageBox.classList.add("item");
        let storage_h2 = document.createElement("h2");
        storage_h2.innerText = "規格";
        storage_h2.classList.add("fw-bolder");
        let storage_text = document.createElement("span");
        storage_text.innerText = "儲存裝置。 你需要多少儲存空間？";
        storageBox.append(storage_text);
        storageBox.append(storage_h2);
        let priceData = document.createElement("div");
        priceData.classList.add("price-box", "row");
        let typeArr = [];

         //detailBox-->容量(allArr)
        phone.forEach((thisPhone, ind) => {
            typeArr.push(thisPhone['storage']);
        })
        let set31 = new Set(typeArr);
        let set3 = [];
        set31.forEach(x => {
            set3.push(x);
        });

         //detailBox-->價格(allArr)
        let priceArr = [];
        phone.forEach((thisPhone, ind) => {
            priceArr.push(thisPhone['price']);
        });
        let set4 = new Set(priceArr);
        set3.forEach((x, ind) => {
            let outside = document.createElement("div");
            outside.classList.add("box", "col-6", "col-md-4");
            let content = document.createElement("div");
            content.classList.add("content", "p-3","pt-4", "border", "rounded", "text-center", "price-box-item");//p-3：padding:3px
            let p1 = document.createElement("p");
            p1.classList.add("size", "fw-bolder");
            p1.innerText = x;
            let p2 = document.createElement("p");
            p2.classList.add("price")
            p2.innerText = "NT$" + phone[ind]['price'];
            content.append(p1);
            content.append(p2);
            outside.append(content);
            priceData.append(outside);
        });


        //價格顯示
        let priceBox = document.createElement("div");
        let priceH2 = document.createElement("h2");
        priceH2.classList.add("fw-bolder");
        priceH2.innerText = "價格";
        let total = document.createElement("div");
        total.classList.add("total");
        priceBox.append(priceH2);
        priceBox.append(total);
        storageBox.append(priceData);
        detailBox.append(colorBox);
        detailBox.append(storageBox);
        detailBox.append(priceBox);
        product.append(detailBox);


        let total1 = document.querySelector(".total");
        let choosePrice = document.querySelectorAll(".price-box-item");
        choosePrice.forEach(item => {
            item.addEventListener('click', () => {
                total1.innerText = item.querySelector(".price").innerText;
            })


        })
        let chooseColorArr = document.querySelectorAll(".color-box .box");
        chooseColorArr.forEach(item => {
            item.addEventListener('click', () => {
                let RGB = phone.find(x => x['color'] == item.querySelector(".text-center").innerText)['pic'];
                img.src = RGB;
            })
        })
    })
})