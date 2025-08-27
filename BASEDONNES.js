document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Récupérer les valeurs des champs du formulaire
    const nom = document.getElementById('nom').value;
    const age = document.getElementById('age').value;
    const adresse = document.getElementById('adresse').value;
    const telephone = document.getElementById('telephone').value;
    const email = document.getElementById('email').value;

    // Ajouter les valeurs dans le tableau
    const table = document.getElementById('userTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    const cellNom = newRow.insertCell(0);
    const cellAge = newRow.insertCell(1);
    const cellAdresse = newRow.insertCell(2);
    const cellTelephone = newRow.insertCell(3);
    const cellEmail = newRow.insertCell(4);

    cellNom.textContent = nom;
    cellAge.textContent = age;
    cellAdresse.textContent = adresse;
    cellTelephone.textContent = telephone;
    cellEmail.textContent = email;

    // Réinitialiser le formulaire
    document.getElementById('userForm').reset();
});

document.getElementById('exportCSV').addEventListener('click', function() {
    const table = document.getElementById('userTable');
    const rows = table.querySelectorAll('tr');
    let csvContent = '';

    rows.forEach(row => {
        const cells = row.querySelectorAll('th, td');
        const rowContent = Array.from(cells).map(cell => cell.textContent).join(',');
        csvContent += rowContent + '\n';
    });

   document.getElementById("downloadBtn").addEventListener("click", () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Ton contenu ici
    const content = "Liste des utilisateurs\n\n- Carlos\n- Marie\n- Julien";

    doc.text(content, 10, 10); // texte à partir de la position (x=10, y=10)
    doc.save("utilisateurs.pdf"); // nom du fichier
  }); 

