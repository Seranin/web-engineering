var max = 6;
$(document).ready(function(){
    var i = 0; /* I came up with this code and I helped my classmates with it. */
    $("#previous-button").on("click", function(){
        $(`#img${i}`).removeClass("active");
        $(`#des${i}`).removeClass("active");
        if ( i <= 0)
        {
            i = max;
        } else
        {
            i = i - 1;
        }
        $(`#img${i}`).addClass("active");
        $(`#des${i}`).addClass("active");
    });
    $("#next-button").on("click", function(){
        $(`#img${i}`).removeClass("active");
        $(`#des${i}`).removeClass("active");
        if ( i >= max)
        {
            i = 0;
        } else
        {
            i = i + 1;
        }
        $(`#img${i}`).addClass("active");
        $(`#des${i}`).addClass("active");
    });
    $("#block").on("click", function(){
        if ($("#imgblock").hasClass("show")){
            $("#imgblock").removeClass("show");
        } else
        {
            $("#imgblock").addClass("show")
        }
    });
});


