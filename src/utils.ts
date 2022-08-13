const body = document.getElementById("body");

const createDiv = (id: string): HTMLDivElement => {
  let div = document.createElement("div");
  div.id = id;
  return div;
};

const createDivClass = (id: string, className: string): HTMLDivElement => {
  let div = createDiv(id);
  div.className = className;
  return div;
};

const createButton = (id: string, className: string, func: Function) => {
  let button = document.createElement("div");
  button.id = id;
  button.className = className;
  button.addEventListener("click", (event) => func(event));
  return button;
};

export { createDiv, createDivClass, createButton, body };
