window.Massage = {
    API_URL: "http://localhost:8083",

    postPatient: function () {

        $.ajax( {
            url: Massage.API_URL +"/patients",
                method: "POST"
        })
    }
}