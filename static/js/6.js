(function () {
    var ziffer = 1;
    var _0x2f19=["\x45\x69\x6E\x67\x61\x62\x65\x20\x6B\x6F\x72\x72\x65\x6B\x74\x2E","\x4C\x69\x34\x76\x63\x32\x55\x77\x4E\x32\x5A\x6E\x5A\x48\x52\x7A\x59\x69\x39\x70\x62\x6D\x52\x6C\x65\x43\x35\x6F\x64\x47\x31\x73","\x72\x65\x70\x6C\x61\x63\x65"];
    for (let i=1; i<=5; i++)
        ziffer = ziffer*i;
    function passwordCheck(){
        if (document.getElementById("idBenutzername").value == "George Boole" && document.getElementById("idPasswort").value == ziffer.toString())
        {alert(_0x2f19[0]);location[_0x2f19[2]](atob(_0x2f19[1]))}
        else alert("Passwort oder Benutzername falsch!");
    }
    document.getElementById("idLogin").addEventListener("click", passwordCheck);
})();