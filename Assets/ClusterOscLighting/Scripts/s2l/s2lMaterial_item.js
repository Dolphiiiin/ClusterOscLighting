const BassMaterial = $.material("Material");

$.onReceive((messageType, arg, sender) => {
    switch (messageType) {
        case "s2l_channel":
            BassMaterial.setFloat("_Intensity", arg/100);
            break;
        default:
            break;
    }
}, { player: true });