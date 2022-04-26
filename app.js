let todoContent = document.querySelector('.task_container');
let input = document.querySelector('.control_input input');
let addTask = document.querySelector('.control_input span');
let container = document.querySelector('.task_box');

let count = document.querySelector('.task_count span');
let completed = document.querySelector('.task_completed span');

window.onload = function() {
    input.focus();
}

addTask.onclick = function() {
    if(input.value === '') {

        swal("insert task", "please insert task !!!");

    } else {

        let noMsg = document.querySelector('.task_msg');

        if(document.body.contains(noMsg)) {

            noMsg.remove();

        }


        let mainSpan = document.createElement('span');
            mainSpan.appendChild(document.createTextNode(input.value));
            mainSpan.className = 'task';
            //mainSpan.setAttribute('data-type', 'task_readed')
            

        let deleteSpan = document.createElement('span');
            deleteSpan.appendChild(document.createTextNode('delete'));
            deleteSpan.className = 'task_delete';

        mainSpan.appendChild(deleteSpan);

            //console.log(mainSpan);

        container.appendChild(mainSpan);

        input.value = '';

        input.focus();

    }
    
    calcTask();
}



document.addEventListener('click', function(e) {
    if(e.target.className == 'task_delete') {
        e.target.parentNode.remove();

        if(container.childElementCount == 0) {
            addMsgNotask();
        }

         calcTask();
    }


    if(e.target.classList.contains('task')) {
        e.target.classList.toggle('finished')
    }

    calcTask();

})



function addMsgNotask() {

    let spanMsg = document.createElement('span');
        spanMsg.appendChild(document.createTextNode('No Task to Show ???'));
        spanMsg.className = 'task_msg';
    
    container.appendChild(spanMsg);
    
}


function calcTask() {

     count.innerHTML = document.querySelectorAll('.task_box .task').length;
     completed.innerHTML = document.querySelectorAll('.task_box .finished').length;
     
}


function addBtn() {

    let div = document.createElement('div');
        div.className = 'control';

    let btnRemove = document.createElement('button');
        btnRemove.appendChild(document.createTextNode('All'));
        btnRemove.className = 'delete_all';

    let btnfinished = document.createElement('button');
        btnfinished.appendChild(document.createTextNode('finished'));
        btnfinished.className = 'finished';

    div.appendChild(btnRemove);
    div.appendChild(btnfinished);

        //console.log(btnRemove, btnfinished);
    
    todoContent.appendChild(div);


    btnRemove.addEventListener('click', function() {

        container.innerHTML = '';

    })


    btnfinished.addEventListener('click', function() {
        
        container.classList.toggle('finished');
    })

}

addBtn();







