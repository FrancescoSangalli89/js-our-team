// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team./
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto./
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite./
// MILESTONE 1:
// Stampare su console le informazioni di nome, ruolo e la stringa della foto/
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe/
// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// Organizzare i singoli membri in card/schede

// NOME                  RUOLO                        IMMAGINE
// Wayne Barnett	      Founder & CEO	               wayne - barnett - founder - ceo.jpg
// Angela Caroll	      Chief Editor	               angela - caroll - chief - editor.jpg
// Walter Gordon	      Office Manager	           walter - gordon - office - manager.jpg
// Angela Lopez	      Social Media Manager	       angela - lopez - social - media - manager.jpg
// Scott Estrada	      Developer	                   scott - estrada - developer.jpg
// Barbara Ramos	      Graphic Designer	           barbara - ramos - graphic - designer.jpg

const team = [

    {
        'nome': 'Wayne Barnett',
        'ruolo': 'Founder & CEO',
        'immagine': 'img/wayne-barnett-founder-ceo.jpg'
    },

    {
        'nome': 'Angela Caroll',
        'ruolo': 'Chief Editor',
        'immagine': 'img/angela-caroll-chief-editor.jpg'
    },

    {
        'nome': 'Walter Gordon',
        'ruolo': 'Office Manager',
        'immagine': 'img/walter-gordon-office-manager.jpg'
    },

    {
        'nome': 'Angela Lopez',
        'ruolo': 'Social Media Manager',
        'immagine': 'img/angela-lopez-social-media-manager.jpg'
    },

    {
        'nome': 'Scott Estrada',
        'ruolo': 'Developer',
        'immagine': 'img/scott-estrada-developer.jpg'
    },

    {
        'nome': 'Barbara Ramos',
        'ruolo': 'Graphic Designer',
        'immagine': 'img/barbara-ramos-graphic-designer.jpg'
    }

];

let members = document.getElementById('members');

for (let i = 0; i < team.length; i++) {


    const card = document.createElement('div');
    card.style.width = `calc(100% / 3)`;
    card.style.padding = `10px`;

    const imageCard = document.createElement('div');


    const imgCard = document.createElement("IMG");
    imgCard.setAttribute("src", team[i].immagine);
    imgCard.style.width = `100%`;
    imageCard.append(imgCard);

    card.append(imageCard);

    const text = document.createElement('div');

    const name = document.createElement('div');
    name.append(team[i].nome);
    text.append(name);

    const role = document.createElement('div');
    role.append(team[i].ruolo);
    text.append(role);

    card.append(text);

    members.append(card);

    console.log(team[i]);

}

