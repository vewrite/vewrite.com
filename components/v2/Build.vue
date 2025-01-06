<template>
  <section class="build">
    <h2 class="build-header">Build the best writing process for your team.</h2>
    <div class="column-right">
      <div class="build-box">
        <spline-viewer class="spline-viewer" url="https://prod.spline.design/cPM2h0zY-BHZ0r2B/scene.splinecode"></spline-viewer>
        <h3>Workflows that work for you</h3>
        <p>You can shorten your project’s timelines (make more money) by leveraging our workflows, a modern writing experience, and our built-in stakeholder review and approval.</p>
        <p><button class="button">Explore Workflows</button></p>
      </div>
      <div class="build-box">
        <spline-viewer class="spline-viewer" url="https://prod.spline.design/AMi8-7-wfTORRSEZ/scene.splinecode"></spline-viewer>
        <h3>Be more organized</h3>
        <p>Vewrite’s project management system is simple and straightforward, leaving you free to focus on content creation.</p>
        <p><button class="button">Explore Projects</button></p>
      </div>
      <div class="build-box">
        <spline-viewer class="spline-viewer" url="https://prod.spline.design/LAtGJGEkHL1GjOCb/scene.splinecode"></spline-viewer>
        <h3>Understand the full scope of work</h3>
        <p>Having a project be successful is not just about what you deliver, but also is about the back and forth with your writers and stakeholders to get you across the finish line.</p>
        <p><button class="button">Explore Reviews</button></p>
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

  @media (max-width: $breakpoint-md) {
    flex-direction: column;
    gap: 0;
    margin: $spacing-md auto;
  }

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

    @media (max-width: $breakpoint-md) {
      position: relative;
      top: 0;
      text-align: center;
      width: calc(100% - #{$spacing-md * 2});
    }
  }

  .column-right {
    display: flex;
    flex-direction: column;
    gap: $spacing-lg;
    padding: $spacing-xl $spacing-md;

    @media (max-width: $breakpoint-md) {
      padding: $spacing-md;
    }
  }

  .build-box {
    border-radius: $br-xl;
    min-height: 600px;
    display: flex;
    flex-direction: column;
    gap: $spacing-xxs;
    justify-content: flex-end;
    background: linear-gradient(165deg, $brand 70%, #C8D3F7 100%);
    box-shadow: inset 0 2px 1px 1px rgba(white, 0.42), inset 0 2px 2px 4px rgba(white, 0.32), inset 0 0 2px 10px rgba(white, 0.12), 0 14px 1px 0px rgba($brand, 0.05), 0 16px 20px 5px rgba($brand, 0.12);
    overflow: hidden;

    .spline-viewer {
      margin: 20px;
      width: calc(100% - 40px);
      position: relative;

      &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        box-shadow: inset 0 0 40px 30px rgba($brand, 1);
        z-index: 1;
      }
      
    }

    button {
      align-self: flex-start;
    }

    h3 {
      font-size: 24px;
      font-weight: bold;
      letter-spacing: -0.4px;
      margin: 0 $spacing-md;
      color: $white;
    }

    p {
      margin: 0 $spacing-md $spacing-md;
      color: rgba($white, 0.5);
    }
  }
}

</style>