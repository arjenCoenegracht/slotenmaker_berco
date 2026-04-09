<script setup lang="ts">
import SectionIntro from './SectionIntro.vue'
import type { Stat } from '@/data/siteContent'
import keysImage from '@/assets/sleutels.jpg'

defineProps<{
  stats: Stat[]
}>()
</script>

<template>
  <section id="over-mij" class="about-section">
    <div class="container about-section__inner">
      <div class="about-section__content">
        <SectionIntro eyebrow="Over mij" title="Vakmanschap & vertrouwen">
          <p>
            Als zelfstandig slotenmaker bied ik persoonlijke service en eerlijk advies. U kunt rekenen op duidelijke communicatie, kwalitatief werk en een oplossing die past bij uw situatie.
          </p>
          <p>
            Of het nu gaat om een noodgeval of een geplande klus: ik werk zorgvuldig, denk mee en zorg dat u zich weer veilig voelt in huis of zaak.
          </p>
        </SectionIntro>

        <div class="stats-grid">
          <article v-for="stat in stats" :key="stat.label" class="stat-card">
            <strong>{{ stat.value }}</strong>
            <span>{{ stat.label }}</span>
          </article>
        </div>
      </div>

      <div class="about-section__visual">
        <img
          :src="keysImage"
          alt="Sleutels gemaakt door Slotenmaker Berco"
          class="about-section__image"
          loading="lazy"
        />
      </div>
    </div>
  </section>
</template>
