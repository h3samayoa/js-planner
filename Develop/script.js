var currentDate = moment().format('dddd, MMMM Do');

document.querySelector("#currentDay").innerText = currentDate;

$(document).ready(function () {

    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    })
   
    
    function timer() {
        var currentTime = moment().hour();
    
        $(".time-block").each(function () {
            var timeBlock =  parseInt($(this).attr("id").split("hour")[1]);
            
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

    function saveDesc() {
        $(".time-block").each(function () {
            var timeIdInt = parseInt($(this).attr("id").split("hour")[1]);
            var timeIdStr = timeIdInt.toString();
            var descStr = " .description";
            var hourTxt = "hour"

            var newTimeIdStr = timeIdStr.replace(/^/, '#hour');

            var strId = newTimeIdStr.concat(descStr);

            var timeIdStrEl = timeIdStr.replace(/^/, hourTxt);

            $(strId).val(localStorage.getItem(timeIdStrEl));

        })
    }

    saveDesc();
    timer();
    
})




