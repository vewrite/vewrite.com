<template>
  <NuxtLayout>
    <h1>Mission</h1>
    <h2 class="no-top-margin">Enabling teams who create content to work together efficiently and effectively.</h2>
    <h3 class="no-top-margin">We believe that the current project management tools on the market are focused on being excellent to-do lists, but that <span class="highlight mint">working well together is about more than just getting tasks done</span>.</h3>
    <p>Vewrite's mission is to provide a tool that:</p>
    <ul>
      <li>Automates manual project management tasks,</li>
      <li>Encompasses all aspects of content creation work,</li>
      <li>Enables teams to work together effectively,</li>
      <li>Is focused on content creation and editing,</li>
      <li>Is simple and straightforward to use,</li>
      <li>Is open-source.</li>
    </ul>
    <h2>Product Milestones</h2>
    <p>As we build out Vewrite, we are starting from the absolutely critical features that enable all of the others, and are expanding outwards to allow more and more valuable business features. We have broken the project down into a few discrete phases.</p>
    <section class="milestones">
      <div class="milestone">
        <div class="marker">
          <img src="/images/icons/inprogress.svg" alt="In progress" />
        </div>
        <div class="milestone-content">
          <h3>Phase 1: Core Launch <span class="current">Current</span></h3>
          <p>Our first phase is focused on building the basic feature sets that all of the other phases will rely on.</p>
          <p>This phase includes:</p>
          <ul>
            <li>Project creation and management</li>
            <li>Workflows and workflow management</li>
            <li>Content creation and editing</li>
            <li>Basic user management</li>
            <li>Client creation and management</li>
            <li>Teams and team management</li>
          </ul>
          <p>Once these core features are ready, we're good to go to launch to the beta testers.</p>
        </div>
      </div>

      <div class="milestone">
        <div class="marker">
          <img src="/images/icons/waiting.svg" alt="Waiting" />
        </div>
        <div class="milestone-content">
          <h3>Phase 2: Beta Feedback <span>Upcoming</span></h3>
          <p>It's always hard to say exactly what Beta testers will like or not like about a product, especially when it is still not fully mature. I've intentionally left a phase open for implementing updates that fix things that are unclear for beta testers, or that they suggest better solutions for.</p>
          <p>If you'd like to be a beta tester, make sure to sign up for the waiting list.</p>
        </div>
      </div>

      <div class="milestone">
        <div class="marker">
          <img src="/images/icons/waiting.svg" alt="Waiting" />
        </div>
        <div class="milestone-content">
          <h3>Phase 3 (Talent Marketplace) <span>Upcoming</span></h3>
          <p>A big update that is planned once the core product is stabilized is the integrated Talent Marketplace. The intent here is to have in-situ resources which will allow teams to scale up or down depending on their current needs. Inversely, this will allow the wider freelance ecosystem to have a consistent place to find new work.</p>

          <p>This means that the Talent Marketplace should allow users to:</p>
          <ul>
            <li>Create and manage talent portfolios</li>
            <li>Add talent resources to teams</li>
            <li>Allow ratings and use those for suggestions</li>
            <li>Allow talent payment</li>
          </ul>
        </div>
      </div>

      <div class="milestone">
        <div class="marker">
          <img src="/images/icons/waiting.svg" alt="Waiting" />
        </div>
        <div class="milestone-content">
          <h3>Phase 4 (Business Tooling) <span>Upcoming</span></h3>
          <p>As the product grows and more businesses rely on it, it makes sense to expand what tooling is directly integrated into Vewrite. Part of what makes running a team painful is having to manage clients, invoicing, and calculate your finances.</p>
          <p>This means that Vewrite should allow users to:</p>
          <ul>
            <li>Expanded clients details</li>
            <li>Create and manage invoicing</li>
            <li>View analytics for Clients, Revenue, Costs, and Deliverables</li>
          </ul>
        </div>
      </div>

      <div class="milestone">
        <div class="marker">
          <img src="/images/icons/waiting.svg" alt="Waiting" />
        </div>
        <div class="milestone-content">
          <h3>Phase 5 (Types Expansion) <span>Upcoming</span></h3>
          <p>As Vewrite itself grows as a product, we can address other types of deliverables that would be valuable for us to be able to manage with a workflow. Some beta testers have already expressed interest in being able to manage the creation of these types of deliverables:</p>
          <ul>
            <li>Video</li>
            <li>Audio</li>
            <li>Images</li>
          </ul>
        </div>
      </div>

    </section>
  </NuxtLayout>
</template>

<script setup>

definePageMeta({
  layout: 'default'
});

</script>

<style lang="scss" scoped>

@use 'assets/variables' as *;

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}

.milestones {
  display: flex;
  flex-direction: column;
  margin: $spacing-md auto;
  width: 100%;
  max-width: $max-width;
  position: relative;

  @media (max-width: $breakpoint-md) {
    flex-direction: column;
    gap: 0;
    margin: $spacing-md auto;
  }

  .milestone {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
    
    .marker {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 24px;
      position: relative;
      height: 43px;

      p {
        margin: 0;
      }

      img {
        width: 43px;
        height: 43px;
        margin: 0;
        position: absolute;
        right: -22px;
        background: $white;
        border: 2px solid rgba($black, .1);
        border-radius: 50%;
        animation: spin 2s linear infinite;
      }
    }

    .milestone-content {
      border-left: 2px solid rgba($black, .1);
      padding-left: $spacing-lg;
      padding-bottom: $spacing-lg;
      width: 100%;

      h3 {
        margin: 0 0 $spacing-xs;
        display: flex;
        flex-direction: row;
        align-items: center;

        span {
          font-size: $font-size-xs;
          margin-left: $spacing-xs;
          padding: $spacing-xxs;
          background: rgba($brand-light, .1);
          border-radius: $br-md;

          &.current {
            background: rgba($mint, .1);
          }
        }
      }
    }
  }
}

</style>