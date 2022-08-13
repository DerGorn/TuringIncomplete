var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
import { components } from "../src/import.js";
import { createDivClass, createButton, body } from "./utils.js";
var compCounter = {};
//Component selection on the left side
var componentList = createDivClass("component_list", "list");
var comp = createDivClass("ui_comp", "menu_text");
comp.innerText = "Componets";
componentList.append(comp);
components.forEach(function (element) {
    var componentEntry = createDivClass("component_entry_".concat(element), "list_entry");
    componentEntry.innerText = "".concat(element);
    componentEntry.addEventListener("click", function (event) {
        if (typeof compCounter[element] === "number") {
            compCounter[element]++;
        }
        else
            compCounter[element] = 0;
        console.log(window["new".concat(element)]("".concat(element).concat(compCounter[element])));
    });
    componentList.append(componentEntry);
});
//Menu Buttons on the top
var uiField = createDivClass("ui_field", "menu");
var logo = createDivClass("logo", "menu_text");
logo.innerText = "Turing\nIncomplete";
//@ts-ignore
var buttonCreate = createButton("create_button", "menu_button", function () { return __awaiter(void 0, void 0, void 0, function () {
    var dirHandle, newDirectoryHandle, _a, _b, entry, e_1_1;
    var e_1, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0: return [4 /*yield*/, window.showDirectoryPicker({ mode: "readwrite" })];
            case 1:
                dirHandle = _d.sent();
                return [4 /*yield*/, dirHandle.getDirectoryHandle("My Documents", {
                        create: true,
                    })];
            case 2:
                newDirectoryHandle = _d.sent();
                _d.label = 3;
            case 3:
                _d.trys.push([3, 8, 9, 14]);
                _a = __asyncValues(dirHandle.values());
                _d.label = 4;
            case 4: return [4 /*yield*/, _a.next()];
            case 5:
                if (!(_b = _d.sent(), !_b.done)) return [3 /*break*/, 7];
                entry = _b.value;
                console.log(entry.kind, entry.name);
                _d.label = 6;
            case 6: return [3 /*break*/, 4];
            case 7: return [3 /*break*/, 14];
            case 8:
                e_1_1 = _d.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 14];
            case 9:
                _d.trys.push([9, , 12, 13]);
                if (!(_b && !_b.done && (_c = _a.return))) return [3 /*break*/, 11];
                return [4 /*yield*/, _c.call(_a)];
            case 10:
                _d.sent();
                _d.label = 11;
            case 11: return [3 /*break*/, 13];
            case 12:
                if (e_1) throw e_1.error;
                return [7 /*endfinally*/];
            case 13: return [7 /*endfinally*/];
            case 14: return [2 /*return*/];
        }
    });
}); });
buttonCreate.innerText = "Create\nComponent";
var buttonSafe = createButton("safe_buttopn", "menu_button", function () {
    return console.log("test2");
});
buttonSafe.innerText = "Safe\nProgress";
var buttonLoad = document.createElement("input");
buttonLoad.className = "menu_button";
buttonLoad.id = "load";
buttonLoad.type = "File";
buttonLoad.accept = ".js";
uiField.append(logo, buttonCreate, buttonSafe, buttonLoad);
body.append(uiField, componentList);
