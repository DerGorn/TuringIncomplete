export class ConnectionNode {
  id: string;
  value: boolean;
  allowedConnections: number;
  connections: ConnectionNode[];

  constructor(
    id: string,
    value = false,
    allowedConnections = Infinity,
    connections = []
  ) {
    this.id = id;
    this.value = value;
    this.allowedConnections = allowedConnections;
    this.connections = connections;
  }

  addConnection(connectionNode: ConnectionNode) {
    this.connections.push(connectionNode);
    connectionNode.connections.push(this);
    connectionNode.value = this.value;
  }
}
