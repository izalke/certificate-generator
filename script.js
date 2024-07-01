
//14842 Iza Skowrońska
document.addEventListener("DOMContentLoaded", () => {
  const registrationForm = document.getElementById("registrationForm");
  const userList = document.getElementById("userList");
  const certificateContainer = document.getElementById("certificateContainer");
  const certName = document.getElementById("certName");
  const downloadCertificate = document.getElementById("downloadCertificate");

  let users = [];

  // Funkcja obsługująca zdarzenie przesłania formularza rejestracyjnego
  registrationForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    if (name) {
      users.push(name);
      updateUserList(); // Aktualizuj listę użytkowników
      registrationForm.reset(); // Resetuj formularz
    }
  });

  // Funkcja obsługująca kliknięcia na liście użytkowników
  userList.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
      const name = e.target.textContent;
      generateCertificate(name); // Generuj certyfikat dla wybranego użytkownika
    }
  });

  // Funkcja obsługująca kliknięcie przycisku pobierania certyfikatu
  downloadCertificate.addEventListener("click", () => {
    const certificate = document.getElementById("certificate");
    html2canvas(certificate).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 0, 0);
      pdf.save("certificate.pdf"); // Zapisz certyfikat jako PDF
    });
  });

  // Funkcja aktualizująca listę użytkowników
  function updateUserList() {
    userList.innerHTML = "";
    users.forEach((user) => {
      const li = document.createElement("li");
      li.textContent = user;
      userList.appendChild(li); // Dodaj użytkownika do listy
    });
  }

  // Funkcja generująca certyfikat dla podanego użytkownika
  function generateCertificate(name) {
    certName.textContent = name;
    certificateContainer.style.display = "block"; // Wyświetl certyfikat
  }
});
