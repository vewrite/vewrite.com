<template>
  <NuxtLayout>
    <section class="single-article">
      <div class="container top slim">
        <h1 class="article-title">{{ data?.title }}</h1>
        <p class="article-description">{{ data?.description }}</p>
        <section class="article-wrapper">
          <section class="article-content">
            <img :src="data?.image" class="article-image" />
            <section class="table-of-contents">
              <h4>Table of Contents</h4>
              <PageToc />
              <section class="additions">
                <p class="author">
                  <span>By <a :href="data?.authorLink">{{ data?.author }}</a></span>
                </p>
                <p class="reading-length">
                  <span>{{ data?.readingLength }} min. to read</span>
                  <span>{{ data?.date }}</span>
                </p>
              </section>
            </section>
            <section class="content-wrapper">
              <ContentDoc>
                <template #not-found>
                  <h1>Document not found</h1>
                </template>
              </ContentDoc>
            </section>
          </section>
        </section>
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

<style lang="scss">

@import 'assets/_variables.scss';

.single-article {
  padding: $spacing-md 0;

  .article-title {
    font-size: 84px;
    font-weight: bold;
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.2;
    padding: $spacing-md 0;
    display: inline-block;
    letter-spacing: -2px;
    text-align: center;

    @media (max-width: $breakpoint-md) {
      font-size: 52px;
    }
  }

  .article-description {
    max-width: 600px;
    margin: 0 auto $spacing-md;
    padding: 0 0 $spacing-md;
    font-size: $font-size-lg;
    color: $black;
    text-wrap: balance;
    text-align: center;
  }

  .article-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    .button img {
      min-width: 24px;
      min-height: 24px;
    }

    .article-content {
      display: flex;
      flex-direction: column;

      .article-image {
        margin-bottom: $spacing-md;
        margin: 0 0 $spacing-md;
        backdrop-filter: blur(24px);
        background: linear-gradient(165deg, rgba($brand, 0.3) 70%, #C8D3F7 100%);
        box-shadow: inset 0 2px 1px 1px rgba(white, 0.42), inset 0 2px 2px 4px rgba(white, 0.32), inset 0 0 2px 10px rgba(white, 0.12), 0 6px 1px 0px rgba($brand, 0.05), 0 6px 10px 5px rgba($brand, 0.05);
        padding: $spacing-sm;
        border-radius: $br-xl;
      }

      .table-of-contents {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        width: 100%;

        .additions {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          width: 100%;

          .author {
            font-size: $font-size-sm;
            color: rgba($black, 0.5);
            text-align: center;
            margin: 0 0 $spacing-md;
          }

          .reading-length {
            font-size: $font-size-sm;
            color: rgba($black, 0.5);
            text-align: center;
            margin: 0 0 $spacing-md;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: space-between;
            gap: $spacing-md;
          }
        }

        h4 { 
          margin: $spacing-md 0 $spacing-sm;
        }

        @media (max-width: $breakpoint-lg) {
          display: none;
        }

      }
    }
  }

}


</style>