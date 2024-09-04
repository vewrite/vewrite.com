<template>
  <main id="hero">
    <a name="join" class="target"></a>
    <div class="container">
      <div class="hero-article">
        <span class="new">
          <span class="bubble"></span>
          New
        </span>
        <nuxt-link to="/" class="hero-article-title">Introducing Vewrite ➔</nuxt-link>
      </div>
      <h1>
        More writing,<br>
        less hassle
      </h1>
      <h2>
        Vewrite is launching a project management toolset for technical writing teams that has a talent marketplace deeply integrated into it. 
      </h2>
      <form class="hero-waitlist">
        <input type="email" placeholder="Enter your email">
        <button class="green large">Join Waitlist ➔</button>
      </form>
    </div>
  </main>
  <div id="Personas">
    <div class="container">
      <span class="marker team">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 19C18.5523 19 19.0016 18.5521 18.975 18.0004C18.9599 17.6868 18.9357 17.3593 18.8969 17.1156C18.8125 16.6047 18.1047 15.9297 15.0953 14.8234C12.1328 13.7359 12.3156 14.2656 12.3156 12.2641C12.3156 10.9656 12.9766 11.7203 13.3984 9.25469C13.5625 8.28438 13.6937 8.93125 14.05 7.375C14.2375 6.55938 13.9234 6.49844 13.9609 6.10938C13.9984 5.72031 14.0359 5.37344 14.1063 4.57656C14.1906 3.59219 13.2766 1 10 1C6.72344 1 5.80938 3.59219 5.89844 4.58125C5.96875 5.37344 6.00625 5.725 6.04375 6.11406C6.08125 6.50313 5.76719 6.56406 5.95469 7.37969C6.31094 8.93125 6.44219 8.28437 6.60625 9.25937C7.02813 11.725 7.68906 10.9703 7.68906 12.2687C7.68906 14.275 7.87187 13.7453 4.90937 14.8281C1.9 15.9297 1.1875 16.6094 1.10781 17.1203C1.06725 17.3619 1.04194 17.6879 1.02616 18.0004C0.998311 18.552 1.44772 19 2 19H10H18Z" stroke="#8D00FB" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round"/>
        </svg>
        For teams
      </span>
      <h2>
        Efficiently manage your Technical Writing team
      </h2>
      <p>Our software provides your team with a customizable, tailored alternative for project management of technical writing projects. You don’t have to use tools made for developers and marketers to get your work done on-time and within budget.</p>
      <div class="illustration stakeholder">
        <div class="text bottom-left">
          <h3>Stakeholder visibility</h3>
          <p>Vewrite prioritizes stakeholder visibility as a part of its workflows. This reduces inefficient back and forth,  improving team efficiency, and your bottom line.</p>
        </div>
      </div>

      <div class="illustration-row">
        <div class="illustration-bubble">
          <h3>State management</h3>
          <p>As deliverables make their way through your workflow, they have discrete states that have clear meanings that map to your business processes.</p>

        </div>
        <div class="illustration-bubble">
          <h3>Smart templates</h3>
          <p>Teams that are just getting started can rely on our smart default templates to quickly set up their processes and hit the ground running.</p>

        </div>
      </div>

      <div class="illustration workflows">
        <div class="text bottom-left">
          <h3>Custom workflows</h3>
          <p>Already have an established process? Vewrite allows you to build custom worksflows that fit your existing pipeline.</p>
        </div>
      </div>
      <span class="marker writer">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M1.2897 14.9077C1.10412 15.0949 1 15.3479 1 15.6116V18C1 18.5523 1.44772 19 2 19H4.38313C4.64992 19 4.90564 18.8934 5.09343 18.7039L15.0993 8.60709C15.4868 8.21606 15.4854 7.58536 15.0961 7.19609L12.7103 4.81031C12.3185 4.41854 11.6829 4.41998 11.2929 4.81352L1.2897 14.9077ZM18.7 5C19.1 4.6 19.1 4 18.7 3.6L16.4 1.3C16 0.9 15.4 0.9 15 1.3L13.9071 2.39289C13.5166 2.78342 13.5166 3.41658 13.9071 3.80711L16.2525 6.15252C16.6585 6.55846 17.3221 6.54004 17.7049 6.11221L18.7 5Z" stroke="#68834A" stroke-width="2" stroke-linecap="round"/>
        </svg>
        For writers
      </span>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'home'
});
</script>

<style lang="scss" scoped>

@import 'assets/_variables.scss';

@keyframes pulse {
  0% {
    transform: scale(0.4);
  }
  50% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(0.4);
  }
}

