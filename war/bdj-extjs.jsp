
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
<link rel="stylesheet" type="text/css" href="css/ext-all.css?<% out.print(Math.round(Math.random()*100000)); %>" ></link>
<link rel="stylesheet" type="text/css" href="css/bdgest.css?<% out.print(Math.round(Math.random()*100000)); %>" ></link>
<script >
if (typeof(console) == 'undefined') {
	var console = {
		debug : function(text) {
			alert(text);
		}
	}
}
</script>

<script src="script/ext-base.js?<% out.print(Math.round(Math.random()*100000)); %>" ></script>
<script src="script/ext-all.js?<% out.print(Math.round(Math.random()*100000)); %>" ></script>
<script src="script/ext-Loader.js?<% out.print(Math.round(Math.random()*100000)); %>" ></script>
<script src="script/bdgest-extjs-i18n.js?<% out.print(Math.round(Math.random()*100000)); %>" ></script>
<script src="script/bdgest-extjs.js?<% out.print(Math.round(Math.random()*100000)); %>" ></script>

</head>
<body>
<div id="menu">
	<div id="menuButtons"></div>
</div>
<div id="SaisieAlbum">
</div>
<div id="ListeAlbum" >
	<!-- La liste des boutons -->
</div>
</body>
</html>