import { ipcRenderer } from "electron"

export default {
    openBroswer() {
        ipcRenderer.send('do-something');
        console.log('exposeInMainWorld', 'do-something');
    },

    openWindow() {
        ipcRenderer.invoke('open-win', 'demo');
        console.log('exposeInMainWorld', 'do-something');
    }
}