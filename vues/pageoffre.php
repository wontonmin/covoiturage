<div data-role="page" id="pageoffre"> 
<?php
include "vues/entete_retour.html";
?>
 <div data-role="content" >  
    <div id="offre"> 
        <ul data-role ="listview" id="list" >
            <li id="nom">                        </li>
            <li id="prenom">                     </li>
            <li id="ramassage">                  </li>  
        </ul>
        <a href="tel:numeroTel" data-role="button" data-icon="grid" id="tel" data-inline="true" data-mini="true">Appeler</a>
        <a href="mail" data-role="button" data-inline="true" data-mini="true" id="mail">Contacter</a>
    </div>
 </div><!-- /content -->
<?php
    include "vues/pied.html";
?>
</div><!-- /page -->