console.log('ajax js');

let fetchBtn = document.getElementById('fetchbtn');
let updateBtn = document.getElementById('updateBtn');
let populatedata = document.getElementById('populatedata')


updateBtn.addEventListener('click', backupbtnHandler);
fetchBtn.addEventListener('click', fetchBtnHandler);

// fetchBtnHandler 
function fetchBtnHandler() {
    console.log('clicked fetchBtnHandler');

    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);

    xhr.onprogress = function() {
        console.log('on progress');
    };

    xhr.onload = function() {
        if (this.status === 200) {
            console.log(this.responseText);      
        } else {
            console.log('some error occurred.');
        }
    };

    xhr.send();
}

// backupbtnHandler
function backupbtnHandler() {
    console.log('backupbtnHandler runned');

    const post_xhr = new XMLHttpRequest();

    post_xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts', true);
    post_xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8');

    post_xhr.onprogress = function() {
        console.log('on progress');
    };

    post_xhr.onload = function() {
        if (this.status === 201) { // 201 Created is expected for POST
            console.log(this.responseText);      
        } else {
            console.log('some error occurred.');
        }
    };

    const params = JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1
    });

    post_xhr.send(params);
}

populatedata.addEventListener('click', populatedataHandler)
function populatedataHandler() {
    console.log('clicked populatedataHandler')

    const xhr  = new XMLHttpRequest;
    xhr.open('get', 'https://jsonplaceholder.typicode.com/posts', true)

    xhr.onload = function() {
        if(this.status === 200) {
            let datas = JSON.parse(this.responseText)
            let tableBody = document.querySelector('.table tbody')

            let bodytd = '';
            datas.forEach(data => {
                const row = document.createElement("tr");
                row.innerHTML = `<td>${data.userId}</td>
                            <td>${data.id}</td>
                            <td>${data.title}</td>
                            <td>${data.body}</td>
                        `
                tableBody.appendChild(row);
            });
        }
        else {
            console.log('some error occured.')
        }
    }

    xhr.send();


}