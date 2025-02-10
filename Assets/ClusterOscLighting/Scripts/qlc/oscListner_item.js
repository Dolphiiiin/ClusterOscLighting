const oscRouterHandleLight1 = _.worldItemReference("Light1");
const oscRouterHandleLight2 = _.worldItemReference("Light2");
const oscRouterHandleLight3 = _.worldItemReference("Light3");
const oscRouterHandleLight4 = _.worldItemReference("Light4");

_.oscHandle.onReceive(messages => {
    messages.forEach((message, i) => {
        _.log(`received message (player): ${message}`);
        switch (message.address) {
            case "/0/dmx/0":
                _.sendTo(oscRouterHandleLight1, "dmx_color", {color:"red", value:message.values[0].getFloat()});
                break;
            case "/0/dmx/1":
                _.sendTo(oscRouterHandleLight1, "dmx_color", {color:"green", value:message.values[0].getFloat()});
                break;
            case "/0/dmx/2":
                _.sendTo(oscRouterHandleLight1, "dmx_color", {color:"blue", value:message.values[0].getFloat()});
                break;
            case "/0/dmx/3":
                _.sendTo(oscRouterHandleLight1, "dmx_intensity", message.values[0].getFloat());
                break;
                
            case "/0/dmx/4":
                _.sendTo(oscRouterHandleLight2, "dmx_color", {color:"red", value:message.values[0].getFloat()});
                break;
            case "/0/dmx/5":
                _.sendTo(oscRouterHandleLight2, "dmx_color", {color:"green", value:message.values[0].getFloat()});
                break;
            case "/0/dmx/6":
                _.sendTo(oscRouterHandleLight2, "dmx_color", {color:"blue", value:message.values[0].getFloat()});
                break;
            case "/0/dmx/7":
                _.sendTo(oscRouterHandleLight2, "dmx_intensity", message.values[0].getFloat());
                break;
                
            case "/0/dmx/8":
                _.sendTo(oscRouterHandleLight3, "dmx_color", {color:"red", value:message.values[0].getFloat()});
                break;
            case "/0/dmx/9":
                _.sendTo(oscRouterHandleLight3, "dmx_color", {color:"green", value:message.values[0].getFloat()});
                break;
            case "/0/dmx/10":
                _.sendTo(oscRouterHandleLight3, "dmx_color", {color:"blue", value:message.values[0].getFloat()});
                break;
            case "/0/dmx/11":
                _.sendTo(oscRouterHandleLight3, "dmx_intensity", message.values[0].getFloat());
                break;
                
            case "/0/dmx/12":
                _.sendTo(oscRouterHandleLight4, "dmx_color", {color:"red", value:message.values[0].getFloat()});
                break;
            case "/0/dmx/13":
                _.sendTo(oscRouterHandleLight4, "dmx_color", {color:"green", value:message.values[0].getFloat()});
                break;
            case "/0/dmx/14":
                _.sendTo(oscRouterHandleLight4, "dmx_color", {color:"blue", value:message.values[0].getFloat()});
                break;
            case "/0/dmx/15":
                _.sendTo(oscRouterHandleLight4, "dmx_intensity", message.values[0].getFloat());
                break;
            default:
                break;
        }
    });
});