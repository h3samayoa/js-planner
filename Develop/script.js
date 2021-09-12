var currentDate = moment().format('dddd, MMMM Do');
var saveBtn = document.getElementsByClassName("saveBtn");

document.querySelector("#currentDay").innerText = currentDate;

$(document).ready(function () {

    $(".saveBtn").on('click', function() {
    
        var descriptionText = $('.description').val();
        var descriptionTime = $(this).parent().attr("id")
    
        localStorage.setItem(descriptionText, descriptionTime);
        console.log(descriptionText, descriptionTime);
    })
    
    function timer() {
        var currentTime = moment().hour();
    
        $(".time-block").each(function () {
            var timeBlock = parseInt($(this).attr("id"));
            
            if (timeBlock < currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            } else if (timeBlock === currentTime) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            } else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
    
        })
    }

    timer();
    
})




