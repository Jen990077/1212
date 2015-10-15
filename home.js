var Home = {}

Home.ButtonClick = function () {
    $.ajax
     ({
         url: "Home/GetPlayerInformation",
         data: { PlayerNumber: $(".output").val() },
         success: function (result) {append(result); }
     });
}

$(document).ready(function () {
    $(".button").click(Home.ButtonClick);

});

