<script setup lang="ts">
import { ref } from 'vue'
import AppIcon from './AppIcon.vue'
import { companyInfo, type NavItem } from '@/data/siteContent'
import bercoLogo from '@/assets/berco-logo.svg'

defineProps<{
  items: NavItem[]
}>()

const isOpen = ref(false)

const closeMenu = () => {
  isOpen.value = false
}
</script>

<template>
  <header class="site-header">
    <div class="container site-header__inner">
      <a href="#top" class="site-header__brand" @click="closeMenu" aria-label="Ga naar boven">
        <img :src="bercoLogo" alt="Berco logo" class="site-header__brand-logo" />
        <span class="site-header__brand-wordmark">BERCO</span>
      </a>

      <button
        class="site-header__toggle"
        type="button"
        :aria-expanded="isOpen"
        aria-label="Open navigatie"
        @click="isOpen = !isOpen"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav class="site-header__nav" :class="{ 'is-open': isOpen }">
        <a
          v-for="item in items"
          :key="item.href"
          :href="item.href"
          class="site-header__link"
          @click="closeMenu"
        >
          {{ item.label }}
        </a>
        <a :href="companyInfo.phoneHref" class="button button--primary site-header__cta" @click="closeMenu">
          <AppIcon name="phone" />
          <span>{{ companyInfo.phoneDisplay }}</span>
        </a>
      </nav>
    </div>
  </header>
</template>
