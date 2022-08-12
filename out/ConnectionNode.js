"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectionNode = void 0;
var ConnectionNode = /** @class */ (function () {
    function ConnectionNode(id, value, allowedConnections, connections) {
        if (value === void 0) { value = false; }
        if (allowedConnections === void 0) { allowedConnections = Infinity; }
        if (connections === void 0) { connections = []; }
        this.id = id;
        this.value = value;
        this.allowedConnections = allowedConnections;
        this.connections = connections;
    }
    ConnectionNode.prototype.addConnection = function (connectionNode) {
        this.connections.push(connectionNode);
        connectionNode.connections.push(this);
        connectionNode.value = this.value;
    };
    return ConnectionNode;
}());
exports.ConnectionNode = ConnectionNode;
