<script setup lang="ts">
const name = ref('')

const router = useRouter()
const go = () => {
  if (name)
    router.push(`/hi/${encodeURIComponent(name.value)}`)
}
</script>

<template>
  <div>
    <div i-carbon-earth-southeast-asia text-4xl inline-block />
    <p>
      <a rel="noreferrer" href="https://github.com/elonehoo/starter-vue" target="_blank">
        Starter Vue
      </a>
    </p>
    <p>
      <em text-sm op75>Starter template for Vue</em>
    </p>

    <div py-4 />

    <TheInput
      v-model="name"
      placeholder="What's your name?"
      autocomplete="false"
      @keydown.enter="go"
    />

    <div>
      <button
        class="m-3 text-sm btn"
        :disabled="!name"
        @click="go"
      >
        Go
      </button>
    </div>
  </div>
</template>
