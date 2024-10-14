<template>
  <div class="flex min-h-screen flex-col items-center justify-center p-4">
    <h1 class="mb-4 text-2xl font-bold">Password Recovery</h1>
    <form @submit.prevent="handleSubmit()" class="w-full max-w-sm space-y-4">
      <!-- Email Input -->
      <div v-if="!showResetCodeInput && !showNewPasswordInput">
        <label for="email" class="block text-sm font-medium text-gray-700"
          >Email</label
        >
        <input
          v-model="email"
          type="email"
          id="email"
          required
          placeholder="Enter your email"
          class="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring focus:ring-emerald-500"
          @input="validateEmail"
        />
        <p v-if="emailError" class="mt-2 text-sm text-red-600">
          {{ emailError }}
        </p>
      </div>

      <!-- Reset Code Input -->
      <div v-if="showResetCodeInput && !showNewPasswordInput">
        <label for="resetCode" class="block text-sm font-medium text-gray-700"
          >Reset Code</label
        >
        <input
          v-model="resetCode"
          type="text"
          id="resetCode"
          required
          placeholder="Enter your reset code"
          class="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring focus:ring-emerald-500"
          @input="validateResetCode"
        />
        <p v-if="resetCodeError" class="mt-2 text-sm text-red-600">
          {{ resetCodeError }}
        </p>
      </div>

      <!-- New Password Input -->
      <div v-if="showNewPasswordInput">
        <label for="newPassword" class="block text-sm font-medium text-gray-700"
          >New Password</label
        >
        <input
          v-model="newPassword"
          type="password"
          id="newPassword"
          required
          placeholder="Enter new password"
          class="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring focus:ring-emerald-500"
        />
        <label
          for="confirmPassword"
          class="block text-sm font-medium text-gray-700"
          >Confirm Password</label
        >
        <input
          v-model="confirmPassword"
          type="password"
          id="confirmPassword"
          required
          placeholder="Confirm new password"
          class="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring focus:ring-emerald-500"
        />
        <p v-if="passwordError" class="mt-2 text-sm text-red-600">
          {{ passwordError }}
        </p>
      </div>

      <!-- Submit Button -->
      <button
        type="submit"
        :disabled="
          (showResetCodeInput && resetCodeError.length > 0) ||
          (showNewPasswordInput &&
            (passwordError.length > 0 || newPassword !== confirmPassword))
        "
        class="w-full rounded-md bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700 disabled:bg-gray-400"
      >
        {{
          showNewPasswordInput
            ? 'Reset Password'
            : showResetCodeInput
              ? 'Verify Reset Code'
              : 'Send Password Reset Link'
        }}
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
  import router from '@/router';
  import { ref } from 'vue';

  const email = ref('');
  const emailError = ref('');
  const showResetCodeInput = ref(false);
  const resetCode = ref('');
  const resetCodeError = ref('');
  const showNewPasswordInput = ref(false);
  const newPassword = ref('');
  const confirmPassword = ref('');
  const passwordError = ref('');

  const validateEmail = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    emailError.value = email.value.match(emailPattern)
      ? ''
      : 'Invalid email address.';
  };

  const validateResetCode = () => {
    resetCodeError.value =
      resetCode.value === '123' ? '' : 'Invalid reset code.'; // Example code
  };

  const handleSubmit = () => {
    if (!showResetCodeInput.value && !showNewPasswordInput.value) {
      alert(`A password reset link has been sent to ${email.value}`);
      showResetCodeInput.value = true;
      email.value = '';
    }
    //
    else if (showResetCodeInput.value) {
      showResetCodeInput.value = false;

      // Validate the reset code
      if (resetCode.value === '123') {
        showNewPasswordInput.value = true;
        resetCode.value = '';
        resetCodeError.value = '';
      } else {
        alert('Incorrect reset code!');
        resetCodeError.value = 'Invalid reset code.';
      }
    }
    //
    else if (showNewPasswordInput.value) {
      if (newPassword.value !== confirmPassword.value) {
        passwordError.value = 'Passwords do not match.';
        return;
      }
      // Logic to reset the password
      alert('Password has been reset successfully!');
      resetFields();
      router.push({ name: 'Login' });
    }
  };

  const resetFields = () => {
    email.value = '';
    resetCode.value = '';
    newPassword.value = '';
    confirmPassword.value = '';
    showResetCodeInput.value = false;
    showNewPasswordInput.value = false;
    emailError.value = '';
    resetCodeError.value = '';
    passwordError.value = '';
  };
</script>
