import { useDraggable } from "@dnd-kit/core";
import React, { useState } from "react";
import { ConnectionNode } from "./ConnectionNode";
import { ConnectionNodeElement } from "./ConnectionNodeGraphic";
import { Transistor } from "./Transistor";

interface TransistorProps {
  component: Transistor;
}
const TransistorComponent = ({ component }: TransistorProps) => {
  interface Verschiebung {
    x: number;
    y: number;
  }
  const { input, enable, output, id } = component;

  const [isDragging, setIsDragging] = React.useState(false);
  const [verschiebung, setVerschiebung] = React.useState<Verschiebung>({
    x: 0,
    y: 0,
  });

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  console.log("draggin?", isDragging);
  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={{
        background: "orange",
        width: "50px",
        height: "50px",
        transform: style?.transform,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <ConnectionNodeElement content={output} visibleName="out" />

        <div style={{ display: "flex" }}>
          <ConnectionNodeElement content={enable} visibleName="enable" />
          <ConnectionNodeElement content={input} visibleName="in" />
        </div>
      </div>
    </div>
  );
};

export const TransistorElement = React.memo(TransistorComponent);
