const calendar = document.querySelector(".calendar"),
    date = document.querySelector(".date"),
    daysContainer = document.querySelector(".days"),
    prev = document.querySelector(".prev"),
    next = document.querySelector(".next"),
    todayBtn = document.querySelector(".today-btn"),
    gotoBtn = document.querySelector(".goto-btn"),
    dateInput = document.querySelector(".date-input"),
    eventDay = document.querySelector(".event-day"),
    eventDate = document.querySelector(".event-date"),
    eventsContainer = document.querySelector(".events"),
    addEventSubmit = document.querySelector(".add-event-btn");
// 行程
const addEventBtn = document.querySelector(".add-event"),
    addEventWrapper = document.querySelector(".add-event-wrapper"),
    addEventCloseBtn = document.querySelector(".close"),
    addEventTitle = document.querySelector(".event-name"),
    addEventFrom = document.querySelector(".event-time-from"),
    addEventTo = document.querySelector(".event-time-to");

let today = new Date(); //new Date()=>建構日期的方法
let activeDay;
let month = today.getMonth(); //getMonth()=>可返回表示月份的數字。返回值是0（一月） 到11（十二月） 之間的一個整數。
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
/*const eventsArr = [
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
*/
const eventsArr = [];
getEvents();


//function to add days 
function initCalendar() {
    // to get prev month days and current month all days and rem next month days
    const firstDay = new Date(year, month, 1); //這個月第一天禮拜幾   注意:1月是0(以此計算)
    const lastDay = new Date(year, month + 1, 0);//下個月份的第0天=當月最後一天
    const prevLastDay = new Date(year, month, 0);
    const prevDays = prevLastDay.getDate(); //getDate()=>可返回月份的某一天。返回值是1 ~ 31 之間的一個整數。
    const lastDate = lastDay.getDate();
    const day = firstDay.getDay();  //getDay()=>當地時間將指定日期返回一星期中的第幾天
    const nextDays = 7 - lastDay.getDay() - 1;

    //update date top of calendar
    date.innerHTML = year +"   "+ months[month] + "";

    //adding days on dom
    let days = "";

    //當月的最後一天的日期
    for (let x = day; x > 0; x--) {
        days += `<div class="day prev-date">${prevDays - x + 1}</div>`;
    }

    //current month days

    for (let i = 1; i <= lastDate; i++) {
        //ckeak if event present on current day
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
            activeDay = i;
            getActiveDay(i);
            updateEvents(i);
            //if event found also add event class
            //add active on today at startup
            if (event) {
                days += `<div class="day today active event">${i}</div>`;
            } else {
                days += `<div class="day today active">${i}</div>`;
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
    //add listner after calendar initalized
    addListner();
}

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

initCalendar();

//function to add active on day
function addListner() {
    const days = document.querySelectorAll(".day");
    days.forEach((day) => {
        day.addEventListener("click", (e) => {
            //call active day after click
            getActiveDay(e.target.innerHTML);
            updateEvents(Number(e.target.innerHTML));
            //set current day as active day
            activeDay = Number(e.target.innerHTML);

            //remove active 
            days.forEach((day) => {
                day.classList.remove("active");
            });

            //if pre month day clicked goto prev month and add active
            if (e.target.classList.contains("prev-date")) {
                prevMonth();
                //add active to clicked day afte month is change
                setTimeout(() => {
                    //select all days of that month
                    const days = document.querySelectorAll(".day");
                    //after going to prev month add active to clicked
                    days.forEach((day) => {
                        if (
                            !day.classList.contains("prev-date") &&
                            day.innerHTML === e.target.innerHTML
                        ) {
                            day.classList.add("active");
                        }
                    })
                }, 100);
                //same with next month days
            } else if (e.target.classList.contains("next-date")) {
                nextMonth();
                setTimeout(() => {
                    //select all days of that month
                    const days = document.querySelectorAll(".day");
                    //after going to next month add active to clicked
                    days.forEach((day) => {
                        if (
                            !day.classList.contains("next-date") &&
                            day.innerHTML === e.target.innerHTML
                        ) {
                            day.classList.add("active");
                        }
                    });
                }, 100);
            } else {
                // remaing current days
                e.target.classList.add("active");
            }
        });
    })
}

//lets add goto date and goto today function
todayBtn.addEventListener("click", () => {
    today = new Date();
    month = today.getMonth();
    year = today.getFullYear();
    initCalendar();
});

dateInput.addEventListener("input", (e) => {
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
            dateInput.value = date.value.slice(0, 2);
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
    alert("invaild date");
}

//lets show active day events and date top
function getActiveDay(date) {
    const day = new Date(year, month, date);
    const dayName = day.toString().slice(0, 3);
    eventDay.innerHTML = dayName;
    eventDate.innerHTML = date + " " + months[month] + " " + year;
}

//function to show events of that day
function updateEvents(date) {
    let events = ""
    eventsArr.forEach((event) => {
        //get events of active day only
        if (
            date === event.day &&
            month + 1 === event.month &&
            year === event.year
        ) {
            //then show event on doucument 

            event.events.forEach((event) => {
                events += `<div class="event">
                <div class="title">
                    <i class="fas fa-circle"></i>
                    <h3 class="event-title">${event.title}</h3>
                </div>
                <div class="event-time">
               <span class="event-time"> ${event.time}</span>
               </div>
            </div>`
            })

        }
    })
    //if nothing found
    if (events === "") {
        events = `<div class="no-event">
            <h3>No Events</h3>
        </div>`;
    }

    eventsContainer.innerHTML = events;
    //save events when update event called
    saveEvents();

}

addEventBtn.addEventListener("click", () => {
    addEventWrapper.classList.toggle("active"); //toggle:切換element的顯示與隱藏狀態
});
addEventCloseBtn.addEventListener("click", () => {
    addEventWrapper.classList.remove("active");
});

//allow only 50 chars in title
addEventTitle.addEventListener("input", (e) => {
    addEventTitle.value = addEventTitle.value.slice(0, 50);
});
// time format in from and to time

addEventFrom.addEventListener("input", (e) => {
    //remove anything else numbers
    addEventFrom.value = addEventFrom.value.replace(/[^0-9:]/g, "");
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
    addEventTo.value = addEventTo.value.replace(/[^0-9:]/g, "");
    if (addEventTo.value.length === 2) {
        //if two numbers entered auto add:
        addEventTo.value += ":";
    }
    if (addEventTo.value.length > 5) {
        // don't let users enter more than 5 chars
        addEventTo.value = addEventTo.value.slice(0, 5);
    }
});

//let create function to add events
addEventSubmit.addEventListener("click", () => {
    const eventTitle = addEventTitle.value;
    const eventTimeFrom = addEventFrom.value;
    const eventTimeTo = addEventTo.value;

   // 需填選event內容才能新增
    if (eventTitle === "" || eventTimeFrom === "" || eventTimeTo === "") {
        alert("Please fill all the fileds");
        return;
    }
    const timeFromArr = eventTimeFrom.split(":");
    const timeToArr = eventTimeTo.split(":");
    //防呆

    if (addEventFrom.value > addEventTo.value)
{
    alert("Invailed Time Format");
    return;
}

        // if (
        //     timeFromArr.length !== 2 ||
        //     timeToArr.length !== 2 ||
        //     timeFromArr[0] > 23 ||
        //     timeToArr[0] > 23 ||
        //     timeFromArr[1] > 59 ||
        //     timeToArr[1] > 59

        // ) {
        //     alert("Invailed Time Format")
        //     return;
        // }
    const timeFrom = convertTime(eventTimeFrom);
    const timeTo = convertTime(eventTimeTo);

    //行程內容
    const newEvent = {
        title: eventTitle,
        time: timeFrom + "-" + timeTo,
    };

    let eventAdded = false;
    //check if eventarr not empty
    if (eventsArr.length > 0) {
        //check if current days already any event then add to that
        eventsArr.forEach((item) => {
            if (
                item.day === activeDay &&
                item.month === month + 1 &&
                item.year === year
            ) {
                item.events.push(newEvent);
                eventAdded = true;
            }
        })
    }

    //if event array empty or current day has no event create new
    if (!eventAdded) {
        eventsArr.push({
            day: activeDay,
            month: month + 1,
            year: year,
            events: [newEvent],
        });
    }
    //remove active from add event form
    addEventWrapper.classList.remove("active")
    //clear the filed
    addEventTitle.value = "";
    addEventFrom.value = "";
    addEventTo.value = "";

    updateEvents(activeDay);

    //also  add event class to newly added day if not already
    const activeDayElem = document.querySelector(".day.active");
    if (!activeDayElem.classList.contains("event")) {
        activeDayElem.classList.add("event")
    }

});

//let create a function to remove events on click
eventsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("event")) {
        if (confirm("Are you sure you want to delete this event?")) {
            const eventTitle = e.target.children[0].children[1].innerHTML;
            eventsArr.forEach((event) => {
                if (
                    event.day === activeDay &&
                    event.month === month + 1 &&
                    event.year === year
                ) {
                    event.events.forEach((item, index) => {
                        if (item.title === eventTitle) {
                            event.events.splice(index, 1); //splice=>可以藉由刪除既有元素或加入新元素來改變一個陣列的內容。
                        }
                    });
                    //if no events left in a day then remove that day from eventsArr
                    if (event.events.length === 0) {
                        eventsArr.splice(eventsArr.indexOf(event), 1);
                        //remove event class from day
                        const activeDayEl = document.querySelector(".day.active");
                        if (activeDayEl.classList.contains("event")) {
                            activeDayEl.classList.remove("event");
                        }
                    }
                }
            });
            updateEvents(activeDay);
        }
    }
});

//lets store events in local storage get from there

function saveEvents() {
    localStorage.setItem("events", JSON.stringify(eventsArr));  //localStorage 儲存值為 string，JSON 需轉換處理
}

function getEvents() {
    if (localStorage.getItem("events") === null) {
        return;
    }
    eventsArr.push(...JSON.parse(localStorage.getItem("events")))
}

function convertTime(time) {
    //convert time to 24 hour format
    let timeArr = time.split(":");
    let timeHour = timeArr[0];
    let timeMin = timeArr[1];
    let timeFormat = timeHour >= 12 ? "PM" : "AM";
    timeHour = timeHour % 12 || 12;
    time = timeHour + ":" + timeMin + " " + timeFormat;
    return time;
}


