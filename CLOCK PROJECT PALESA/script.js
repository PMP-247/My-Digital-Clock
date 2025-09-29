// this code is in a separate file 
let hrs = document.getElementById("hrs")
let min = document.getElementById("min")
let sec = document.getElementById("sec")

setInterval(() => {
    let currentTime = new Date(),
//when i tried to declare my hours the entire clock became non functional despite trouble shooting this problem
hrsinnerHTML = currentTime.getHours();
min.innerHTML = currentTime.getMinutes(); 
sec.innerHTML = currentTime.getSeconds();

}, 1000);