#hero {
  background: $purple;
  background-size: cover;
  color: $white;
  padding-top: $spacing-xl;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  .target {
    height: 0;
    width: 0;
    visibility: hidden;
    display: none;
  }

  .container {
    height: 100%;
    width: 100%;
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    z-index: 1;
    padding-bottom: $spacing-xxl;

    &:after {
      content: '';
      position: absolute;
      bottom: -1px;
      right: -300px;
      width: 300px;
      height: 400px;
      background: transparent url('/images/white_overlay.svg') no-repeat center center;
      background-size: cover;
      z-index: 1;
    }

    .hero-article {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: $spacing-sm;

      .new {
        font-size: $font-size-xs;
        font-family: $font-family-condensed;
        font-weight: bold;
        color: $white;
        background: $purple-dark;
        padding: 6px 8px 6px 32px;
        border-radius: $br-md;
        position: relative;

        .bubble {
          width: 18px;
          height: 18px;
          position: relative;
          background: $purple;
          mix-blend-mode: normal;
          box-shadow: 0px 0px 6px 2px rgba(255, 255, 255, 0.6);
          border-radius: 30px;
          position: absolute;
          left: 5px;
          top: 3px;
          transform: scale(0.4);
          animation: pulse 2s infinite;

          &:before {
            content: '';
            position: absolute;
            top: 5px;
            left: 5px;
            width: 8px;
            height: 8px;
            background: $white;
            mix-blend-mode: normal;
            border-radius: 30px;
          }

        }

      }

      a {
        color: $white;
        text-decoration: none;
        font-size: $font-size-md;
        font-family: $font-family-condensed;
      }

    }

    h1 {
      font-size: $font-size-mega;
      line-height: 90%;
      font-weight: bold;
      margin: $spacing-md 0;
      position: relative;
      width: 80%;

      &:before {
        content: '';
        position: absolute;
        top: -100px;
        left: -680px;
        width: 600px;
        height: 600px;
        background: transparent url('/images/triangle.png') no-repeat center center;
        background-size: contain;
        z-index: -1;
      }
    }

    h2 {
      font-size: $font-size-xl;
      font-family: $font-family-condensed;
      line-height: 150%;
      font-weight: normal;
      margin: $spacing-md 0 $spacing-lg 0;
      position: relative;
      width: 80%;

      &:before {
        content: '';
        position: absolute;
        top: -200px;
        right: -780px;
        width: 700px;
        height: 700px;
        background: transparent url('/images/circle.png') no-repeat center center;
        background-size: contain;
        z-index: -1;
      }

    }

    form {
      display: flex;
      flex-direction: row;
      gap: $spacing-sm;
      width: 80%;
      position: relative;

      input {
        padding: $spacing-md;
        border: none;
        border-radius: 40px;
        font-size: $font-size-md;
        font-family: $font-family-condensed;
        width: 100%;
        background: $purple-dark;
        color: $white;
        outline: 2px solid transparent;
        outline-offset: 4px;

        &:active, &:focus {
          outline: 2px solid $purple-light;
        }
      }

      button {
        position: absolute;
        right: 14px;
        top: 12px;
        font-size: $font-size-md;
        outline: 2px solid $green;
        outline-offset: 0px;

        &:hover {
          outline-offset: 2px;
          transform: scale(1.05);
        }
      }
    }
  }

}

#Personas {
  padding: $spacing-xl 0;
  width: 100%;
  font-family: $font-family-condensed;

  .container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: $spacing-lg;
  }

  .marker {
    padding: $spacing-sm $spacing-md;
    border-radius: $br-xxl;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: $spacing-sm;
    font-family: $font-family-secondary;
    font-size: $font-size-xl;

    &.team {
      background: rgba($purple, 0.15);
      color: $purple;
    }

    &.writer {
      background: rgba($green, 0.15);
      color: $green-dark;
    }
  }

  .illustration {
    border-radius: $br-xl;
    position: relative;
    width: 100%;

    .text {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      width: 35%;

      &.bottom-left {
        position: absolute;
        bottom: $spacing-lg;
        left: $spacing-lg;
      }

    }

    &.stakeholder {
      background: $purple url('/images/stakeholder.png') no-repeat right bottom;
      background-size: cover;
      min-height: 480px;
      color: $white;
    }

    &.workflows {
      background: $purple url('/images/workflows.png') no-repeat right bottom;
      background-size: cover;
      min-height: 480px;
      color: $white;
    }
  }

  .illustration-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    gap: $spacing-lg;
  }

  .illustration-bubble {
    padding: $spacing-lg;
    border-radius: $br-xl;
    width: 50%;
    background: rgba($purple, 0.05);
  }
}

</style>