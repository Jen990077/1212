
var Home = {}
$(document).ready(function () {
    $(".button").click(Home.ButtonClick);

});





Home.ButtonClick = function () {
    $.ajax
    ({
        url: "Home/GetPlayerInformation",
        type: "POST",
        dataType: "html",
        data: content,
        success: function (data) { $("#output").append(data); }
    });
}
