let n = 0;
function addtask(){

    let task = document.getElementById('input-task').value;
    let addtask = `<li><input type="checkbox" class="check" onclick="lineThrought(this)"><span class="task">${task}</span><button class="delete-btn" onclick=this.parentNode.remove()>X</button></li>`;
    document.getElementById('task-list').innerHTML += addtask;
    document.getElementById('input-task').value="";
    n+=1;
}
function lineThrought(e){
    if (e.checked){
      e.nextSibling.style.textDecorationLine = "line-through";
    }else {
        e.nextSibling.style.textDecorationLine = "none";
    }
}