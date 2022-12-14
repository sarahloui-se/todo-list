// DATE
const todayDate = document.querySelector('#currentDate');

// Prints out the current date and time
function printDate() {
    const today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth();
    let day = today.getDate();

    let seconds = today.getSeconds();
    let minutes = today.getMinutes();
    let hours = today.getHours();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    const time = hours + ':' + minutes + ':' + seconds + ' ' + ampm;

    const monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    const dayList = ["", "1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th", "12th", "13rd", "14th", "15th", "16th", "17th", "18th", "19th", "20th", "21st", "22nd", "23rd", "24th", "25th", "26th", "27th", "28th", "29th", "30th", "31st"]

    todayDate.innerHTML = dayList[day] + " " + monthList[month] + ", " + year + " ✩ " + time;
}
setInterval(printDate, 1000);