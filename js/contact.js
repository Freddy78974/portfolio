// Ajouter un écouteur d'événements au formulaire
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêcher l'envoi du formulaire classique

    // Récupérer les valeurs du formulaire
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Créer l'URL mailto
    var subject = encodeURIComponent('Nouveau message de ' + name + ' via le formulaire de contact Portefolio');
    var body = encodeURIComponent('Nom: ' + name + '\nEmail: ' + email + '\n\nMessage:\n' + message);

    // Construire le lien mailto
    var mailtoLink = 'mailto:nangy.pro@gmail.com?subject=' + subject + '&body=' + body;

    // Ouvrir l'application de messagerie par défaut
    window.location.href = mailtoLink;
});
