<template>
  <div>
    <page-header title="Notifications" />
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Notification Title</TableHead>
          <TableHead>Message</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        <TableRow v-for="notification in notifications" :key="notification.id">
          <TableCell>{{ notification.title }}</TableCell>
          <TableCell>{{ notification.message }}</TableCell>
          <TableCell>{{ formatDate(notification.date) }}</TableCell>
          <TableCell>{{ notification.status }}</TableCell>
          <TableCell class="flex gap-4">
            <Button variant="secondary" @click="markAsRead(notification.id)"
              >Mark as Read</Button
            >
            <Button
              variant="destructive"
              @click="deleteNotification(notification.id)"
              >Delete</Button
            >
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { Button } from '@/components/ui/button';
  import {
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableHeader,
    TableCell,
  } from '@/components/ui/table';

  const notifications = ref([
    {
      id: 1,
      title: 'New Appointment',
      message: 'You have a new appointment on 2024-11-01',
      date: '2024-10-12',
      read: false,
      status: 'pending',
    },
    {
      id: 2,
      title: 'New Lab Result',
      message: 'Your lab results are available',
      date: '2024-10-10',
      read: true,
      status: 'success',
    },
  ]);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString();
  };

  const markAsRead = (id: number) => {
    const notification = notifications.value.find((n) => n.id === id);
    if (notification) {
      notification.read = true;
    }
  };

  // دالة لحذف الإشعار
  const deleteNotification = (id: number) => {
    notifications.value = notifications.value.filter((n) => n.id !== id);
  };
</script>
