
    <jsp:directive.page language="java"
        contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" />
    <jsp:text>
        <![CDATA[ <?xml version="1.0" encoding="UTF-8" ?> ]]>
    </jsp:text>
    <jsp:text>
        <![CDATA[ <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"> ]]>
    </jsp:text>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>BDGest</title>
<link rel="stylesheet" type="text/css" href="css/ext-all.css" ></link>
<link rel="stylesheet" type="text/css" href="css/bdgest.css" ></link>
<!--<script src="script/jquery-1.4.1.min.js" ></script>-->
<!--<script src="script/ext-jquery-adapter.js" ></script>-->

<script src="script/ext-base.js" ></script>
<script src="script/ext-all.js" ></script>
<script src="script/bdgest-extjs.js" ></script>
</head>
<body>
	
	private String id;
	private String num;
	private String titre;
	private Series serie;
	private Auteurs dessinateur;
	private Auteurs scenariste;
	private Date dateAchat;
	private Double prixAchat;
	private String editeur;
	private Etat etat;
	private Format format;
	private Boolean editionOriginale; // Edition originale
	private Boolean horsSerie;
	private Boolean integrale;
	private Boolean editionLimitee;
	private String collection;
	private Double coteActuelle;
	private String reference; // ISBN
	private Date dateDepotLegal;
	private String commentaire;
	private String imgCouverture;
	private Boolean possede; // Indique si je l'ai ou non
	private Auteurs coloriste;
	private Boolean broche;
	private Boolean dedicace; //Ou alors c'est l'image ?
	private String imgExlibris;
	private Integer nbPages;
	private String perso1;
	private String perso2;
	private String perso3;
	private String numA; // ?? kesako ??
	private Boolean perso4;
	private Boolean prete;
	private Date dateModification;
	private String appreciation;
	private String cycle;
	private Date dateImpression;
	private Date dateDedicace;
	private String infoEdition;
	private Integer nbPlanches;
	private Integer idBel;
	private Boolean aVendre;
	private Boolean aAcheter;
	private Integer nbAlbums;
	private Albums refIntegrale;
	private Boolean upload;
	private String resume;
</body>
</html>