const { NodeVM, VMScript } = require('vm2')

export default function (options) {
  const { onLogEvent } = options
  const vm = new NodeVM({
    console: 'redirect',
    timeout: 5000, // not really working
    require: {
      external: true
    },
    ...options
  })

  Array.from(['trace', 'debug', 'log', 'info', 'warn', 'error', 'dir']).forEach(
    (level) => {
      vm.on(`console.${level}`, (message, ...args) => {
        onLogEvent({ level, message, args, timestamp: Date.now() })
      })
    }
  )

  const handleError = (err) => {
    onLogEvent({
      level: 'error',
      message: err.message,
      args: err,
      timestamp: Date.now()
    })
  }

  const run = (code) => {
    let script
    try {
      script = new VMScript(code).compile()
    } catch (err) {
      handleError(err)
    }

    try {
      vm.run(script)
    } catch (err) {
      handleError(err)
    }

    process.on('uncaughtException', (err) => {
      handleError(err)
    })
  }

  return {
    vm,
    run
  }
}
