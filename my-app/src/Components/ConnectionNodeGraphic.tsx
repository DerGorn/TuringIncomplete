import React from "react";
import { ConnectionNode } from "./ConnectionNode";

interface ConnectionNodeProps {
  content: ConnectionNode;
  visibleName: string;
}

const ConnectionNodeComponent = ({
  content,
  visibleName,
}: ConnectionNodeProps) => {
  const { id, value } = content;
  const [selected, setSelected] = React.useState(false);
  return (
    <div
      tabIndex={0}
      onClick={() => setSelected(!selected)}
      onBlur={() => setSelected(false)}
      id={id}
      style={{
        background: value ? "green" : "red",
        width: "20px",
        height: "20px",
        borderRadius: "20px",
        border: "3px solid",
        borderColor: selected ? "orange" : "transparent",
      }}
    >
      {selected && <span>{visibleName}</span>}
    </div>
  );
};

export const ConnectionNodeElement = React.memo(ConnectionNodeComponent);
