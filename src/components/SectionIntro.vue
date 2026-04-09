<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  centered?: boolean
}>()
</script>

<template>
  <div class="section-intro" :class="{ 'section-intro--centered': centered }">
    <p class="eyebrow">{{ eyebrow }}</p>
    <h2>{{ title }}</h2>
    <div class="section-intro__body">
      <slot />
    </div>
  </div>
</template>
