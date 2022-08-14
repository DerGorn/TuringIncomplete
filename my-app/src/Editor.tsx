import { DndContext, useDroppable } from "@dnd-kit/core";
import React, { useState } from "react";
import { Transistor } from "./Components/Transistor";
import { TransistorElement } from "./Components/TransitorGraphic";
interface EditorProps {
  transistorList: Transistor[];
}
export const EditorComponent = ({ transistorList }: EditorProps) => {
  const { isOver, setNodeRef } = useDroppable({
    id: "editor",
  });
  const style = {
    width: isOver ? "300px" : "500px",
  };

  const [isDropped, setIsDropped] = useState(false);
  const draggableMarkup = <p>123s</p>;

  function handleDragEnd(event: any) {
    if (event.over && event.over.id === "droppable") {
      setIsDropped(true);
    }
  }

  console.log("isOver", isOver);
  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div
        ref={setNodeRef}
        style={{
          background: "gray",
          width: style.width,
          height: "500px",
        }}
      >
        <>
          <p style={{ color: "white" }}>Editor</p>
          {transistorList.map((x) => (
            <TransistorElement component={x}></TransistorElement>
          ))}
        </>
      </div>
    </DndContext>
  );
};

export const Editor = React.memo(EditorComponent);
