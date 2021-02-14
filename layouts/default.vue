<template>
  <div id="root">
    <nav class="bg-th-base border-b border-th-tertiary-label">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <svg
                class="h-6 w-6 text-green-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </div>
            <div class="block">
              <div class="ml-4 flex items-baseline space-x-4">
                <h1
                  class="text-xl leading-7 sm:text-2xl sm:truncate text-th-secondary-label font-light"
                >
                  lashbash
                </h1>
              </div>
            </div>
          </div>
          <div class="block">
            <div class="ml-4 flex items-center md:ml-6">
              <a
                href="https://github.com/agtraveso/lashbash"
                target="_blank"
                class="cursor-pointer"
              >
                <span class="sr-only">Github</span>
                <svg
                  class="text-white hover:text-gray-400"
                  height="20"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <main>
      <Nuxt />
    </main>
  </div>
</template>

<style lang="postcss">
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;300;400;500;600;700;800;900&display=swap');
html,
body {
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  position: fixed;
  overflow: auto;
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizelegibility;
}

#__nuxt,
#__layout,
#root {
  width: 100%;
  height: 100%;
  margin: 0px;
}

html {
  @apply bg-th-base;
  font-family: 'Inconsolata', monospace;
  font-size: 15px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

button:focus {
  outline: 1px auto -webkit-focus-ring-color;
}

.h-1\/4 {
  height: 25%;
}
.h-2\/5 {
  height: 40%;
}
.h-2\/6 {
  height: 33.333333%;
}
.h-4\/6 {
  height: 66.666667%;
}
</style>
