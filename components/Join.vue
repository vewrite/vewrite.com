<template>
  <div class="join-container">
    <div v-if="successMessage" class="notification success">{{ successMessage }}</div>
    <div v-if="errorMessage" class="notification error">{{ errorMessage }}</div>
    <form class="hero-waitlist" @submit.prevent="submitEmail">
      <input type="email" name="email" placeholder="Enter your email">
      <button type="submit" class="green large" :disabled="loading">
        <Loading v-if="loading" type="small" />
        <span v-else>Join Waitlist</span>
      </button>
    </form>
  </div>
</template>

<script setup>

const { $supabase } = useNuxtApp()
const loading = ref(false);
const errorMessage = ref(null);
const successMessage = ref(null);

async function submitEmail(event) {
  loading.value = true;
  errorMessage.value = null;
  successMessage.value = null;
  const email = event.target.elements.email.value;
  console.log('Submitting email:', email);

  try {
    const { data, error } = await $supabase
      .from('waitlist')
      .insert([{ email: email }]);

    if (error) {
      console.error('Supabase error:', error);
      // Handle error (e.g., show error message to user)
      if (error.code === '23505') {
        errorMessage.value = 'Email already exists';
      }
    } else {
      console.log('Submission successful:', data);
      // Handle success (e.g., show success message to user)
      successMessage.value = 'Success! You have been added to the waitlist.';
    }
  } catch (err) {
    console.error('Unexpected error:', err);
    // Handle unexpected errors
  } finally {
    loading.value = false;
  }
}

</script>

<style lang="scss" scoped>

@import 'assets/_variables.scss';

.join-container {
  position: relative;
  display: flex;
  flex-direction: row;
  gap: $spacing-sm;
  width: 80%;
  position: relative;

  .notification {
    position: absolute;
    top: 80px;
    right: 0;
  }
}

.hero-waitlist {
  width: 100%;

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
    outline-offset: 0px;
    width: 100%;

    &:active, &:focus {
      outline: 2px solid $white;
      outline-offset: 8px;
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

</style>