const nextBusTime = document.getElementById("nextBusTime");
const followingBusTime = document.getElementById("followingBusTime");
const satelliteIcon = document.getElementById("satelliteIcon");
const now = new Date();
const weekday = now.getDay(); // 0 (Dimanche) à 6 (Samedi)
const hour = now.getHours();
const minute = now.getMinutes();
const date = formatDate(now); // Convertir la date en chaîne "YYYY-MM-DD"
const today = new Date();

const vacationDates = [
    { start: new Date("2023-07-01"), end: new Date("2023-09-03") }, // Période de vacances en juillet-septembre 2023
    { start: new Date("2023-10-21"), end: new Date("2023-11-05") }, // Période de vacances en octobre-novembre 2023
    { start: new Date("2023-12-23"), end: new Date("2024-01-07") }, // Période de vacances en décembre-janvier 2024
    { start: new Date("2024-02-17"), end: new Date("2024-03-03") }, // Période de vacances en février-mars 2024
    { start: new Date("2024-04-13"), end: new Date("2024-04-28") }, // Période de vacances en avril 2024
    { start: new Date("2024-07-06"), end: new Date("2024-09-01") }  // Période de vacances en juillet-septembre 2024
    // Ajouter d'autres périodes de vacances si nécessaire
];


function isDateInVacationRanges(date, ranges) {
    for (const range of ranges) {
        const startDate = range.start;
        const endDate = range.end;
        if (date >= startDate && date <= endDate) {
            return true;
        }
    }
    return false;
}

const isVacation = isDateInVacationRanges(today, vacationDates);

function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
}
const holidayDates = [
    "2023-11-01",
    "2023-11-11",
    "2023-12-25",
    "2024-01-01",
    "2024-04-01",
    "2024-05-08",
    "2024-05-09",
    "2024-05-20",
    "2024-07-14",
    "2024-08-15"
];
// Exemple de dates de jours fériés
const premierMai = new Date(today.getFullYear(), 4, 1);
const estFerie = holidayDates.includes(date);
const estPremierMai = today.getTime() === premierMai.getTime();

function calculateNextBusTime(weekday, hour, minute) {
    if (estPremierMai) {
        return -1; // Créneau fermé
    }
    if (estFerie) {
        weekday = 0; // Dimanche
    }
    if (isVacation === true) {
        if (weekday === 6) { // Samedi
            if ((hour === 1 && minute >= 0) || (hour >= 2 && hour < 4)) {
                return -1; // Créneau fermé
            }
            // Fréquences pour Samedi
            if (hour >= 4 && hour < 7) {
                frequency = 8; // Creuse
            } else if (hour >= 7 && hour < 9) {
                frequency = 7; // Pointe
            } else if (hour >= 9 && hour < 16) {
                frequency = 2; // Creuse
            } else if (hour >= 16 && hour < 20) {
                frequency = 7; // Pointe
            } else {
                frequency = 11; // Soir
            }
        } else if (weekday === 0) { // Dimanche
            if ((hour === 1 && minute >= 0) || (hour >= 2 && hour < 4)) {
                return -1; // Créneau fermé
            }
            // Fréquences pour Dimanche
            if (hour >= 4 && hour < 7) {
                frequency = 16; // Creuse
            } else if (hour >= 7 && hour < 9) {
                frequency = 11; // Pointe
            } else {
                frequency = 16; // Creuse
            }
        } else { // Semaine (Lundi - Vendredi)
            if ((hour === 0 && minute >= 0) || (hour >= 1 && hour < 4)) {
                return -1; // Créneau fermé
            }
            // Fréquences pour Semaine
            if (hour >= 4 && hour < 7) {
                frequency = 7; // Creuse
            } else if (hour >= 7 && hour < 9) {
                frequency = 6; // Pointe
            } else if (hour >= 9 && hour < 16) {
                frequency = 7; // Creuse
            } else if (hour >= 16 && hour < 20) {
                frequency = 2; // Pointe
            } else {
                frequency = 2; // Soir
            }
        }
    } else {
        if (weekday === 6) { // Samedi
            if ((hour === 1 && minute >= 0) || (hour >= 2 && hour < 4)) {
                return -1; // Créneau fermé
            }
            // Fréquences pour Samedi
            if (hour >= 4 && hour < 7) {
                frequency = 8; // Creuse
            } else if (hour >= 7 && hour < 9) {
                frequency = 7; // Pointe
            } else if (hour >= 9 && hour < 16) {
                frequency = 13; // Creuse
            } else if (hour >= 16 && hour < 20) {
                frequency = 7; // Pointe
            } else {
                frequency = 11; // Soir
            }
        } else if (weekday === 0) { // Dimanche
            if ((hour === 1 && minute >= 0) || (hour >= 2 && hour < 4)) {
                return -1; // Créneau fermé
            }
            // Fréquences pour Dimanche
            if (hour >= 4 && hour < 7) {
                frequency = 16; // Creuse
            } else if (hour >= 7 && hour < 9) {
                frequency = 11; // Pointe
            } else {
                frequency = 16; // Creuse
            }
        } else { // Semaine (Lundi - Vendredi)
            if ((hour === 0 && minute >= 0) || (hour >= 1 && hour < 4)) {
                return -1; // Créneau fermé
            }
            // Fréquences pour Semaine
            if (hour >= 4 && hour < 7) {
                frequency = 7; // Creuse
            } else if (hour >= 7 && hour < 9) {
                frequency = 6; // Pointe
            } else if (hour >= 9 && hour < 16) {
                frequency = 7; // Creuse
            } else if (hour >= 16 && hour < 20) {
                frequency = 6; // Pointe
            } else {
                frequency = 2; // Soir
            }
        }
    }

    return frequency - (minute % frequency);
}

