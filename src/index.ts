import { components, verifyPermission } from "../src/import.js";
import { createDiv, createDivClass, createButton, body } from "./utils.js";
export {};

var compCounter: Object = {};

//Component selection on the left side
let componentList = createDivClass("component_list", "list");
let comp = createDivClass("ui_comp", "menu_text");
comp.innerText = "Componets";
componentList.append(comp);
components.forEach((element) => {
  let componentEntry = createDivClass(
    `component_entry_${element}`,
    "list_entry"
  );
  componentEntry.innerText = `${element}`;
  componentEntry.addEventListener("click", (event) => {
    if (typeof compCounter[element] === "number") {
      compCounter[element]++;
    } else compCounter[element] = 0;
    console.log(window[`new${element}`](`${element}${compCounter[element]}`));
  });
  componentList.append(componentEntry);
});

//Menu Buttons on the top
let uiField = createDivClass("ui_field", "menu");
let logo = createDivClass("logo", "menu_text");
logo.innerText = "Turing\nIncomplete";
//@ts-ignore
let buttonCreate = createButton("create_button", "menu_button", async () => {
  //@ts-ignore
  const dirHandle = await window.showDirectoryPicker({ mode: "readwrite" });
  const newDirectoryHandle = await dirHandle.getDirectoryHandle(
    "My Documents",
    {
      create: true,
    }
  );
  for await (const entry of dirHandle.values()) {
    console.log(entry.kind, entry.name);
  }
});
buttonCreate.innerText = "Create\nComponent";
let buttonSafe = createButton("safe_buttopn", "menu_button", () =>
  console.log("test2")
);
buttonSafe.innerText = "Safe\nProgress";
let buttonLoad = document.createElement("input");
buttonLoad.className = "menu_button";
buttonLoad.id = "load";
buttonLoad.type = "File";
buttonLoad.accept = ".js";
uiField.append(logo, buttonCreate, buttonSafe, buttonLoad);

body.append(uiField, componentList);
