console.log("Javascript est en place");

const prenom = ('natacha')

function admin(reponse) {
  let parite;
  if (reponse === prenom) {
    console.log("Je suis l'admin du site");
  } else {
    console.log("Bienvenue " + prenom);
  }
}

admin('natacha')


