<?php
   // Vérifier si le formulaire est soumis 
   if ( isset( $_GET['ajouter'] ) ) {
     /* récupérer les données du formulaire en utilisant 
        la valeur des attributs name comme clé 
       */
     $nom = $_GET['text']; 
     // afficher le résultat
     echo '<h3>Informations récupérées en utilisant GET</h3>'; 
     echo 'Nom : ' . $nom ; 
     exit;
  }
?>