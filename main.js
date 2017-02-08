$(document).ready(function() {
	updateClock();
	setInterval(updateClock, 1000);
});

function updateClock() {
	var dateObj = new Date();
  var hour = dateObj.getHours();
  var minutes = dateObj.getMinutes();

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
