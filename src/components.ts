interface On extends Connection {
  id: string;
}
const newOn = (id: string): On => {
  return {
    id,
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

interface Off extends Connection {
  id: string;
}
const newOff = (id: string): Off => {
  return {
    id,
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

interface And extends Transistor {}
const newAnd = (id: string): And => {
  return newTransistor(id);
};
