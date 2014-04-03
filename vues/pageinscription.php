<div data-role="page" id="pageinscription">
    <div data-role="content" >   
<?php
include "vues/entete_retour.html";
include "vues/logo.html";
?>
    <!--- Formulaire d'inscription --->
    <div data-role="fieldcontain">
        <label for="nom">Nom </label>
        <input type="text" name="nom" id="nom" value=""  />
        
        <label for="prenom">Prénom </label>
        <input type="text" name="prenom" id="prenom" value="" />
        
        <label for="mail">Mail </label>
        <input type="text" name="mail" id="mail" value="" />
        
        <label for="telephone">Téléphone </label>
        <input type="text" name="telephone" id="telephone" value="" />
        

        <fieldset data-role="controlgroup" data-type="horizontal">
            <legend>Indiquer votre service</legend>
         	<input type="radio" name="type" id="radio-recherche" value="radio-1" checked="checked" />
         	<label for="radio-recherche">Recherche</label>

         	<input type="radio" name="type" id="radio-production" value="radio-2"  />
         	<label for="radio-production">Production</label>

         	<input type="radio" name="type" id="radio-commercial" value="radio-3"  />
         	<label for="radio-commercial">Commercial</label>

         	<input type="radio" name="type" id="radio-securite" value="radio-4"  />
         	<label for="radio-securite">Sécurité</label>
        </fieldset>
        
        <div id="divinscription"></div>
        
        <p>
            <a href="#" data-role="button" id="btninscription" >Envoyez</a>
        </p>
    </div>
 <?php
   include "vues/pied.html";
?>
    </div><!-- /content -->
</div><!-- /page -->