<script setup lang="ts">
import AppIcon from './AppIcon.vue'
import type { Service } from '@/data/siteContent'

defineProps<{
  service: Service
}>()
</script>

<template>
  <article class="service-card">
    <div class="icon-badge icon-badge--gold">
      <AppIcon :name="service.icon" />
    </div>
    <h3>{{ service.title }}</h3>
    <p>{{ service.description }}</p>
  </article>
</template>
