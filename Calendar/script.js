const calendar = document.querySelector(".calendar");
date = document.querySelector(".date");
daysContainer = document.querySelector(".days");
prev = document.querySelector(".prev");
(next = document.querySelector(".next")),
    (todayBtn = document.querySelector(".today-btn")),
    (gotoBtn = document.querySelector(".goto-btn")),
    (dateInput = document.querySelector(".date-input"))

let today = new Date();
let activeDay;
let month = today.getMonth(); //方法可返回表示月份的數字。返回值是0（一月） 到11（十二月） 之間的一個整數。
let year = today.getFullYear();

const months = [
    "January",
    "Febrary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Auguest",
    "September",
    "October",
    "November",
    "December"
];

//defult events array
const eventsArr = [
    {
        day: 8,
        month: 0,
        year: 2023,
        events: [
            {
                title: "Event1 Lorem ipsum dolor sit amet consectetur.",
                time: "10:00AM"
            },
            {
                title: "Event2 Lorem ipsum dolor sit amet consectetur.",
                time: "11:00AM"
            },
        ],
    },
    {
        day: 10,
        month: 0,
        year: 2023,
        events: [
            {
                title: "Event1 Lorem ipsum dolor sit amet consectetur.",
                time: "10:00AM"
            },
        ],
    },
]


//function to add days 
function initCalendar() {
    // to get prev month days and current month all days and rem next month days
    const firstDay = new Date(year, month, 1); //這個月第一天禮拜幾   注意:1月是0(以此計算)
    const lastDay = new Date(year, month + 1, 0);//下個月份的第0天=當月最後一天
    const prevLastDay = new Date(year, month, 0);
    const prevDays = prevLastDay.getDate(); //getDate() 方法可返回月份的某一天。返回值是1 ~ 31 之間的一個整數。
    const lastDate = lastDay.getDate();
    const day = firstDay.getDate();
    const nextDays = 7 - lastDay.getDay() - 1;

    //update date top of calendar
    date.innerHTML = year + months[month] + "";

    //adding days on dom

    let days = "";

    //月初當周的上個月的天數

    for (let x = day; x > 0; x--) {
        days += `<div class="day prev-date">${prevDays - x + 1}</div>`; //?
    }

    //current month days

    for (let i = 1; i <= lastDate; i++) {
        //ckeaj if event present on current day

        let event = false;
        eventsArr.forEach((eventObj) => {
            if (
                eventObj.day === i &&
                eventObj.month === month + 1 &&
                eventObj.year === year
            ) {
                //if event found
                event = true;
            }
        });

        //if day is today add class today
        if (
            i === new Date().getDate() &&
            year === new Date().getFullYear() &&
            month === new Date().getMonth()
        ) {
            //if event found also add event class
            if (event) {
                days += `<div class="day today event">${i}</div>`;
            } else {
                days += `<div class="day today">${i}</div>`;
            }
        }
        //add remaing as it is
        else {
            if (event) {
                days += `<div class="day event">${i}</div>`;
            } else {
                days += `<div class="day">${i}</div>`;
            }
        }
    }

    //月底當周的下個月的天數

    for (let j = 1; j <= nextDays; j++) {
        days += `<div class="day next-date">${j}</div>`;
    }

    daysContainer.innerHTML = days;
    //add lister after calendar initalized
    addListener();
}

initCalendar();

//prev month 

function prevMonth() {
    month--;
    if (month < 0) {    //因為1月為零，當數字小於零時月份會換成12月(即11)
        month = 11;
        year--;       //年份也會退回一年
    }
    initCalendar();
}

//next month
function nextMonth() {
    month++;
    if (month > 11) {
        month = 0;
        year++;
    }
    initCalendar();
}

//add eventlistener on prev and next
prev.addEventListener("click", prevMonth);
next.addEventListener("click", nextMonth);



//lets add goto date and goto today function

todayBtn.addEventListener("click", () => {
    today = new Date();
    month = today.getMonth();
    year = today.getFullYear();
    initCalendar();
});

