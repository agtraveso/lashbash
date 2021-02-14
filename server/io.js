import VM from './vm'

export default function (socket, io) {
  const vm = new VM({ onLogEvent: (log) => socket.emit('log', log) })
  return Object.freeze({
    run(script) {
      const { code } = script
      vm.run(code)
      return { status: 'ok' }
    }
  })
}
