var magicNumber = Math.floor(Math.random() * 100) + 1;

function verif() {
  var userNumber = parseInt(document.getElementById("textBox1").value);
  var label1 = document.getElementById("label1");
  if (isNaN(userNumber)) {
    label1.innerHTML = "Veuillez entrer un nombre valide.";
  } else if (userNumber === magicNumber) {
    label1.innerHTML = "Bravo, vous avez trouvé le nombre magique !";
  } else if (userNumber < magicNumber) {
    label1.innerHTML = "Le nombre magique est plus grand.";
  } else {
    label1.innerHTML = "Le nombre magique est plus petit.";
  }
}
