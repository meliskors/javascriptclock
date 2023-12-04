// girişte isim isteme

let userName = prompt("Lütfen adınızı giriniz")
let myName = document.querySelector("#myName")

myName.innerHTML = userName;


// saat ve gün yazdırma fonksiyonu

function showTime() {
    // Zaman bilgisi alma
    let date = new Date()

    // Saati alma
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()

    // Günü alma
    let days = ['Pazarte', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar']
    let day = date.getDay()

    // Saat, dakika ve saniyeyi düzgün formata getirme
    hours = formatTime(hours)
    minutes = formatTime(minutes)
    seconds = formatTime(seconds)

    // Sonucu HTML içinde gösterme
    let myClock = document.getElementById("myClock")
    myClock.innerHTML = hours + ":" + minutes + ":" + seconds + " " + days[day]
}

function formatTime(time) {
    return time < 10 ? "0" + time : time
}

setInterval(showTime, 1000)
