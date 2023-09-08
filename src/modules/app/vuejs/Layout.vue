<script setup lang="ts">
</script>

<template>
  <header class="header"><h1>Ratatouille</h1></header>
  <main class="content">
    <slot />
  </main>
  <footer class="footer">
    Copyright Fabien Fernandes Alves
  </footer>
</template>

<style scoped>
.header {
  width: 100%;
  background-color: aliceblue;
  padding: 1em;
}

.header h1 {
    margin: 0;
}

.content {
  flex: 1;
  padding: 1em;
}

.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: aliceblue;
}
</style>
