const form = document.querySelector("#new-task-form");
const input = document.querySelector("#new-task-input");
const list_el = document.querySelector("#tasks");

// console.log(tasks)

// console.log(form);
let todoData = [
    // {
    //     todolist:"小瑪莉"
    // }
];

const localKey = "todoStorage"; //todoStorage後台資料存取的名字

// localStorage.setItem(localKey, JSON.stringify(todoData)); //todoData存進localStorage
// if (localStorage.getItem(localKey) != null) {             //null無法JSON.PARSE，所以需要檢查
//     todoData = JSON.parse(localStorage.getItem(localKey)); 
// }

/*檢查localStorage 是否回傳是null，如果不是null Parse成JSON回傳給todoData，若是null會報錯(要檢查)*/


function DisplayTodo() {   //渲染畫面
    // console.log(list_el);
    list_el.innerHTML = " ";//清空前一筆輸入資料
    if (localStorage.getItem(localKey) != null) {
        todoData = JSON.parse(localStorage.getItem(localKey));
    }

    todoData.forEach(x => {
        let ckb = "";
        if (x.checked == true) {
            ckb = "checked";
        }

        let str = `<div class="task">
            <div class="content">
                <input class="box" type="checkbox" ${ckb}>
                <input type="text" class="textbox" value="${x.todolist}" readonly>
            </div>
            <div class="actions">
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
            </div>
        </div>`
        list_el.innerHTML += str;


    })
    Delete();
    Edit();
    Clickbox();
}

function AddTodos() {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // localStorage.getItem(localKey) != null //檢查local是否有東西
        //console.log("Submit form")
        const task = input.value;

        if (task == "") {
            alert("尚未輸入事項");
            return;
        }

        if (localStorage.getItem(localKey) == null) {
            todoData.push({ todolist: task, checked: false }); //local如果是null,將設好的空陣列類似新增物件回傳給todoData
        } else {
            todoData = JSON.parse(localStorage.getItem(localKey));
            todoData.push({ todolist: task, checked: false });

        }

        // todoData.push({ todolist: task }); //將資料push到陣列(push有重新整理陣列功能)
        input.value = "";

        localStorage.setItem(localKey, JSON.stringify(todoData));
        DisplayTodo(); //submit後重新刷新畫面

    })

    DisplayTodo();//一開始window onload載入畫面
}

function Delete() {   //刪除資料
    const delete_el = document.querySelectorAll(".delete")
    delete_el.forEach((delete_btn, idx) => {
        delete_btn.addEventListener('click', () => {
            // console.log(idx)

            todoData.splice(idx, 1);

            localStorage.setItem(localKey, JSON.stringify(todoData));
            DisplayTodo();
        })
    })
}

//編輯
//s1 先抓btn_dom
//s2 做foreach抓btn 監聽事件
//s3 點擊btn input 更改內容 btn文字變成保存
//s4 按下保存 文字變成編輯   同時陣列的資料作變更 並刷新頁面

function Edit() {
    const edit_el = document.querySelectorAll(".edit");//抓button 
    let redo = document.querySelectorAll(".textbox");  //class名稱
    edit_el.forEach((edit_btn, num) => {
        edit_btn.addEventListener('click', () => {

            if (edit_btn.innerText == "EDIT") {
                redo[num].removeAttribute('readonly');
                redo[num].focus();
                edit_btn.innerText = "SAVE";

            } else {
                redo[num].setAttribute("readonly", "readonly");
                // console.log(redo[num].value)
                todoData[num].todolist = redo[num].value; //將修改的資料重新存取在陣列裡面
                edit_btn.innerText = "EDIT"
            }
            // console.log(edit_el)

            localStorage.setItem(localKey, JSON.stringify(todoData));

        })
    })
}

function Clickbox() {
    let rebox = document.querySelectorAll(".box")
    rebox.forEach((box_btn, idx) => {
        box_btn.addEventListener('click', (e) => {



            todoData[idx].checked = rebox[idx].checked;
            localStorage.setItem(localKey, JSON.stringify(todoData));

        })
    })

}


window.onload = function () {
    AddTodos();
}




