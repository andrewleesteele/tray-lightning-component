({
    doInit : function(component, event, helper) {

        var action = component.get("c.getEmail");
        action.setParams({recordId : component.get("v.recordId")});
        action.setCallback(this, function(response){
            var state = response.getState();
           
            if (component.isValid() && state === "SUCCESS") {   
                component.set("v.lead", response.getReturnValue());    
            }
            helper.thirdpartyClientCaller(component, event, helper); 

        });

        $A.enqueueAction(action);

    },
    stageChange : function(component, event, helper) {
        console.log("numItems has changed");

        helper.thirdpartyClientCaller(component, event, helper); 
    },
    incrementPage : function(component, event, helper) {
        var new_page_number = component.get("v.page_number")+1;
        var items = component.get("v.items");
        
        if(items.length != 0){
            component.set("v.page_number", new_page_number);
            helper.thirdpartyClientCaller(component, event, helper)  
        }
        console.log(component.get("v.page_number"));
    },
    decrementPage : function(component, event, helper) {
        var new_page_number = component.get("v.page_number")-1;
        if(new_page_number > 0){
            component.set("v.page_number", new_page_number);
            helper.thirdpartyClientCaller(component, event, helper)
        }      
        console.log(component.get("v.page_number"));

    }
 })