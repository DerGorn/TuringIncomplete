var newOn = function (id) {
    return {
        id: id,
        input: false,
        value: true,
        parent: null,
        outputCable: null,
        setValue: function (value) {
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
var newOff = function (id) {
    return {
        id: id,
        input: false,
        value: false,
        parent: null,
        outputCable: null,
        setValue: function (value) {
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
var newAnd = function (id) {
    return newTransistor(id);
};
