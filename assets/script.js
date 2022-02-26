// display the current day and date
let todayDate = moment().format(`dddd, MMM Do YYYY`);
let timeNowFormat = moment().format(`h:m A`);
$("#currentDay").html(todayDate);

$("#currentTime").html("Last Loaded At " +timeNowFormat);

$(document).ready(function () {
    // setting up the on click for the save buttons
    $(".saveBtn").on("click", function () {
    // setting up what values are actually being saved with the button
        let text = $(this).siblings(".description").val();
        let time = $(this).parent().attr("id");

    // once pressed save the description in the time blow to local storage
        localStorage.setItem(time, text);
    })

    // checks current time which will be needed later
    function timeTracker() {
        let timeNow = moment().hour();
        // this section of code will cycle through the time blocks and then based on the hour of the block and the current time dictate which blocks are future present and past
        $(".time-block").each(function () {
            let blockTime = parseInt($(this).attr("id").split("hour")[1]);

            // if block time has passed the current time
            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");

            }
            else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        }
    )}

    // this will get the item from local storage if there is anything in the time blocks

    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    timeTracker();





})