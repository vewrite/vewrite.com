<template>
  <div>
    <section class="single-article">
      <div class="container">
        <!-- <nuxt-link class="button clear" to="/articles">Back to articles</nuxt-link> -->
        <nuxt-link to="/"><Logo color="purple" size="large" /></nuxt-link>
        <h1>{{ data?.title }}</h1>
        <ContentDoc>
          <template #not-found>
            <h1>Document not found</h1>
          </template>
        </ContentDoc>
      </div>
    </section>
  </div>
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

.top-article {
  position: relative;
  overflow: hidden;

  h1 {
      line-height: 90%;
      position: relative;
      width: 100%;

      &:before {
        content: '';
        position: absolute;
        top: -100px;
        left: -680px;
        width: 600px;
        height: 600px;
        background: transparent url('/images/triangle.png') no-repeat center center;
        background-size: contain;
        z-index: 1;
        transform: translateY(var(--before-translate-y, 0));
      }

      &:after {
        content: '';
        position: absolute;
        top: 100px;
        right: -780px;
        width: 800px;
        height: 800px;
        background: transparent url('/images/circle.png') no-repeat center center;
        background-size: contain;
        z-index: 1;
        transform: translateY(var(--before-translate-y, 0));
      }
    }


  @media (max-width: 1400px) {
      width: 100%;
      margin: 0;
      border-radius: 0;
  }
}

.single-article {
  padding: 0 0 $spacing-xl 0;
}


</style>