const BASE_URL = 'https://baas.kinvey.com/';
const APP_KEY = 'kid_SkgGBk5Sm';
const APP_SECRET = 'c424fede246c4ef587700c607556d02e';
const AUTH_HEADERS = {'Authorization': "Basic " + btoa(APP_KEY + ':' + APP_SECRET)};
const TOKEN_HEADERS = {'Authorization': "Kinvey " + sessionStorage.getItem('authToken')}

let kinveyController = (function () {

    function register(username,password) {
        $.ajax({
            method: 'POST',
            url: BASE_URL + 'user/' + APP_KEY + '/',
            headers: AUTH_HEADERS,
            data: {username, password}
        }).then(function (res) {
            saveAuthInSession(res)
            showInfo('User registration successful.')
            showCatalog()
            $('#formRegister').trigger('reset')
        }).catch(handleError)
    }

        function getAllPublicFlights() {
            $.ajax({
                method: 'GET',
                url: BASE_URL + 'appdata/' + APP_KEY + '/flights?query={"isPublic":"true"}',
                headers: TOKEN_HEADERS
            }).then(function (res) {
                console.log(res);
                renderCatalogView(res)
            }).catch(handleError)
        }

        function saveAuthInSession(userInfo) {
            sessionStorage.setItem('authToken', userInfo._kmd.authtoken)
            sessionStorage.setItem('id', userInfo._id)
            sessionStorage.setItem('username', userInfo.username)
        }

        function handleError(err) {
            showError(err.message);
        }


    return {register, getAllPublicFlights}
})()