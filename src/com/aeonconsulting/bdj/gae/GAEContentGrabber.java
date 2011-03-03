package com.aeonconsulting.bdj.gae;

import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLEncoder;
import java.util.Map;
import java.util.logging.Logger;

import com.aeonconsulting.bdj.util.Bumper;
import com.aeonconsulting.bdj.util.ContentGrabber;
import com.google.appengine.api.urlfetch.HTTPHeader;
import com.google.appengine.api.urlfetch.HTTPMethod;
import com.google.appengine.api.urlfetch.HTTPRequest;
import com.google.appengine.api.urlfetch.HTTPResponse;
import com.google.appengine.api.urlfetch.URLFetchServiceFactory;

public class GAEContentGrabber implements ContentGrabber {

	private static Logger _LOGGER = Logger.getLogger(GAEContentGrabber.class
			.getCanonicalName());

	@Override
	public StringBuffer getContent(Bumper bumper, String url,
			Map<String, String> headersParams) {

		URL urlConnect = null;
		try {
			if (bumper == null) {
				// Contact direct avec BDGest
				StringBuffer urlBuffer = new StringBuffer();
				String[] urlParts = url.split("\\?");
				urlBuffer.append(urlParts[0]);
				urlBuffer.append("?");
				String[] urlParamsParts=urlParts[1].split("\\&");
				for (String params : urlParamsParts) {
					String[] paramsParts = params.split("\\=");
					urlBuffer.append(paramsParts[0]);
					urlBuffer.append("=");
					urlBuffer.append(URLEncoder.encode(paramsParts[1], "ISO-8859-1"));
					urlBuffer.append("&");
				}
				urlConnect = new URL(urlBuffer.toString());
				
				_LOGGER.info("URL = " + urlConnect.toString());
			} else {
				// Contact en passant par le "proxy"
				urlConnect = new URL(bumper.getUrl() + "?"
						+ bumper.getParamSep() + url);
				_LOGGER.info("URL = " + urlConnect.toString());
			}
			
			// Get data
			HTTPRequest request = new HTTPRequest(urlConnect, HTTPMethod.GET);
			
			if (headersParams != null) {
				for (String key : headersParams.keySet()) {
					request.addHeader(new HTTPHeader(key, headersParams
							.get(key)));
				}
			}
			HTTPResponse response = URLFetchServiceFactory.getURLFetchService()
					.fetch(request);
			StringBuffer sb = new StringBuffer();
			sb.append(new String(response.getContent()));
			return sb;
		} catch (MalformedURLException e) {
			_LOGGER.severe("Erreur url de contact bd : " + e.getMessage());
		} catch (IOException e) {
			_LOGGER.severe("Erreur url de contact injoignable : "
					+ e.getMessage());
		}
		return null;
	}

}
