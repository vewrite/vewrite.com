<template>
  <NuxtLayout>
    <JoinPopup />
    <section class="template-top">
      <div class="container">
        <h1>Articles</h1>
        <h3 class="explainer">Here you will find articles on our product's progress, best practices for content creation, and a deeper insight into why we are building Vewrite.</h3>
      </div>
    </section>
    <main class="articles">
      <ContentList path="/articles" v-slot="{ list }">
        <nuxt-link v-for="article in list" :key="article._path" :to="article._path">
          <img :src="article.image" :alt="article.title" />
          <h2>{{ article.title }}</h2>
          <p class="light">{{ article.description }}</p>
        </nuxt-link>
      </ContentList>
    </main>
  </NuxtLayout>
</template>

<script setup>

import { useJoinStore } from '~/stores/useJoin';
import { storeToRefs } from 'pinia';

const joinStore = useJoinStore();
const { joining } = storeToRefs(joinStore);

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
    background: linear-gradient(to right, #4D70E7 60%, #3F5CBE 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
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
  gap: $spacing-xl;
  margin: 0 auto $spacing-xxl;
  padding: $spacing-md;
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
  }

  a {
    color: $black;
    display: block;
    text-decoration: none;
    transition: all 0.3s;
    width: 100%;

    img {
      border-radius: $br-xl;
      margin: 0 0 $spacing-md;
      width: 100%;
      background: linear-gradient(165deg, rgba($brand, 0.3) 70%, #C8D3F7 100%);
        box-shadow: inset 0 2px 1px 1px rgba(white, 0.42), inset 0 2px 2px 4px rgba(white, 0.32), inset 0 0 2px 10px rgba(white, 0.12), 0 6px 1px 0px rgba($brand, 0.05), 0 6px 10px 5px rgba($brand, 0.05);
      transition: all 0.3s;
    }

    &:hover {
      color: $brand-dark;

      img {
        border-color: $brand;
      }
    }

    h2 {
      margin: 0 0 $spacing-md;
    }

    p {
      margin: 0;
    }
  }
}

</style>