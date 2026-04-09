<script setup lang="ts">
import { ref } from 'vue'
import AppIcon from './AppIcon.vue'
import type { NavItem } from '@/data/siteContent'

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
      <a href="#top" class="site-header__brand" @click="closeMenu">Berco</a>

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
        <a href="tel:+31600000000" class="button button--primary site-header__cta" @click="closeMenu">
          <AppIcon name="phone" />
          <span>Bel nu</span>
        </a>
      </nav>
    </div>
  </header>
</template>
