<div data-role="page" id="pageinscription">
    <div data-role="header" data-theme="b">
    <h1>COVOITURAGE</h1>
        <a data-rel="back" data-icon="back">retour</a>
        <a href="#pageconnexion" data-rel="home" data-icon="home" >Accueil</a>
    </div><!-- /header -->
<?php
include "vues/logo.html";
?>
<div data-role="content" id="divinscription"> 
    <form action="#"  id="frminscription">
     <div data-role="fieldcontain" id ="champsinscription">
        <label for="nom">Nom </label>
        <input type="text" name="nom" id="nom" value=""  class="required" />
        <label for="prenom">Prénom</label>
        <input type="text" name="prenom" id="prenom" value="" class="required"/>
        <label for="mail">Mail</label>
        <input type="text" name="mail" id="mail" value=""  class="required email" />
        <label for="tel">téléphone</label>
        <input type="text" name="tel" id="tel" value="" class="required number" />
        <label id="message"></label>
        <fieldset data-role="controlgroup" data-mini="true" data-type="horizontal">
            <legend>Indiquer votre service</legend>
            <input name="type" id="rdre" type="radio" checked="checked" value="recherche">
            <label for="rdre">Recherche</label>
            <input name="type" id="rdpr" type="radio" value="production">
            <label for="rdpr">Production</label>
            <input name="type" id="rdco" type="radio" value="commercial">
            <label for="rdco">Commercial</label>
            <input name="type" id="rdse" type="radio" value="securite">
            <label for="rdse">Securite</label>
        </fieldset>
          <input type="submit" name="submit" id="btninscription" value="Envoyer"  />
     </div>
    </form>
</div>

</div><!-- fin page-->
