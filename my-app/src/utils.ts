import { ConnectionNode } from "./Components/ConnectionNode";

export const verbindeKnoten = (
  inputKnoten: ConnectionNode,
  outputKnoten: ConnectionNode
) => {
  inputKnoten.connections.push(outputKnoten);
  outputKnoten.connections.push(inputKnoten);
  outputKnoten.value = inputKnoten.value;
};
