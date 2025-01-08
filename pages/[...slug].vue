<template>
  <NuxtLayout>
    <section class="single-article">
      <div class="container top slim">
        <h1 class="article-title">{{ data?.title }}</h1>
        <p class="article-description">{{ data?.description }}</p>
        <section class="article-wrapper">
          <section class="article-content">
            <img :src="data?.image" class="article-image" />
            <section class="content-wrapper">
              <ContentDoc>
                <template #not-found>
                  <h1>Document not found</h1>
                </template>
              </ContentDoc>
            </section>
            <section class="table-of-contents">
              <PageToc />
              <p class="reading-length">
                <span>Estimated {{ data?.readingLength }} minutes to read</span>
                <span>Posted on {{ data?.date }}</span>
              </p>
            </section>
          </section>
        </section>
      </div>
      <div class="container slim">
        
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

  .article-description {
    max-width: 600px;
    margin: 0 auto;
    padding: 0 0 $spacing-md;
    font-size: $font-size-lg;
    color: $brand;
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
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
      gap: $spacing-lg;

      .content-wrapper {
        grid-column: span 2 / span 2;
        grid-row-start: 2;
      }

      .article-image {
        width: 100%;
        margin-bottom: $spacing-md;
        margin: 0 0 $spacing-md;
        grid-column: span 3 / span 3;
      }

      .table-of-contents {
        grid-column-start: 3;
        grid-row-start: 2;
        position: sticky;
        top: $spacing-lg;
        height: fit-content;
        gap: $spacing-md;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        width: 100%;

        .reading-length {
          font-size: $font-size-sm;
          color: rgba($black, 0.5);
          text-align: center;
          margin: 0 0 $spacing-md;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: space-between;
          width: 100%;
        }
      }
    }
  }

  // .top {
  //   margin: 0 auto;
  //   gap: $spacing-sm;

  //   .button {
  //     margin-bottom: $spacing-md;
  //   }

  //   p {
  //     margin: 0;
  //   }
  // }
}


</style>