<template>
  <footer>
    <section class="container">
      <v2Logo />
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
          <nuxt-link to="/feature/projects">Project management</nuxt-link>
          <nuxt-link to="/feature/projects">Content creation</nuxt-link>
          <nuxt-link to="/feature/workflows">Workflows</nuxt-link>
          <nuxt-link to="/feature/clients">Clients</nuxt-link>
          <nuxt-link to="/feature/teams">Teams</nuxt-link>
        </div>
      </section>
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

    .vewrite-logo {
      width: 100px;
      height: fit-content;
    }

    .links-group {
      display: flex;
      flex-direction: column;
      gap: $spacing-xs;

      h4 {
        margin: $spacing-xxs 0 $spacing-sm;
        font-size: $font-size-sm;
        font-weight: bold;
      }

      a {
        color: rgba($brand, 0.65);
      }
    }
  }
}

</style>