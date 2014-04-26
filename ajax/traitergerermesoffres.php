<?php
session_start();
require_once '../util/fonctions.php';

    $id = $_SESSION['id'];
    $lesOffresArriveeEntreprise = getMesOffresArriveeEntreprise($id);
    $lesOffresDepartEntreprise = getMesOffresDEpartEntreprise($id);
    include "../vues/pagegerermesoffres.php";
?>

