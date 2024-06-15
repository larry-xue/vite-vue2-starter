<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <div>
    <h1>{{ msg }}</h1>

    <div class="card">
      <button type="button" @click="count++">count is {{ count }}</button>
      <p>
        Vite + Vue2.7 + Vuex + Vue Router
      </p>
      <p>
      <div style="display: flex; gap: 4px; align-items: center">
        count in vuex = {{ $store.state.count }}
        <button type="primary" @click="$store.commit('increment')">+</button>
        <button type="primary" @click="$store.commit('decrement')">-</button>
      </div>
      </p>
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
