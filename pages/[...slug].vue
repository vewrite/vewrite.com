<template>
  <NuxtLayout>
    <section class="single-article">
      <div class="container slim">
        <!-- <nuxt-link class="button clear" to="/articles">Back to articles</nuxt-link> -->
        <h1 class="article-title">{{ data?.title }}</h1>
        <img :src="data?.image" class="article-image" />
        <PageToc />
        <ContentDoc>
          <template #not-found>
            <h1>Document not found</h1>
          </template>
        </ContentDoc>
      </div>
    </section>
  </NuxtLayout>
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
  padding: $spacing-xl 0;

  .article-title {
    text-align: center;
    align-self: center;
  }

  .article-image {
    width: 100%;
    margin-bottom: $spacing-md;
    border: 2px solid rgba($purple-dark, 0.1);
    border-radius: $br-xl;
    margin: 0 0 $spacing-md;
  }
}


</style>