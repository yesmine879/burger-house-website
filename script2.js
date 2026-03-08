
document.getElementById("registerForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;
  
    if (!name.trim()) {
      alert("Veuillez entrer un nom.");
      return; 
    }
  
    if (password.length < 12) {
      alert("Mot de passe trop court. Il doit comporter au moins 12 caractères.");
    } else {
      alert("Inscription réussie !");
    }
  });
  