import { verbindeKnoten } from "../utils";
import { ConnectionNode } from "./ConnectionNode";

export class Transistor {
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
