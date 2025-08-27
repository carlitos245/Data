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

   document.getElementById("downloadBtn").addEventListener("click", () => {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
       
  // Ajouter le titre
  doc.setFontSize(14);
  doc.text("Liste des Utilisateurs", doc.internal.pageSize.getWidth() / 2, 10, { align: "center" });

  // Ajouter la date du jour
  const date = new Date().toLocaleDateString("fr-FR");
  doc.setFontSize(10);
  doc.text(`Date : ${date}`, 14, 18); // Position sous le titre
       
  // Récupérer les données du tableau
  const table = document.getElementById("userTable");
  const rows = table.querySelectorAll("tbody tr");

  const data = Array.from(rows).map(row => {
    const cells = row.querySelectorAll("td");
    return Array.from(cells).map(cell => cell.textContent);
  });

  // En-têtes du tableau
  const headers = [["Nom", "Âge", "Adresse", "Téléphone", "Email"]];

  // Générer le tableau dans le PDF
  doc.autoTable({
    head: headers,
    body: data,
    startY: 20,
    theme: 'grid',
    styles: { fontSize: 10 }
  });

  doc.save("utilisateurs.pdf");
});






