<script setup lang="ts">
  import { ref } from 'vue';
  import { Button } from '@/components/ui/button';
  import { Checkbox } from '@/components/ui/checkbox';
  import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from '@/components/ui/tabs';
  import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
  } from '@/components/ui/form';
  import { toTypedSchema } from '@vee-validate/zod';
  import { useForm } from 'vee-validate';
  import * as z from 'zod';

  const notificationSettings = ref({
    email: false,
    sms: false,
    inApp: false,
  });

  const formSchema = toTypedSchema(
    z.object({
      email: z.boolean(),
      sms: z.boolean(),
      inApp: z.boolean(),
    }),
  );

  const { handleSubmit } = useForm({
    validationSchema: formSchema,
    initialValues: {
      email: notificationSettings.value.email,
      sms: notificationSettings.value.sms,
      inApp: notificationSettings.value.inApp,
    },
  });

  const onSubmit = handleSubmit((values) => {
    alert(JSON.stringify(notificationSettings.value, null, 2));
  });
</script>

<template>
  <page-header>Settings</page-header>
  <Tabs default-value="notifications" class="space-y-4">
    <TabsList>
      <TabsTrigger value="notifications"> Notifications </TabsTrigger>
    </TabsList>
    <TabsContent value="notifications">
      <form @submit="onSubmit" class="space-y-4">
        <FormField name="email">
          <FormItem class="flex items-center space-x-2">
            <FormControl>
              <Checkbox
                @update:checked="notificationSettings.email = $event"
                v-model="notificationSettings.email"
                :checked="notificationSettings.email"
              />
            </FormControl>
            <FormLabel
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Email Notifications
            </FormLabel>
          </FormItem>
        </FormField>

        <FormField name="sms">
          <FormItem class="flex items-center space-x-2">
            <FormControl>
              <Checkbox
                @update:checked="notificationSettings.sms = $event"
                v-model="notificationSettings.sms"
                :checked="notificationSettings.sms"
              />
            </FormControl>
            <FormLabel
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              SMS Notifications
            </FormLabel>
          </FormItem>
        </FormField>

        <FormField name="inApp">
          <FormItem class="flex items-center space-x-2">
            <FormControl>
              <Checkbox
                @update:checked="notificationSettings.inApp = $event"
                v-model="notificationSettings.inApp"
                :checked="notificationSettings.inApp"
              />
            </FormControl>
            <FormLabel
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              In-App Notifications
            </FormLabel>
          </FormItem>
        </FormField>

        <div class="flex justify-start">
          <Button type="submit"> Save Settings </Button>
        </div>
      </form>
    </TabsContent>
  </Tabs>
</template>
