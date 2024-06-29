// script.js
document.addEventListener("DOMContentLoaded", () => {
  const registrationForm = document.getElementById("registrationForm");
  const userList = document.getElementById("userList");
  const certificateContainer = document.getElementById("certificateContainer");
  const certName = document.getElementById("certName");
  const downloadCertificate = document.getElementById("downloadCertificate");

  let users = [];

  registrationForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    if (name) {
      users.push(name);
      updateUserList();
      registrationForm.reset();
    }
  });

  userList.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
      const name = e.target.textContent;
      generateCertificate(name);
    }
  });

  downloadCertificate.addEventListener("click", () => {
    const certificate = document.getElementById("certificate");
    html2canvas(certificate).then((canvas) => {
      const link = document.createElement("a");
      link.download = "certificate.png";
      link.href = canvas.toDataURL();
      link.click();
    });
  });

  function updateUserList() {
    userList.innerHTML = "";
    users.forEach((user) => {
      const li = document.createElement("li");
      li.textContent = user;
      userList.appendChild(li);
    });
  }

  function generateCertificate(name) {
    certName.textContent = name;
    certificateContainer.style.display = "block";
  }
});
