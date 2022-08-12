"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ConnectionNode_1 = require("./ConnectionNode");
var verbindeKnoten = function (inputKnoten, outputKnoten) {
    inputKnoten.connections.push(outputKnoten);
    outputKnoten.connections.push(inputKnoten);
    outputKnoten.value = inputKnoten.value;
};
var Transistor = /** @class */ (function () {
    function Transistor(id, enabled, input, output) {
        if (enabled === void 0) { enabled = false; }
        if (input === void 0) { input = false; }
        if (output === void 0) { output = false; }
        this.id = id;
        this.enable = new ConnectionNode_1.ConnectionNode("".concat(id, "_is_enabled"), enabled, 1);
        this.input = new ConnectionNode_1.ConnectionNode("".concat(id, "_input"), input, 1);
        this.output = new ConnectionNode_1.ConnectionNode("".concat(id, "_output"), output);
    }
    Transistor.prototype.setInput = function (input) {
        this.input.value = input;
        this.update();
    };
    Transistor.prototype.setEnable = function (enable) {
        this.enable.value = enable;
        this.update();
    };
    Transistor.prototype.update = function () {
        var _this = this;
        this.output.value = this.enable.value && this.input.value;
        this.output.connections.forEach(function (x) { return (x.value = _this.output.value); });
    };
    return Transistor;
}());
//Testfälle
var transistor = new Transistor("transistor_1");
var pransistor = new Transistor("transistor_2");
var kransistor = new Transistor("transistor_3");
transistor.setEnable(true);
transistor.setInput(true);
verbindeKnoten(transistor.output, pransistor.input);
verbindeKnoten(pransistor.output, kransistor.input);
pransistor.setEnable(true);
console.log(transistor);
console.log(pransistor);
console.log(kransistor);
