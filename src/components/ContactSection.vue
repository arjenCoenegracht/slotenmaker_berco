<script setup lang="ts">
import SectionIntro from './SectionIntro.vue'
import ContactCard from './ContactCard.vue'
import type { ContactMethod } from '@/data/siteContent'

defineProps<{
  methods: ContactMethod[]
}>()
</script>

<template>
  <section id="contact" class="contact-section">
    <div class="container">
      <SectionIntro eyebrow="Hulp nodig?" title="Neem contact op" centered>
        <p>Bel mij direct of stuur een e-mail. Ik help u graag verder met snelle service en duidelijke afspraken.</p>
      </SectionIntro>

      <div class="contact-grid">
        <ContactCard v-for="method in methods" :key="method.title" :method="method" />
      </div>
    </div>
  </section>
</template>
