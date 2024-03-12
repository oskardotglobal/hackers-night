(function () {
    function passwordCheck() {
        if (document.getElementById("idBenutzername").value === "Alan M. Turing" && document.getElementById("idPasswort").value === "XrTvH9q") {
            alert("Eingabe korrekt.");
            n("Alan M. Turing", "XrTvH9q");
        }
    }

    document.getElementById("idLogin").addEventListener("click", passwordCheck);
})();