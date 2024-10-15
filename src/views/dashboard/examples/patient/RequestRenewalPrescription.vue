<template>
  <div class="h-[80svh]">
    <page-header title="Request Renewal Prescription" />

    <div class="flex h-full items-center justify-center">
      <form @submit.prevent="handleSubmit" class="w-full max-w-sm space-y-4">
        <h1 class="mb-4 text-xl font-semibold">Request Renewal</h1>
        <div>
          <label
            for="medication"
            class="block text-sm font-medium text-gray-700"
            >Medication Name</label
          >
          <input
            v-model="medication"
            type="text"
            id="medication"
            required
            placeholder="Enter medication name"
            class="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring focus:ring-emerald-500"
          />
        </div>

        <div>
          <label for="reason" class="block text-sm font-medium text-gray-700"
            >Reason for Renewal</label
          >
          <textarea
            v-model="reason"
            id="reason"
            required
            placeholder="Enter the reason for renewal"
            class="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring focus:ring-emerald-500"
          ></textarea>
        </div>

        <div>
          <label
            for="additionalNotes"
            class="block text-sm font-medium text-gray-700"
            >Additional Notes</label
          >
          <textarea
            v-model="additionalNotes"
            id="additionalNotes"
            placeholder="Any additional notes"
            class="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring focus:ring-emerald-500"
          ></textarea>
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          class="w-full rounded-md bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700"
        >
          Submit Request
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const medication = ref('');
  const reason = ref('');
  const additionalNotes = ref('');

  const handleSubmit = () => {
    alert(
      `Request submitted for: ${medication.value}\nReason: ${reason.value}\nNotes: ${additionalNotes.value}`,
    );

    medication.value = '';
    reason.value = '';
    additionalNotes.value = '';
  };
</script>
