
Ext.onReady(function() {
	var lb = Ext.get('lib-bar');
	if (lb) {
		lb.show();
	}

	
	console.debug("I18N.get('data') = "+I18N.get("data"));
	
	
});


var canStart = false;
var canLoadJS = false;
function jsLoaded() {
	canStart = true;
	console.debug("jsLoaded");
	start();
}

function loadJS() {
	if (canLoadJS) {
		canLoadJS = false;
//		Ext.TaskMgr.stop(starterJS);
		Ext.Loader.load(new Array("script/bdgest-extjs-saisiealbum.js","script/bdgest-extjs-import.js?"+Math.round(Math.random()*1000000)),jsLoaded,this,true);
		
	}
}



var App = null;
function start() {
	if (canStart) {
		canStart = false;
		if (App != null) {
			App.clean();
		}
//		Ext.TaskMgr.stop(starter);
		console.debug("----- Demarrage de l'application -----");
		App = new BDGestApp();
		App.display();
	}
}

/**
 * Entry point of application
 */
function BDGestApp() {

	this.viewport = null, 
	this.import = new Import(),
	this.saisieAlbum = new SaisieAlbum();

	this.display = function() {
		this.import.init();
		this.import.span.region = "west";
		this.saisieAlbum.region = "center";
		this.viewport = new Ext.Viewport( {
			layout : 'border',
			items : [ this.import.span, this.saisieAlbum]
		});
	}
	
	this.clean = function() {
		this.viewport.destroy();
	}
}
