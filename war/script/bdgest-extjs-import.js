// Class d'import
function Import() {
	this.buttonsList = new Array('0','A','B',"C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," "),

	this.buttonsBarObj1 = new Ext.Toolbar("{id:'menu1', xtype: 'buttongroup', columns: "+this.buttonsList.length/2+"}"),
	this.buttonsBarObj2 = new Ext.Toolbar("{id:'menu2', xtype: 'buttongroup', columns: "+this.buttonsList.length/2+"}"),
	
	this.combo = new Ext.form.ComboBox({
	    typeAhead: true,
	    triggerAction: 'all',
	    mode:'local',
	    value:'albums',
	    store: new Ext.data.ArrayStore({
	        id: 0,
	        fields: [
	            'myId',
	            'displayText'
	        ],
	        data: [["albums", 'Albums'], ["parabd", 'Para-Bd'],["revues","Revues"]]
	    }),
	    valueField: 'myId',
	    displayField: 'displayText',
	    listeners: {
			'select' : function() {
				alert("J'ai choisi : "+this.getValue())
			}
		}
	}),

	this.comboLang = new Ext.form.ComboBox({
	    typeAhead: true,
	    triggerAction: 'all',
	    mode:'local',
	    store: new Ext.data.ArrayStore({
	        id: 0,
	        fields: [
	            'myId',
	            'displayText'
	        ],
	        data: [["en", 'Anglais'], ["fr", 'Français'],["de","Allemand"]]
	    }),
	    value:I18N.currentLocale,
	    valueField: 'myId',
	    displayField: 'displayText',
	    listeners: {
			'select' : function() {
				console.debug("Changement de langue : "+this.value);
				I18N.currentLocale = this.value;
				// reDisplayScreen
				I18N.reload(); // On recharge les locales
			}
		}
	}),
	
	this.storeTemp = new Ext.data.JsonStore({
        url: 'bdj_gae?action=series&lettre='+"A".charCodeAt(0),
        root: 'listeObject',
        remoteSort:true,
        fields: ['idBel', 'nom', 'nbAlbum', 'langue']
    }),
	this.storeTemp.load(),
	
    this.listView= new Ext.list.ListView({
    	store: this.storeTemp,
        multiSelect: false,
        emptyText: '',
        autoScroll: true,
        columnSort:false,
        columnResize:false,
        deferHeight:true,
        id:'listView',
        width: 395,
        height: 420,
        /*reserveScrollOffset: true,*/

        columns: [{
            header: I18N.get('idBel'),
            width: .1,
            dataIndex: 'idBel'
        },{
            header: 'Nom',
            width: .6, 
            dataIndex: 'nom'
        },{
            header: 'nbAlbum',
            dataIndex: 'nbAlbum',
            width: .1
        },{
            header: 'langue',
            dataIndex: 'langue',
            width: .2
        }]
        
    }),

	this.init = function() {
		var this_ = this;
		for (i = 0; i< this.buttonsList.length; i++) {
		
			lettre = this.buttonsList[i];
			if (lettre == " ") {
				lettre = "_";
			}
		
			var action = new Ext.Action({
		        text: lettre,
		        handler: function(){
		    		// TODO : add call JSon data store
		            alert("Coucou : "+this.text);
		            var store = new Ext.data.JsonStore({
		                url: 'bdj_gae?action=series&lettre='+this.text.charCodeAt(0),
		                root: 'listeObject',
		                fields: ['idBel', 'nom', 'nbAlbum', 'langue']
		            });
		            store.load();
		            this_.listView.bindStore(store);
		        }/*,
		        iconCls: 'blist'*/
		    });
			if (i%2 != 0) {
				this_.buttonsBarObj1.add(action);
			} else {
				this_.buttonsBarObj2.add(action);
			}
		}
	    /*this.span.add(this.combo),
	    this.span.add(this.buttonsBarObj1),
	    this.span.add(this.buttonsBarObj2),
	    this.spanButton.add(this.listView),
	    this.span.add(this.spanButton);*/
	},
    this.spanButton = new Ext.Panel({
	    width: 400,
	    height: 420,
	    layout:'table',
	    autoScroll: false,
        layoutConfig: {
            // The total column count must be specified here
            columns: 1
        },
        items : [this.listView]
    }),	

    this.span = new Ext.Panel({
	    width: 400,
	    height: 500,
	    style: 'margin-top:15px',
	    /*bodyStyle: 'padding:1px',*/
        title: I18N.get('Liste des objets'),
        layout: 'table',
        /*collapsible:true,*/
        autoScroll: false,
        layoutConfig: {
            // The total column count must be specified here
            columns: 1
        },
    	items : [this.combo, this.comboLang, this.buttonsBarObj1, this.buttonsBarObj2, this.spanButton] 
    });


}
