<template>
  <section class="build">
    <h2 class="build-header">Build the best writing process for your team.</h2>
    <div class="column-right">
      <div class="build-box" v-gsap.whenVisible.delay-1000.from="{ opacity: 0 }">
        <spline-viewer class="spline-viewer" url="https://prod.spline.design/cPM2h0zY-BHZ0r2B/scene.splinecode"></spline-viewer>
        <h3>Workflows that work for you</h3>
        <p>You can shorten your project’s timelines (make more money) by leveraging our workflows, a modern writing experience, and our built-in stakeholder review and approval.</p>
        <p><button>Explore Workflows</button></p>
      </div>
      <div class="build-box" v-gsap.whenVisible.delay-1000.from="{ opacity: 0 }">
        <spline-viewer class="spline-viewer" url="https://prod.spline.design/AMi8-7-wfTORRSEZ/scene.splinecode"></spline-viewer>
        <h3>Be more organized</h3>
        <p>Vewrite’s project management system is simple and straightforward, leaving you free to focus on content creation.</p>
        <p><button>Explore Projects</button></p>
      </div>
      <div class="build-box" v-gsap.whenVisible.delay-1000.from="{ opacity: 0 }">
        <spline-viewer class="spline-viewer" url="https://prod.spline.design/LAtGJGEkHL1GjOCb/scene.splinecode"></spline-viewer>
        <h3>Understand the full scope of work</h3>
        <p>Having a project be successful is not just about what you deliver, but also is about the back and forth with your writers and stakeholders to get you across the finish line.</p>
        <p><button>Explore Reviews</button></p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>

@use 'assets/variables' as *;

.build {
  display: flex;
  flex-direction: row;
  gap: $spacing-md;
  margin: $spacing-xl auto;
  width: 100%;
  max-width: $max-width;
  position: relative;


  .build-header {
    font-size: 52px;
    font-weight: bold;
    line-height: 1;
    text-align: left;
    color: $brand-light;
    margin: $spacing-md;
    display: inline-block;
    letter-spacing: -1px;
    width: 100%;
    font-weight: bold;
    position: sticky;
    top: 50%;
    transform: translateY(-50%);
    max-height: 200px;
    overflow: visible;
    text-wrap: balance;
  }

  .column-right {
    display: flex;
    flex-direction: column;
    gap: $spacing-md;
    padding: $spacing-xl $spacing-md;
  }

  .build-box {
    border: $border;
    border-radius: $br-lg;
    min-height: 520px;
    display: flex;
    flex-direction: column;
    gap: $spacing-xxs;
    justify-content: flex-end;
    background: #F3F4F5;

    button {
      align-self: flex-start;
    }

    h3 {
      font-size: 24px;
      font-weight: bold;
      letter-spacing: -0.4px;
      margin: 0 $spacing-md;
      color: $brand;
    }

    p {
      margin: 0 $spacing-md $spacing-md;
    }
  }
}

</style>