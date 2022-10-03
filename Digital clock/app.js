function dispTime(){
    var date = new Date();
    var h = date.getHours(); 
    var m = date.getMinutes();
    var s = date.getSeconds();
    var day = date.getDay();
    var dt = date.getDate();
    var mon = date.getMonth();
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s;
    document.getElementById("clock").innerText = time;
    document.getElementById("clock").textContent = time;
    if(h<12){
        var greeting="Good Morning";
    }
    if(h>=12 && h<=16){
        var greeting="Good Afternoon";
    }
    if(h>16 && h<=24){
        var greeting="Good Evening";
    }
    switch(day) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday"
            break;
        case 3:
            day = "Wednesday"
            break;
        case 4:
            day = "Thursday"
            break;
        case 5:
            day = "Friday"
            break;
        case 6:
            day = "Saturday"
            break;
    }
    switch (mon) {
        case 0:
                mon="January";
                break;
        case 1:
                mon = "February";
                break;
        case 2:
                mon = "March";
                break;
        case 3:
                mon = "April";
                break;
        case 4:
                mon = "May";
                break;
        case 5:
                mon = "June";
                break;
        case 6:
                mon = "July";
                break;
        case 7:
                mon = "August";
                break;
        case 8:
                mon = "September";
                break;
        case 9:
                mon = "October";
                break;
        case 10:
                mon = "November";
                break;
        case 11:
                mon = "december";
                break;
    }
    document.getElementById("greeting").innerHTML=greeting;
    document.getElementById("day").innerHTML=day+",";
    document.getElementById("dt").innerHTML=dt+" "+mon;
    setTimeout(dispTime, 150);
    
}

dispTime();
greeting();