function calculateFollowingBusTime(weekday, hour, minute, frequency) {
    let followingFrequency;

    if (estFerie) {
        weekday = 0; // Dimanche
    }
    if (isVacation === true) {
        if (weekday === 6) { // Samedi
            if ((hour === 1 && minute >= 0) || (hour >= 2 && hour < 4)) {
                return -1; // Créneau fermé
            }
            // Fréquences pour Samedi
            if (hour >= 4 && hour < 7) {
                followingFrequency = 8; // Creuse
            } else if (hour >= 7 && hour < 9) {
                followingFrequency = 7; // Pointe
            } else if (hour >= 9 && hour < 16) {
                followingFrequency = 2; // Creuse
            } else if (hour >= 16 && hour < 20) {
                followingFrequency = 7; // Pointe
            } else {
                followingFrequency = 11; // Soir
            }
        } else if (weekday === 0) { // Dimanche
            if ((hour === 1 && minute >= 0) || (hour >= 2 && hour < 4)) {
                return -1; // Créneau fermé
            }
            // Fréquences pour Dimanche
            if (hour >= 4 && hour < 7) {
                followingFrequency = 16; // Creuse
            } else if (hour >= 7 && hour < 9) {
                followingFrequency = 11; // Pointe
            } else {
                followingFrequency = 16; // Creuse
            }
        } else { // Semaine (Lundi - Vendredi)
            if ((hour === 0 && minute >= 0) || (hour >= 1 && hour < 4)) {
                return -1; // Créneau fermé
            }
            // Fréquences pour Semaine
            if (hour >= 4 && hour < 7) {
                followingFrequency = 7; // Creuse
            } else if (hour >= 7 && hour < 9) {
                followingFrequency = 6; // Pointe
            } else if (hour >= 9 && hour < 16) {
                followingFrequency = 7; // Creuse
            } else if (hour >= 16 && hour < 20) {
                followingFrequency = 2; // Pointe
            } else {
                followingFrequency = 2; // Soir
            }
        }
    } else {
        if (weekday === 6) { // Samedi
            if ((hour === 1 && minute >= 0) || (hour >= 2 && hour < 4)) {
                return -1; // Créneau fermé
            }
            // Fréquences pour Samedi
            if (hour >= 4 && hour < 7) {
                followingFrequency = 8; // Creuse
            } else if (hour >= 7 && hour < 9) {
                followingFrequency = 7; // Pointe
            } else if (hour >= 9 && hour < 16) {
                followingFrequency = 13; // Creuse
            } else if (hour >= 16 && hour < 20) {
                followingFrequency = 7; // Pointe
            } else {
                followingFrequency = 11; // Soir
            }
        } else if (weekday === 0) { // Dimanche
            if ((hour === 1 && minute >= 0) || (hour >= 2 && hour < 4)) {
                return -1; // Créneau fermé
            }
            // Fréquences pour Dimanche
            if (hour >= 4 && hour < 7) {
                followingFrequency = 16; // Creuse
            } else if (hour >= 7 && hour < 9) {
                followingFrequency = 11; // Pointe
            } else {
                followingFrequency = 16; // Creuse
            }
        } else { // Semaine (Lundi - Vendredi)
            if ((hour === 0 && minute >= 0) || (hour >= 1 && hour < 4)) {
                return -1; // Créneau fermé
            }
            // Fréquences pour Semaine
            if (hour >= 4 && hour < 7) {
                followingFrequency = 7; // Creuse
            } else if (hour >= 7 && hour < 9) {
                followingFrequency = 6; // Pointe
            } else if (hour >= 9 && hour < 16) {
                followingFrequency = 7; // Creuse
            } else if (hour >= 16 && hour < 20) {
                followingFrequency = 6; // Pointe
            } else {
                followingFrequency = 2; // Soir
            }
        }
    }

    return frequency + followingFrequency - (minute % followingFrequency);
}

function shouldBlink(nextBusFreq) {
    return nextBusFreq === 1;
}

