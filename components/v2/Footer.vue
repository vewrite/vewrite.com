<template>
  <footer>
    <section class="container">
      <v2Logo />
      <section class="links-wrapper">
        <section class="footer-links">
          <div class="links-group">
            <h4>Product</h4>
            <nuxt-link to="/product/project-management">Project management</nuxt-link>
            <nuxt-link to="/product/content-creation">Content creation</nuxt-link>
            <!-- <nuxt-link to="/product/workflows">Workflows</nuxt-link>
            <nuxt-link to="/product/clients-management">Clients</nuxt-link>
            <nuxt-link to="/product/teams-management">Teams</nuxt-link> -->
          </div>
        </section>
        <section class="footer-links">
          <div class="links-group">
            <h4>Resources</h4>
            <!-- <nuxt-link to="/feature/projects">Pricing</nuxt-link> -->
            <nuxt-link to="/support">Support</nuxt-link>
            <!-- <nuxt-link to="https://docs.vewrite.com/">Documentation</nuxt-link> -->
            <!-- <nuxt-link to="https://docs.vewrite.com/getting-started">Getting Started</nuxt-link> -->
          </div>
        </section>
        <section class="footer-links">
          <div class="links-group">
            <h4>Popular Articles</h4>
            <nuxt-link to="/articles/introducing-vewrite">Introducing Vewrite</nuxt-link>
            <nuxt-link to="/articles/product-report-jan-2025">Product Report January 2025</nuxt-link>
          </div>
        </section>
        <section class="footer-links">
          <div class="links-group">
            <h4>Company</h4>
            <nuxt-link to="/company/mission">Mission</nuxt-link>
            <nuxt-link to="/legal/privacy">Privacy Policy</nuxt-link>
            <nuxt-link to="/legal/terms">Terms & Conditions</nuxt-link>
          </div>
        </section>
      </section>
    </section>
    <section class="addendum">
      <p class="copyright">&copy; 2024 Vewrite.</p>
      <div class="social-links">
        <a href="https://github.com/ramijames/vewrite" target="_blank" rel="noopener noreferrer">Github</a>
        <a href="https://www.linkedin.com/company/vewrite" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </section>
  </footer>
</template>

<style lang="scss" scoped>

@use 'assets/variables' as *;

footer {
  padding: $spacing-xl $spacing-md;
  background: rgba($brand, 0.1);
  align-items: flex-start;

  @media (max-width: $breakpoint-md) {
    padding: $spacing-lg $spacing-md;
  }

  .container {
    display: flex;
    flex-direction: row;
    gap: $spacing-lg;
    justify-content: space-between;

    @media (max-width: $breakpoint-md) {
      flex-direction: column;
      padding: 0;
    }

    .links-wrapper {
      display: flex;
      flex-direction: row;
      gap: $spacing-lg;

      @media (max-width: $breakpoint-md) {
        display: grid;
        grid-template-columns: 1fr;
      }
    }

    .vewrite-logo {
      width: 100px;
      height: fit-content;
    }

    .links-group {
      display: flex;
      flex-direction: column;
      gap: $spacing-sm;

      h4 {
        margin: $spacing-xxs 0 0;
        font-size: $font-size-sm;
        font-weight: bold;
        color: $black;
      }

      a {
        color: rgba($brand, 0.85);
        text-decoration: none;
      }
    }
  }

  .addendum {
    max-width: $max-width;
    margin: $spacing-xl auto $spacing-md;
    border-top: 1px solid rgba($black, 0.2);
    padding: $spacing-lg 0 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .copyright {
      font-size: $font-size-sm;
      color: rgba($black, 0.5);
    }

    .social-links {
      display: flex;
      flex-direction: row;
      gap: $spacing-md;

      a {
        color: rgba($black, 0.5);
      }
    }
  }
}

</style>