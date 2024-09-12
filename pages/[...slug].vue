<template>
  <section class="single-article">
    <div class="container">
      <!-- <nuxt-link class="button clear" to="/articles">Back to articles</nuxt-link> -->
      <h1>{{ data?.title }}</h1>
      <ContentDoc>
        <template #not-found>
          <h1>Document not found</h1>
        </template>
      </ContentDoc>
    </div>
  </section>
</template>

<script setup>

const { path } = useRoute();
const { data } = await useAsyncData('content', () => queryContent(path).findOne());

definePageMeta({
  layout: 'article'
});

</script>

<style lang="scss" scoped>

@import 'assets/_variables.scss';

.single-article {
  padding: $spacing-xl;
}


</style>