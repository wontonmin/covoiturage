<div data-role="page" id="pageconnexion">
<?php
include "vues/entetepage.html";
include "vues/logo.html";
?>
<div data-role="content" id="divconnexion">       
   <!-- si on n'indique pas rel=external, charge tout le document -->

    <div data-role="fieldcontain">
   
        <label for="login">Login </label>
        <input type="text" name="login" id="login" value="" />
        <label for="login">Mot de passe </label>
        <input type="password" name="mdp" id="mdp" value="" />
        
     </div>
   <div id="message" data-theme="e"></div>
     <p>
       <a href="#" rel="external" data-role="button" id="btnconnexion" data-mini="true" data-inline="true" data-theme="b">Connexion</a>
       <a href="index.php?action=inscription" data-role="button" rel="external" data-mini="true" data-inline="true" data-theme="b">Vous inscrire</a> 
     </p>
        </div><!-- /content -->
        <div id=pied></div>
<?php    
include "vues/pied.html";
?>
</div>