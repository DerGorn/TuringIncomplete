interface On extends Connection {}
const newOn = (): On => {
  return {
    input: false,
    value: true,
    parent: null,
    outputCable: null,
    setValue(value: boolean) {
      this.updateCable();
    },
    updateParent() {
      if (this.parent == null) return;
      this.parent.update();
    },
    updateCable() {
      if (this.outputCable == null) return;
      this.outputCable.update();
    },
  };
};

interface Off extends Connection {}
const newOff = (): Off => {
  return {
    input: false,
    value: false,
    parent: null,
    outputCable: null,
    setValue(value: boolean) {
      this.updateCable();
    },
    updateParent() {
      if (this.parent == null) return;
      this.parent.update();
    },
    updateCable() {
      if (this.outputCable == null) return;
      this.outputCable.update();
    },
  };
};
