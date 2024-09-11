<template>
  <main id="hero" :class="{'scrolled': isScrolled}">
    <div class="container">
      <Logo color="black" size="large" />
      <div class="hero-article">
        <span class="new">
          <span class="bubble"></span>
          <div>New</div>
        </span>
        <nuxt-link to="/articles/introducing-vewrite" class="hero-article-title">Introducing Vewrite ➔</nuxt-link>
      </div>
      <div class="hero-element-wrapper devices"><div class="hero-element-devices"></div></div>
      <div class="hero-element-wrapper office"><div class="hero-element-office"></div></div>
      <section>
        <h1>
          More writing,<br>
          less hassle
        </h1>
        <p>
          Vewrite is launching a project management toolset for technical writing teams that has a talent marketplace deeply integrated into it. 
        </p>
      </section>
      <Join id="hero-join" />
    </div>
  </main>

  <div id="Potentials">
    <div class="container">
      <div class="row">
        <div class="col one-third">
          <img src="/images/potential-team.png" alt="Writing Teams" />
          <h2>Small Writing Teams</h2>
          <p class="light">With so many projects and so many deliverables, you're spending precious time tracking progress instead of making it.</p>
          <p>Vewrite provides you with an easy to use workflow management tool that makes sure that you can focus on what is important: delivering high-quality work for your clients.</p>
        </div>
        <div class="col one-third">
          <img src="/images/potential-writer.png" alt="Freelance Technical Writers" />
          <h2>Technical Writers</h2>
          <p class="light">In a crowded market, it can be hard to be seen, and harder to make a living doing what you are good at.</p>
          <p>Vewrite ensures that you are embedded directly into the workflows of the teams who value you the most.</p>
        </div>
        <div class="col one-third">
          <img src="/images/potential-devrel.png" alt="Developer Relations" />
          <h2>Developer Relations</h2>
          <p class="light">When you are enlightening developers about your company's products, you should be free to focus on producing excellent content instead of micro-managing your workflow.</p>
          <p>With Vewrite your stakeholders have critical visibility while your DevRel team spreads the word about their innovations. </p>
        </div>
      </div>
    </div>
  </div>

  <a name="teams" class="target"></a>
  <div id="Personas">
    <div class="container">
      <div class="row">
        <div class="col">
          <span class="marker team">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 19C18.5523 19 19.0016 18.5521 18.975 18.0004C18.9599 17.6868 18.9357 17.3593 18.8969 17.1156C18.8125 16.6047 18.1047 15.9297 15.0953 14.8234C12.1328 13.7359 12.3156 14.2656 12.3156 12.2641C12.3156 10.9656 12.9766 11.7203 13.3984 9.25469C13.5625 8.28438 13.6937 8.93125 14.05 7.375C14.2375 6.55938 13.9234 6.49844 13.9609 6.10938C13.9984 5.72031 14.0359 5.37344 14.1063 4.57656C14.1906 3.59219 13.2766 1 10 1C6.72344 1 5.80938 3.59219 5.89844 4.58125C5.96875 5.37344 6.00625 5.725 6.04375 6.11406C6.08125 6.50313 5.76719 6.56406 5.95469 7.37969C6.31094 8.93125 6.44219 8.28437 6.60625 9.25937C7.02813 11.725 7.68906 10.9703 7.68906 12.2687C7.68906 14.275 7.87187 13.7453 4.90937 14.8281C1.9 15.9297 1.1875 16.6094 1.10781 17.1203C1.06725 17.3619 1.04194 17.6879 1.02616 18.0004C0.998311 18.552 1.44772 19 2 19H10H18Z" stroke="#8D00FB" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round"/>
            </svg>
            For teams
          </span>
          <h2>Efficiently manage your Technical Writing team</h2>
          <p class="light">Our software provides your team with a customizable, tailored alternative for project management of technical writing projects. Focus on pushing your work through a sensible workflow, instead of trying to tackle a pile of tasks. You don’t have to use tools made for developers and marketers to get your work done on-time and within budget.</p>
          <p>Vewrite is the better way to work that you've been looking for.</p>
        </div>
      </div>
    </div>

    <div id="Advantages">
        <div>
          <div class="icon">
            <img src="/images/stakeholder-visibility.png" alt="Stakeholder visibility" />
          </div>
          <h3  class="no-margin">Stakeholder visibility</h3>
          <p class="light">Vewrite prioritizes stakeholder visibility as a part of its workflows. This reduces inefficient back and forth, keeps your team happy, and improves your bottom line.</p>
        </div>
        <div class="bump">
          <div class="icon">
            <img src="/images/state-management.png" alt="State Management" />
          </div>
          <h3  class="no-margin">State management</h3>
          <p class="light">As deliverables make their way through your workflow, they have discrete states that have clear meanings that map to your business processes.</p>
        </div>
        <div>
          <div class="icon">
            <img src="/images/smart-templates.png" alt="Smart Templates" />
          </div>
          <h3  class="no-margin">Smart templates</h3>
          <p class="light">Teams that are just getting started can rely on our smart default templates to quickly set up their processes and hit the ground running.</p>
        </div>
        <div class="bump">
          <div class="icon">
            <img src="/images/custom-workflows.png" alt="Custom Workflows" />
          </div>
          <h3  class="no-margin">Custom workflows</h3>
          <p class="light">Already have an established process? Vewrite allows you to build custom worksflows that fit your existing pipeline.</p>
        </div>
    </div>

    <div class="container">
      <a name="writers" class="target"></a>
      <span class="marker writer">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M1.2897 14.9077C1.10412 15.0949 1 15.3479 1 15.6116V18C1 18.5523 1.44772 19 2 19H4.38313C4.64992 19 4.90564 18.8934 5.09343 18.7039L15.0993 8.60709C15.4868 8.21606 15.4854 7.58536 15.0961 7.19609L12.7103 4.81031C12.3185 4.41854 11.6829 4.41998 11.2929 4.81352L1.2897 14.9077ZM18.7 5C19.1 4.6 19.1 4 18.7 3.6L16.4 1.3C16 0.9 15.4 0.9 15 1.3L13.9071 2.39289C13.5166 2.78342 13.5166 3.41658 13.9071 3.80711L16.2525 6.15252C16.6585 6.55846 17.3221 6.54004 17.7049 6.11221L18.7 5Z" stroke="#68834A" stroke-width="2" stroke-linecap="round"/>
        </svg>
        For writers
      </span>

      <h2>Find well-paid work as a Technical Writer within our integrated Talent Marketplace</h2>
      <p class="light">Vewrite tightly integrates a marketplace for technical writers into its project management suite. Writers who want to work on awesome projects can now do so without losing a large percentage of their earnings to marketplace fees.</p>

      <table class="commission-rates">
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th>Buyer cost</th>
            <th>Writer cost</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr class="marketplace-fiverr">
            <td></td>
            <td><img src="/images/logo-fiverr.png" alt="Fiverr" /></td>
            <td>
              <span><strong>5.5% Service Fee</strong></span>
              <span><small>+ $2.50 for transactions under $75</small></span>
            </td>
            <td>
              <span><strong>20% Commission</strong></span>
            </td>
            <td></td>
          </tr>
          <tr class="marketplace-upwork">
            <td></td>
            <td><img src="/images/logo-upwork.png" alt="Upwork" /></td>
            <td>
              <span><strong>$4.95</strong></span>
              <span><small>Initial contract cost</small></span>
            </td>
            <td>
              <span><strong>10% Commission</strong></span>
            </td>
            <td></td>
          </tr>
          <tr class="marketplace-vewrite">
            <td></td>
            <td><img src="/images/logo-vewrite.png" alt="Vewrite" /></td>
            <td>
              <span><strong>2.5% Service Fee</strong></span>
            </td>
            <td>
              <span><strong>Free!</strong></span>
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>

      <div>
        <h3>Write where you work</h3>
        <p class="light">Vewrite provides teams an integrated working environment so they do not have to struggle with managing many remote files in different states. Never lose time working on the wrong document again.</p>
      </div>

      <div class="row">
        <div class="col half">
          <div class="icon">
            <img src="/images/tight-integration.png" alt="Tight Integration" />
          </div>
          <h3 class="no-margin">Tight integration</h3>
          <p class="light">Your tasks live within one application which means your focus can stay on producing your best work, instead of micromanaging your deliverables and their states.</p>
        </div>
        <div class="col half">
          <div class="icon">
            <img src="/images/prompt-payment.png" alt="Prompt Payment" />
          </div>
          <h3 class="no-margin">Prompt payouts</h3>
          <p class="light">When your work moves to the approved state, and all stakeholders are satisfied, it’s time to get you paid. Vewrite provides prompt payouts with no risk to you.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import { ref, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);
