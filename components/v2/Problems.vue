<template>
  <section class="problems">
    <div class="single-quote" v-gsap.whenVisible.from="{ opacity: 0 }">
      <div class="user-image">
        <img src="/public/images/donald.png" alt="Donald R., Head of DevRel" />
      </div>
      <div class="user-content">
        <h3>“I finally always know where all of my documents are. It's such a relief.”</h3>
        <p class="user-name">Donald R., Head of DevRel</p>
        <hr />
        <h4>Save time with structured documents</h4>
        <p classs="vewrite-explainer">Reduce your project’s timelines by leveraging our structured workflows, a modern writing experience, and built-in stakeholder review and approval.</p>
      </div>
    </div>
    <div class="single-quote"  v-gsap.whenVisible.delay-1000.from="{ opacity: 0 }">
      <div class="user-image">
        <img src="/public/images/lily.png" alt="Lily A., Marketing Lead" />
      </div>
      <div class="user-content">
        <h3>“It’s so nice always knowing when we can start on the next content piece. I'll never go back.”</h3>
        <p class="user-name">Lily A., Marketing Lead</p>
        <hr />
        <h4>Always know the state of your project</h4>
        <p classs="vewrite-explainer">A big time-sink for project managers is manually following up on the state of every piece of content in production. Vewrite does this for you automatically, saving you both time and effort.</p>
      </div>
    </div>
    <div class="single-quote"  v-gsap.whenVisible.from="{ opacity: 0 }">
      <div class="user-image">
        <img src="/public/images/katie.png" alt="Katie D., VP Marketing" />
      </div>
      <div class="user-content">
        <h3>“I got so tired of every project running over time. I never knew when we were done. Now, I do.”</h3>
        <p class="user-name">Katie D., VP Marketing</p>
        <hr />
        <h4>Stay on target</h4>
        <p classs="vewrite-explainer">Projects can be unwieldy if you don’t take into account review times, stakeholder review and feedback, and the iterative cycle. Vewrite can help hold your hand through the process so that your team can focus on creating the best content possible.</p>
      </div>
    </div>
    <div class="single-quote"  v-gsap.whenVisible.delay-1000.from="{ opacity: 0 }">
      <div class="user-image">
        <img src="/public/images/adonis.png" alt="Adonis V., Technical Writer" />
      </div>
      <div class="user-content">
        <h3>“No more manually following up with stakeholders? Yes, please!”</h3>
        <p class="user-name">Adonis V., Technical Writer</p>
        <hr />
        <h4>Focus on what’s important</h4>
        <p classs="vewrite-explainer">Following up with clients and stakeholders can be difficult. Vewrite can help by automating notifications for them, taking that off of your plate so that you can focus on the work at hand.</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>

@use 'assets/variables' as *;

.problems {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: $spacing-xl;
  margin: $spacing-xl auto;
  padding: 0 $spacing-lg;
  max-width: $max-width;

  .single-quote {
    padding: $spacing-md;
    display: flex;
    flex: 1 auto;
    flex-direction: row;
    gap: $spacing-md;
    overflow: hidden;

    .user-image {
      border: $border;
      padding: 6px;
      border-radius: 50%;
      width: 68px;
      min-width: 68px;
      height: 68px;
      background: #F3F4F5;

      img {
        width: 54px;
        min-width: 54px;
        height: 54px;
        border-radius: 50%;
        overflow: hidden;
        object-fit: cover;
      }
    }

    .user-content {
      display: flex;
      flex-direction: column;
      gap: $spacing-sm;

      h3 {
        font-size: $font-size-lg;
        font-weight: bold;
        color: $brand;
        line-height: 1.2;
        margin: 0;
      }

      .user-name {
        font-size: $font-size-sm;
        font-weight: bold;
        color:rgba($black, 0.5);
        margin: 0;
      }

      hr {
        border: none;
        border-top: 1px solid rgba($black, 0.1);
        margin: 0;
        width: 10px;
      }

      h4 {
        font-size: $font-size-md;
        font-weight: bold;
        margin: 0;
      }

      .vewrite-explainer {
        font-size: $font-size-sm;
        color: rgba($black, 0.5);
        margin: 0;
      }
    }
  }
}

</style>