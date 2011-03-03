/**
 * Gestion de l'internationalisation
 * La méthode fournit par ExtJs ne me plait pas et est trop contraignante
 */
function I18Nf() {
	
	this.i18nFields = new Array();

	var loaded = false;
	
	if (Ext.isIE) {
		this.currentLocale = navigator.browserLanguage;
	} else {
		this.currentLocale = navigator.language;
	}
	console.debug("currentLocale = "+this.currentLocale);
	var this_ = this;
	this.getStore = function() { return new Ext.data.JsonStore({
		autoLoad:true,
		autoDestroy:true,
		storeId:'i18nData',
		/*idProperty:'ref',*/
		fields: ['ref','locale'],
		root: 'i18n',
		url: 'script/i18n-'+this.currentLocale+".js",
		listeners: {
			'load': function() {
				console.debug("i18n loaded");
				canLoadJS = true;
				loadJS();
			}
		}
	})};
	
	this.store = this.getStore();
	
	this.reload = function() {
		console.debug("Reload : "+this.currentLocale);
		this.store = this.getStore();
		//this.store.load();
	}
	
	/**
	 * Add a text to be i18n when data is loaded
	 */
	this.add = function(object, field) {
		console.debug("avant : ");
		console.debug(this.i18nFields.length);
		this.i18nFields[this.i18nFields.length]={obj:object,field:field};
		console.debug("apres : ");
		console.debug(this.i18nFields.length);
	}
	
	/**
	 * Retourne la valeur de la locale pour la langue voulue
	 */
	 this.get = function (ref) {
		console.debug("I18N : get "+ref);
		var locale = this.store.find('ref',ref);
		var sortie = "";
		if (locale != -1) {
			sortie = this.store.getAt(locale).data.locale;
		} else {
			sortie = '#'+ref+'#';
		}
		return sortie;
	}


}



I18N = new I18Nf();