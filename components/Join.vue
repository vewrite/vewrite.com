<template>
  <div class="join-container">
    <div v-if="successMessage" class="notification success">{{ successMessage }}</div>
    <div v-if="errorMessage" class="notification error">{{ errorMessage }}</div>
    <form class="hero-waitlist" @submit.prevent="submitEmail">
      <div class="hero-checkboxes">
        <h3>I'm interested in using Vewrite for</h3>
        <div>
          <input type="checkbox" id="teams" name="teams" value="teams" v-model="submission.teams">
          <label for="teams">Teams</label>
        </div>
        <div>
          <input type="checkbox" id="writers" name="writers" value="writers" v-model="submission.writers">
          <label for="writers">Writers</label>
        </div>
      </div>
      <div class="hero-container">
        <input type="email" name="email" placeholder="Enter your email" v-model="submission.email">
        <button type="submit" class="green large" :disabled="loading">
          <Loading v-if="loading" type="small" />
          <span v-else>Join Waitlist</span>
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>

const { $supabase } = useNuxtApp()
const loading = ref(false);
const errorMessage = ref(null);
const successMessage = ref(null);

const submission = ref({
  email: '',
  teams: false,
  writers: true,
});

async function submitEmail(event) {
  loading.value = true;
  errorMessage.value = null;
  successMessage.value = null;
  const email = event.target.elements.email.value;
  console.log('Submitting email:', email);

  try {
    const { data, error } = await $supabase
      .from('waitlist')
      .insert([{ email: submission.value.email, teams: submission.value.teams, writers: submission.value.writers }]);

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
  border-top: 2px solid rgba($white, 0.2);
  padding-top: $spacing-lg;

  .notification {
    position: absolute;
    bottom: -100px;
    right: 0;
  }
}

.hero-waitlist {
  width: 100%;

  h3 {
    font-family: $font-family-condensed;
    font-size: $font-size-lg;
    font-weight: 500;
    color: $black;
    margin-bottom: 0;
  }

  .hero-checkboxes {
    display: flex;
    flex-direction: row;
    gap: $spacing-md;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: $spacing-md;

    div {
      display: flex;
      flex-direction: row;
      gap: $spacing-xxs;
      align-items: center;
      justify-content: center;

      input[type="checkbox"] {
        width: 20px;
        height: 20px;
        cursor: pointer;
        border: 2px solid $green;
        background: $white;
        appearance: none;
        display: inline-block;
        position: relative;
        padding: 0;

        &:checked {
          background: $green;

          &::before {
            content: '';
            display: block;
            width: 4px;
            height: 10px;
            border: solid $purple;
            border-width: 0 2px 2px 0;
            transform: rotate(45deg);
            margin-top: 2px;
            margin-left: 5px;
          }
        }
      }

      label {
        font-family: $font-family-condensed;
        font-size: $font-size-lg;
        color: $black;
      }
    }
  }

  .hero-container {
    position: relative;

    input {
      padding: $spacing-md;
      border: none;
      border-radius: 40px;
      font-size: $font-size-md;
      font-family: $font-family-condensed;
      width: 100%;
      background: $white;
      color: $black;
      outline: 2px solid $black;
      outline-offset: 0px;
      width: 100%;

      &:hover, &:active, &:focus {
        outline: 2px solid $green;
        outline-offset: 8px;
      }
    }

    button {
      position: absolute;
      right: 14px;
      top: 12px;
      font-size: $font-size-md;
      outline-offset: -2px;

      &:hover {
        transform: scale(1.05);
      }
    }
  }

}

</style>