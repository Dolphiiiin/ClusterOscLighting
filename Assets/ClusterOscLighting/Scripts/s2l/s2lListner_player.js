const oscRouterHandleBass = _.worldItemReference("Bass");
const oscRouterHandleLoMid = _.worldItemReference("LoMid");
const oscRouterHandleHiMid = _.worldItemReference("HiMid");
const oscRouterHandleHigh = _.worldItemReference("High");

_.oscHandle.onReceive(messages => {
    messages.forEach((message, i) => {
        _.log(`received message (player): ${message}`);
        switch (message.address) {
            case "/eos/user/0/chan/1":
                _.sendTo(oscRouterHandleBass, "s2l_channel", message.values[0].getFloat());
                break;
            case "/eos/user/0/chan/2":
                _.sendTo(oscRouterHandleLoMid, "s2l_channel", message.values[0].getFloat());
                break;
            case "/eos/user/0/chan/3":
                _.sendTo(oscRouterHandleHiMid, "s2l_channel", message.values[0].getFloat());
                break;
            case "/eos/user/0/chan/4":
                _.sendTo(oscRouterHandleHigh, "s2l_channel", message.values[0].getFloat());
                break;
            default:
                break;
        }
    });
});