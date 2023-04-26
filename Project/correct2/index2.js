let roomData = [
    {
        address: "台北市中山區",
        type: "整層住家2房",
        name: "南京復興1+1房/靜巷採光電梯房",
        price: "34000",
        pic: "https://asset.zuker.com.tw/uploads/attachment/image/17853/1__2_.jpg"
    },
    {
        address: "新竹市東區",
        type: "整層住家3房",
        name: "綠光公園實驗室",
        price: "25000",
        pic: "https://asset.zuker.com.tw/uploads/attachment/image/16957/1__2_.jpg"

    },
    {
        address: "台北市中山區",
        type: "整層住家2房",
        name: "大兩房大空間林森公園旁美廈",
        price: "35000",
        pic: "https://asset.zuker.com.tw/uploads/attachment/image/17853/1__2_.jpg"

    },
    {
        address: "台中市烏日區",
        type: "整層住家2房",
        name: "烏日實驗室",
        price: "16500",
        pic: "https://asset.zuker.com.tw/uploads/attachment/image/17853/1__2_.jpg"

    },
    {
        address: "台北市中山區",
        type: "整層住家2房",
        name: "南京復興1+1房/靜巷採光電梯房",
        price: "34000",
        pic: "https://picsum.photos/300/200/?random=8"
    },
    {
        address: "新竹市東區",
        type: "整層住家3房",
        name: "綠光公園實驗室",
        price: "25000",
        pic: "https://picsum.photos/300/200/?random=10"

    },
    {
        address: "台北市中山區",
        type: "整層住家2房",
        name: "(已收定)大兩房大空間林森公園旁美廈",
        price: "35000",
        pic: "https://picsum.photos/300/200/?random=12"

    },
    {
        address: "台中市烏日區",
        type: "整層住家2房",
        name: "烏日實驗室",
        price: "16500",
        pic: "https://picsum.photos/300/200/?random=11"

    }
];

let introducelist = [
    {
        pic: "/img/room.jpg",
        descript: "「寧靜包裹每個都會日常，找到您專屬的恬雅居。恬居公寓為您延伸打的酒店式共享公寓，座落於交通與生活機能極佳的台北商圈，我們在這裡提供了37間 全新的裝潢套房。恬有安靜安然的意思, 居則是居住停留之意, 期望可以成為您上下班之餘恬謐實的依靠，在享受飯店式服務的同時也可以找到共生住宅般的生驗。",
        name: "烏日實驗室",
        price: "16500~29000",
        date: "2023/12/11租月到期"
    }
]




//宣告
const roomList = document.querySelector(".owl-theme");
function slide() {
    let roomsString = "";
    roomData.forEach((x, idx) => {
        let str = `
            <div class="ad">
            <p class="span">整層可立即入住</p>
            <img class="owl-lazy" data-src="https://placehold.it/300x450&text=1"
            data-src-retina=${x.pic} alt="強推好房">
            <div class="address">
            <p>${x.address}</p>
            <p>${x.type}</p>
            </div>
            <div class="price">
            <p class="name">${x.name}</p>
            <p>NT$${x.price}/<strong>月</strong></p>
            </div>
            </div>`
        roomsString += str;
    })

    roomList.innerHTML = roomsString;

    //先產生DOM節點產才能讓owl執行產生圖片
    $('.owl-carousel').owlCarousel({
        items: 4,
        lazyLoad: true,// 循環播放
        loop: false,
        margin: 10,// 外距 10px
        nav: false,
        responsive: {
            0: {
                items: 1 // 螢幕大小為 0~600 顯示 1 個項目
            },
            600: {
                items: 3 // 螢幕大小為 600~1000 顯示 2 個項目
            },
            1200: {
                items: 4, // 螢幕大小為 1200 以上 顯示 4 個項目
            }
        }
    });
}

window.onload = function () {
    slide();
}

const app = new Vue({
    el: '#app',
    data: {
        roomData:[
            {
                address: "台北市中山區",
                type: "整層住家2房",
                name: "南京復興1+1房/靜巷採光電梯房",
                price: "34000",
                pic: "https://asset.zuker.com.tw/uploads/attachment/image/17853/1__2_.jpg"
            },
            {
                address: "新竹市東區",
                type: "整層住家3房",
                name: "綠光公園實驗室",
                price: "25000",
                pic: "https://asset.zuker.com.tw/uploads/attachment/image/16957/1__2_.jpg"

            },
            {
                address: "台北市中山區",
                type: "整層住家2房",
                name: "大兩房大空間林森公園旁美廈",
                price: "35000",
                pic: "https://asset.zuker.com.tw/uploads/attachment/image/17853/1__2_.jpg"

            },
            {
                address: "台中市烏日區",
                type: "整層住家2房",
                name: "烏日實驗室",
                price: "16500",
                pic: "https://asset.zuker.com.tw/uploads/attachment/image/17853/1__2_.jpg"

            },
            {
                address: "台北市中山區",
                type: "整層住家2房",
                name: "南京復興1+1房/靜巷採光電梯房",
                price: "34000",
                pic: "https://picsum.photos/300/200/?random=8"
            },
            {
                address: "新竹市東區",
                type: "整層住家3房",
                name: "綠光公園實驗室",
                price: "25000",
                pic: "https://picsum.photos/300/200/?random=10"

            },
            {
                address: "台北市中山區",
                type: "整層住家2房",
                name: "(已收定)大兩房大空間林森公園旁美廈",
                price: "35000",
                pic: "https://picsum.photos/300/200/?random=12"

            },
            {
                address: "台中市烏日區",
                type: "整層住家2房",
                name: "烏日實驗室",
                price: "16500",
                pic: "https://picsum.photos/300/200/?random=11"

            }
        ],
    },
    methods: {
        owl(){
            $('.owl-carousel').owlCarousel({
                items: 4,
                lazyLoad: true,// 循環播放
                loop: false,
                margin: 10,// 外距 10px
                nav: false,
                responsive: {
                    0: {
                        items: 1 // 螢幕大小為 0~600 顯示 1 個項目
                    },
                    600: {
                        items: 3 // 螢幕大小為 600~1000 顯示 2 個項目
                    },
                    1200: {
                        items: 4, // 螢幕大小為 1200 以上 顯示 4 個項目
                    }
                }
            });
        }
    },
})