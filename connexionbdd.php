<?php
    
    class PdoGsb{
        
      	private static $serveur='mysql:host=localhost';
      	private static $bdd='dbname=covoiturage';   		
      	private static $user='root' ;    		
      	private static $mdp='' ;	
        private static $monPdo;
        private static $monPdoGsb=null;
        
        //------------------------------------------------------
        
        private function __construct(){
    	PdoGsb::$monPdo = new PDO(PdoGsb::$serveur.';'.PdoGsb::$bdd, PdoGsb::$user, PdoGsb::$mdp); 
		PdoGsb::$monPdo->query("SET CHARACTER SET utf8");
	}
	public function _destruct(){
		PdoGsb::$monPdo = null;
	}
        
        //------------------------------------------------------
        
        
        public  static function getPdoGsb(){
		if(PdoGsb::$monPdoGsb==null){
			PdoGsb::$monPdoGsb= new PdoGsb();
		}
		return PdoGsb::$monPdoGsb;  
	}
        
        //------------------------------------------------------
        
        public function getInfosVisiteur($login, $mdp){
		$req = "select user.id as id, user.nom as nom, user.prenom as prenom from user 
		where user.login='$login' and user.mdp='$mdp'";
		$rs = PdoGsb::$monPdo->query($req);
		$ligne = $rs->fetch();
		return $ligne;
	}
        
        
    }
    
?>