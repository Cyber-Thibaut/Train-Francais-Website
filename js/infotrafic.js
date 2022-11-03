
const trafic_list = [
    {
        title: 'titre de ton message',
        message: 'ton message',
        type: '',
        /*
            '' = rien,
            'information' = information
            'future_work' = travaux à venir
            'current_work' = travaux
            'disrupted' = perturbation
            'interupted' = interruption
        */
        force: 10 // Compris entre 0 et 100, plus c'est élevé, plus de chances d'apparaitre
    },
    {
        title: 'titre du deuxiemme message',
        message: 'ton message',
        type: 'disrupted',
        force: 40 // Compris entre 0 et 100, plus c'est élevé, plus de chances d'apparaitre
    },
    {
        title: 'titre du dernier message',
        message: 'ton message',
        type: 'interupted',
        force: 20 // Compris entre 0 et 100, plus c'est élevé, plus de chances d'apparaitre
    }
];

function printTraficStatus(){
    const el_title =    document.getElementById('trafic_title');
    const el_message =  document.getElementById('trafic_message');
    const el_force =    document.getElementById('trafic_force');
    const el_block =    document.getElementById('trafic_block');

    const message = getRandomTrafic(trafic_list);
    
    el_title.innerHTML = message.title;
    el_message.innerHTML = message.message;
    el_force.innerHTML = message.force;

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