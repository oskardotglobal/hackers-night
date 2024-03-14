(function () {
    function passwordCheck() {
        if (document.getElementById("idBenutzername").value === "Holger Henzler-Hübner" && document.getElementById("idPasswort").value === "902995031") {
            alert("Eingabe korrekt.");
            n("Holger Henzler-Hübner", "902995031");
        } else {
            alert("Passwort oder Benutzername falsch!");
        }
    }

    document.getElementById("idLogin").addEventListener("click", passwordCheck);
})();