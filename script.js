function submitForm() {
    // Récupérez les valeurs des champs "Username" et "Password"
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Vous pouvez ici effectuer des opérations avec les valeurs, par exemple les envoyer à un serveur
    // Exemple de sortie dans la console :
    console.log("Username:", username);
    console.log("Password:", password);

    // Réinitialisez le formulaire (facultatif)
    document.getElementById("loginForm").reset();
}
//-------------------------------------
const x = document.getElementById('choix');
// Programmatically open the custom dropdown
const y = x.querySelector('.myselect-content');
y.style.display = 'block';
