import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';

type Listener = (data: unknown) => void;

const api = {
  send: (channel: string, data?: unknown): void => {
    ipcRenderer.send(channel, data);
  },
  on: (channel: string, listener: Listener): void => {
    ipcRenderer.on(channel, (_event: IpcRendererEvent, arg: unknown) => listener(arg));
  },
};

contextBridge.exposeInMainWorld('electronAPI', api);
