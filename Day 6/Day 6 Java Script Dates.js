//https://www.hackerrank.com/challenges/js10-date/problem

function getDayName(dateString) {
    let dayName;
    let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let date = new Date(dateString);
    dayName = day[date.getDay()];
    return dayName;
}