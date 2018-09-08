//  Variables   //
const rootNode = document.getElementById('root');
const btns = new BtnsTasks();
const connect = new ConnToBase();

let index = 1;
//  event   listeners   //

function BtnsTasks(){
    const head = document.getElementById('head__main-page');
    const add = document.getElementById('add');
    
    this.add = () => {
        location.hash = '/add';  
        head.className = 'head__main-page-close';
        add.className = 'add__fields';
    }
    this.save = () => {
        let text = document.getElementById('input_field').value;
        connect.save(text);
        head.className = 'head__main-page';
        add.className = 'add__fields-close';
        location.hash = '';
    }
    this.cancel = () => {
        let text = document.getElementById('inputField').value = '';
        head.className = 'head__main-page';
        add.className = 'add__fields-close';
    }
    this.remove = () => {

        head.className = 'head__main-page';
        add.className = 'add__fields-close';
    }
    this.check = () => {
        head.className = 'head__main-page';
        add.className = 'add__fields-close';
    }
}

function ConnToBase (){
    this.save = function (text){
        const item = {
            isDone: false, 
            id: index++, 
            description: text
        };
        localStorage.setItem(item.id, JSON.stringify(item));
        displayListItems(item);
    },

    this.modify = function (id, text){
        let data = JSON.parse(localStorage.getItem(localStorage.key(id)));
        data.description = text;
        localStorage.setItem(id, JSON.stringify(data));
    },
    this.check = function (id) {
        let data = JSON.parse(localStorage.getItem(localStorage.key(id)));
        data.isDone = true;
        localStorage.setItem(id, JSON.stringify(data));
    },
    this.remove = function (id){
        localStorage.removeItem(localStorage.key(id));
        let div = document.getElementById(`list_item_${id}`);
        div.parentNode.removeChild(div);
    }
}

//  display functions    //

function displayListItems(item){
        let ul = document.getElementById('list_items');
        let li = document.createElement('li');
        let text = document.createTextNode(item.description);
        let button = document.createElement('button');
        let checkBox = document.createElement('input');
        button.id = 'dltBtn';
        checkBox.setAttribute('type', 'checkbox');
        checkBox.class = 'check_box_itme';
        li.id = ('id', `list_item_${item.id}`);
        li.appendChild(text);
        li.appendChild(button);
        ul.appendChild(li);
}

(function startPoint(){
        let ul = document.createElement('ul');
        let content = document.createElement('section');
        content.id ='content';
        ul.id = 'list_items';
        content.appendChild(ul)
        rootNode.appendChild(content);
    for(let i = 0; i < localStorage.length; i++){
        if(localStorage.length < 1){
           break;
        }else{
            let item = JSON.parse(localStorage.getItem(localStorage.key(i)));
            let ul = document.getElementById('list_items');
            let li = document.createElement('li');
            let text = document.createTextNode(item.description);
            li.id = ('id', `list_item_${item.id}`);
            li.appendChild(text);
            ul.appendChild(li);
        }
    }
})();
