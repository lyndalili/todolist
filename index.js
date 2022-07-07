const taskInput = document.querySelector('.container form input')
const addTask = document.getElementById('add')
const form = document.getElementById('usrform')
const taskBox = document.getElementById('taskbox')
const taskNameStyle = document.getElementById('taskname')
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
        let taskName = taskInput.value;
        let tasks = {name : taskName, status : "to do"}
        e.preventDefault()
        taskAll.push(tasks)
        taskBox.innerHTML += `
        <li class="task"><button class="check" id="check-${taskAll.length}" ></button>
        <button class="doing"></button>
        <p id="taskname">${taskName}</p>
        <button class="close"></button>
        <button class="modify"></button>
        </li>
        `
        let taskStatus = tasks.status
        // Change la valeur de status
        taskAll.forEach((task, i) =>{
                let checkButton = document.getElementById(`check-${i+1}`)
                console.log(checkButton)
                console.log(taskAll)
                checkButton.addEventListener('click', () =>{
                        tasks.status = "Done"
                        console.log(tasks)
                })  
        })
        
}




form.addEventListener('submit', onTaskSubmit);

