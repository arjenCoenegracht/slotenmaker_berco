<script setup lang="ts">
import SectionIntro from './SectionIntro.vue'
import ServiceCard from './ServiceCard.vue'
import type { Service } from '@/data/siteContent'

defineProps<{
  services: Service[]
}>()
</script>

<template>
  <section id="diensten" class="services-section">
    <div class="container">
      <SectionIntro eyebrow="Wat ik doe" title="Mijn diensten" centered>
        <p>
          Van noodopeningen tot veiligheidscilinders, camera&apos;s, elektrische sloten en sleutelplannen. Alles helder uitgelegd en netjes geplaatst.
        </p>
      </SectionIntro>

      <div class="services-grid">
        <ServiceCard v-for="service in services" :key="service.title" :service="service" />
      </div>
    </div>
  </section>
</template>
