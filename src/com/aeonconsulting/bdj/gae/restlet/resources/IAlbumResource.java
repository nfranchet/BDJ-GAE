package com.aeonconsulting.bdj.gae.restlet.resources;

import org.restlet.representation.Representation;
import org.restlet.resource.Delete;
import org.restlet.resource.Get;
import org.restlet.resource.Put;

public interface IAlbumResource {

	@Delete
	public void remove();
	
	@Get("json")
	public Representation retrieve();
	
	@Put("json")
	public void store(Representation album);
}
