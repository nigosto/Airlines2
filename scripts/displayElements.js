function hideAllViews() {
    $('#viewRegister').hide()
    $('#viewLogin').hide()
    $('#viewCatalog').hide()
    $('#viewAddFlight').hide()
    $('#viewFlightDetails').hide()
    $('#viewEditFlight').hide()
    $('#viewMyFlights').hide()
}

function showHideNavbarElements() {
    if(sessionStorage.getItem('authToken') === null){
        $('#linkFlights').hide()
        $('#linkHome').show()
        $('#linkLogin').show()
        $('#linkRegister').show()
        $('.log-out').hide()
        $('.right-container > span').text('')
    }else{
        $('#linkFlights').show()
        $('#linkHome').hide()
        $('#linkLogin').hide()
        $('#linkRegister').hide()
        $('.log-out').show()
        $('.right-container > span')[0].text(`Welcome ${sessionStorage.getItem('username')}`)
    }
}
async function showCatalog() {
    hideAllViews()
    $("#viewCatalog > div > a").remove()
    let flights = await kinveyController.getAllPublicFlights()
    renderCatalogView(flights)
    $('#viewCatalog').show()
}