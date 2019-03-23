import { Common } from "./block-ui.common";
import * as application from "tns-core-modules/application";

declare const android: any;

export class BlockUi extends Common {
    public lock() {
        let activity = application.android.foregroundActivity;

        activity
            .getWindow()
            .setFlags(
                android.view.WindowManager.LayoutParams
                    .FLAG_NOT_TOUCHABLE,
                android.view.WindowManager.LayoutParams
                    .FLAG_NOT_TOUCHABLE
            );
    }

    public unlock() {
        let activity = application.android.foregroundActivity;

        activity
            .getWindow()
            .clearFlags(
                android.view.WindowManager.LayoutParams
                    .FLAG_NOT_TOUCHABLE
            );
    }
}
