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
            items: 4, // 螢幕大小為 1000 以上 顯示 5 個項目
        }
    }
});