const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");


setInterval(() => {

    let min = parseInt(minutes.innerText)
    if(min==59){
        hours.innerText= parseInt(hours.innerText)+1
        minutes.innerText= "00"
        return
    }
    if (min<9) {
        minutes.innerText= "0"+(min+1)
    }else{
        minutes.innerText= min+1
    }

},500)
