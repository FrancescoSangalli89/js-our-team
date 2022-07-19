
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
    card.style.width = `calc(100% / 3 - 20px)`;
    card.style.padding = `10px`;
    card.style.margin = '10px';
    card.style.border = '1px solid grey';

    const imageCard = document.createElement('div');


    const imgCard = document.createElement("IMG");
    imgCard.setAttribute("src", team[i].immagine);
    imgCard.style.width = `100%`;
    imageCard.append(imgCard);

    card.append(imageCard);

    const text = document.createElement('div');

    const name = document.createElement('div');
    name.append(team[i].nome);
    name.style.fontWeight = 800;
    name.style.marginBottom = '10px';
    text.append(name);

    const role = document.createElement('div');
    role.append(team[i].ruolo);
    text.append(role);

    card.append(text);

    members.append(card);

    console.log(team[i]);

}

