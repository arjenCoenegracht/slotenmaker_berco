<script setup lang="ts">
const props = defineProps<{
  name: string
}>()
</script>

<template>
  <svg v-if="props.name === 'phone'" viewBox="0 0 24 24" aria-hidden="true" class="app-icon">
    <path
      d="M6.6 10.8a15.2 15.2 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24c1.08.36 2.22.54 3.4.54a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.3 21 3 13.7 3 4.8a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.18.18 2.32.54 3.4a1 1 0 0 1-.24 1l-2.2 2.2Z"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.8"
    />
  </svg>

  <svg v-else-if="props.name === 'clock'" viewBox="0 0 24 24" aria-hidden="true" class="app-icon">
    <circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" stroke-width="1.8" />
    <path
      d="M12 7.5v4.8l3.2 1.9"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.8"
    />
  </svg>

  <svg v-else-if="props.name === 'shield'" viewBox="0 0 24 24" aria-hidden="true" class="app-icon">
    <path
      d="M12 3.8 18 6v5.2c0 4.02-2.46 6.64-6 8-3.54-1.36-6-3.98-6-8V6l6-2.2Z"
      fill="none"
      stroke="currentColor"
      stroke-linejoin="round"
      stroke-width="1.8"
    />
  </svg>

  <svg v-else-if="props.name === 'lock'" viewBox="0 0 24 24" aria-hidden="true" class="app-icon">
    <rect x="5" y="10" width="14" height="10" rx="2.2" fill="none" stroke="currentColor" stroke-width="1.8" />
    <path
      d="M8 10V7.8A4 4 0 0 1 12 4a4 4 0 0 1 4 3.8V10"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-width="1.8"
    />
  </svg>

  <svg v-else-if="props.name === 'door'" viewBox="0 0 24 24" aria-hidden="true" class="app-icon">
    <path
      d="M13 4h3a2 2 0 0 1 2 2v14"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.8"
    />
    <path d="M2 20h3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" />
    <path d="M13 20h9" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" />
    <path d="M10 12v.01" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" />
    <path
      d="M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.8"
    />
  </svg>

  <svg v-else-if="props.name === 'key'" viewBox="0 0 24 24" aria-hidden="true" class="app-icon">
    <circle cx="8.5" cy="14.5" r="3.5" fill="none" stroke="currentColor" stroke-width="1.8" />
    <path
      d="M11.3 11.7 20 3m-3 3 2 2m-5 0 2 2"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.8"
    />
  </svg>

  <svg v-else-if="props.name === 'mail'" viewBox="0 0 24 24" aria-hidden="true" class="app-icon">
    <rect x="3.5" y="5.5" width="17" height="13" rx="2" fill="none" stroke="currentColor" stroke-width="1.8" />
    <path
      d="m5.5 8 6.5 4.8L18.5 8"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.8"
    />
  </svg>

  <svg v-else-if="props.name === 'pin'" viewBox="0 0 24 24" aria-hidden="true" class="app-icon">
    <path
      d="M12 20s6-5.52 6-10a6 6 0 1 0-12 0c0 4.48 6 10 6 10Z"
      fill="none"
      stroke="currentColor"
      stroke-linejoin="round"
      stroke-width="1.8"
    />
    <circle cx="12" cy="10" r="2.2" fill="none" stroke="currentColor" stroke-width="1.8" />
  </svg>
</template>
