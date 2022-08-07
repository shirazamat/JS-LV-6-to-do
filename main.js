'use strict'

let taskList = [];

function Task(title, done = false) {
    this.title = title;
    this.done = done;
}

function drawTasks() {
    const $taskList = document.querySelector('#task-list')
    $taskList.textContent = '';
    taskList.forEach(function(task,i){
        drawTask(task,i);
    })

    console.log(taskList);
}

function drawTasks (task, id) {
    const $taskList = document.querySelector('#task-list')
    const html = '<div id="item-${id}" class="task-item ${task.done ? 'done' : ''}">
        <input type="checkbox" ${task.done ? 'checked="checked"' : ''}>
        <p class="task-item_title">${task.title}</p>
        <button data-id="${id}" class="task-item_btn">delete</button>
        </div>'
    $taskList.insertAdjacentElement('beforeend',html);

    $item = $taskList.querySelector('#item-${id}');
    $chBox = $item.querySelector('input');
}
