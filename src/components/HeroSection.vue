<script setup lang="ts">
import AppIcon from './AppIcon.vue'
import type { Highlight } from '@/data/siteContent'
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
          Sloten plaatsen, deuren openen & sleutels maken. Snel, vakkundig en altijd bereikbaar.
        </p>

        <div class="hero__actions">
          <a href="tel:+31600000000" class="button button--primary button--large">
            <AppIcon name="phone" />
            <span>Bel direct</span>
          </a>
          <a href="#diensten" class="button button--ghost button--large">
            Bekijk diensten
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
