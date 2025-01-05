<template>
  <section class="build">
    <div class="column-left">
      <h2 v-gsap.parallax.faster>Build the best writing process for your team.</h2>
      <div class="build-box" v-gsap.whenVisible.delay-1000.from="{ opacity: 0 }">
        <spline-viewer class="spline-viewer" url="https://prod.spline.design/cPM2h0zY-BHZ0r2B/scene.splinecode"></spline-viewer>
        <h3>Workflows that work for you</h3>
        <p>You can shorten your project’s timelines (make more money) by leveraging our workflows, a modern writing experience, and our built-in stakeholder review and approval.</p>
      </div>
    </div>
    <div class="column-right">
      <div class="build-box" v-gsap.whenVisible.delay-1000.from="{ opacity: 0 }">
        <spline-viewer class="spline-viewer" url="https://prod.spline.design/AMi8-7-wfTORRSEZ/scene.splinecode"></spline-viewer>
        <h3>Be more organized</h3>
        <p>Vewrite’s project management system is simple and straightforward, leaving you free to focus on content creation.</p>
      </div>
      <div class="build-box top-aligned" v-gsap.whenVisible.delay-1000.from="{ opacity: 0 }">
        <h3>Understand the full scope of work</h3>
        <p>Having a project be successful is not just about what you deliver, but also is about the back and forth with your writers and stakeholders to get you across the finish line.</p>
        <spline-viewer class="spline-viewer" url="https://prod.spline.design/LAtGJGEkHL1GjOCb/scene.splinecode"></spline-viewer>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>

@use 'assets/variables' as *;

.build {
  width: 100%;
  max-width: $max-width;
  margin: 0 auto;
  padding: $spacing-lg $spacing-md;
  display: flex;
  flex-direction: row;
  gap: $spacing-md;

  @media (max-width: $breakpoint-md) {
    flex-direction: column;
  }

  .column-left {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: $spacing-md;

    h2 {
      font-size: 60px;
      font-weight: bold;
      line-height: 1;
      text-align: left;
      background: linear-gradient(to right, #4D70E7 60%, #3F5CBE 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      display: inline-block;
      letter-spacing: -1px;
      padding: $spacing-sm 0;
    }
  }

  .column-right {
    display: flex;
    flex-direction: column;
    gap: $spacing-md;
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

    &.top-aligned {
      justify-content: flex-start;

      h3 {
        margin-top: $spacing-md;
      }

      p {
        margin-bottom: $spacing-md;
      }
    }

    h3 {
      font-size: 24px;
      font-weight: bold;
      letter-spacing: -0.4px;
      margin: 0 $spacing-md;
    }

    p {
      margin: 0 $spacing-md $spacing-md;
    }
  }
}

</style>