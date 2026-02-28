let currentTime = new Date();

const localTime = currentTime.getTime();
const localOffset = currentTime.getTimezoneOffset() * 60000;
const utc = localTime + localOffset;
const offset = +11
const chicago = utc + (3600000 * offset);

const sydenyTime = new Date(chicago);
// test: console.log(sydenyTime);


document.getElementById("time").innerHTML = sydenyTime;

sydenyTime.toUTCString();
let hours = sydenyTime.getUTCHours();
let hours_time = hours + 10;
let minutes = sydenyTime.getUTCMinutes();
let seconds = sydenyTime.getUTCSeconds();


// test: console.log(hours + ":" + minutes + ":" + seconds);

let time_sydeny = hours_time + ":" + minutes + ":" + seconds;

document.getElementById("time").innerHTML = time_sydeny;