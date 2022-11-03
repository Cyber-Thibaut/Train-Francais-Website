
const trafic_list = [
    {

        title: 'Retard',
        message: 'Absence de conducteur',
        type: 'disrupted',
        /*
            '' = rien,
            'information' = information
            'future_work' = travaux à venir
            'current_work' = travaux
            'disrupted' = perturbation
            'interupted' = interruption
        */
        force: 1 // Compris entre 0 et 100, plus c'est élevé, plus de chances d'apparaitre
    },
    {
        title: 'Retard',
        message: 'Régulation Trafic',
        type: 'disrupted',
        force: 1 // Compris entre 0 et 100, plus c'est élevé, plus de chances d'apparaitre
    },
    {
        title: 'Retard',
        message: 'Panne Aiguillage',
        type: 'interupted',
        force: 1 // Compris entre 0 et 100, plus c'est élevé, plus de chances d'apparaitre
    },
    {
        title: 'Retard',
        message: 'Panne Train Ligne',
        type: 'interupted',
        force: 1 // Compris entre 0 et 100, plus c'est élevé, plus de chances d'apparaitre
    },
    {
        title: 'Retard',
        message: 'Retard lors du Trajet Précédent',
        type: 'disrupted',
        force: 1 // Compris entre 0 et 100, plus c'est élevé, plus de chances d'apparaitre
    },
    {
        title: 'Travaux',
        message: 'Travaux sur la voie je peux pas écraser les ouvriers donc bah tu patiente et TU FERME TA BOUCHE !',
        type: 'current_work',
        force: 1 // Compris entre 0 et 100, plus c'est élevé, plus de chances d'apparaitre
    },
    {
        title: 'Suspension trafic',
        message: 'Sans motif',
        type: 'interupted',
        force: 1 // Compris entre 0 et 100, plus c'est élevé, plus de chances d'apparaitre
    },
    {
        title: 'Suspension trafic',
        message: 'Arrêt Voyageur Prolongé',
        type: 'interupted',
        force: 1 // Compris entre 0 et 100, plus c'est élevé, plus de chances d'apparaitre
    },
    {
        title: 'Suspension traifc',
        message: 'Attente Correspondance',
        type: 'disrupted',
        force: 1 // Compris entre 0 et 100, plus c'est élevé, plus de chances d'apparaitre
    },
    {
        title: 'Suspension traifc',
        message: 'Intervention Police A Bord',
        type: 'interupted',
        force: 1 // Compris entre 0 et 100, plus c'est élevé, plus de chances d'apparaitre
    },
    {
        title: 'Suppression',
        message: 'plus de conducteur',
        type: 'interupted',
        force: 1 // Compris entre 0 et 100, plus c'est élevé, plus de chances d'apparaitre
    },
    {
        title: 'Information',
        message: "Pablo Escobar est votre conducteur aujourd'hui entre Lyon et Paris profitez en ;)",
        type: 'information',
        force: 1 // Compris entre 0 et 100, plus c'est élevé, plus de chances d'apparaitre
    },
    {
        title: 'Information',
        message: "La porte arrière de votre train ne sera pas en face du quai en gare de Tarare, merci de vous dirigez vers un autre accès si vous déscendez dans cette gare",
        type: 'information',
        force: 1 // Compris entre 0 et 100, plus c'est élevé, plus de chances d'apparaitre
    },
    {
        title: 'Information',
        message: "Adrien est le plus beau 😍",
        type: 'information',
        force: 0 // Compris entre 0 et 100, plus c'est élevé, plus de chances d'apparaitre
    },
    {
        title: 'Régulation trafic',
        message: "En raison d'une régulation, votre Intercité aura un retard de 15 minutes pour laisser passer un TGV",
        type: 'disrupted',
        force: 1 // Compris entre 0 et 100, plus c'est élevé, plus de chances d'apparaitre
    },
    {
        title: 'Information',
        message: "Le menu de la cantine est Burger Frites aujourd'hui",
        type: 'information',
        force: 1 // Compris entre 0 et 100, plus c'est élevé, plus de chances d'apparaitre
    },
    {
        title: 'Information Météo',
        message: "Il pleut sur Clermont",
        type: 'information',
        force: 1 // Compris entre 0 et 100, plus c'est élevé, plus de chances d'apparaitre
    },
    {
        title: 'Information',
        message: "Les débats sont interdits dans nos trains",
        type: 'information',
        force: 1 // Compris entre 0 et 100, plus c'est élevé, plus de chances d'apparaitre
    },
    {
        title: 'Information',
        message: "Ouverture de la gare du Listenbourg dirigée par Adrien",
        type: 'information',
        force: 1 // Compris entre 0 et 100, plus c'est élevé, plus de chances d'apparaitre
    },
    {
        title: 'Déviation ligne 1',
        message: 'En raison de la traversée de la rue du 1er mai par les cartons migrateur, la ligne 1 est déviée.',
        type: 'current_work',
        force: 1 // Compris entre 0 et 100, plus c'est élevé, plus de chances d'apparaitre
    },
    {
        title: 'Séisme',
        message: "En raison d'un séisme de magnitude 10 due à la faim de votre conducteur, le train à déraillé",
        type: 'interupted',
        force: 1 // Compris entre 0 et 100, plus c'est élevé, plus de chances d'apparaitre
    },
    {
        title: 'Suppression',
        message: 'Le Conducteur Alex Roule comme un crabe sur les voies, pour plus de sécurité aucun autre train ne circule',
        type: 'interupted',
        force: 1 // Compris entre 0 et 100, plus c'est élevé, plus de chances d'apparaitre
    },
    {
        title: 'Avance',
        message: 'destruction du train devant',
        type: 'future_work',
        force: 1 // Compris entre 0 et 100, plus c'est élevé, plus de chances d'apparaitre
    },
    {
        title: 'Retard sur la ligne 1',
        message: 'divagation de chèvres',
        type: 'current_work',
        force: 1 // Compris entre 0 et 100, plus c'est élevé, plus de chances d'apparaitre
    },
    {
        title: 'Retard général',
        message: 'Retard à la préparation de la boîte repas',
        type: 'current_work',
        force: 1 // Compris entre 0 et 100, plus c'est élevé, plus de chances d'apparaitre
    },
    {
        title: 'Grève',
        message: 'Les plats de la cantine sont froids',
        type: 'interupted',
        force: 1 // Compris entre 0 et 100, plus c'est élevé, plus de chances d'apparaitre
    },
    {
        title: 'Nouveauté !',
        message: 'Tout est fermé',
        type: 'information',
        force: 1 // Compris entre 0 et 100, plus c'est élevé, plus de chances d'apparaitre
    },
    {
        title: 'Retard sur la Transversale Sud',
        message: 'La pizza du conducteur est arrivée en retard',
        type: 'information',
        force: 1 // Compris entre 0 et 100, plus c'est élevé, plus de chances d'apparaitre
    }
];

function printTraficStatus(){
    const el_title =    document.getElementById('trafic_title');
    const el_message =  document.getElementById('trafic_message');
    //const el_force =    document.getElementById('trafic_force');
    const el_block =    document.getElementById('trafic_block');

    const message = getRandomTrafic(trafic_list);
    
    el_title.innerHTML = message.title;
    el_message.innerHTML = message.message;
    //el_force.innerHTML = message.force;

    el_block.classList.add(message.type);
}

function getRandomTrafic(list) {
    let force = 0;
    // On additionne la force de tout les messages
    for (const i in list){
        force = force + list[i].force;
    }

    // On genere un nombre aléatoire entre 0 et la force totale
    let rand = Math.random() * force;

    // On vas ensuite décrementer jusqu'a avoir l'interval ou x > force
    for (const i in list){
        list[i].force;

        // Si r est plus petit que la force du message
        if (list[i].force >= rand){
            // On retourne le message
            return (list[i]);
        } else {
            // On decremente r
            rand = rand - list[i].force;
        }
    }
}