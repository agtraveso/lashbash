import * as _monaco from 'monaco-editor/esm/vs/editor/editor.api'
import MonacoEditor from './MonacoEditor'

const monaco = window.monaco || _monaco
const install = (Vue, _config) => {
  Vue.component(MonacoEditor.name, MonacoEditor)
}

const VueMonitorEditor = { monaco, MonacoEditor, install }

export default VueMonitorEditor
export { monaco, MonacoEditor, install }
