function n(a, b) {
    $.ajax({url: `/api/${btoa(a + b)}`}).done((data) => $("body").html(data));
    localStorage.setItem("last", btoa(a + b));
}