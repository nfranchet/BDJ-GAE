// Classe de saisie/visualisation d'un album
SaisieAlbum = Ext.extend(Ext.Panel, {

	    album: new Ext.FormPanel({
	    	labelWidth:200,
	    	width:350,
	    	id:'album',
	        title: I18N.get('pannel.collection'),
	        url: 'save-album',
	        defaults: {width: 230},
	        autoHeight:false,
	        autoScroll:true,
	        defaultType: 'textfield',
	        items: [
	                new Ext.Panel({
	                	layout:'column',
	                	autoWidth:true,
	                	border:false,
	                	items: [
	                	        new Ext.Panel({
	                	        	border:false,
	                	        	columnWidth:.50,
	                	        	layout:'form',
	                	        	items: new Ext.form.ComboBox(
					                {   name:'album_serie',
					                	fieldLabel:I18N.get('serie'),
					                	allowBlank: false
					                })
	                	        })
	                	        , new Ext.Panel({
		            	        	columnWidth:.50,
		            	        	border:false,
		            	        	layout:'form',
		            	        	items:  new Ext.Button({
		            	        		icon:'bdj-images/search.png'
				                		})
	                	        })
	                	        ]
	                }),
	                {
	                	name:'album_num',
			    		fieldLabel:I18N.get('num'),
		                allowBlank: false
		    			},
	                {
	                	name:'album_titre',
	                	fieldLabel:I18N.get('titre'),
	                	allowBlank: false
	                },
	                new Ext.form.ComboBox(
	                {
	                	name:'album_scenario',
	                	fieldLabel:I18N.get('scenario'),
	                	allowBlank: false
	                }),
	                new Ext.form.ComboBox(
	                {
	                	name:'album_dessin',
	                	fieldLabel:I18N.get('dessin'),
	                	allowBlank: false
	                }),
	                new Ext.form.ComboBox(
	                {
	                	name:'album_couleur',
	                	fieldLabel:I18N.get('couleur'),
	                	allowBlank: false
	                }),
	                {
	                	name:'album_collectif',
	                	fieldLabel:I18N.get('collectif'),
	                	allowBlank: false
	                },
	                new Ext.form.ComboBox(
	                {
	                	name:'album_editeur',
	                	fieldLabel:I18N.get('editeur'),
	                	allowBlank: false
	                }),
	                new Ext.form.ComboBox(
	                {
	                	name:'album_collection',
	                	fieldLabel:I18N.get('collection'),
	                	allowBlank: false
	                }),
	                {
	                	name:'album_isbn',
	                	fieldLabel:I18N.get('ISBN'),
	                	allowBlank: false
	                },
	                new Ext.form.ComboBox(
	                {
	                	name:'album_perso1',
	                	fieldLabel:I18N.get('perso1'),
	                	allowBlank: false
	                }),
	                new Ext.form.ComboBox(
	                {
	                	name:'album_perso2',
	                	fieldLabel:I18N.get('perso2'),
	                	allowBlank: false
	                }),
	                new Ext.form.ComboBox(
	                {
	                	name:'album_perso3',
	                	fieldLabel:I18N.get('perso3'),
	                	allowBlank: false
	                }),
	                new Ext.form.ComboBox(
	                {
	                	name:'album_format',
	                	fieldLabel:I18N.get('format'),
	                	allowBlank: false
	                }),
	                {
	                	name:'album_cycle',
	                	fieldLabel:I18N.get('cycle'),
	                	allowBlank: false
	                },
	                new Ext.form.ComboBox(
	                {
	                	name:'album_etat',
	                	fieldLabel:I18N.get('etat'),
	                	allowBlank: false
	                }),
	                {
	                	name:'album_prixachat',
	                	fieldLabel:I18N.get('prix.achat'),
	                	allowBlank: false
	                },
	                {
	                	name:'album_dateachat',
	                	fieldLabel:I18N.get('date.achat'),
	                	allowBlank: false
	                },
	                {
	                	name:'album_note',
	                	fieldLabel:I18N.get('note'),
	                	allowBlank: false
	                },
	                {
	                	name:'album_coteactuelle',
	                	fieldLabel:I18N.get('cote.actuelle'),
	                	allowBlank: false
	                },
	                {
	                	name:'album_depotlegal',
	                	fieldLabel:I18N.get('depot.legal'),
	                	allowBlank: false
	                },
	                {
	                	name:'album_acheveimprimer',
	                	fieldLabel:I18N.get('acheve.imprimer'),
	                	allowBlank: false
	                },
	                {
	                	name:'album_nbplanches',
	                	fieldLabel:I18N.get('nombre.planches'),
	                	allowBlank: false
	                },
	                {
                	name:'album_id',
		    		fieldLabel:I18N.get('idBel'),
	                allowBlank: false
	    			},
	    			new Ext.Panel({
	    				layout:'column',
	    				autoWidth:true,
	    				border:false,
	    				items:[
	    				    new Ext.Panel({
	    					columnWidth:.50,
	    					layout:'form',
	    					border:false,
	    					items: [
    					        new Ext.form.Checkbox(
				                {
				                	name:'album_integral',
				                	fieldLabel:I18N.get('integral'),
				                	allowBlank: false
				                }),
				                new Ext.form.Checkbox(
				                {
				                	name:'album_tiragetete',
				                	fieldLabel:I18N.get('tirage.de.tete'),
				                	allowBlank: false
				                }),
				                new Ext.form.Checkbox(
				                {
				                	name:'album_editionoriginale',
				                	fieldLabel:I18N.get('edition.originale'),
				                	allowBlank: false
				                }),
				                new Ext.form.Checkbox(
				                {
				                	name:'album_dedicace',
				                	fieldLabel:I18N.get('dedicace'),
				                	allowBlank: false
				                }),
				                new Ext.form.Checkbox(
				                {
				                	name:'album_couverturesouple',
				                	fieldLabel:I18N.get('couverture.souple'),
				                	allowBlank: false
				                }),
				                new Ext.form.Checkbox(
				                {
				                	name:'album_perso4',
				                	fieldLabel:I18N.get('perso4'),
				                	allowBlank: false
				                }),
				                new Ext.form.Checkbox({
				                	name:'album_avendre',
				                	fieldLabel:I18N.get('avendre'),
				                })
    					        ]
	    				}),
	    				new Ext.Panel({
	    					layout:'form',
	    					border:false,
	    					columnWidth:.50,
	    					items:
			    				new Ext.TabPanel({
			    					border:true,
			    					title:'col2',
			    					autoWidth:true,
			    					activeTab:0,
			    					items: [{html:'infos editions ....', title:I18N.get('info.edition')},
			    					        {html:'resume ....', title:I18N.get('resume')},
			    					        {html:'commentaires ....', title:I18N.get('commentaires')}
			    					        ]
			    				})
	    				})
	    				]
	    			})
	                /** TODO : Add a tab panel here containing 'info edition', 'resume', 'commentaire' */

	    			/*
	    			new Ext.form.TimeField({
	    				fieldLabel:I18N.get('time'),
	    				name:'time',
	    				minValue: '8:00am',
	    				maxValue: '6:00pm'
	    			})*/
            ],
            buttons: [{
            	text: I18N.get('saisie.album.integral')
            },{
            	text: I18N.get('saisie.album.nouveau')
            }, {
            	text: I18N.get('saisie.album.sauver')
            }, {
            	text: I18N.get('saisie.album.supprimer')
            }
                      ]
	    	}
	    ),
    

    images: new Ext.Panel({
        title: I18N.get('Images associées à l\'album'),
        html: '&lt;TODO : Mettre ici la gestion des images&gt;',
        cls:'empty'
    }),

    divers: new Ext.Panel({
        title: I18N.get('Prêts, historiques des cotes et légendes des icones'),
        html: '&lt;TODO : Mettre ici le contenu de divers&gt;',
        cls:'empty'
    }),

    constructor: function(config) {
		
	
		config = Ext.apply({
	        margins:'5 0 5 5',
	        split:true,
	        width: 210,
	        layout:'accordion',
	        items: [this.album, this.images, this.divers]},config
        );
        
        SaisieAlbum.superclass.constructor.call(this, config);
    }
        
	
	/*
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
	*/
});