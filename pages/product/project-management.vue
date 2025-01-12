<template>
  <NuxtLayout>
    <JoinPopup />
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
          <!-- <a href="/product/project-management#automation">Automation</a> -->
          <!-- <a href="/product/project-management#progress-tracking">Progress tracking</a> -->
        </section>
      </nav>
      <section class="product-intro">
        <spline-viewer class="product-spline" url="https://prod.spline.design/5H9rIjIKYzG0UWxG/scene.splinecode"></spline-viewer>
        <h1>Let's make managing your content writing project a breeze.</h1>
        <h2>We'd like to take the tedious parts of managing your documents, reviews, and approvals off of your plate so that you can focus on what's really important: creating awesome content for your clients.</h2>
        <p>Stop spending endless hours chasing after what is done and what isn't. Use a tool that helps you get things done faster, better, and cheaper.</p>
        <div class="preview-image-wrapper">
          <img src="/public/images/hero-preview.png" alt="Vewrite" class="preview" />
        </div>
      </section>
    </section>
    <section class="product-content">
      <h2 class="container center no-margin">Our time savers make your project fly by</h2>
      <div class="time-savers container" id="time-savers">
        <div class="single-saver">
          <div class="top">
            <h3>Document creation according to workflow</h3>
            <p>With Vewrite, managing multiple versions of your document is now a breeze.</p>
          </div>
          <img src="/images/project-management/workflow.png" alt="Vewrite project management" />
        </div>
        <div class="single-saver">
          <div class="top">
            <h3>Easily move to the next state when you’re ready</h3>
            <p>It's super easy to set the state of a deliverable, meaning that your project is always up to date.</p>
          </div>
          <img src="/images/project-management/next-state.png" alt="Vewrite project management" />
        </div>
        <div class="single-saver">
          <div class="top">
            <h3>Easy due-date management</h3>
            <p>Per-deliverable due-dates mean that you can easily manage the timelines of your project.</p>
          </div>
          <img src="/images/project-management/due-date.png" alt="Vewrite project management" />
        </div>
        <div class="single-saver">
          <div class="top">
            <h3>All of your documents in one place</h3>
            <p>You'll never have to dig through tons of folders to find the right version again!</p>
          </div>
          <img src="/images/project-management/all-docs.png" alt="Vewrite project management" />
        </div>
        <div class="single-saver">
          <div class="top">
            <h3>Built-in review system</h3>
            <p>A tightly integrated review system makes sure feedback is easy to find and implement.</p>
          </div>
          <img src="/images/project-management/review.png" alt="Vewrite project management" />
        </div>
        <div class="single-saver">
          <div class="top">
            <h3>Downloads in multiple formats</h3>
            <p>Don't worry about what format your client needs. We export to the most popular ones!</p>
          </div>
          <img src="/images/project-management/download.png" alt="Vewrite project management" />
        </div>
      </div>
      <!-- <div class="automation" id="automation">
        talk about how automation works
      </div>
      <div class="progress-tracking" id="progress-tracking">
        talk about how automation works
      </div> -->
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

  @media (max-width: $breakpoint-md) {
    display: none;
  }
}

.time-savers {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: $spacing-md;
  margin: 0 auto $spacing-xl;

  @media (max-width: $breakpoint-md) {
    grid-template-columns: 1fr;
  }

  .single-saver {
    min-height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    background: rgba($brand, 0.05);
    border-radius: $br-xl;

    h3 {
      font-size: $font-size-md;
      font-weight: bold;
      margin: $spacing-md $spacing-md $spacing-xs;
    }

    p {
      font-size: $font-size-sm;
      margin: 0 $spacing-md $spacing-md;
    }
  }
}

</style>