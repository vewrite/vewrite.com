<template>
  <NuxtLayout>
    <JoinPopup />
    <section class="template-top">
      <div class="container">
        <h1>Articles</h1>
        <h3 class="explainer">Here you will find information on our product's progress and a deeper insight into why we are building Vewrite.</h3>
      </div>
    </section>
    <main class="articles">
      <!-- <nuxt-link v-for="article in articles" :key="article._path" :to="article._path">
        <img :src="article.image" :alt="article.title" />
        <h2>{{ article.title }}</h2>
        <p class="date">{{ article.date }}</p>
        <p class="light">{{ article.description }}</p>
      </nuxt-link> -->
      <nuxt-link to="/articles/product-report-mar-2025">
        <img src="/content/product-report-jan-2025.png" alt="Vewrite Product Report March 2025" />
        <h2>Product Report March 2025</h2>
      </nuxt-link>
      <nuxt-link to="/articles/why-you-should-use-a-structured-writing-workflow">
        <img src="/content/structured-writing-workflow.png" alt="Why you should use a structured writing workflow" />
        <h2>Why you should use a structured writing workflow</h2>
      </nuxt-link>
      <nuxt-link to="/articles/product-report-feb-2025">
        <img src="/content/product-report-jan-2025.png" alt="Vewrite Product Report February 2025" />
        <h2>Product Report February 2025</h2>
      </nuxt-link>
      <nuxt-link to="/articles/how-to-handle-content-states">
        <img src="/content/content-state.png" alt="How to handle content state" />
        <h2>How to handle content state for a writing project</h2>
      </nuxt-link>
      <nuxt-link to="/articles/product-report-jan-2025">
        <img src="/content/product-report-jan-2025.png" alt="Vewrite Product Report January 2025" />
        <h2>Product Report January 2025</h2>
      </nuxt-link>
      <nuxt-link to="/articles/introducing-vewrite">
        <img src="/content/introducing-vewrite.png" alt="Introducing Vewrite" />
        <h2>Introducing Vewrite</h2>
      </nuxt-link>
    </main>
  </NuxtLayout>
</template>

<script setup>

import { useJoinStore } from '~/stores/useJoin';
import { storeToRefs } from 'pinia';

const joinStore = useJoinStore();
const { joining } = storeToRefs(joinStore);

const articles = await queryContent('articles')
  .find();

</script>

<style lang="scss" scoped>

@import 'assets/_variables.scss';

.template-top {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;

  @media (max-width: $breakpoint-md) {
    padding: $spacing-xl $spacing-md 0;
  }

  h1 {
    font-size: 84px;
    font-weight: bold;
    max-width: 800px;
    margin: 0 auto;
    line-height: 1;
    padding: $spacing-md 0;
    display: inline-block;
    letter-spacing: -2px;

    @media (max-width: $breakpoint-md) {
      font-size: 52px;
    }
  }

  .explainer {
    max-width: 600px;
    margin: 0 auto;
    padding: 0 0 $spacing-md;
    font-size: $font-size-lg;
    color: $black;
    text-wrap: balance;
    text-align: center;
  }

}

.articles {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: $spacing-lg;
  margin: 0 auto $spacing-xxl;
  padding: $spacing-md 0;
  max-width: $max-width;

  @media (max-width: $breakpoint-md) {
    grid-template-columns: 1fr;
  }

  h2 {
    font-size: $font-size-lg;
    font-weight: bold;
    margin: 0 auto;
    line-height: 1;
    color: $brand-dark;
    text-align: center;
  }

  a {
    color: $black;
    display: block;
    text-decoration: none;
    transition: all 0.3s;
    width: 100%;
    padding-bottom: $spacing-lg;
    backdrop-filter: blur(24px);
    background: linear-gradient(165deg, rgba($white, 0.3) 70%, rgba(#C8D3F7, .2) 100%);
    box-shadow: inset 0 2px 1px 1px rgba(white, 0.42), inset 0 2px 2px 4px rgba(white, 0.32), inset 0 0 2px 10px rgba(white, 0.12), 0 6px 1px 0px rgba($brand, 0.05), 0 6px 10px 5px rgba($brand, 0.05);
    padding: $spacing-sm;
    border-radius: $br-xl;

    .date {
      margin: 0 0 $spacing-sm;
      font-size: $font-size-sm;
      color: rgba($black, 0.35);
    }

    img {
      border-radius: $br-xl;
      margin: 0 0 $spacing-md;
      width: 100%;
      transition: all 0.3s;
    }

    &:hover {
      color: $brand-dark;

      img {
        border-color: $brand;
      }
    }

    h2 {
      margin: 0 0 $spacing-sm;
    }

    p {
      margin: 0;
    }
  }
}

</style>