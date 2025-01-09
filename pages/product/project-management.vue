<template>
  <NuxtLayout>
    <section class="product-top container">
      <nav class="product-nav">
        <section class="section-title">
          <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 10C3 7.23858 5.23858 5 8 5H14.1833C15.1705 5 16.1355 5.29219 16.9568 5.83975L17.5115 5.0077L16.9568 5.83975L19.9338 7.82435C21.0836 8.59093 22.4347 9 23.8167 9H36C38.7614 9 41 11.2386 41 14V34C41 36.7614 38.7614 39 36 39H8C5.23858 39 3 36.7614 3 34V10Z" stroke="black" stroke-width="2"/>
            <path d="M3 18C3 15.2386 5.23858 13 8 13H14.1833C15.5653 13 16.9164 12.5909 18.0662 11.8244L21.0432 9.83975C21.8645 9.29219 22.8295 9 23.8167 9H36C38.7614 9 41 11.2386 41 14V34C41 36.7614 38.7614 39 36 39H8C5.23858 39 3 36.7614 3 34V18Z" stroke="black" stroke-width="2"/>
          </svg>
          <span>Projects</span>
        </section>
        <section class="section-links">
          <a href="/product/product-management#deliverables">Deliverables</a>
          <a href="/product/product-management#automation">Automation</a>
          <a href="/product/product-management#progress">Progress tracking</a>
        </section>
      </nav>
      <section class="product-intro">
        <spline-viewer class="product-spline" url="https://prod.spline.design/XpyEEeds12UTqHgT/scene.splinecode"></spline-viewer>
        <h1>The easiest way to manage complex content writing projects</h1>
        <h2>Create projects, add deliverables, manage their state, and stay on top of things in a way you've never experienced.</h2>
        <img src="/public/images/hero-preview.png" alt="Vewrite" class="preview" />
      </section>
    </section>
    <section class="product-content">
      
    </section>
  </NuxtLayout>
</template>

<script setup>

definePageMeta({
  layout: 'product'
});

</script>

<style lang="scss" scoped>

@use 'assets/variables' as *;

.product-spline {
  position: absolute;
  top: -100px;
  right: -200px;
  z-index: 0;
  width: 600px;
  height: 600px;
}

</style>