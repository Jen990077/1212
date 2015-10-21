
$(document).ready(function (){
    $(".player-number-button").click(function(){
        $.ajax
         ({
         
             url: "GetPlayerInformation",
             data: { PlayerNumber: $(".player-number-textbox").val() },


             success: function (response)
             {
                 $(".output") .innerHTML = response;
             }, 

         })

    }); 

})

