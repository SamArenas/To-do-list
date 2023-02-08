import './styles.css';

const add = document.querySelector('.add');
const toDoBody = document.querySelector('.to-do-body');

let removeToDo = function(target){
    toDoBody.removeChild(target)
}

// separate this function into various or a class
let addToDo = function (taskName, date){
    let task = document.createElement('div')
    task.classList.add("task")

    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.name = 'finished'
    checkbox.value = 'false'

    const label = document.createElement('label')
    label.for = 'finished'
    label.innerText = taskName

    const button = document.createElement('button')
    button.classList.add('delete')
    button.addEventListener('click', ()=>{
        removeToDo(task)
    })
    button.innerText = 'DEL'
    
    task.appendChild(checkbox)
    task.appendChild(label)
    task.appendChild(button)

    toDoBody.appendChild(task)

}

add.addEventListener('click', ()=>{
    addToDo('new task', 1)
})

