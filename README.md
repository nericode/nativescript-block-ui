# Block UI ![apple](https://cdn3.iconfinder.com/data/icons/picons-social/57/16-apple-32.png) ![android](https://cdn4.iconfinder.com/data/icons/logos-3/228/android-32.png)

## Support

Support Android & iOS.

## Installation

```javascript
tns plugin add nativescript-block-ui
```

## Usage

```javascript
import { BlockUI } from "nativescript-block-ui";

export class Block {

    private blockUI: BlockUI;

    constructor() {
        this.blockUI = new BlockUI();
    }

    public lock() {
        this.blockUI.lock();
    }

    public unlock() {
        this.blockUI.unlock();
    }
}
```

## License

Apache License Version 2.0, January 2004
