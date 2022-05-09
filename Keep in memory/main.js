
function addtask(){

    let task = document.getElementById('input-task').value;
    let addtask = `<li><input type="checkbox" class="check" onclick="lineThrought(this)" ><span class="task">${task}</span><button class="delete-btn" onclick=this.parentNode.remove()>X</button></li>`;
    document.getElementById('task-list').innerHTML += addtask;
    document.getElementById('input-task').value="";

}
function lineThrought(e){
    if (e.checked){
      e.nextSibling.style.textDecorationLine = "line-through";
    }else {
        e.nextSibling.style.textDecorationLine = "none";
    }
}

window.onbeforeunload = function(){
    let dataArr = [];
    let list = document.getElementsByTagName('li')
    for( let i =0 ; i < list.length;i++){
        dataArr.push({
            'checkbox' : document.getElementsByTagName('li')[i].childNodes[0].checked,
            'task' : document.getElementsByTagName('li')[i].childNodes[1].innerHTML
        })
    }
    localStorage.setItem('dataArr',JSON.stringify(dataArr));
}

window.onload = function (){
    let list = JSON.parse(localStorage.getItem('dataArr'));
    if (list.length !== 0){
        list.forEach((data , index) =>{
            if (data.checkbox) {

                let addtask = `<li><input type="checkbox" class="check" onclick="lineThrought(this)" checked ><span class="task">${data.task}</span><button class="delete-btn" onclick=this.parentNode.remove()>X</button></li>`;
                document.getElementById('task-list').innerHTML += addtask;
            }else{
                let addtask = `<li><input type="checkbox" class="check" onclick="lineThrought(this)"  ><span class="task">${data.task}</span><button class="delete-btn" onclick=this.parentNode.remove()>X</button></li>`;
                document.getElementById('task-list').innerHTML += addtask;
            }
        });
    }
}



