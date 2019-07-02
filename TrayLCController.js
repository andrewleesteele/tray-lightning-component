({
	doInit : function(component, event, helper) {
        /*
		var action = component.get("c.getItems");
        action.setParams({recordId : component.get("v.recordId")});
        action.setCallback(this, function(response){
            var state = response.getState();
           
            if (component.isValid() && state === "SUCCESS") {
                component.set("v.items", response.getReturnValue());    
            }
        });
        console.log(component);
        console.log(event);
        
        $A.enqueueAction(action);
        */
        console.log(helper.thirdpartyClientCaller(component, event, helper)); 

	},
    stageChange : function(component, event) {
		console.log("numItems has changed");

        doInit(component, event);
    }
 })