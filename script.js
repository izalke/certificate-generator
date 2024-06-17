let students = [];

window.register = function register() {
  const name = document.getElementById("name").value;
  if (name) {
    students.push({ name: name });
    alert("Zapisano na kurs: " + name);
    document.getElementById("name").value = "";
  } else {
    alert("Proszę wprowadzić imię i nazwisko.");
  }
};

window.generateCertificates = function generateCertificates() {
  const { jsPDF } = window.jspdf;
  const certificatesDiv = document.getElementById("certificates");
  certificatesDiv.innerHTML = "";

  students.forEach((student) => {
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.text("Certyfikat Ukonczenia", 20, 30);
    doc.setFontSize(12);
    doc.text(`To certyfikuje, ze ${student.name}`, 20, 50);
    doc.text("ukonczyl(a) kurs Programowanie w JavaScript.", 20, 60);
    doc.text("Data: " + new Date().toLocaleDateString(), 20, 70);

    const pdfData = doc.output("datauristring");
    const link = document.createElement("a");
    link.href = pdfData;
    link.download = `Certyfikat_${student.name}.pdf`;
    link.textContent = `Pobierz certyfikat dla ${student.name}`;
    certificatesDiv.appendChild(link);
    certificatesDiv.appendChild(document.createElement("br"));
  });
};
