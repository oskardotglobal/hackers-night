(function () {
    var a = "Rechenmaschine", b = "Analytical", c = "Engine";
    var wort = a.substring(c.length, b.length);
    var _0xce8f = ["\x45\x69\x6E\x67\x61\x62\x65\x20\x6B\x6F\x72\x72\x65\x6B\x74\x2E", "\x4C\x69\x34\x76\x63\x32\x55\x77\x4F\x48\x64\x79\x5A\x47\x64\x69\x63\x79\x39\x70\x62\x6D\x52\x6C\x65\x43\x35\x6F\x64\x47\x31\x73", "\x72\x65\x70\x6C\x61\x63\x65"];

    function passwordCheck() {
        if (document.getElementById("idBenutzername").value == "Charles Babbage" && document.getElementById("idPasswort").value == wort) {
            alert(_0xce8f[0]);
            location[_0xce8f[2]](transform(_0xce8f[1]))
        } else alert("Passwort oder Benutzername falsch!");
    }

    document.getElementById("idLogin").addEventListener("click", passwordCheck);
})();