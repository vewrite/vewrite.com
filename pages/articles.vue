<template>
  <NuxtLayout>
    <JoinPopup />
    <section class="template-top">
      <div class="container mid">
        <h1>Articles</h1>
        <h3 class="brand">As experienced technical writers and team leaders, we have a lot of strong opinions on documentation, writing, and how developer relations should be done as to achieve success. Below are a collection of articles on those topics.</h3>
      </div>
    </section>
    <main class="articles">
      <ContentList path="/articles" v-slot="{ list }">
        <nuxt-link v-for="article in list" :key="article._path" :to="article._path">
          <img :src="article.image" :alt="article.title" />
          <h3>{{ article.title }}</h3>
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
  padding: $spacing-xxl 0 0 0;
  width: calc(100% - 2 * $spacing-lg);
  height: 100%;
  position: relative;
  overflow: hidden;
  margin: 0 $spacing-lg 0;
  border-radius: 0 0 $br-xl $br-xl;

}

.articles {
  display: grid;
  grid-template-columns: 1fr;
  gap: $spacing-xl;
  margin: 0 auto $spacing-xxl;
  max-width: $max-width;

  @media (max-width:1000px) {
    grid-template-columns: 1fr;
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
      border: 2px solid rgba($brand-dark, 0.1);
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