dateInput.addEventListener("keyup", (e) => {
    //allow only numbers remove anuthing else
    dateInput.value = dateInput.value.replace(/[^0-9/]/g, "");
    if (dateInput.value.length === 2) {
        //add a slash if two numbers entered
        dateInput.value += "/";
    }
    if (dateInput.value.length > 7) {
        // don't allow more than 7 character
        dateInput.value = dateInput.value.slice(0, 7);
    }

    // if backspace pressed
    if (e.inputType === "deleteContentBackward") {
        if (dateInput.value.length === 3) {
            dateInput.value = document.value.slice(0, 2);
        }
    }
});

gotoBtn.addEventListener("click", gotoDate);

//function to do to enter date

function gotoDate() {
    const dateArr = dateInput.value.split("/");
    //some date validation
    if (dateArr.length === 2) {
        if (dateArr[0] > 0 && dateArr[0] < 13 && dateArr[1].length === 4) {
            month = dateArr[0] - 1;
            year = dateArr[1];
            initCalendar();
            return;
        }
    }
    // if invalid date
    alert("invaild date")
}

// 行程
const addEventBtn = document.querySelector(".add-event"),
    addEventContainer = document.querySelector(".add-event-wrapper"),
    addEventCloseBtn = document.querySelector(".close"),
    addEventTitle = document.querySelector(".event-name"),
    addEventFrom = document.querySelector(".event-time-from"),
    addEventTo = document.querySelector(".event-time-to");


addEventBtn.addEventListener("click", () => {
    addEventContainer.classList.toggle("active"); //toggle:切換element的顯示與隱藏狀態
});
addEventCloseBtn.addEventListener("click", () => {
    addEventContainer.classList.remove("active"); //toggle:切換element的顯示與隱藏狀態
});

// document.addEventListener("click", (e) => {
//     //if click outside
//     if (e.target !== addEventBtn && !addEventContainer.contains(e.target)){
//         addEventContainer.classList.remove("active");
//     }
// })

//allow only 50 chars in title
addEventTitle.addEventListener("input", (e) => {
    addEventTitle.value = addEventTitle.value.slice(0, 50);
});
// time format in from and to time

addEventFrom.addEventListener("input", (e) => {
    //remove anything else numbers
    addEventFrom.value = addEventFrom.value.replace(/[^0-9/]/g, "");
    if (addEventFrom.value.length === 2) {
        //if two numbers entered auto add:
        addEventFrom.value += ":";
    }
    if (addEventFrom.value.length > 5) {
        // don't let users enter more than 5 chars
        addEventFrom.value = addEventFrom.value.slice(0, 5);
    }
});

// same with to time
addEventTo.addEventListener("input", (e) => {
    //remove anything else numbers
    addEventTo.value = addEventTo.value.replace(/[^0-9/]/g, "");
    if (addEventTo.value.length === 2) {
        //if two numbers entered auto add:
        addEventTo.value += ":";
    }
    if (addEventTo.value.length > 5) {
        // don't let users enter more than 5 chars
        addEventTo.value = addEventTo.value.slice(0, 5);
    }
});


//lets create function to add listener on days after rendered

function addListener() {
    const days = document.querySelectorAll(".days");
    days.forEach((day) => {
        day.addEventListener("click", (e) => {
            //set current day as active day
            activeDay = Number(e.target.innerHTML);

            //remove active from already active day

            days.forEach((day) => {
                day.classList.remove("active");
            });

            //if pre month day clicked goto prev month and add active

            if (e.target.classList.contains("prev-date")) {
                prevMonth();

                setTimeout(() => {
                    //select all days of that month
                    const days = document.querySelectorAll(".day");

                    //after going tp pre month add active to clicked
                    days.forEach((day) => {
                        if (
                            !day.classList.contains("prev-date") &&
                            day.innerHTML === e.target.innerHTML
                        ) {
                            day.classList.add("active");
                        }
                    })
                }, 100);
            }
        });
    })
}