//initialisation DOM
document.addEventListener("DOMContentLoaded", function () {

  function init() {
    const modalBtn = document.querySelectorAll(".modal-btn");//selectionne tout les éléments qui on la classe .modal-btn
    const closeBtn = document.querySelectorAll(".close") //selectionne tout les élément qui on la classe .close

    // launch modal event
    // Pour chaque clique sur un élément ayant la class .btn, on lance la fonction launchModal
    modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

    // Pour chaque clique sur un élément ayant la class .btn, on lance la fonction closemodal
    closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));

    validation();

  }

  init();

  //Fermeture modal en utilisant display="none"
  function closeModal() {
    const modalbg = document.querySelector(".bground");
    modalbg.style.display = "none";

  }

  // launch modal form
  function launchModal() {
    const modalbg = document.querySelector(".bground");
    modalbg.style.display = "block";
  }

  function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }

  }

  // Controle avec regex
  function validationRegex(formdata) {

    const stringRegex = /^[a-zA-Z-]+$/; //Regex champs nom & prénom
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; //Regex email
    const birthRegex = /^[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])/; //Regex Date
    const colorErrMsg = '#F0C808'; //Couleur des messages d'erreur
    const SizeErrMsg = '12px';//Taille des messages d'erreur


    //Variable de controle
    let control = true;

    //Vérifie si le Prénom ne match pas avec stringRegex et si il y a plus de 2 caractères
    //Si c'est le cas, on affiche le message d'erreur et on passe la variable de controle à false
    // 2eme enfants du 1er element de formData
    if (!formdata[0].children[2].value.match(stringRegex) || formdata[0].children[2].value.length < 2) {

      document.getElementById("firstNameErrorMSg").innerText = " Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
      document.getElementById("firstNameErrorMSg").style.fontSize = SizeErrMsg;
      document.getElementById("firstNameErrorMSg").style.color = colorErrMsg;
      control = false;

      //Sinon, on efface le message d'erreur et on continu
    } else {
      document.getElementById("firstNameErrorMSg").innerText = "";


      //Vérifie si le Nom ne match pas avec stringRegex et si il y a plus de 2 caractères
      //Si c'est le cas, on affiche le message d'erreur et on passe la variable de controle à false
      // 2eme enfants du 2 eme element de formData
      if (!formdata[1].children[2].value.match(stringRegex) || formdata[1].children[2].value.length < 2) {


        document.getElementById("lastNameErrorMSg").innerText = " Veuillez entrer 2 caractères ou plus pour le champ du nom.";
        document.getElementById("lastNameErrorMSg").style.fontSize = SizeErrMsg;
        document.getElementById("lastNameErrorMSg").style.color = colorErrMsg;
        control = false;

        //Sinon, on efface le message d'erreur et on continu
      } else {
        document.getElementById("lastNameErrorMSg").innerText = "";


        //Vérifie si l'email ne match pas avec emailRegex
        //Si c'est le cas, on affiche le message d'erreur et on passe la variable de controle à false
        // 2eme enfants du 3 eme element de formData
        if (!formdata[2].children[2].value.match(emailRegex)) {


          document.getElementById("EmailErrorMSg").innerText = " Veuillez entrer une adresse email valide.";
          document.getElementById("EmailErrorMSg").style.fontSize = SizeErrMsg;
          document.getElementById("EmailErrorMSg").style.color = colorErrMsg;
          control = false;

          //Sinon, on efface le message d'erreur et on continu
        } else {
          document.getElementById("EmailErrorMSg").innerText = "";


          //Vérifie si la date ne match pas birthRegex
          //Si c'est le cas, on affiche le message d'erreur et on passe la variable de controle à false
          // 2eme enfants du 4 eme element de formData
          if (!formdata[3].children[2].value.match(birthRegex)) {

            document.getElementById("BdayErrorMSg").innerText = " Vous devez entrer votre date de naissance.";
            document.getElementById("BdayErrorMSg").style.fontSize = SizeErrMsg;
            document.getElementById("BdayErrorMSg").style.color = colorErrMsg;
            control = false;

            //Sinon, on efface le message d'erreur et on continu
          } else {
            document.getElementById("BdayErrorMSg").innerText = ""


            //controle si le nombre de tournoi selectionné et vide
            //Sinon oui, on affiche le message d'erreur et on passe notre variable controle à False
            // 2eme enfants du 5 eme element de formData
            if (formdata[4].children[2].value == "") {

              document.getElementById("QtyErrorMSg").innerText = " Veuillez choisir le nombre de tournoi auquel vous avez participé.";
              document.getElementById("QtyErrorMSg").style.fontSize = SizeErrMsg;
              document.getElementById("QtyErrorMSg").style.color = colorErrMsg;
              control = false;

              //Alors efface le message d'erreur et on continu
            } else {
              document.getElementById("QtyErrorMSg").innerText = "";

              var a = 0; //Initialise notre variable de controle

              //Selectionne tous nos input
              const radio = document.querySelectorAll('input[name="location"]');

              //Pour chaque input entre 0 et le nombre d'input de "location":
              for (var i = 0; i < radio.length; i++) {

                //On vérifie que l'input avec l'index i soit selectionné
                //Si il est selectionné
                if (radio[i].checked) {

                  //On passe notre variable à 1 et on sort de la boucle
                  //Sinon on incrémente i dans notre boucle for et on recommence
                  a = 1;
                  break;
                }

              }
              //Si on a vérifié chaque input et qu'aucun n'est selectionné,
              //on demande à selectionner une ville
              //et on passe notre variable controle à false
              if (a == 0) {
                document.getElementById("LocationErr").innerText = "Vous devez selectionner une ville";
                document.getElementById("LocationErr").style.fontSize = SizeErrMsg;
                document.getElementById("LocationErr").style.color = colorErrMsg;
                control = false;

                //Sinon si une ville à été selectionnée, notre variable a = 1
                //Alors efface le message d'erreur et on continu 
              } else {
                document.getElementById("LocationErr").innerText = "";


                //On vérifie si la checkbox des contion est coché
                if (document.getElementById("checkbox1").checked) {

                  //Sinon on affihce le message d'erreur et on passe notre variable controle à False
                } else {
                  document.getElementById("CondErr").innerText = "Vous devez accepter les conditions d'utilisation"
                  document.getElementById("CondErr").style.fontSize = SizeErrMsg;
                  document.getElementById("CondErr").style.color = colorErrMsg;
                  control = false;
                }
              }
            }
          }
        }
      }

    }

    if (control) {
      return true;
    } else {
      return false;
    }
  }

  function validation() {
    let sendmodalbtn = document.getElementById("sendmodal");

    sendmodalbtn.addEventListener("click", function (event) {

      //Block la fermeture de la modal et continu d'executer le code ci-dessous
      event.preventDefault();

      //stock dans la constante tout les élément ayant pour class "formData"
      const formdata = document.querySelectorAll(".formData");



      if (validationRegex(formdata)) {
        // Si la variable de control est a true on affiche le
        //message de confirmation d'inscription.
        alert("Merci ! Votre réservation a été reçue.")

        //et on ferme le formulaire
        closeModal();

        //Sinon on affiche une alerte pour préciser qu'il y a un problème sur le formulaire.
      } else {
        alert("il y a un problems dans le formulaire")
      }
    })
  }
});