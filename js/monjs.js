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
                $.mobile.changePage("#pageaccueil");
             }
             else{
             // sinon affichage d'un message dans la div d'id message 
                $("#message").css({color:'red'});
                $("#message").html("erreur de login et/ou mdp");
             }
    }
   
    /***************************************** Page inscription*******************************/
                    
    $('#btninscription').click( function(e) {
                           // la méthode valid teste les contenuee des saisies et affiche
                           // les erreurs, méthode associée au plugin utilisé jquery.validate
                          if( $("#frminscription").valid()){
                                e.preventDefault();
                                e.stopPropagation();
                                var nom = $("#nom").val();
                                var prenom = $("#prenom").val();
                                var mail = $("#mail").val();
                                var tel = $("#tel").val();
                                $.post("ajax/enregistreruser.php",{
                                    "nom" : nom,
                                    "prenom" :prenom,
                                     "mail" : mail,
                                     "tel"  : tel,
                                     "type" :  $("input[type=radio][name=type]:checked").attr("value")},
                                    foncRetourEnregistrement );     
                            }
        });
    function foncRetourEnregistrement(data){
                 $("#divinscription").html(data);
    }
   /*********************************** Page offresoffertes************************************/  
    
           $("#offresarrivee, #offresdepart ").click(function(e){
                e.preventDefault();
                e.stopPropagation();
                var idBouton = $(this).attr("id");
                var paramAjax = "arriveedomicile";
                if(idBouton == "offresarrivee" )
                    paramAjax = "arriveeentreprise";
                $.post("ajax/traiterlesoffres.php",{
                    "typeoffre" : paramAjax
                 },
                    foncRetourLesOffres,"json" );
            });
       function foncRetourLesOffres(lesOffres){
            $.mobile.changePage("#pageoffresoffertes");
            $("#pageoffresoffertes #divliste").empty();  
            var jour ="";
            var n = 0;
            for(var i =0; i< lesOffres.length;i++ ){
                if(jour != lesOffres[i]['jour']){
                    n++;
                    jour = lesOffres[i]['jour'];
                    var html ="";
                    if(i!=0){
                        html="</ul></div>";
                    }
                    html += "<div data-role=collapsible id=collaps" + n + " >";
                    html += "<h3>"+jour+"</h3>";
                    html += "<ul data-role=listview id=lstoffres" + n + " > ";
                    $("#pageoffresoffertes #divliste").append(html);
                    }
                    html = "<li id=" + lesOffres[i]['id']+" ><a href =#pageoffre >";
                    $("#pageoffresoffertes #lstoffres" + n).append(html);
                    if(lesOffres[i]['ramassage']){
                        html = lesOffres[i]['date'] + " à "+ lesOffres[i]['heure']+" depart de "+ lesOffres[i]['depart']+"</a></li>";
                        $("#pageoffresoffertes #"+lesOffres[i]['id']).attr("title","arriveeentreprise");  
                    }
                    else{
                        html = lesOffres[i]['date'] + " à "+ lesOffres[i]['heure']+" arrivée à "+ lesOffres[i]['retour']+"</a></li>";
                        $("#pageoffresoffertes #"+lesOffres[i]['id']).attr("title","arriveedomicile"); 
                    }
                    $("#pageoffresoffertes li#"+lesOffres[i]['id']+">a").append(html);
                }
                $("#pageoffresoffertes #divliste").trigger('create');  // génère un événement créate et construit les objets jQuery
        }
  
        $("#pageoffresoffertes").on("click","li", function() {  
                          var id = $(this).attr("id");
                          var choix =  $(this).attr("title");
                          $.post("ajax/traiteroffre.php",{
                                "idOffre" : id,
                                "choix" : choix
                                },
                                 foncRetourOffre,"json" );
          });
          
           function  foncRetourOffre(data){
                
              $("#pageoffre #ramassage").empty();
           
              var nom = data["nom"];
              var lieu;
              if(data["depart"])
                  lieu = data["depart"];
              else
                  lieu = data["retour"];
              var prenom = data["prenom"];
              var numeroTel = data["tel"];
              var mail = data["mail"];
              var html="";
              $("#pageoffre #nom").html(nom);
              $("#pageoffre #prenom").html(prenom);
              if(data["ramassage"]){
                    var tabRamassage=data["ramassage"];
                    html ="<br>Etape(s)possible(s) sur le trajet : <ul>";
                    for(var etape in tabRamassage){
                        html+="<li>"+tabRamassage[etape]['lieu']+"</li>";
                    }
                    html+="</ul>";
                    $("#pageoffre #ramassage").html(html);
                }
                $("#pageoffre #tel").attr("href","tel:"+numeroTel);
                $("#pageoffre #mail").attr("href","mailto:"+mail);
               
              }
       /**************************** page de gestion de mes offres*******************************************************/
       
       $("body").on("click","#gerermesoffres",function(e){
           e.preventDefault();
           e.stopPropagation();
           $.post("ajax/traitergerermesoffres.php",
                  foncRetourMesOffres, "json");
       });
            
                    
       function foncRetourMesOffres(data){
           $.mobile.changePage("#pagegerermesoffres");
           var lesOffresDepartEntreprise = data['departenentreprise'];
           var lesOffresArriveeEntreprise = data['arriveeentreprise'];
           $("#listdepart").empty();
           for(var i=0; i < lesOffresDepartEntreprise.length; i++){
               var uneOffre = lesOffresDepartEntreprise[i];
               var legende = dataOffre['jour'] + "  " + uneOffre['date'] + "  " + uneOffre['heure'];
               var html = "<input id=" + uneOffre['id'] + " type=checkbox data-theme=b>";
               html+="<label for=" + uneOffre['id'] + "data-theme=b>"+ legend +"</label>";
               $("#listdepart").append(html);
           }
       }
      
    
}); // fin fonction principale/* 


