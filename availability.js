async function loadCalendar() {

const airbnbICS = "PASTE_YOUR_ICS_LINK_HERE";

const events = [];

try {

const response = await fetch(
`https://corsproxy.io/?${encodeURIComponent(airbnbICS)}`
);

const text = await response.text();

const lines = text.split('\n');

let currentEvent = {};

for (const line of lines) {

if (line.startsWith('DTSTART')) {
currentEvent.start = line.split(':')[1].trim();
}

if (line.startsWith('DTEND')) {
currentEvent.end = line.split(':')[1].trim();
}

if (line.startsWith('SUMMARY')) {
currentEvent.title = "Booked";
}

if (line === 'END:VEVENT') {

if (currentEvent.start && currentEvent.end) {

events.push({
title: currentEvent.title,
start: formatDate(currentEvent.start),
end: formatDate(currentEvent.end),
display: 'background',
backgroundColor: '#ff385c',
borderColor: '#ff385c'
});

}

currentEvent = {};

}

}

} catch (error) {

console.error("Calendar failed to load:", error);

}

const calendarEl = document.getElementById('calendar-container');

const calendar = new FullCalendar.Calendar(calendarEl, {

initialView: 'dayGridMonth',

height: 750,

events: events,

eventDisplay: 'block',

fixedWeekCount: false,

showNonCurrentDates: false,

headerToolbar: {
left: 'prev,next',
center: 'title',
right: ''
},

dayMaxEvents: true

});

calendar.render();

}

function formatDate(dateString) {

const year = dateString.substring(0,4);
const month = dateString.substring(4,6);
const day = dateString.substring(6,8);

return `${year}-${month}-${day}`;

}

loadCalendar();
