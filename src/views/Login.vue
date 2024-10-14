<template>
  <AuthLayout>
    <template v-slot:header>
      <p class="absolute right-4 top-4 md:right-8 md:top-8">
        <span class="text-gray-500"> Don't have an account? </span>
        <RouterLink :to="{ name: 'Register' }"> Register </RouterLink>
      </p>
    </template>

    <template v-slot:formName>Login</template>

    <template v-slot:form>
      <LoginAuthForm />
      <p class="text-center text-sm text-slate-500">
        Forgot your password?
        <RouterLink class="text-primary" :to="{ name: 'ForgotPassword' }">
          Reset it
        </RouterLink>
      </p>
    </template>
  </AuthLayout>
</template>

<script setup lang="ts">
  import AuthLayout from '@/layout/AuthLayout.vue';
  import LoginAuthForm from '@/components/LoginAuthForm.vue';
</script>
