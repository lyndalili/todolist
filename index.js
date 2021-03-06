const taskInput = document.querySelector('.container form input')
const addTask = document.getElementById('add')
const form = document.getElementById('usrform')
const taskBox = document.getElementById('taskbox')
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
        let taskStatus = tasks.status
        let taskNameStyle = document.getElementById(`taskname-${taskAll.length}`)
        taskBox.innerHTML = ""
        taskAll.forEach((task, i) =>{
                taskBox.innerHTML += `
                <li class="task ${i}" id="li-${i}"><button class="check ${i}" id="check-${taskAll.length-1}" onClick="changeStatusCheck(${taskAll.length-1}), styleFilter(${taskAll.length-1})"></button>
                <button onClick="changeStatusDoing(${taskAll.length-1}), styleFilter(${taskAll.length-1})" class="doing ${i}"></button>
                <p id="taskname-${i}">${task.name}</p>
                <button class="close ${i}" onClick="deleteTask(${taskAll.length-1})"></button>
                <button class="modify"></button>
                </li>
                `
        })
        let checkButton = document.querySelector('.check')
        
        console.log(taskAll)
}

const randomTask = () => {
        const randomTaskNames = [
        "Vérifier les sorties sur l'app nike",
        "Prendre une douche",
        "Acheter une chemeise", 
        "Trouver une tâche à faire",
        "Virer le clodo mort de la cave", 
        "Changer de pc",
        "Faire la cuisine",
        "Trouver du fric",
        "Aller à miami",
        "Acheter une voiture",
        ]
        const min = 0
        const max = randomTaskNames.length - 1
        const random = Math.floor(Math.random() * max) + min
        const randomTasksArray = {name : randomTaskNames[random], status : "to do"}
        const randomName = randomTasksArray.name
        taskAll.push(randomTasksArray)
        taskBox.innerHTML = ""
        taskAll.forEach((task, i) =>{

                taskBox.innerHTML += `
                <li class="task ${i}" id="li-${i}"><button class="check ${i}" id="check-${taskAll.length-1}" onClick="changeStatusCheck(${taskAll.length-1}), styleFilter(${taskAll.length-1}) "></button>
                <button onClick="changeStatusDoing(${taskAll.length-1}), styleFilter(${taskAll.length-1})" class="doing ${i}"></button>
                <p id="taskname-${i}">${randomName}</p>
                <button class="close ${i}" onClick="deleteTask(${taskAll.length-1})"></button>
                <button class="modify"></button>
                </li>
                `
        })
}

const changeStatusCheck = (id) => {
        // console.log(taskAll[id].status)
        // taskAll[id].status = "done"
        let classNameID = event.target.className
        const arrayId = classNameID.split(' ')
        const taskId = arrayId[1]
        taskAll[taskId].status = "done"
        let taskName1 = document.getElementById(`taskname-${taskId}`)
        // taskName1.classList.add('checkinput')
        console.log(taskAll[taskId])
}
const deleteTask = (id) => {
        let classNameID = event.target.className
        const arrayId = classNameID.split(' ')
        const taskId = arrayId[1]
        // taskAll.splice(taskAll[taskId])
        let taskBox1 = document.getElementById(`li-${taskId}`)
        taskBox1.classList.add('delet')
}
const changeStatusDoing = (id) => {
        let classNameID = event.target.className
        const arrayId = classNameID.split(' ')
        const taskId = arrayId[1]
        taskAll[taskId].status = "doing"
        let taskName1 = document.getElementById(`taskname-${taskId}`)
        // taskName1.classList.add('doinginput')
        console.log(taskAll[taskId])
}

const toDoList = () => {
const toDoFilter = taskAll.filter((task, i) => {
        // taskBox.parentNode.removeChild(taskBox)
        if (task.status === "to do") {
                taskBox.innerHTML += `
                <li class="task ${i}"><button class="check ${i}" id="check-${taskAll.length-1}" onClick="changeStatusCheck(${taskAll.length-1}), styleFilter(${taskAll.length-1})"></button>
                <button onClick="changeStatusDoing(${taskAll.length-1}), styleFilter(${taskAll.length-1})" class="doing ${i}"></button>
                <p id="taskname-${i}">${task.name}</p>
                <button class="close"></button>
                <button class="modify"></button>
                </li>
                `
        } 
        })
}

const doneList = () => {
const doneFilter = taskAll.filter((task, i) => {

        if (task.status === "done") {
                taskBox.innerHTML += `
                <li class="task ${i}"><button class="check ${i}" id="check-${taskAll.length-1}" onClick="changeStatusCheck(${taskAll.length-1}), styleFilter(${taskAll.length-1})"></button>
                <button onClick="changeStatusDoing(${taskAll.length-1}), styleFilter(${taskAll.length-1})" class="doing ${i}"></button>
                <p id="taskname-${i}">${task.name}</p>
                <button class="close"></button>
                <button class="modify"></button>
                </li>
       `
        } 
        })
}

const doingList = () => {
const doingFilter = taskAll.filter((task, i) => {

        if (task.status === "doing") {
                taskBox.innerHTML += `
                <li class="task ${i}"><button class="check ${i}" id="check-${taskAll.length-1}" onClick="changeStatusCheck(${taskAll.length-1}), styleFilter(${taskAll.length-1})"></button>
                <button onClick="changeStatusDoing(${taskAll.length-1}), styleFilter(${taskAll.length-1})" class="doing ${i}"></button>
                <p id="taskname-${i}">${task.name}</p>
                <button class="close"></button>
                <button class="modify"></button>
                </li>
       `
        } 
        })
}

const styleFilter = (id) => {
        let classNameID = event.target.className
        const arrayId = classNameID.split(' ')
        const taskId = arrayId[1]
        let taskName1 = document.getElementById(`taskname-${taskId}`)
        if (taskAll[taskId].status === "done") {
                taskName1.classList.add('checkinput')
        }
        if (taskAll[taskId].status === "doing") {
                taskName1.classList.add('doinginput')
        }
}

form.addEventListener('submit', onTaskSubmit);

