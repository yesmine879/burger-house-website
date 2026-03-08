document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const password = document.getElementById("password").value;

  if (password.length < 12) {
    alert("Mot de passe trop court. Il doit comporter au moins 12 caractères.");
  } else {
    alert("Connexion réussie !");
  }
});
