import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron'
import { IpcChannelType } from './IpcChannelType'

export class ContextBridgeApi {
  public static readonly API_KEY = 'api'

  public sendToMainProcess = async (): Promise<string | void> => {
    try {
      return (await ipcRenderer.invoke(IpcChannelType.TO_MAIN, {
        message: 'レンダープロセス -> メインプロセス',
      })) as string
    } catch (e) {
      return console.log(e)
    }
  }

  public onMessageReceived = (listener: (message: string) => void): void => {
    ipcRenderer.on(
      IpcChannelType.TO_RENDERER,
      (_event: IpcRendererEvent, arg: string) => {
        listener(arg)
      },
    )
  }
}

contextBridge.exposeInMainWorld(
  ContextBridgeApi.API_KEY,
  new ContextBridgeApi(),
)
