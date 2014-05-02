<?php
    
    class PdoCov{
        
      	private static $serveur='mysql:host=localhost';
      	private static $bdd='dbname=covoiturage';   		
      	private static $user='root' ;    		
      	private static $mdp='' ;	
        private static $monPdo;
        private static $monPdoCov=null;
        
        //------------------------------------------------------
        
        private function __construct(){
    	PdoCov::$monPdo = new PDO(PdoCov::$serveur.';'.PdoCov::$bdd, PdoCov::$user, PdoCov::$mdp); 
		PdoCov::$monPdo->query("SET CHARACTER SET utf8");
	}
	public function _destruct(){
		PdoCov::$monPdo = null;
	}
        
        //------------------------------------------------------
        
        
        public  static function getPdoCov(){
		if(PdoCov::$monPdoCov==null){
			PdoCov::$monPdoCov= new PdoCov();
		}
		return PdoCov::$monPdoCov;  
	}
        
        //------------------------------------------------------
        
        public function getInfosVisiteur($login, $mdp){
		$req = "select user.id as id, user.nom as nom, user.prenom as prenom from user 
		where user.login='$login' and user.mdp='$mdp'";
		$rs = PdoCov::$monPdo->query($req);
		$ligne = $rs->fetch();
		return $ligne;
	}
        
        
    }
    
?>