const isInView = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
  const heroSection = document.getElementById('hero');
  const rect = heroSection.getBoundingClientRect();
  isInView.value = rect.top < window.innerHeight && rect.bottom > 0;

  if (isInView.value) {
    const scrollY = window.scrollY;
    const translateY = scrollY * -0.25;
    document.documentElement.style.setProperty('--element-translate-y', `${translateY}px`);
    console.log(document.documentElement);
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initial check
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

definePageMeta({
  layout: 'home'
});

</script>

<style lang="scss">

@import 'assets/_variables.scss';

@keyframes fadeIn {
  0% {
    opacity: 0;
    // transform: translateY(20px);
  }

  100% {
    opacity: 1;
    // transform: translateY(0px);
  }
}

@keyframes pulse {
  0% {
    transform: scale(0.4);
    box-shadow: 0px 0px 6px 2px rgba($white, 0.8);
  }
  50% {
    transform: scale(1.4);
    box-shadow: 0px 0px 26px 0px rgba($purple, 1);
  }
  100% {
    transform: scale(0.4);
    box-shadow: 0px 0px 6px 2px rgba($white, 0.8);
  }
}

.hero-element-wrapper {
  transform: translateY(var(--element-translate-y, 0));

  @media (max-width: 1000px) {
    display: none;
  }

  &.devices {
    position: absolute;
    top: 200px;
    left: -600px;
  }

  &.office {
    position: absolute;
    top: -250px;
    right: 0px;
  }
}

#hero {
  background-size: cover;
  color: $black;
  width: 100%;
  height: 100%;
  position: relative;
  margin: $spacing-xl 0 0;


  @media (max-width: 1000px) {
    margin: $spacing-lg 0 0;
  }

  .container .logo {
    opacity: 0;
    animation: fadeIn .35s ease-in forwards;
  }

  .container #hero-join {
    opacity: 0;
    animation: fadeIn .35s ease-in-out forwards;
    animation-delay: 1.05s;
  }

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

    @media (max-width: 1000px) {
      gap: $spacing-lg;
    }

    .hero-article {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: $spacing-sm;
      opacity: 0;
      animation: fadeIn .35s ease-in-out forwards;
      animation-delay: 0.35s;

      .new {
        font-size: $font-size-md;
        font-family: $font-family-condensed;
        color: $white;
        background: rgba($purple, 1);
        padding: 6px 8px 6px 32px;
        border-radius: $br-md;
        position: relative;
        height: 28px;

        @media (max-width: 1000px) {
          padding: 6px;
          width: 30px;
        }

        div {
          @media (max-width: 1000px) {
            display: none;
          }
        }

        @media (max-width: 1000px) {
          font-size: $font-size-sm;
          display: flex;
          flex-direction: column;
        }

        .bubble {
          width: 18px;
          height: 18px;
          position: relative;
          background: $purple;
          box-shadow: 0px 0px 6px 2px rgba($white, 0.8);
          border-radius: 30px;
          position: absolute;
          left: 6px;
          top: 4px;
          transform: scale(0.4);
          animation: pulse 2s infinite;

          &:before {
            content: '';
            position: absolute;
            top: 5px;
            left: 5px;
            width: 8px;
            height: 8px;
            background: $white-light;
            mix-blend-mode: normal;
            border-radius: 30px;
          }

        }

      }

      a {
        color: $purple;
        text-decoration: none;
        border-bottom: 1px solid rgba($purple, 0.3);
        font-size: $font-size-lg;
        font-family: $font-family-condensed;
        transition: all 0.3s ease-in-out;

        @media (max-width: 1000px) {
          font-size: $font-size-md;
        }

        &:hover {
          color: $purple-dark;
          border-bottom: 1px solid rgba($purple, 1);
        }
      }

    }

    h1 {
      line-height: 90%;
      font-weight: bold;
      margin: 0 0 $spacing-md 0;
      position: relative;
      width: 80%;
      opacity: 0;
      animation: fadeIn .35s ease-in-out forwards;
      animation-delay: 0.7s;

      @media (max-width: 1000px) {
        width: 100%;
      }
    }

    .hero-element-devices {
      width: 630px;
      height: 765px;
      background: transparent url('/images/book.png') no-repeat center center;
      background-size: contain;
      z-index: -1;
      opacity: 0;
      animation: fadeIn .35s ease-in-out forwards;
      animation-delay: 1.7s;
    }

    p {
      font-family: $font-family-condensed;
      line-height: 150%;
      font-weight: normal;
      margin: $spacing-md 0 $spacing-lg 0;
      position: relative;
      width: 80%;
      opacity: 0;
      animation: fadeIn .35s ease-in-out forwards;
      animation-delay: 1.05s;

      @media (max-width: 1000px) {
        margin: 0;
        width: 100%;
      }
    }

    .hero-element-office {
      position: absolute;
      top: 50px;
      right: -250px;
      width: 630px;
      height: 945px;
      background: transparent url('/images/folder-pen.png') no-repeat center center;
      background-size: cover;
      z-index: 1;
      transform: translateY(var(--element-translate-y, 0));
      opacity: 0;
      animation: fadeIn .35s ease-in-out forwards;
      animation-delay: 1.35s;

      @media (max-width: 1000px) {
        width: 555px;
        height: 832px;
        top: 0px;
        right: -200px;
      }

    }
  }

}

