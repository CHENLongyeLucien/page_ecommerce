const bouton = document.getElementById('bouton'); 
const resultat = document.getElementById('resultat'); 

function isAnneeBissextile(annee) { 
    return (annee % 400 === 0) || (annee % 4 === 0 && annee % 100 !== 0);
}

bouton.addEventListener('click', function() { 
    const valeur = prompt("Saisissez une année :"); 
    if (valeur === null) return; 

    const annee = valeur.trim(); 
    const marge = /^\d{1,4}$/; 

    if (!marge.test(annee)) { 
        alert("Erreur : la valeur doit contenir uniquement entre 1 à 4 chiffres).");
        return;
    }

    const num = Number(annee); 
    const message = isAnneeBissextile(num)
        ? `${num} est une année bissextile`
        : `${num} n’est pas une année bissextile`;

    resultat.textContent = message; 
});

const formulaire = document.getElementById('formulaire'); 

formulaire.addEventListener('submit', function(event) { 
    event.preventDefault(); // 

    const client = { // 
        civilite: document.getElementById('civilite').value,
        nom: document.getElementById('nom').value.trim(),
        prenom: document.getElementById('prenom').value.trim(),
        email: document.getElementById('email').value.trim(),
        telephone: document.getElementById('tel').value.trim(),
        presentation: function() { 
            alert(`Bonjour, je suis ${this.civilite} ${this.prenom} ${this.nom}, vous pouvez me contacter sur ${this.email} ou au ${this.telephone}`);
        }
    };

    console.log(client); 
    client.presentation(); 
});

