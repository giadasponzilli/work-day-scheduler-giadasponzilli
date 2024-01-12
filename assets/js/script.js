/* 

User Story
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively

Acceptance Criteria
The app should:

Display the current day at the top of the calender when a user opens the planner.

Present time blocks for standard business hours when the user scrolls down.

Color-code each time block based on past, present, and future when the time block is viewed.

Allow a user to enter an event when they click a time block

Save the event in local storage when the save button is clicked in that time block.

Persist events between refreshes of a page */




// Add today's date with dayjs library (day of the week, day, month)

const currentDay = $(`#currentDay`)

const todayDate= dayjs().format(`dddd, D MMMM`)

currentDay.append(todayDate)


// Allow a user to enter an event when they click a time block
// Save the event in local storage when the save button is clicked in that time block. (localStorage.setItem())

$(`.saveBtn`).on(`click`, function(){
    const textareaUserInput = $(this).siblings('textarea').val()
    const userInputHour = $(this).parent().attr("id")
    localStorage.setItem(userInputHour,textareaUserInput);
})


// Persist events between refreshes of a page (localStorage.getItem())
for (let i = 9; i <= 17; i++) {
    
    $("#" + i +" textarea").val(localStorage.getItem(i))
    
}


// Color-code each time block based on past, present, and future when the time block is viewed.

const currentHour = dayjs().hour();

$('.time-block').each(function() {
    
    const hourStoredInTimeBlocks = parseInt($(this).attr(`id`));
    
    if (hourStoredInTimeBlocks < currentHour) {
        $(this).addClass(`past`)
    }  else if (hourStoredInTimeBlocks === currentHour) {
        $(this).addClass(`present`)
    }  else if (hourStoredInTimeBlocks > currentHour) {
        $(this).addClass(`future`)
    }

    })