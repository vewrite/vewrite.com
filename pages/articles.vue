<template>
  <NuxtLayout>
    <section class="template-top">
      <div class="container">
        <nuxt-link to="/"><Logo color="purple" size="large" /></nuxt-link>
        <h1>Articles</h1>
        <p class="light">As avid, experienced Technical Writers and Project Managers, we have a lot of strong opinions on documentation, writing, and how Developer Relations should be done as to achieve success. Below are a collection of articles on those topics.</p>
      </div>
    </section>
    <main class="articles container">
      <ContentList path="/articles" v-slot="{ list }">
        <nuxt-link v-for="article in list" :key="article._path" :to="article._path">
          <img :src="article.image" :alt="article.title" />
          <h2>{{ article.title }}</h2>
          <p>{{ article.description }}</p>
        </nuxt-link>
      </ContentList>
    </main>
  </NuxtLayout>
</template>

<script setup>

</script>

<style lang="scss" scoped>

@import 'assets/_variables.scss';

.template-top {
  padding: $spacing-lg 0;
  width: calc(100% - 2 * $spacing-lg);
  height: 100%;
  position: relative;
  overflow: hidden;
  margin: 0 $spacing-lg 0;
  border-radius: 0 0 $br-xl $br-xl;

}

.articles {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: $spacing-xl;
  margin: $spacing-lg auto;
  max-width: 80%;

  @media (max-width:1000px) {
    grid-template-columns: 1fr;
  }

  img {
    border-radius: $br-xl;
    margin: 0 0 $spacing-md;
    width: 100%;
    border: 2px solid rgba($purple-dark, 0.1);
  }

  a {
    color: $black;
    display: block;
    text-decoration: none;
    transition: all 0.3s;
    width: 100%;

    &:hover {
      color: $purple-dark;
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