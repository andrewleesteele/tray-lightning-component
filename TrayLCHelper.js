({ 
    thirdpartyClientCaller : function(component, event, helper) { 
    	var xmlHttp = new XMLHttpRequest();
    	var url = 'https://eb39c2bb-15bf-47f7-8361-44b915c43047.trayapp.io';
    	xmlHttp.open( "GET", url, true );
	    xmlHttp.setRequestHeader('Content-Type', 'application/json');
        xmlHttp.setRequestHeader('Accept', '12345');
        xmlHttp.setRequestHeader('Content-Language', 1);
		xmlHttp.responseType = 'text';
        
		xmlHttp.onload = function () {
    	    console.log("onload");
        	console.log(xmlHttp.readyState);
        	console.log(xmlHttp.status);
    		if (xmlHttp.readyState === 4) {
    	    	if (xmlHttp.status === 200) {
	            	console.log(xmlHttp.response['data']);
            		console.log(xmlHttp.responseText);
                    component.set("v.items",['Andrew', 'Steele', 'Awesome']);
		        }
	    	}
		};

	    xmlHttp.send( null );
    }
})