<?php

    $host = "localhost";
    $base = "covoiturage";
    $utilisateur = "root";
    $pass = "";

    $bdd = new PDO('mysql:host=$host;dbname=$base', $utilisateur, $pass);
    
?>