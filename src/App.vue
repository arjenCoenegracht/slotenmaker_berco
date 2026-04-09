<script setup lang="ts">
import AboutSection from '@/components/AboutSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import HeroSection from '@/components/HeroSection.vue'
import ServicesSection from '@/components/ServicesSection.vue'
import SiteFooter from '@/components/SiteFooter.vue'
import SiteHeader from '@/components/SiteHeader.vue'
import {
  contactMethods,
  highlights,
  navigation,
  services,
  stats,
} from '@/data/siteContent'
</script>

<template>
  <div class="page-shell">
    <SiteHeader :items="navigation" />
    <main>
      <HeroSection :highlights="highlights" />
      <ServicesSection :services="services" />
      <AboutSection :stats="stats" />
      <ContactSection :methods="contactMethods" />
    </main>
    <SiteFooter />
  </div>
</template>
