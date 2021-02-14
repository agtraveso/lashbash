<template>
  <div class="h-screen flex flex-col overflow-hidden w-full">
    <monaco-editor
      class="flex-1"
      theme="vs-dark"
      language="javascript"
      :options="editorOptions"
      :value="code"
      @change="editorChange"
      @ready="editorReady"
    ></monaco-editor>
    <div class="flex flex-col h-2/5">
      <actions-bar
        class="flex"
        @run="run"
        @clear="clearConsole"
        @show="showConsole"
      />
      <console v-if="isConsoleOpen" :logs="logs" class="flex pt-1" />
    </div>
  </div>
</template>

<script>
import { welcome } from '../lib/script-samples'

export default {
  data() {
    return {
      isConsoleOpen: true,
      logs: [],
      editorOptions: {
        scrollBeyondLastLine: false,
        fontFamily: 'Inconsolata, monospace',
        fontSize: 15
      },
      code: welcome
    }
  },
  mounted() {
    this.socket = this.$nuxtSocket({})
    this.socket.on('log', (log, cb) => {
      this.logs.push(log)
    })
  },
  methods: {
    editorChange(value) {
      this.code = value
    },
    clearConsole() {
      this.logs = []
    },
    run() {
      this.clearConsole()
      this.socket.emit('run', { code: this.code }, (resp) => {
        this.messageRxd = resp
      })
    },
    showConsole(isOpen) {
      this.isConsoleOpen = isOpen
    },
    editorReady(editor) {
      editor.focus()
    }
  }
}
</script>

<style></style>
