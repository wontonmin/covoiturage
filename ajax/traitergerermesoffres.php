<?php
    require_once '../util/fonctions.php';
    session_start();
    $id = $_SESSION['id'];
    $toutesMesOffres = array();
    $toutesMesOffres['departentreprise'] = array();
    $toutesMesOffres['departentreprise'] = getMesOffresDepartEntreprise($id);
    $toutesMesOffres['departarrivee'] = array();
    $toutesMesOffres['departarrivee'] = getMesOffresArriveeEntreprise($id);
    echo json_encode($toutesMesOffres);
?>

