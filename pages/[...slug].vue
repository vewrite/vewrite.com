<template>
  <NuxtLayout>
    <section class="single-article">
      <div class="container top slim">
        <nuxt-link class="button clear" to="/articles">Back to articles</nuxt-link>
        <p class="light small">{{ data?.date }} • {{ data?.readingLength }} min</p>
        <h1 class="article-title">{{ data?.title }}</h1>
        <p class="light">{{ data?.description }} min</p>
        <PageToc />
      </div>
      <div class="container slim">
        <img :src="data?.image" class="article-image" />
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

  .top {
    margin: 0 auto;
    gap: $spacing-sm;

    .button {
      margin-bottom: $spacing-md;
    }

    p {
      margin: 0;
    }
  }

  .article-image {
    width: 100%;
    margin-bottom: $spacing-md;
    margin: 0 0 $spacing-md;
  }
}


</style>