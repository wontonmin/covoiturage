<?php
session_start();
require_once '../util/fonctions.php';
$idOffre= $_REQUEST['idOffre'];

$tabOffre = getOffreDepartEntreprise($idOffre);

echo json_encode($tabOffre);

?>