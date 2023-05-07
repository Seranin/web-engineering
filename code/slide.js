var max = 6
$(document).ready(function(){
    var i = 0;
    $('#previous-button').on('click', function(){
        if ( i <= 0)
        {
            i = max;
        } else
        {
            i = i - 1;
        }
        console.log(i);
    });
    $('#next-button').on('click', function(){
        if ( i >= max)
        {
            i = 0;
        } else
        {
            i = i + 1;
        }
        console.log(i)
    });
});


