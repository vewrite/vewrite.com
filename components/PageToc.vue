<template>
  <main id="Toc">
    <ul v-if="toc">
      <li v-for="link in toc" :key="link.id">
        <a :href="`#${link.id}`">{{ link.text }}</a>
        <ul class="sub" v-if="link.children">
          <li v-for="child in link.children" :key="child.id">
            <a :href="`#${child.id}`">{{ child.text }}</a>
          </li>
        </ul>
      </li>
    </ul>
  </main>
</template>

<script setup lang="ts">

import { ref, onMounted } from 'vue'

interface TocLink {
  id: string
  text: string
  children?: TocLink[]
}

const toc = ref<TocLink[] | null>(null)

const generateToc = () => {
  const headers = document.querySelectorAll('h2, h3')
  const links: TocLink[] = []
  let currentH2: TocLink | null = null

  headers.forEach(header => {
    const link: TocLink = {
      id: header.id,
      text: header.textContent || ''
    }

    if (header.tagName.toLowerCase() === 'h2') {
      currentH2 = link
      links.push(link)
    } else if (header.tagName.toLowerCase() === 'h3' && currentH2) {
      currentH2.children = currentH2.children || []
      currentH2.children.push(link)
    }
  })

  toc.value = links
}

onMounted(() => {
  generateToc()
})

</script>

<style lang="scss" scoped>

@import 'assets/_variables.scss';

#Toc {
  width: 100%;
  border-bottom: $border;
  margin-bottom: $spacing-md;

  ul {
    padding-left: 0;
    margin: 0 0 $spacing-md;

    li {
      margin: 0 0 $spacing-sm;
      padding: 0;
      list-style: none;

      &:first-of-type {
        margin-top: $spacing-sm;
      }

      a {
        font-weight: bold;
        padding: $spacing-xs 0;
        color: $black;
        text-decoration: none;
        transition: color 0.2s;
        font-size: $font-size-sm;

        &:hover {
          color: $brand;
        }
      }

      ul.sub {
        padding-left: 0;

        li {
          margin: 0 0 $spacing-xs $spacing-sm;
          padding: 0;
          list-style: disc;

          &:first-of-type {
            margin-top: $spacing-sm;
          }

          a {
            font-weight: normal;
            transition: color 0.2s;

            &:hover {
              color: $brand-dark;
            }
          }
        }
      }
    }
  }
}

</style>