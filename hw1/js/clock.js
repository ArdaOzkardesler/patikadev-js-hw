let userName=prompt("İsminizi giriniz: ")

if (userName.length==0) {
    alert("Lütfen geçerli bir isim giriniz!")
    window.location.reload();
}
else{
    document.querySelector("#myName").innerHTML=userName
    showTime();
}


function showTime(){

    let today = new Date();
    let dayOfTheWeek=today.getDay();
    let day;

    if (dayOfTheWeek==1)
        day = "Pazartesi"
    else if(dayOfTheWeek==2)
        day = "Salı"
    else if(dayOfTheWeek==3)
        day = "Çarşamba"
    else if(dayOfTheWeek==4)
        day = "Perşembe"
    else if(dayOfTheWeek==5)
        day = "Cuma"
    else if(dayOfTheWeek==6)
        day = "Cumartesi"
    else if(dayOfTheWeek==7)
        day = "Pazar"
    
    let hours=today.getHours();
    let minutes=today.getMinutes();
    let seconds=today.getSeconds();

    hours= hours<10 ? "0"+hours : hours;
    minutes= minutes<10 ? "0"+minutes : minutes;
    seconds= seconds<10 ? "0"+seconds : seconds;
    document.querySelector("#myClock").innerHTML=`${hours}:${minutes}:${seconds} ${day}`
    setTimeout(showTime, 1000);
}
