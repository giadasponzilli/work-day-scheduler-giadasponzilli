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


// // Allow a user to enter an event when they click a time block

// $(`.saveBtn`).on(`click`, saveEvent)


// // Save the event in local storage when the save button is clicked in that time block.

// function saveEvent() {
//     const textareaE = textarea.val()
//     localStorage.setItem(,);
// }



// Color-code each time block based on past, present, and future when the time block is viewed.

function colorTime() {
    const textAreaTimeColor= $(`.description`)
    const currentHour = dayjs().hour();

    const hourStoredInTimeBlocks = $(this).data(`i`);

    $.each(textAreaTimeColor, function() {
        if (hourStoredInTimeBlocks < currentHour) {
        textAreaTimeColor.addClass(`past`)
        }  else if (hourStoredInTimeBlocks === currentHour) {
        textAreaTimeColor.addClass(`present`)
        }  else if (hourStoredInTimeBlocks > currentHour) {
        textAreaTimeColor.addClass(`future`)
        }

        })
        
    
}

colorTime()