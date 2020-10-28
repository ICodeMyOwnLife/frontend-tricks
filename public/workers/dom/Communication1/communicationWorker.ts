declare const self: SharedWorkerGlobalScope;

const portList: MessagePort[] = [];

self.onconnect = ({ ports: [port] }) => {
  portList.push(port);
  port.addEventListener('message', ({ data }) =>
    portList.forEach(p => p.postMessage(data)),
  );
  port.start();
};

export {};
