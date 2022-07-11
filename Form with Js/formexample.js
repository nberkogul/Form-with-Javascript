let userFormDOM = document.querySelector('#userForm')
userFormDOM.addEventListener('submit', formHandler)


const alertFunction = (title, message, className = "danger") => `
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
  <strong>${title}</strong> ${message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`

const alertDOM = document.querySelector('#alert')


function formHandler(event) {
    event.preventDefault()
    const USER_NAME = document.querySelector("#username")
    const SCORE     = document.querySelector("#score")

    if (USER_NAME.value && SCORE.value) {
        addItem(USER_NAME.value, SCORE.value) // we reset the form after sending data
        USER_NAME.value = ""
        SCORE.value = ""
    }
    else {
        alertDOM.innerHTML = alertFunction("Başlık Bilgisi","Eksik Bilgi Girdiniz!","danger")
    }
}

let userListDOM = document.querySelector('#userList')

const addItem = (username, score) => {
    let liDOM = document.createElement('li')
    
    liDOM.innerHTML = `${username} <span class="badge bg-warning rounded-pill"> ${score} </span>`

    liDOM.classList.add(
        'list-group-item','d-flex','justify-content-between','align-items-center')

    userListDOM.append(liDOM)
}