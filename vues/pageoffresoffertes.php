<div data-role="page" id="pageoffresoffertes">
<?php
    include "vues/entete_retour.html";
?>
<div data-role="content" id="divliste"> 
    <ul data-role="listview" >
<?php
    $jour = "";
    foreach ($lesOffres as $uneOffre){
        if($jour!=$uneOffre['jour']){
            $jour=$uneOffre['jour'];
    ?>  
    <div data-role="set-collapsible">
        <li data-role="collapsible">
            
        <h3 data-role="list-diviser" data-theme="b"><?php echo $jour ?></h3>
<?php 
        } //fin si
?>
        <ul data-role="listview" id="lsoffres">  
            <li id="<?php echo $uneOffre['id'] ?>"><a href ="#pageoffre" ><?php echo $uneOffre['date']." à ".$uneOffre['heure']." pour ".$uneOffre['retour']?></a>
        </ul>
<?php 
    } //fin foreach
?>
        </li>
    </div>
    </ul>
    </div><!-- /content -->
<?php    
    include "vues/pied.html";
?>
</div> <!-- /page -->