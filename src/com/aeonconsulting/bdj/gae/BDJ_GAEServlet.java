package com.aeonconsulting.bdj.gae;

import java.io.IOException;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.aeonconsulting.bdj.proxy.Proxy;
import com.aeonconsulting.bdj.proxy.ProxyService;
import com.aeonconsulting.bdj.services.DispatchService;


public class BDJ_GAEServlet extends Proxy {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 4087069676751395933L;

	public void doGet(HttpServletRequest req, HttpServletResponse resp)
			throws IOException {
		resp.setContentType("text/plain");
		Map<String, String> params = new HashMap<String, String>();
		Enumeration<String> paramsName = req.getParameterNames();
		while (paramsName.hasMoreElements()) {
			String name = (String)paramsName.nextElement();
			params.put(name, req.getParameter(name));
		}
		
		// Retrieve the local or dev server
		Boolean isDev = req.getSession().getServletContext().getServerInfo().contains("Development") ? true : false;
		if (isDev) {
			// Set the bumper to bypass proxy restriction
			//ProxyService.setBumper("http://localhost:8080/BDGest-Proxy/Proxy");
		}
		ProxyService.setContentGrabber(new GAEContentGrabber());
		try {
			String sortie = DispatchService.getInstance().dispatch(params);
			resp.getWriter().write(sortie);
		} catch (Exception e) {
			resp.getWriter().println("Error : "+e.getMessage());
			e.printStackTrace(resp.getWriter());
		}
	}
}
