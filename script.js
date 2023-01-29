let userFormDOM = document.querySelector('#userForm')
userFormDOM.addEventListener('submit', formHandler)

const alertFunction = (title, message, className = "warning") => `
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
  <strong>${title}</strong> ${message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`

const alertDOM = document.querySelector('#alert')
function formHandler(event) {
    event.preventDefault()
    const USER_NAME = document.querySelector('#username')
    const SCORE = document.querySelector('#score')
    const CLASSINFO = document.querySelector('#classInfo')
    if (USER_NAME.value && SCORE.value <= 100 && 0 <= SCORE.value) {
        alertDOM.innerHTML = alertFunction(
            "Baslik Bilgisi",
            "Butun veriler girildi",
            "success")
        addItem(USER_NAME.value, SCORE.value, CLASSINFO.value)
        USER_NAME.value = ""
        SCORE.value = ""
        CLASSINFO.value = ""
    }
    else if (USER_NAME.value && SCORE.value > 100 || SCORE.value < 0) {
        alertDOM.innerHTML = alertFunction(
            "Baslik Bilgisi",
            "Not bilgisi 0 ile 100 arasinda olmali",
            "warning")
        USER_NAME.value = ""
        SCORE.value = ""
    }
    else {
        alertDOM.innerHTML = alertFunction(
            "Baslik Bilgisi",
            "Eksik Bilgi Girdiniz",
            "danger"

        )
    }
}

let userListDOM = document.querySelector('#userList')

const addItem = (userName, score, classInfo) => {
    let LiDOM = document.createElement('li')
    LiDOM.innerHTML = `
    <span class="badge bg-dark rounded-pill">${userName}</span> <span class="badge bg-success rounded-pill"> ${classInfo}</span>
    <span class="badge bg-primary rounded-pill">${score}</span>`
    LiDOM.classList.add(
        'list-group-item', 'd-flex', 'justify-content-between', 'align-items-center'
    )
    userListDOM.append(LiDOM)
}
