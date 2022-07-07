const taskInput = document.querySelector('.container form input')
const addTask = document.getElementById('add')
const form = document.getElementById('usrform')
const taskBox = document.getElementById('taskbox')
const taskNameStyle = document.getElementById('taskname')
const checkButton = document.querySelector('.check')
const closeButton = document.querySelector('.close')
const doingButton = document.querySelector('.doing')
const modfiyButton = document.querySelector('.modify')
const allSelection = document.getElementById('all')
const toDoSeletion = document.getElementById('todo')
const doingSelection = document.getElementById('doing')
const doneSelection = document.getElementById('done')
let taskAll = []
let taskToDo = []
let taskDone = []
let taskDoing = []


// AJOUTER UNE TACHE DANS LA DOM

const onTaskSubmit = (e) => {
        e.preventDefault()
        let taskName = taskInput.value;
        let tasks = {name : taskName, status : "to do"}
        taskAll.push(tasks)
        taskBox.innerHTML += `
        <li class="task"><button class="check"></button>
        <button class="doing"></button>
        <p id="taskname">${taskName}</p>
        <button class="close"></button>
        <button class="modify"></button>
        </li>
        `
        console.log(taskAll)
}


form.addEventListener('submit', onTaskSubmit);

// if (tasks.status === "done") {
//         taskDone.push(tasks)
// }
// if (tasks.status === "doing") {
//         taskDoing.push(tasks)
// }