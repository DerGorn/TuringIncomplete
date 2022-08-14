import React from "react";
import { Transistor } from "./Components/Transistor";
import { Editor } from "./Editor";
import { verbindeKnoten } from "./utils";

export const Game = () => {
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

  return (
    <Editor transistorList={[transistor, pransistor, kransistor]}></Editor>
  );
};
