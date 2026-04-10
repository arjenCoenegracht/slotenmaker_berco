<script setup lang="ts">
import { companyInfo } from '@/data/siteContent'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">
    <div class="container site-footer__inner">
      <div class="site-footer__main">
        <p class="site-footer__brand">{{ companyInfo.name }}</p>
        <p class="site-footer__copy">
          {{ companyInfo.addressLineOne }}, {{ companyInfo.addressLineTwo }}
        </p>
        <p class="site-footer__copy">
          <a :href="companyInfo.phoneHref">{{ companyInfo.phoneDisplay }}</a>
          ·
          <a :href="companyInfo.emailHref">{{ companyInfo.emailDisplay }}</a>
        </p>
      </div>

      <p class="site-footer__copy site-footer__meta">
        &copy; {{ year }} {{ companyInfo.name }} · BTW {{ companyInfo.vatNumber }}
      </p>
    </div>
  </footer>
</template>
