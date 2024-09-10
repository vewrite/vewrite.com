<template>
  <div>
    <section class="top-article">
      <div class="container">
        <nuxt-link to="/"><Logo color="purple" size="large" /></nuxt-link>
        <nuxt-link class="button large" to="/articles">Back to articles</nuxt-link>
        <h1>{{ data?.title }}</h1>
      </div>
    </section>
    <section class="single-article">
      <div class="container">
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
  padding: $spacing-xl 0 0 0;
  position: relative;
  overflow: hidden;
  margin: 100px $spacing-lg 0;
  border-radius: 0 0 $br-xl $br-xl;

  .container {
    position: relative;
    gap: 0;

    &:after {
      content: '';
      position: absolute;
      bottom: -1px;
      right: -300px;
      width: 300px;
      height: 400px;
      background: transparent url('/images/white_overlay.svg') no-repeat center center;
      background-size: cover;
      z-index: 1;
    }
  }

  .button {
    margin: $spacing-lg 0 $spacing-md;
  }

  h1 {
      font-size: $font-size-mega;
      line-height: 90%;
      font-weight: bold;
      margin: $spacing-sm 0 $spacing-xl;
      position: relative;
      width: 80%;

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