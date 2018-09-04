//      Variables       //

var rootNode = document.getElementById('root');
const headOfForm = document.getElementById('addbtn');
const addIcon = (name) => {
    let i = document.createElement('i');
    i.className = 'material-icons';
    i.innerHTML = name;
    return i;
}
const add_box = addIcon('add_box');
const delete_box = addIcon('delete_box');
const maxLength = 10;

let inputField = document.getElementById('inputField');
let buttonAdd = document.getElementById('add');
let forDrug;
//  start   //
document.getElementById('addbtn').addEventListener('click', addToData);

//      constructors     //


const createNewField = function(text){
        let unorderList = document.createElement('ul');
        let line = document.createElement('li');
        let checkbox = document.createElement('input');
        let attribute = document.createAttribute('draggable');
        let dltBtn = document.createElement('button').appendChild(delete_box);

        attribute.value = 'true';
        buttonAdd.disabled = false;
        document.getElementById('inputField').value = '';
        line.className = 'draggable';
        line.appendChild(checkbox).className = 'checkbox';
        //      checkbox    //
        checkbox.setAttribute('type', 'checkbox');
        checkbox.setAttribute('name', 'todo');
        checkbox.addEventListener('click', checkBoxChecked(checkbox));
        //      trash btn   //
        line.appendChild(dltBtn);

        line.setAttribute(attribute).appendChild(document.createTextNode(text));
        unorderList.appendChild(line);
        dltBtn.addEventListener('click', deleteFunction);
        dragAndDrop(line);
        checkLengthNodeList();
}
//  functions   //
function addToData(){
    let text = document.getElementById('inputField').value;
    if(text !== ''){
        createNewField(text);
        
    }
}
function checkBoxChecked(checkbox){
    if(checkbox.checked){
        checkbox.checked = true;
        checkbox.className = 'checked';
    }
}
function deleteFunction(){
    let parent = this.parentNode.parentNode;
    let child = this.parentNode
    parent.removeChild(child);
    checkLengthNodeList();
}

function checkLengthNodeList() {

    let todoListLength = document.getElementsByTagName('li').length;
    if (todoListLength >= maxLength){
        inputField.disabled = true;
        document.getElementsByTagName('h1').innerHTML = 'Maximum item per list are created’ is displayed.';
        document.getElementById('addbtn').disabled = true;
    }else{
        inputField.disabled = false;
        document.getElementsByTagName('h1').innerHTML = 'TODO Cat List';
        document.getElementById('addBtn').disabled = false;
    }
}

//      drag&drop       //
const dragAndDrop = (e) => {
    e.addEventListener('dragstart', drStart, false);
    e.addEventListener('dragenter', drChange, false);
    e.addEventListener('dragover', drOver, false);
    e.addEventListener('dragleave', drOut, false);
    e.addEventListener('drop', drop, false);
    e.addEventListener('dragend', end, false);
}
function drStart(e){
    this.style.opacity = '0.4';
    forDrug = this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
}
function drChange(e) {
    this.classList.add('over');
}

function drOver(e) {
    e.stopPropagation();
    this.classList.remove('over');
}

function drOut(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    return false;
}

function drop(e) {
    if (forDrug !== this) {
        forDrug.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html');
    }
    return false;
}

function end(e) {
    let listItens = document.querySelectorAll('.draggable');
    [].forEach.call(listItens, function (item) {
        item.classList.remove('over');
    });
    this.style.opacity = '1';
}
s