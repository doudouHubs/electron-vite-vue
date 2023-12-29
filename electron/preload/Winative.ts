import { ipcRenderer } from "electron"

export default {
    openBroswer() {
        ipcRenderer.send('do-something');
        console.log('exposeInMainWorld', 'do-something');
    },

    openWindow() {
        ipcRenderer.send('open-win', 'http s://www.baidu.com');
    }
}