<script setup lang="ts">
import AppIcon from './AppIcon.vue'
import type { ContactMethod } from '@/data/siteContent'

defineProps<{
  method: ContactMethod
}>()
</script>

<template>
  <article class="contact-card">
    <div class="icon-badge">
      <AppIcon :name="method.icon" />
    </div>
    <p class="contact-card__label">{{ method.title }}</p>
    <a v-if="method.href" :href="method.href" class="contact-card__value">
      {{ method.value }}
    </a>
    <p v-else class="contact-card__value">{{ method.value }}</p>
  </article>
</template>
