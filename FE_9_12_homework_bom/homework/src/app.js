//  Variables   //
const rootNode = document.getElementById('root');
const mainPage = document.getElementById('head__main-page');
const add = document.getElementById('add');
const modify = document.getElementById('modify');


const connectors = localStorage;
const btnAction = new TodoList();
const local = new Places()
const interface = new DisplayItems();

interface.display();

let todoList = [];
let index = 0;

//      toto list main funtion  //
function TodoList(){
    this.add = function(){
        local.location('add');
    };
    this.save = function (mod = false) {
        if(mod === true){
            return;
        }else{
            let text = document.getElementById('input_field').value;
            mainPage.classList.replace('head__main-page-close', 'head__main-page');
            add.classList.replace('add__fields', 'add__fields-close');
            if(text !== ''){
                const item = {
                    id: index++,
                    isDone: false,  
                    description: text
                };
                todoList.push(item);
                localStorage.setItem('todoItems', JSON.stringify(todoList));
                local.location('main_page');
            }
        }
       
    };
    this.cancel = function(){
        document.getElementById('input_field').value = '';
        local.location('main_page');
    };
    this.modify = function(id) {
        let item = todoList.find(element => { 
            return element.id === id;
        })
        if(item.isDone === true){
            return;
        }else{
            location.hash = `/modify/element_${id}`;
            mainPage.classList.replace('head__main-page', 'head__main-page-close');
            add.classList.replace('add__fields-close', 'add__fields');
        }
            let replace = document.getElementById('input_field');
            replace.value = item.description;
            let btnSave = document.getElementById('addbtn');
            btnSave.setAttribute('onclick', '');
            btnSave.addEventListener('click', function(){
                item.description = replace.value;
                todoList.splice(id, 1);
                localStorage.setItem('todoItems', JSON.stringify(todoList));
                location.hash = '';
                interface.reset();
                interface.display();
            });
            btnSave.setAttribute('onclick', 'btnAction.save()')
            interface.reset();
            interface.display();
    }
    this.delete = function(id) {
        todoList.splice(id, 1);
        localStorage.setItem('todoItems', JSON.stringify(todoList));
        interface.reset();
        interface.display();
    }
    this.done = function(id){
        let item = todoList.find(element => {
            return element.id === id;
        });
        if(item.isDone === false){
            item.isDone = true;
            interface.reset();
            interface.display(true);
        }else{
            item.isDone = false;
            interface.reset();
            interface.display();
        }
        todoList[id] = item;
        connectors.setItem('todoItems', JSON.stringify(todoList));
    }
}
//  mowing thorw the window //
function Places (text){
    this.location = function (text, id = null){
        if(text === 'add'){
            location.hash ='/add';
            mainPage.classList.replace('head__main-page', 'head__main-page-close');
            add.classList.replace('add__fields-close', 'add__fields'); 
        }else if(text === 'main_page'){
            interface.reset();
            interface.display();
            location.hash = '';
            mainPage.classList.replace('head__main-page-close', 'head__main-page');
            add.classList.replace('add__fields', 'add__fields-close');
        }
    }
}

//      display items       //
function DisplayItems (){
    const todoListItems = document.getElementById('todo_list');
    const zero = 0;

    this.display = function(is = null){
        let displayItems = document.createElement('ul');
        const data = JSON.parse(connectors.getItem(connectors.key('todoItems')));
        displayItems.id = 'list_of_items';
            if(data){
                data.forEach(element => {
                    let li = document.createElement('li');
                    let checkBox = document.createElement('img')
                    if(!is){
                        checkBox.setAttribute('src', 'assets/img/todo-s.png');
                    }else{
                        checkBox.setAttribute('src', 'assets/img/done-s.png');
                    }
                    checkBox.setAttribute('onclick', `btnAction .done(${element.id})`);
                    let delbtn = document.createElement('img');
                    delbtn.setAttribute('src', 'assets/img/remove-s.jpg')
                    delbtn.setAttribute('onclick', `btnAction.delete(${element.id})`);
                    li.appendChild(checkBox);
                    let span = document.createElement('span');
                    span.id = `description_${element.id}`;
                    span.setAttribute('onclick', `btnAction.modify(${element.id})`)
                    let text = document.createTextNode(element.description);
                    span.appendChild(text);
                    li.appendChild(span);
                    li.appendChild(delbtn);
                    displayItems.appendChild(li);
                });
            }
        todoListItems.appendChild(displayItems);
    }

    this.reset = function(){
        let t = document.getElementById('list_of_items');
        if(todoList.length === zero){
            document.querySelector('h2').className = 'open';
        }else{
            document.querySelector('h2').className = 'head__main-page-close';
        }
        t ? t.parentNode.removeChild(t) : '';
    }

}

//rootNode.appendChild(/**/);
    