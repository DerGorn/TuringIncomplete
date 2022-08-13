import data from "./components.json" assert { type: "json" };
export const components = data.components;
export { verifyPermission };
console.log(components);

async function verifyPermission(fileHandle, readWrite = true) {
  const options = {};
  if (readWrite) {
    options.mode = "readwrite";
  }
  // Check if permission was already granted. If so, return true.
  if ((await fileHandle.queryPermission(options)) === "granted") {
    return true;
  }
  // Request permission. If the user grants permission, return true.
  if ((await fileHandle.requestPermission(options)) === "granted") {
    return true;
  }
  // The user didn't grant permission, so return false.
  return false;
}

// body.addEventListener("click", () => {
//   const data = { name: "Ronn", age: 27 }; //sample json
//   const a = document.createElement("a");
//   const blob = new Blob([JSON.stringify(data)]);
//   a.href = URL.createObjectURL(blob);
//   a.download = "sample-profile"; //filename to download
//   a.click();
// });
