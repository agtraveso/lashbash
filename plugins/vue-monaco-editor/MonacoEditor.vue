<template>
  <div class="vue-monaco-editor-container"></div>
</template>

<script>
import * as _monaco from 'monaco-editor/esm/vs/editor/editor.api'
import { noop } from './utils'
const monaco = window.monaco || _monaco

export default {
  name: 'MonacoEditor',
  props: {
    value: { type: String, default: undefined },
    language: { type: String, default: 'javascript' },
    theme: { type: String, default: 'vs' },
    options: {
      type: Object,
      default() {
        return {}
      }
    },
    overrideServices: {
      type: Object,
      default() {
        return {}
      }
    },
    beforeMount: { type: Function, default: noop }
  },
  watch: {
    options: {
      deep: true,
      handler(options) {
        this.editor && this.editor.updateOptions(options)
      }
    },
    value(newValue, oldValue) {
      const model = this.editor.getModel()
      if (newValue !== model.getValue()) {
        this.editor && this.editor.setValue(newValue)
      }
    },
    language() {
      monaco.editor.setModelLanguage(this.editor.getModel(), this.language)
    },
    theme() {
      monaco.editor.setTheme(this.theme)
    }
  },
  mounted() {
    this.initialize()
  },
  beforeDestroy() {
    this.editor && this.editor.dispose()
  },
  methods: {
    initialize() {
      const { value, language, theme, overrideServices } = this
      const options = { ...this.options, ...this.editorBeforeMount() }
      this.editor = monaco.editor.create(
        this.$el,
        {
          value,
          language,
          theme,
          ...options
        },
        overrideServices
      )
      this.editorCreated(this.editor)
    },
    editorBeforeMount() {
      const options = this.beforeMount(monaco)
      return options || {}
    },
    editorCreated(editor) {
      this.$emit('ready', editor)

      editor.onDidChangeModelContent((event) => {
        this.$emit('change', editor.getValue(), event)
      })
    }
  }
}
</script>
