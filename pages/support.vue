<template>
  <NuxtLayout>
    <JoinPopup />
    <section class="support">
      <h1>Support</h1>
      <h2 class="no-top-margin">We're here to help.</h2>
      <section class="support-options">
        <div class="support-row">
          <p>Contact support</p>
          <p><a href="mailto:support@vewrite.com">support@vewrite.com</a></p>
        </div>
        <div class="support-row">
          <p>Submit a bug</p>
          <p><a href="https://github.com/ramijames/vewrite/issues">Open Issues</a></p>
        </div>
      </section>
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

.support-options {
  display: flex;
  flex-direction: column;
  margin-top: $spacing-lg;
  max-width: 600px;
  background: rgba($brand, 0.05);
  border-radius: $br-xl;
  padding: $spacing-sm $spacing-md;

  .support-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba($brand, 0.1);
    padding: $spacing-sm 0;

    &:last-of-type {
      border-bottom: none;
    }
    
    p {
      margin: 0;
    }
  }
}

</style>