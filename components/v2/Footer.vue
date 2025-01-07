<template>
  <footer>
    <section class="container">
      <v2Logo />
      <section class="links-wrapper">
        <section class="footer-links">
          <div class="links-group">
            <h4>Product</h4>
            <nuxt-link to="/feature/projects">Project management</nuxt-link>
            <nuxt-link to="/feature/projects">Content creation</nuxt-link>
            <nuxt-link to="/feature/workflows">Workflows</nuxt-link>
            <nuxt-link to="/feature/clients">Clients</nuxt-link>
            <nuxt-link to="/feature/teams">Teams</nuxt-link>
          </div>
        </section>
        <section class="footer-links">
          <div class="links-group">
            <h4>Resources</h4>
            <nuxt-link to="/feature/projects">Pricing</nuxt-link>
            <nuxt-link to="/feature/projects">Support</nuxt-link>
            <nuxt-link to="/feature/projects">Getting Started</nuxt-link>
          </div>
        </section>
        <section class="footer-links">
          <div class="links-group">
            <h4>Popular Articles</h4>
            <nuxt-link to="/feature/projects">Project management</nuxt-link>
            <nuxt-link to="/feature/projects">Content creation</nuxt-link>
          </div>
        </section>
        <section class="footer-links">
          <div class="links-group">
            <h4>Company</h4>
            <nuxt-link to="/feature/projects">Mission</nuxt-link>
            <nuxt-link to="/feature/projects">Privacy Policy</nuxt-link>
            <nuxt-link to="/feature/projects">Terms & Conditions</nuxt-link>
            <nuxt-link to="/feature/projects">Contact</nuxt-link>
          </div>
        </section>
      </section>
    </section>
    <section class="addendum">
      <p class="copyright">&copy; 2024 Vewrite. All rights reserved.</p>
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

  .container {
    display: flex;
    flex-direction: row;
    gap: $spacing-lg;
    justify-content: space-between;

    .vewrite-logo {
      width: 100px;
      height: fit-content;
    }

    .links-wrapper {
      display: flex;
      flex-direction: row;
      gap: $spacing-lg;
    }

    .links-group {
      display: flex;
      flex-direction: column;
      gap: $spacing-sm;

      h4 {
        margin: $spacing-xxs 0 $spacing-sm;
        font-size: $font-size-sm;
        font-weight: bold;
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