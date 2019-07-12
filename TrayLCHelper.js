({ 
    thirdpartyClientCaller : function(component, event, helper) { 
        
        var xmlHttp = new XMLHttpRequest();
        var url = 'https://eb39c2bb-15bf-47f7-8361-44b915c43047.trayapp.io';
        
        xmlHttp.open( "GET", url, true );
        xmlHttp.setRequestHeader('Content-Type', 'application/json');
        xmlHttp.setRequestHeader('Accept', component.get("v.lead.Email"));
        xmlHttp.setRequestHeader('Content-Language', component.get("v.page_number"));
        xmlHttp.responseType = 'text';
        xmlHttp.onload = function () {
            console.log("onload");
            if (xmlHttp.readyState === 4) {
                if (xmlHttp.status === 200) {
                    var response = JSON.parse(xmlHttp.responseText);
                    component.set("v.items",response.data);
                }
            }
        };
        xmlHttp.send( null );
    }
})