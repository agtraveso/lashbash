<template>
  <ul class="flex-col px-5 overflow-y-auto">
    <li v-for="log in logs" :key="log.timestap" class="flex flex-nowrap">
      <div class="log-level">
        <span :class="levelClasses(log.level)">{{ log.level }}</span>
      </div>
      <p :class="messageClasses(log.level)">{{ message(log) }}</p>
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    logs: { type: Array, default: () => [] }
  },
  computed: {},
  methods: {
    message(log) {
      const { message: rawMessage, args: rawArgs } = log
      if (
        !rawArgs ||
        rawArgs.length === 0 ||
        Object.keys(rawArgs).length === 0
      ) {
        return rawMessage
      }

      return `${rawMessage}${this.stringifyArgs(rawArgs)}`
    },
    stringifyArgs(args) {
      if (Array.isArray(args)) {
        return ' ' + args.map(JSON.stringify).join(' ')
      }
      return ' ' + JSON.stringify(args)
    },
    levelClasses(level) {
      const base = 'flex flex-shrink-0 items-center w-12 text-xs'
      let color
      switch (level) {
        case 'debug':
        case 'info':
        case 'warn':
        case 'error':
          color = `text-th-${level}`
          break
        default:
          color = 'text-th-label'
      }
      return `${base} ${color}`
    },
    messageClasses(level) {
      const base = 'flex items-center break-all text-sm'
      let color
      switch (level) {
        case 'error':
          color = 'text-th-error'
          break
        default:
          color = 'text-th-secondary-label'
      }
      return `${base} ${color}`
    }
  }
}
</script>
<style lang="postcss" scoped>
.log-level {
  @apply flex items-center;
  height: 19px;
  padding-top: 1px;
}
</style>
