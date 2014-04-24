$(function(){
    
    /*********************************** Page connexion************************************/  
                        
    $('#btnconnexion').click( function(e) {
                        // les deux lignes annulent le comportement par défaut du clic
                        // c'est à dire href="#" qui provoquerait un rappel de la même page
                          e.preventDefault();
                          e.stopPropagation();
                          var mdp = $("#mdp").val(); //récupère le contenue de la zone d'id mdp
                          var login = $("#login").val();
                          /* appel d'une fonction ajax */
                          // elle prend 3 arguments :
                          // 1- le nom de la fonction php qui sera exécutée
                          // 2- la liste des arguments à fournir à cette fonction
                          // 3- le nom de la fonction JS qui sera exécutée au "retour" du serveur 
                          $.post("ajax/traiterconnexion.php",{
                              // valorise les deux arguments passés à la fonction traiterconnexion
                                "mdp" : mdp,        
                                "login" : login },
                                foncRetourConnexion );
     });
     /* fonction JS qui sera exécutée après le retour de l'appel ajax précedent */
     // le paramètre data représente la donnée envoyée par le serveur
     // résultat de l'appel de la fonction retourConnexion.php
    function foncRetourConnexion(data){
            if(data.length != 0){
                $("#divconnexion").hide(); // masque la connexion
             }
             else{
             // sinon affichage d'un message dans la div d'id message 
                $("#message").css({color:'red'});
                $("#message").html("erreur de login et/ou mdp");
             }
    }
   
    /***************************************** Page inscription*******************************/
                    
    $('#btninscription').click( function(e) { 
                                e.preventDefault();
                                e.stopPropagation();
                                var nom = $("#nom").val();
                                var prenom = $("#prenom").val();
                                var mail = $("#mail").val();
                                var tel = $("#tel").val();
                                $.post("ajax/enregistreruser.php",{
                                    "nom" : nom,
                                    "prenom" : prenom,
                                     "mail" : mail,
                                     "tel"  : tel,
                                     "type" :  $("input[type=radio][name=type]:checked").attr("value")},
                                    foncRetourEnregistrement );     
                                
    });
    function foncRetourEnregistrement(data){
                 $("#divinscription").html(data);
    }
   /*********************************** Page offresoffertes************************************/  
    
        $("#lstoffres > li").click( function() {
                          var id = $(this).attr("id");
                          $.post("ajax/traiteroffre.php",{
                                "idOffre" : id
                                },
                                 foncRetourOffre,"json" );
          });
          function  foncRetourOffre(data){
                var nom = data["nom"];
                var prenom = data["prenom"];
                var numeroTel = data["tel"];
                var mail = data["mail"];
                $("#nom").html(nom);
                $("#prenom").html(prenom);
                //Teste si l'offre est au départ du domicile -présence du champ ramassage-
                // On aurait pu le faire sur la présence du champ "depart"
                if(data["ramassage"]){
                    var tabRamassage = data["ramassage"];
                    var champramassage = "<br>Etape(s)possible(s) sur le trajet : <ul>";
                    for(var etape in tabRamassage){
                        champramassage += "<li>" + tabRamassage[etape]['lieu'] + "</li>";
                    }
                    champramassage += "</ul>";
                    $("#ramassage").html(champramassage);
                }
                   var champmail = "mailto:" + mail;
                   var champtel = "tel:" + numeroTel;
                   $("#tel").attr("href", champtel);
                   $("#mail").attr("href", champmail);
         }
  /*********************************** Page gerermesoffres************************************/  
         $("#btnSupprimer").click(function(){
                var valeurs=[];
                /* Recherche dans la page tous les input de type checkbox qui sont cochés*/
                $("#pagegerermesoffres input[type=checkbox]:checked").each(function() {
                    /*   récupère chaque id et le met dans le tableau valeurs */
                        var id = $(this).attr("id");
                        valeurs.push(id);
                });
                $.post("ajax/traitersuppression.php",{
                                "lesIdOffres" : valeurs
                                },
                          foncRetourSuppression,"json");
            });
           function foncRetourSuppression(lesIdOffresAsupprimer){
                for(var i = 0; i < lesIdOffresAsupprimer.length; i++){
                   var id = lesIdOffresAsupprimer[i];
            /* Supprime dans la page tous les input d'id récupérés par Ajax ainsi que tous les labels -opérateur virgule-*/
                   $("#pagegerermesoffres input#" + id + ",#pagegerermesoffres label[for=" + id + "]").remove();
                }
           }


     /*********************************************** page ajouteroffre*********************************************/
           // l'événement change a lieu si on modifie la valeur du slider
           // On cache ou affiche les différents éléments selon la valeur du slider
           $("#typeoffre").change(function(){
                var typeOffre = $("#typeoffre").val();
                if(typeOffre == "depart")
                    $("#divramassage").show();
                else
                    $("#divramassage").hide(); 
             });
             
             $("#periodicite").change(function(){
                 var periodicite = $("#periodicite").val();
                 if(periodicite == "date"){
                     $("#divdate").show();
                     $("#divjour").hide();
                 }
                 else{
                     $("#divdate").hide();
                     $("#divjour").show();
                 }
             });
             // Si on clique sur le bouton d'ajout d'une zone de ramassage ajoute une nouvelle zone de saisie
             $("#btnnouveauramassage").click(function(){
                    var html = "<input type=text id=ram name=ram value=''>"; 
                    $("#divramassage").append(html); 
              });
             $("#btnvalideroffre").click(function(e){
                 // appel du validateur 
                    if( $("#frmoffre").valid()){
                        e.preventDefault();
                        e.stopPropagation();
                        var typeoffre = $("#typeoffre").val();
                        var periodicite = $("#periodicite").val();
                        var heure = $("#heure").val();
                        var lieu = $("#lieu").val();
                        var minute = $("#minute").val();
                        var heureminute = heure + "h" + minute;
                        var jour = $("#jour").val();
                        var date = $("#date").val();
                        if(date != ""){
                            // récupération du jour de la date saisie
                             var tab = $("#date").val().split("/");
                             var objDate = new Date(tab[2],tab[1],tab[0]);
                             var numjour = objDate.getDay();
                             if(numjour == 1)jour = "lundi";
                             if(numjour == 2)jour = "mardi";
                             if(numjour == 3)jour = "mercredi";
                             if(numjour == 4)jour = "jeudi";
                             if(numjour == 5)jour = "vendredi";
                             if(numjour == 6)jour = "samedi";
                             if(numjour == 0)jour = "dimanche";
                        }
                        var lesRamassages=[];
                        // parcours de tous les input indiquant un lieu de ramassage
                        // et ajout du contenu dans le tableau
                        $("#divramassage > input").each(function() {
                                var value = $(this).val();
                                lesRamassages.push(value);
                        });
                        $.post("ajax/traiterajouteroffre.php",{
                                "typeoffre" : typeoffre,
                                "periodicite" : periodicite,
                                "heureminute" : heureminute,
                                "lieu" : lieu,
                                "date" : date,
                                "jour" : jour,
                                "lesramassages" : lesRamassages
                                },
                                 foncRetourAjouterOffre);
                    }             
            });
            function foncRetourAjouterOffre(data){
                    if(data)
                          alert("offre bien enregistrée");
            }   
    
    
    
}); // fin fonction principale/* 


