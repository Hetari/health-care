<template>
  <AuthLayout>
    <template v-slot:header>
      <p class="absolute right-4 top-4 md:right-8 md:top-8">
        <span class="text-gray-500"> Do you have an account? </span>
        <RouterLink :to="{ name: 'Login' }"> Login </RouterLink>
      </p>
    </template>

    <template v-slot:formName>Register</template>

    <template v-slot:form>
      <RegisterAuthForm />
    </template>
  </AuthLayout>
</template>

<script setup lang="ts">
  import AuthLayout from '@/layout/AuthLayout.vue';
  import RegisterAuthForm from '@/components/RegisterAuthForm.vue';
</script>
