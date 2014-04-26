<div data-role="page" id="pagegerermesoffres">
    <div data-role="content" id="divmesoffres">   
<?php
include "vues/entete_retour.html";
?>
    <legend>Mes offres au départ de l'entreprise</legend>
        <div data-role="controlgroup" id="listdepart" data-theme="b">
            
        </div>
    <legend>Mes offres à l'arrivée à l'entreprise</legend>
        <div data-role="controlgroup" id="listarrivee">
        
        </div>
    <p>
        <a data-role="button" id="btnSupprimer" data-icon="delete" data-incline="true" data-mini="true">Supprimer</a>
    </p>
    <p>
        <a href="#pageajouteroffre" data-role="button" id="btnAjouter" data-icon="plus" data-incline="true" data-mini="true">Ajouter une offre</a>
    </p>    
    </div><!-- /fin content -->    
<?php    
    include "vues/pied.html";
?>
</div><!-- /fin page -->


