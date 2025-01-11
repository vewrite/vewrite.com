<template>
  <NuxtLayout>
    <JoinPopup />
    <section class="product-top container">
      <nav class="product-nav">
        <section class="section-title">
          <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 10C8 7.23858 10.2386 5 13 5H26.4792C27.2139 5 27.9231 5.26964 28.4723 5.75777L34.9931 11.554C35.6336 12.1233 36 12.9394 36 13.7963V34C36 36.7614 33.7614 39 31 39H13C10.2386 39 8 36.7614 8 34V10Z" stroke="black" stroke-width="2"/>
            <path d="M26 4V10C26 12.2091 27.7909 14 30 14H37" stroke="black" stroke-width="2"/>
          </svg>
          <span>Content creation</span>
        </section>
        <section class="section-links">
          <a href="/product/project-management#tools">Tools</a>
        </section>
      </nav>
      <section class="product-intro">
        <spline-viewer class="product-spline" url="https://prod.spline.design/5H9rIjIKYzG0UWxG/scene.splinecode"></spline-viewer>
        <h1>Smart writing tools that are deeply integrated into your process.</h1>
        <h2>Modern writing tools have traditionally been focused just on the writing experience itself, and not on how the writing gets done as a team.</h2>
        <p>Vewrite's unique set of functionality allows your team to write content where the project is managed, meaning that everyone is always on the same page.</p>
        <div class="preview-image-wrapper">
          <img src="/images/content-creation/writing.png" alt="Vewrite" class="preview" />
        </div>
      </section>
    </section>
    <section class="product-content">
      <h2 class="container center no-margin">The write tools for the job</h2>
      <div class="tools container" id="tools">
        <!-- I want to show vewrite's tools here:
        - Writing
        - Reviewing
        - Approving -->
        <div class="single-tool">
          <div class="content">
            <h3>Write</h3>
            <p>Write your content in a modern, distraction-free environment that is designed to help you focus on what you're writing.</p>
          </div>
          <div class="image">
            <!-- <img src="/images/content-creation/writing-tool.png" alt="Vewrite writing tool" /> -->
          </div>
        </div> 
        <div class="single-tool">
          <div class="content">
            <h3>Review</h3>
            <p>Reviewing content is a breeze with Vewrite. You can easily see what's been changed and what hasn't, and leave comments for your team.</p>
          </div>
          <div class="image">
            <!-- <img src="/images/content-creation/reviewing-tool.png" alt="Vewrite reviewing tool" /> -->
          </div>
        </div>
        <div class="single-tool">
          <div class="content">
            <h3>Approve</h3>
            <p>Approving content is as easy as clicking a button. You can see what's been approved and what hasn't, and easily move content to the next stage.</p>
          </div>
          <div class="image">
            <!-- <img src="/images/content-creation/approving-tool.png" alt="Vewrite approving tool" /> -->
          </div>
        </div>
      </div>
    </section>
    <v2GetStarted />
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

.tools {
  display: flex;
  flex-direction: column;
  gap: $spacing-lg;

  .single-tool {
    display: flex;
    flex-direction: row;
    overflow: hidden;
    background: rgba($brand, 0.05);
    border-radius: $br-xl;
    min-height: 600px;

    @media (max-width: $breakpoint-md) {
      flex-direction: column-reverse;
    }

    .content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      padding: $spacing-lg;
      width: 50%;

      @media (max-width: $breakpoint-md) {
        width: 100%;
      }

      h3 {
        margin: 0 0 $spacing-xs;
      }
    }

    .image {
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgba($brand, 0.05);
      width: 50%;

      @media (max-width: $breakpoint-md) {
        width: 100%;
      }

      img {
        max-width: 100%;
        max-height: 100%;
      }
    }

  }
}

</style>