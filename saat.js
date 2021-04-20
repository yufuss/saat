setInterval(() => {
let a = new Date()
let saat = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds()
document.getElementById("saat").innerHTML = saat
}, 500)