let currentTime = new Date();

const localTime = currentTime.getTime();
const localOffset = currentTime.getTimezoneOffset() * 60000;
const utc = localTime + localOffset;
const offset = +9
const chicago = utc + (3600000 * offset);

const tokyoTime = new Date(chicago);
// test: console.log(tokyoTime);


tokyoTime.toUTCString();
let hours = tokyoTime.getUTCHours();
let hours_time = hours + 10;
let minutes = tokyoTime.getUTCMinutes();
let seconds = tokyoTime.getUTCSeconds();


// test: console.log(hours + ":" + minutes + ":" + seconds);

let time_tokyo = hours_time + ":" + minutes + ":" + seconds;

document.getElementById("time").innerHTML = time_tokyo;

