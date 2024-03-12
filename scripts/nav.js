function n(a, b) {
    $.ajax({url: `/api/${btoa(a + b)}`}).done((data) => $("html").html(data));
}