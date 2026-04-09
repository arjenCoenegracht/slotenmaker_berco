<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">
    <div class="container site-footer__inner">
      <p class="site-footer__brand">Slotenmaker Berco</p>
      <p class="site-footer__copy">&copy; {{ year }} Slotenmaker Berco. Alle rechten voorbehouden.</p>
    </div>
  </footer>
</template>
