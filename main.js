$(document).ready(function() {
    updateClock();
    setInterval(updateClock, 1000);
});

function updateClock() {
    var dateObj = new Date();
    var hour = dateObj.getHours();
    var minutes = dateObj.getMinutes();

    /*  12-hour
		$('.time').text(formatClock(convertTwelveHour(hour)) + '' + formatClock(minutes)); */

    /* 24-hour */
    $('.time').text(formatClock(hour) + '' + formatClock(minutes));
}

function formatClock(time) {
    if (time < 10) {
        dateFormatted = '0' + time;
        return dateFormatted;
    } else {
        return time;
    }
}

function convertTwelveHour(time) {
    if (time > 12) {
        time = time - 12;
        return time;
    } else if (time == 0) {
        time = 12;
        return time;
    } else {
        return time;
    }
}
