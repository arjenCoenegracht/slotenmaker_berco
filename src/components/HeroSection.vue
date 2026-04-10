<script setup lang="ts">
import AppIcon from './AppIcon.vue'
import { companyInfo, type Highlight } from '@/data/siteContent'
import heroImage from '@/assets/locksmith.jpg'

defineProps<{
  highlights: Highlight[]
}>()
</script>

<template>
  <section id="top" class="hero">
    <img
      :src="heroImage"
      alt="Slotenmaker aan het werk"
      class="hero__image"
    />
    <div class="hero__overlay"></div>

    <div class="container hero__inner">
      <div class="hero__content">
        <p class="eyebrow">Uw betrouwbare vakman</p>
        <h1 class="hero__title">
          Slotenmaker
          <span>Berco</span>
        </h1>
        <p class="hero__lead">
          Van veiligheidscilinders en elektrische sloten tot camerabeveiliging en sleutelplannen:
          ik zorg voor een totaaloplossing op maat van uw veiligheid.
        </p>
        <p class="hero__sublead">{{ companyInfo.pricingLine }}</p>
        <p class="hero__sublead">{{ companyInfo.availibilityLine }}</p>

        <div class="hero__actions">
          <a :href="companyInfo.phoneHref" class="button button--primary button--large phone-cta">
            <AppIcon name="phone" />
            <span class="phone-cta__text">Bel direct</span>
          </a>
          <a href="#diensten" class="button button--ghost button--large hero__services-cta">
            <span>Bekijk diensten</span>
          </a>
        </div>

        <div class="hero__highlights">
          <article v-for="item in highlights" :key="item.title" class="hero__highlight-item">
            <div class="icon-badge hero__highlight-icon">
              <AppIcon :name="item.icon" />
            </div>
            <span>{{ item.title }}</span>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
