<template>
  <div>
    <ContentList path="/articles" v-slot="{ list }">
      <nuxt-link v-for="article in list" :key="article._path" :to="article._path">
        <h2>{{ article.title }}</h2>
        <p>{{ article.description }}</p>
      </nuxt-link>
    </ContentList>
  </div>
</template>

<script setup>

</script>