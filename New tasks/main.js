let n = 0;
function addtask(){

    let task = document.getElementById('input-task').value;
    let addtask = `<li id=${String(n)}><input type="checkbox"><span class="task">${task}</span><button class="delete-btn" onclick=this.parentNode.remove()>X</button></li>`;
    document.getElementById('task-list').innerHTML += addtask;
    document.getElementById('input-task').value="";
    n+=1;
}
