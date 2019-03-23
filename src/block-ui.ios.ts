import { Common } from "./block-ui.common";
import * as utils from "tns-core-modules/utils/utils";

declare const UIApplication;

export class BlockUi extends Common {
    public lock() {
        utils.ios
            .getter(UIApplication, UIApplication.sharedApplication)
            .beginIgnoringInteractionEvents();
    }

    public unlock() {
        utils.ios
            .getter(UIApplication, UIApplication.sharedApplication)
            .endIgnoringInteractionEvents();
    }
}
