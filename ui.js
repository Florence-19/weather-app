let cur = new Date();


function formatdate(date) {
    let dayFormat = ["Sunday", "Monday",
     "Tuesday", 
     "Wednesday",
      "Thursday",
      "Friday",
       "Saturday"];
    
    let monthsformat = ["January",
     "Febuary",
      "March",
       "April",
        "May",
         "June",
         "July",
          "August",
         "September",
          "October",
          "November",
          "December"];
    let months = monthsformat[date.getMonth()];
    let days = dayFormat[date.getDay()];
let rare = date.getDate();
    let das = date.getFullYear();


    return `<strong>${days}, ${rare} ${months} ${das}</strong>`;
    
}

let mou = new Date;
function current(kin) {
let hours = kin.getHours();

    let minutes = kin.getMinutes();
    if (minutes <= 10){
       minutes = `0${minutes}`;
    }
    
    return `${hours}:${minutes}`;
} 

function search(event){
    event.preventDefault();
    
}

let dat = document.querySelector("div.date");
dat.innerHTML = formatdate(cur);


let time = document.querySelector("#time");
time.innerHTML = current(mou);


let apikey ="52972406f32773a9b6df9fc438d70ab1";



let form = document.querySelector("form");
form.addEventListener("submit", type);

