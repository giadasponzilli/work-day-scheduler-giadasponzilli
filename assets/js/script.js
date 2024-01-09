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


// Create time blocks with hours in dayjs

function createTimeblocks() {
    
    const container = $(`.container`)

    for (let i = 9; i <= 17; i++) {
        const timeBlockHour = dayjs().hour(i).format(`H`)
        const timeBlock = $(`<div class= "time-block row" data-i= "${i}">
            <div class = "col-2 hour">${timeBlockHour}</div>
            <textarea class = "col-8 description"></textarea>
            <button class = "col-2 saveBtn"><i class="fa-solid fa-floppy-disk"></i></i></button>
        </div>`)
        

        container.append(timeBlock)
    }
    
    
}

createTimeblocks()



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