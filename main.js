function muvelet(muvelet){
    elsoSzam = parseFloat(document.getElementById("elsoSzam").value);
    masodikSzam = parseFloat(document.getElementById("masodikSzam").value);
    if (muvelet == "osszead") {
        document.getElementById("eredmeny").innerHTML = elsoSzam + masodikSzam;
    } else if (muvelet == "kivon") {
        document.getElementById("eredmeny").innerHTML = elsoSzam - masodikSzam;
    } else if (muvelet == "szoroz") {
        document.getElementById("eredmeny").innerHTML = elsoSzam * masodikSzam;
    } else if (muvelet == "oszt") {
        if (masodikSzam == 0){
            document.getElementById("eredmeny").innerHTML = "Nulla nem állhat a nevező helyén!";
        } else if (elsoSzam == 0){
            document.getElementById("eredmeny").innerHTML = 0
        } else {
            document.getElementById("eredmeny").innerHTML = elsoSzam = masodikSzam;
        }
    }
}