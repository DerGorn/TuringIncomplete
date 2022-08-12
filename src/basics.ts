interface Connection {
  input: boolean;
  value: boolean;
  parent: Component | null;
  outputCable: Cable | null;
  setValue: (value: boolean) => void;
  updateParent: () => void;
  updateCable: () => void;
}
const newNode = (
  input: boolean = false,
  value: boolean = false,
  parent: Component | null = null,
  outputCable: Cable | null = null
): Connection => {
  return {
    input,
    value,
    parent,
    outputCable,
    setValue(value: boolean) {
      this.value = value;
      if (this.input) this.updateParent();
      if (!this.input) this.updateCable();
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

interface Component {
  id: String;
  update: () => void;
}

interface Transistor extends Component {
  B: Connection;
  E: Connection;
  C: Connection;
  setB: (value: boolean) => void;
  setE: (value: boolean) => void;
}
const newTransistor = (id: String): Transistor => {
  let x: Transistor = {
    id,
    B: newNode(true),
    E: newNode(true),
    C: newNode(),
    setB(value: boolean) {
      this.B.setValue(value);
    },
    setE(value: boolean) {
      this.E.setValue(value);
    },
    update() {
      if (this.B.value) {
        this.C.setValue(this.E.value);
      } else {
        this.C.setValue(false);
      }
    },
  };
  x.B.parent = x;
  x.E.parent = x;
  x.C.parent = x;
  return x;
};

interface Cable {
  input: Connection;
  output: [Connection];
  update: () => void;
}
const createNewConnection = (
  inputNode: Connection,
  outputNode: Connection
): Cable => {
  let cable: Cable = {
    input: inputNode,
    output: [outputNode],
    update() {
      this.output.forEach((element) => {
        element.setValue(this.input.value);
      });
    },
  };
  inputNode.outputCable = cable;
  return cable;
};
const connectNodes = (
  inputNode: Connection,
  outputNode: Connection
): Cable | null => {
  if (inputNode == null || outputNode == null) return null;
  if (inputNode.input) return null;
  if (inputNode.outputCable == null)
    return createNewConnection(inputNode, outputNode);
  inputNode.outputCable.output.push(outputNode);
  return null;
};
