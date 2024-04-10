    // decompte.js
    var countDownDate = new Date("May 4, 2024 00:00:00").getTime();

    // Mettre à jour le décompte toutes les secondes
    var x = setInterval(function() {

        // Obtenir la date et l'heure actuelles
        var now = new Date().getTime();

        // Trouver la distance entre maintenant et la date de décompte
        var distance = countDownDate - now;

        // Calculs de temps pour les jours, heures, minutes et secondes
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Afficher le résultat dans l'élément avec l'id="compteur"
        document.querySelector(".compteur").innerHTML = days + "j " + hours + "h "
        + minutes + "m " + seconds + "s ";

        // Si le décompte est terminé, écrire un texte 
        if (distance < 0) {
            clearInterval(x);
            document.querySelector(".compteur").innerHTML = "ÉVÉNEMENT TERMINÉ";
        }
    }, 1000);