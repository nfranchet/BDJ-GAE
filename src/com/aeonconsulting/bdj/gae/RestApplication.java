package com.aeonconsulting.bdj.gae;

import org.restlet.Application;
import org.restlet.Restlet;
import org.restlet.routing.Router;

import com.aeonconsulting.bdj.gae.restlet.resources.impl.AlbumResource;

public class RestApplication extends Application{

	public synchronized Restlet createRoot() {
		Router router = new Router(getContext());
		router.attach("/albums/{albumId}", AlbumResource.class);
		return router;
	}
	
}
