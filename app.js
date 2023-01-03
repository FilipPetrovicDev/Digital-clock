// Kreiranje DATUMSKOG OBJEKTA 

// kreiranje funkcije
function showTime() {
    // definisanje datumnoskog OBJEKTA
    // kreiranje KONSTRUKTORA Date
    var date = new Date();

    /* definisanje promenljivih koje uzimaju
    vrednosti OBJEKTA Date*/
    // uzimanje vrednosti za sate pomocu metode .getHours
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();

    // provera u konzoli
    // console.log(h, m ,s)

    // definisanje promenljive za vrednosti AM i PM
    // inicijalno podesvanaje vrednosti promenljive 'AM'
    var session = 'AM'

    // kreiranje logike za prikaz vrednosti 'PM'
    if (h == 0) {
        h = 12;
    }

    if (h > 12) {
        //  da se vrednost prikazuje u brojevima od 0 do 12
        h = h - 12
        session = 'PM'
    }

    // da se vrednost prikazuje sa dve cifre
    // ternarni opertor ?
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    // definisanje konacne promenljive
    var time = h + ":" + m + ":" + s + " " + session
    
    // da se pokupe vrednosti na osnovu DOM metode
    // .getElementById
    // da se prikaze neki teks u okviru cvora
    // DOM metoda innerText i prosledjuje se promenljiva
    // koja ce biti u njemu
    document.getElementById('MyClockDisplay').innerText = time

    // da se osvezava vreme
    // pomocu funkcije setTimeOut
    // u zagradi se nalaze dva argumenta
    // 1. je funcija, 2. je interva(u milisekundama)
    setTimeout(showTime, 1000)
}

// pozivanje funkcije showTime() za proveru u konzoli
showTime()