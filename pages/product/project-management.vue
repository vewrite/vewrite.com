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
          <a href="/product/project-management#time-savers">Time Savers</a>
          <a href="/product/project-management#automation">Automation</a>
          <a href="/product/project-management#progress-tracking">Progress tracking</a>
        </section>
      </nav>
      <section class="product-intro">
        <spline-viewer class="product-spline" url="https://prod.spline.design/5H9rIjIKYzG0UWxG/scene.splinecode"></spline-viewer>
        <h1>Let's make managing your project a breeze.</h1>
        <h2>We'd like to take the tedious parts of managing your documents, reviews, and approvals off of your plate so that you can focus on what's really important: creating awesome content for your clients.</h2>
        <p>Stop spending endless hours chasing after what is done and what isn't. Use a tool that helps you get things done faster, better, and cheaper.</p>
        <div class="preview-image-wrapper">
          <img src="/public/images/hero-preview.png" alt="Vewrite" class="preview" />
        </div>
      </section>
    </section>
    <section class="product-content">
      <div class="time-savers" id="time-savers">
        <!-- six things that save you time -->
      </div>
      <div class="automation" id="automation">
        <!-- talk about how automation works -->
      </div>
      <div class="progress-tracking" id="progress-tracking">
        <!-- talk about how automation works -->
      </div>
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
  top: 20px;
  right: -100px;
  z-index: 0;
  width: 600px;
  height: 600px;
}

</style>