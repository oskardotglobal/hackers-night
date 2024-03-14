(function () {
    function login() {

        const sha256 = (text) => new jsSHA("SHA-256", "TEXT", {encoding: "UTF8"}).update(text).getHash("HEX");

        let endpoint = "/api/login";
        const username = sha256(document.getElementById('idBenutzername').value)
        const password = sha256(document.getElementById('idPasswort').value)

        $.ajax({
            url: endpoint,
            type: "POST",
            data: JSON.stringify({
                username: username,
                password: password
            }),
            contentType: "application/json",
            dataType: "text",
            success: function (data) {
                $("body").html(data);
            },
            error: function () {
                alert("Eingabe falsch!")
            }
        });
    }

    document.getElementById("idLogin").addEventListener("click", login);
})();
