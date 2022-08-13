var body = document.getElementById("body");
var createDiv = function (id) {
    var div = document.createElement("div");
    div.id = id;
    return div;
};
var createDivClass = function (id, className) {
    var div = createDiv(id);
    div.className = className;
    return div;
};
var createButton = function (id, className, func) {
    var button = document.createElement("div");
    button.id = id;
    button.className = className;
    button.addEventListener("click", function (event) { return func(event); });
    return button;
};
export { createDiv, createDivClass, createButton, body };
