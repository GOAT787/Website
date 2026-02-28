let currentTime = new Date();

const localTime = currentTime.getTime();
const localOffset = currentTime.getTimezoneOffset() * 60000;
const utc = localTime + localOffset;
const offset = -6
const chicago = utc + (3600000 * offset);

const chicagoTime = new Date(chicago);
// console.log(chicagoTime);


document.getElementById("time").innerHTML = chicagoTime;

chicagoTime.toUTCString();
let hours = chicagoTime.getUTCHours();
let hours_time = hours + 10;
let minutes = chicagoTime.getUTCMinutes();
let seconds = chicagoTime.getUTCSeconds();


// console.log(hours + ":" + minutes + ":" + seconds);

let time_chicago = hours_time + ":" + minutes + ":" + seconds;

document.getElementById("time").innerHTML = time_chicago;