var newNode = function (input, value, parent, outputCable) {
    if (input === void 0) { input = false; }
    if (value === void 0) { value = false; }
    if (parent === void 0) { parent = null; }
    if (outputCable === void 0) { outputCable = null; }
    return {
        input: input,
        value: value,
        parent: parent,
        outputCable: outputCable,
        setValue: function (value) {
            this.value = value;
            if (this.input)
                this.updateParent();
            if (!this.input)
                this.updateCable();
        },
        updateParent: function () {
            if (this.parent == null)
                return;
            this.parent.update();
        },
        updateCable: function () {
            if (this.outputCable == null)
                return;
            this.outputCable.update();
        },
    };
};
var newTransistor = function (id) {
    var x = {
        id: id,
        in1: newNode(true),
        in2: newNode(true),
        out: newNode(),
        update: function () {
            if (this.B.value) {
                this.C.setValue(this.E.value);
            }
            else {
                this.C.setValue(false);
            }
        },
    };
    x.in1.parent = x;
    x.in2.parent = x;
    x.out.parent = x;
    return x;
};
var createNewConnection = function (inputNode, outputNode) {
    var cable = {
        input: inputNode,
        output: [outputNode],
        update: function () {
            var _this = this;
            this.output.forEach(function (element) {
                element.setValue(_this.input.value);
            });
        },
    };
    inputNode.outputCable = cable;
    return cable;
};
var connectNodes = function (inputNode, outputNode) {
    if (inputNode == null || outputNode == null)
        return null;
    if (inputNode.input)
        return null;
    if (inputNode.outputCable == null)
        return createNewConnection(inputNode, outputNode);
    inputNode.outputCable.output.push(outputNode);
    return null;
};
