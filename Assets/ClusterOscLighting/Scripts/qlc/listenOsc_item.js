const BassMaterial = $.material("Material");

let color = [1, 1, 1];

$.onReceive((messageType, arg, sender) => {
    switch (messageType) {
        case "dmx_intensity":
            BassMaterial.setFloat("_Intensity", arg);
            break;
        case "dmx_color":
            $.log(`color: ${arg.color}, value: ${arg.value}, arg: ${arg}`);
            switch (arg.color) {
                case "red":
                    color[0] = arg.value;
                    break;
                case "green":
                    color[1] = arg.value;
                    break;
                case "blue":
                    color[2] = arg.value;
                    break;
                default:
                    break;
            }
            $.log(`color: ${color[0]}, ${color[1]}, ${color[2]}`);
            BassMaterial.setColor("_Color", color[0], color[1], color[2], 1);
            break;
        default:
            break;
    }
}, { player: true });