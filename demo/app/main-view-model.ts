import { Observable } from "tns-core-modules/data/observable";
import { BlockUI } from "nativescript-block-ui";

export class HelloWorldModel extends Observable {
    public message: string;
    private blockUI: BlockUI;

    constructor() {
        super();
        this.blockUI = new BlockUI();
    }

    public lock() {
        this.blockUI.lock();
        setTimeout(() => {
            this.blockUI.unlock();
        }, 5000);
    }

    public unlock() {
        this.blockUI.unlock();
    }
}
