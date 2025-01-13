<template>
  <div :class="['join-container', wide]">
    <div v-if="successMessage" class="notification success">{{ successMessage }}</div>
    <div v-if="errorMessage" class="notification error">{{ errorMessage }}</div>
    <form class="hero-waitlist" @submit.prevent="submitEmail">
      <div class="hero-checkboxes">
        <h4>I'm interested in using Vewrite</h4>
        <div>
          <input type="checkbox" id="teams" name="teams" value="teams" v-model="submission.teams">
          <label for="teams" class="brand">As a team</label>
        </div>
        <div>
          <input type="checkbox" id="writers" name="writers" value="writers" v-model="submission.writers">
          <label for="writers" class="green">As a freelance writer</label>
        </div>
      </div>
      <div class="hero-container">
        <input type="email" name="email" placeholder="Enter your email" v-model="submission.email">
        <button type="submit" class="primary large" :disabled="loading">
          <Loading v-if="loading" type="small" />
          <span v-else>Join the waitlist</span>
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

defineProps({
  wide: {
    type: String,
    default: '',
  },
});

const submission = ref({
  email: '',
  teams: false,
  writers: true,
});

function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

async function submitEmail(event) {
  loading.value = true;
  errorMessage.value = null;
  successMessage.value = null;

  const email = submission.value.email;
  console.log('Submitting email:', email);

  if (!email) {
    errorMessage.value = 'Email is required';
    loading.value = false;
    return;
  }

  if (!isValidEmail(email)) {
    errorMessage.value = 'Invalid email address';
    loading.value = false;
    return;
  }

  try {
    const { data, error } = await $supabase
      .from('waitlist')
      .insert([{ email: email, teams: submission.value.teams, writers: submission.value.writers }]);

    if (error) {
      console.error('Supabase error:', error);
      if (error.code === '23505') {
        errorMessage.value = 'Email already exists';
      } else {
        errorMessage.value = 'An error occurred. Please try again.';
      }
    } else {
      console.log('Submission successful:', data);
      successMessage.value = 'Success! You have been added to the waitlist.';
    }
  } catch (err) {
    console.error('Unexpected error:', err);
    errorMessage.value = 'An unexpected error occurred. Please try again.';
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
  flex-direction: column;
  width: 100%;
  gap: $spacing-sm;
  position: relative;

  &.wide {

    .hero-waitlist {
      
      .hero-checkboxes {
        flex-direction: row;
        align-items: center;
        justify-content: center;

        @media (max-width: 1000px) {
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
        }
      }
    }
  }

  .notification {
    position: absolute;
    bottom: -$spacing-lg;
    right: $spacing-lg;
    left: $spacing-lg;
    justify-content: center;

    @media (max-width: 600px) {
      bottom: -$spacing-lg;
      left: $spacing-md;
      right: $spacing-md;
    }
  }
}

.hero-waitlist {
  width: 100%;

  h4 {
    margin: 0;
    font-size: $font-size-lg;
    font-weight: bold;
  }

  .hero-checkboxes {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    justify-content: flex-start;
    gap: $spacing-sm;
    margin-bottom: $spacing-md;

    @media (max-width: 1000px) {
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
    }

    div {
      display: flex;
      flex-direction: row;
      gap: $spacing-sm;
      align-items: center;
      justify-content: center;

      input[type="checkbox"] {
        width: 24px;
        height: 24px;
        cursor: pointer;
        border: 1px solid $brand;
        background: $brand;
        appearance: none;
        display: inline-block;
        position: relative;
        padding: 0;
        margin: 0;

        &:checked {
          border: 1px solid $white;

          &::before {
            content: '';
            display: block;
            width: 4px;
            height: 10px;
            border: solid $white;
            border-width: 0 2px 2px 0;
            transform: rotate(45deg);
            margin-top: 4px;
            margin-left: 8px;
          }
        }
      }

      label {
        font-size: $font-size-md;
        color: $black;
        background: transparent;
        margin: 0;
        padding: 0;
      }
    }
  }

  .hero-container {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      padding: $spacing-sm;
      border: none;
      border-radius: 16px;
      font-size: $font-size-md;
      background: $white;
      color: $black;
      outline: 1px solid rgba($black, 0.1);
      outline-offset: 0px;
      width: 100%;
      box-shadow: inset 0 2px 1px 1px rgba(white, 0.42), inset 0 2px 2px 4px rgba(white, 0.32), inset 0 0 2px 10px rgba(white, 0.12), 0 6px 1px 0px rgba($brand, 0.05), 0 6px 10px 5px rgba($brand, 0.05);

      @media (max-width: 1000px) {
        border-radius: $br-md;
        padding: $spacing-sm;
      }

      @media (max-width: 1000px) {
        font-size: $font-size-md;
      }

      &:hover, &:active, &:focus {
        outline: 1px solid $brand;
      }
    }

    button {
      position: absolute;
      right: 5px;
      top: 50%;
      transform: translateY(-50%);
      font-size: $font-size-md;
      outline-offset: -2px;

      @media (max-width: 1000px) {
        position: relative;
        width: 100%;
        right: 0;
        top: 0;
        transform: translateY(0);

        &:hover, &:active, &:focus {
          outline: 1px solid $brand;
          transform: translateY(0%) scale(1) !important;
        }
      }

      &:hover, &:active, &:focus {
        outline: 1px solid $brand;
        transform: translateY(-50%) scale(1.02);
      }
    }
  }

}

</style>