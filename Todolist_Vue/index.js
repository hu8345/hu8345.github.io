// step1.新增
/*流程
1在 vue data 中定義 1 筆測試資料
2.顯示 vue data 中 todos 內的清單測試資料
3️.在「新增」按鈕綁定事件觸發器
4️.雙向綁定，讓 input 輸入的內容可以寫進 vue data 內的 newTodo
5️.讓 enter 可觸發事件新增內容
6️.在方法集 methods 物件中新增一個 addTodo 事件
7️.避免空白內容可新增*/


const app = new Vue({
    el: '#app',
    data: {
        newTodo: '',   //newTodo: ''用來放之後 input 新增的內容
        todos: [
            {
                id: '123',
                title: '代辦事項1',
                completed: true
            }

        ]
    },
    //在methods 物件中新增一個 addTodo 事件
    methods: {
        addTodo: function () {
            let value = this.newTodo.trim();//trim()避免空白內容可新增
            let timeStamp = Math.floor(Date.now());
            if (!value) {
                return; //若內容空白function就停止
            }
            this.todos.push({
                id: timeStamp,
                title: value,
                completed: false
            });
            this.newTodo = '';
        }
    },

})


// step2.刪除

/*方法一 : 索引值對應刪除 流程
1️.在 X 按鈕綁定事件觸發器
2️.需將原本設定的 v-for 中也加上 key 索引值參數
3️.新增一個 removeTodo function */





















// step2.刪除
// step3.頁籤切換功能與篩選顯示資料
// step4.修改(雙擊修改已新增內容)