#Potentials {
  padding: $spacing-xl 0;
  width: 100%;
  font-family: $font-family-condensed;

  .row {
    @media (max-width: 1000px) {
      display: flex;
      flex-direction: column;
      gap: $spacing-lg;
    }
  }

  .col {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: $spacing-md;

    h2 {
      text-align: center;
    }
     
    p {
      text-align: center;
    }
  }
}

#Personas {
  padding: $spacing-xl 0;
  width: 100%;
  font-family: $font-family-condensed;

  .container {
     img {
      max-width: 100%;
      height: auto;
     }
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
      margin-top: $spacing-xxl;
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

#Advantages {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: $spacing-xl;
  max-width: 80%;
  margin: $spacing-lg auto;

  @media (max-width: 1280px) {
    max-width: 100%;
    margin: $spacing-lg $spacing-md;
  }

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }

  div {

    h3 {
      margin-bottom: $spacing-md;
    }

    img {
      max-width: 100%;
      height: auto;
    }

    &.bump {
      padding-top: $spacing-xl;

      @media (max-width: 1000px) {
        padding-top: 0;
      }
    }
  }
}

.commission-rates {
  width: 100%;

  thead {
    tr {
      th {
        font-size: $font-size-xl;
        font-weight: normal;
        font-family: $font-family-secondary;
        color: $green-dark;
        text-align: left;
        padding: $spacing-md $spacing-lg;
        border: none;
        text-align: center;

        &:nth-child(1) {
          width: 5%;
          padding: 0;

          @media (max-width: 768px) {
            display: none;
          }
        }

        &:nth-child(2) {
          width: 20%;
          padding: 0;
        }

        &:nth-child(3) {
          background-color: #EEF2E7;
          border-radius: $br-xl 0 0 0;
          width: 35%;
        }

        &:nth-child(4) {
          background-color: #EEF2E7;
          border-radius: 0 $br-xl 0 0;
          width: 35%;
        }

        &:nth-child(5) {
          width: 5%;
          padding: 0;

          @media (max-width: 768px) {
            display: none;
          }
        }
      }
    }
  }

  tbody {
    tr {
      

      td {
        font-size: $font-size-md;
        font-family: $font-family-condensed;
        text-align: left;
        padding: $spacing-lg;
        border-top: 2px solid white;
        text-align: center;

        span {
          display: block;
          font-size: $font-size-lg;

          small {
            font-size: $font-size-xs;
          }
        }

        &:nth-child(1) {
          width: 5%;
          padding: 0;

          @media (max-width: 768px) {
            display: none;
          }
        }

        &:nth-child(3) {
          background-color: #EEF2E7;
        }

        &:nth-child(4) {
          background-color: #EEF2E7;
        }

        &:nth-child(5) {
          width: 5%;
          padding: 0;

          @media (max-width: 768px) {
            display: none;
          }
        }
      }
    }

    tr.marketplace-vewrite {
      
      td {
        background: $purple;
        color: $white;
        padding: $spacing-lg;
        border-top: none;

        &:nth-child(1) {
          border-radius: $br-xl 0 0 $br-xl;
        }

        &:nth-child(4) {
          background: $purple url('/images/circles.png') no-repeat center center;
        }

        &:nth-child(5) {
          border-radius: 0 $br-xl $br-xl 0;
        }
      }
      
    }
  }
}

</style>