<template>
  <div
    class="px-2 py-1 border-t border-b border-th-tertiary-label flex justify-between"
  >
    <div>
      <button
        type="button"
        title="Run script"
        class="py-1 px-4 rounded border border-th-tertiary-label text-th-debug bg-th-tertiary-label bg-opacity-25 hover:bg-opacity-100"
        @click.prevent="run"
      >
        <svg
          class="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <button
        type="button"
        title="Clear console"
        class="py-1 px-2 rounded border border-th-tertiary-label bg-th-base text-th-label hover:bg-th-base"
        @click.prevent="clear"
      >
        <svg
          class="h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </button>
    </div>
    <div v-if="false" class="self-center">
      <button
        type="button"
        class="py-1 px-2 text-th-secondary-label hover:text-th-label"
        @click.prevent="toggleShow"
      >
        <svg
          class="h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            :d="toggleShowIcon"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: true
    }
  },
  computed: {
    toggleShowIcon() {
      const down = 'M19 9l-7 7-7-7'
      const up = 'M5 15l7-7 7 7'
      return this.isOpen ? down : up
    }
  },
  methods: {
    clear(e) {
      e.target.blur()
      this.$emit('clear')
    },
    run(e) {
      e.target.blur()
      this.$emit('run')
    },
    toggleShow(e) {
      e.target.blur()
      this.isOpen = !this.isOpen
      this.$emit('show', this.isOpen)
    }
  }
}
</script>

<style></style>