function updateBusTimes() {


    const nextBusFreq = calculateNextBusTime(weekday, hour, minute);

    if (nextBusFreq === -1) {
        if ((hour === 0 && minute >= 0) || (hour >= 1 && hour < 4)) {
            nextBusTime.textContent = "Réseau Fermé. Prochain départ à 4h"
        } else {
            nextBusTime.textContent = "Créneau fermé";
        }
        followingBusTime.textContent = "";
        return;
    }

    if (estFerie) {
        alertMessage.textContent = "⚠️ Attention, horaires modifiés ce jour pour jour férié";
    } else if (isVacation) {
        alertMessage.textContent = "⚠️ Attention, horaires modifiés ce jour pour cause de vacances";
    } else if (estPremierMai) {
        alertMessage.textContent = "⚠️ Attention, réseau fermé en ce 1er Mai";
    } else if (nextBusFreq < 0) {
        alertMessage.textContent = "⚠️ Aucun bus ne circule avant le prochain créneau horaire";
    } else {
        alertMessage.textContent = "";
    }

    const followingBusFreq = calculateFollowingBusTime(weekday, hour, minute, nextBusFreq);


  const sign = `<img src="/assets/img/sign.svg" alt="">`;

    const nextBus = nextBusFreq === 0 ? `<span style='color: #9364cc;'>A quai  ${sign}</span>` : nextBusFreq === 1 ? `<span style='color: #9364cc;'>A l’approche ${sign}</span>` : `<span style='font-size: 40px; color: #9364cc;'>${nextBusFreq} min ${sign}</span>`;

    const followingBus = followingBusFreq === 0 ? `<span style='color: #9364cc;'>Arrivé  ${sign}</span>` : followingBusFreq === 1 ? `<span style='color: #9364cc;'>1 min ${sign}</span>` : `<span style='font-size: 40px; color: #9364cc;'>${followingBusFreq} min ${sign}</span>`;

    document.getElementById("nextBusTime").innerHTML = nextBus + followingBus;

    if (followingBusFreq === -1) {
        followingBusTime.textContent = "Dernier bus de la journée";} 
}

setInterval(updateBusTimes, 1000); // Mettez 30000 pour actualiser toutes les 30 secondes
updateBusTimes(); // Appel initial pour mettre à jour les données immédiatement

// Update current time every second
function updateCurrentTime() {
    const currentTimeElement = document.getElementById('current-time');
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    currentTimeElement.textContent = `Mis à jour à : ${hours}:${minutes}`;
}
setInterval(updateCurrentTime, 1000);
updateCurrentTime(); // Update initially
// url du fichier JSON sur GitHub
const url = "https://raw.githubusercontent.com/Cyber-Thibaut/infotrafic/main/info.json";

function afficherInfoTraficLigne(ligne) {
    $.getJSON(url, function (data) {
        const infosLigne = data.lignes.find((l) => l.ligne === ligne);

        if (!infosLigne) {
            $("#lignes").append(
                $("<div>").addClass("alert alert-success text-white").text("Tout va bien sur la ligne " + ligne)
                    .append($("<img>").attr("src", "/assets/img/panneaux/valid.png").css({ "float": "right", "width": "60px", "height": "auto" }))
            );
            return;
        }
        lignevide = 0;
        const card = $("<div>").addClass("card mb-3");
        const cardBody = $("<div>").addClass("card-body");
        card.append(cardBody);
        // récupération de la date actuelle
        const dateActuelle = new Date();
        $.each(infosLigne.infos_trafic, function (j, info) {
            const divInfo = $("<div>").attr("role", "alert");
            // récupération des dates de début et de fin de l'information
            const dateDebut = new Date(Date.parse(info.annonce));
            const dateDd = new Date(Date.parse(info.debut));
            const dateFin = new Date(Date.parse(info.fin));
            const dateFinAffichee = new Date(Date.parse(info.fin));
            dateFin.setDate(dateFin.getDate() + 1);

            // comparaison avec la date actuelle
            if (dateActuelle >= dateDebut && dateActuelle <= dateFin) {
                0;
            } else {
                lignevide++;
            }
            return;
        });

            // ajout de la carte à la page
            if (infosLigne.infos_trafic.length === lignevide) {
                $("#lignes").append(
                    $("<div>")
                        .addClass("alert alert-success text-white")
                        .text("Tout va bien sur la ligne " + ligne)
                        .append($("<img>").attr("src", "/assets/img/panneaux/valid.png").css({ "float": "right", "width": "30px", "transform": "translate(-25px, 35px)" }))
                );
                return;
            } else {
                $("#lignes").append(

                        $("<div>")
                            .addClass("alert alert-warning text-white text-bold")
                            .html("<img id='logo' src='/sections/bus français/images/2.png' alt='Logo de la ligne'> modif <img src='/assets/img/panneaux/warning.png' style='position: relative; width: 30px; transform: translate(-25px, 35px);'> Le trafic est perturbé <a href='/sections/bus français/infotrafic.html'; class='font-weight-bold text-xs text-uppercase font-weight-bolder text-primary icon-move-right'><i class='fas fa-arrow-right text-xs ms-1'></i></a>")
                    );
                    return;
                }
            $("#lignes").append(card);


    });
}

afficherInfoTraficLigne("11");