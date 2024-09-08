<template>
  <section class="template-top">
    <div class="container">
      <h1>Articles</h1>
    </div>
  </section>
  <main class="articles">
    <div class="container">
      <ContentList path="/articles" v-slot="{ list }">
        <nuxt-link v-for="article in list" :key="article._path" :to="article._path">
          <h2>{{ article.title }}</h2>
          <p>{{ article.description }}</p>
        </nuxt-link>
      </ContentList>
    </div>
  </main>
</template>

<script setup>

</script>

<style lang="scss" scoped>

@import 'assets/_variables.scss';

.template-top {
  background: $purple;
  background-size: cover;
  color: $white;
  padding: $spacing-xl 0;
  width: calc(100% - 2 * $spacing-lg);
  height: 100%;
  position: relative;
  overflow: hidden;
  margin: 100px $spacing-lg 0;
  border-radius: 0 0 $br-xl $br-xl;

}

.articles {
  display: flex;
  gap: $spacing-lg;
  margin: $spacing-lg 0;

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