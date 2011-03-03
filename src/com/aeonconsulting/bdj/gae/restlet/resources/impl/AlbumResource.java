package com.aeonconsulting.bdj.gae.restlet.resources.impl;

import java.util.List;

import org.json.JSONObject;
import org.restlet.engine.Engine;
import org.restlet.engine.converter.ConverterHelper;
import org.restlet.ext.json.JsonRepresentation;
import org.restlet.representation.Representation;
import org.restlet.resource.Get;
import org.restlet.resource.Put;
import org.restlet.resource.ServerResource;

import com.aeonconsulting.bdj.gae.restlet.resources.IAlbumResource;
import com.aeonconsulting.bdj.model.Albums;
import com.aeonconsulting.bdj.model.Series;

public class AlbumResource extends ServerResource implements IAlbumResource {

	public void remove() {
		// TODO Auto-generated method stub
		
	}

	@Get("json")
	public Representation retrieve() {
		// Charge l'album voulu
		String albumId = (String)this.getRequestAttributes().get("albumId");
		System.out.println("Album id = "+albumId);
		List<ConverterHelper> converterHelper = Engine.getInstance().getRegisteredConverters();
		for (ConverterHelper converter : converterHelper) {
			System.out.println("ConverterHelper : "+converter.getClass().getCanonicalName());
		}

		Albums album = new Albums();
		album.setNum("1231");
		Series serie = new Series();
		serie.setTitre("Titre de la serie");
		album.setSerie(serie);
		album.setTitre("Titre de l'album");
		
		JSONObject object = new JSONObject(album);
		return new JsonRepresentation(object);
	}

	@Put("json")
	public void store(Representation album) {
		// On a l'album en json
		JsonRepresentation albumJson = (JsonRepresentation)album;
		// Transformation d'un objet JSON en Album
	}
	
}
