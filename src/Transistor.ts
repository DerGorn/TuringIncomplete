import { ConnectionNode } from "./ConnectionNode";

const verbindeKnoten = (
  inputKnoten: ConnectionNode,
  outputKnoten: ConnectionNode
) => {
  inputKnoten.connections.push(outputKnoten);
  outputKnoten.connections.push(inputKnoten);
  outputKnoten.value = inputKnoten.value;
};

class Transistor {
  id: string;
  enable: ConnectionNode;
  input: ConnectionNode;
  output: ConnectionNode;
  constructor(id: string, enabled = false, input = false, output = false) {
    this.id = id;
    this.enable = new ConnectionNode(`${id}_is_enabled`, enabled, 1);
    this.input = new ConnectionNode(`${id}_input`, input, 1);
    this.output = new ConnectionNode(`${id}_output`, output);
  }

  setInput(input: boolean) {
    this.input.value = input;
    this.update();
  }
  setEnable(enable: boolean) {
    this.enable.value = enable;
    this.update();
  }
  update() {
    this.output.value = this.enable.value && this.input.value;
    this.output.connections.forEach((x) => (x.value = this.output.value));
  }
}

//Testfälle
const transistor = new Transistor("transistor_1");
const pransistor = new Transistor("transistor_2");
const kransistor = new Transistor("transistor_3");

transistor.setEnable(true);
transistor.setInput(true);
verbindeKnoten(transistor.output, pransistor.input);
verbindeKnoten(pransistor.output, kransistor.input);

pransistor.setEnable(true);
console.log(transistor);
console.log(pransistor);
console.log(kransistor);
