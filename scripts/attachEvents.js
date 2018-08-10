function attachFormEvents() {
    $("#formRegister").on('submit', function () {
        let username = $('#formLogin input[name="username"]').val();
        let password = $('#formLogin input[name="pass"]').val()
        let checkPass = $('#formLogin input[name="checkPass"]').val()
        if (username.length > 4 && password === checkPass && password) {
            kinveyController.register(username, password)
        } else if (username.length < 5) {
            showError("Username must be at least 5 characters long!")
        } else if (password !== checkPass) {
            showError("Password does not match!")
        } else {
            showError("Username and password can not be empty!")
        }
    })
}

function attachButtonEvents() {
    $('#linkRegister').on('click', function () {
        hideAllViews()
        $('#viewRegister').show()
    })
}