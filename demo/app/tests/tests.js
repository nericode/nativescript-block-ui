var BlockUi = require("nativescript-block-ui").BlockUi;
var blockUi = new BlockUi();

describe("greet function", function() {
    it("exists", function() {
        expect(blockUi.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(blockUi.greet()).toEqual("Hello, NS");
    });
});