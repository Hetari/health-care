<script setup lang="ts">
  import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardDescription,
  } from '@/components/ui/card';
  import { Button } from '@/components/ui/button';
  import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from '@/components/ui/tabs';
  import { DateRangePicker } from '@/components/ui/daterange-picker';
  import Overview from '@/components/examples/Overview.vue';

  import {
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableHeader,
    TableCell,
  } from '@/components/ui/table';
  import { ref } from 'vue';

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

  const deleteNotification = (id: number) => {
    notifications.value = notifications.value.filter((n) => n.id !== id);
  };
</script>

<template>
  <div>
    <page-header title="Dashboard" />

    <Tabs default-value="overview" class="space-y-4">
      <TabsList>
        <TabsTrigger value="overview"> Overview </TabsTrigger>
        <TabsTrigger value="notifications"> Notifications </TabsTrigger>
      </TabsList>
      <TabsContent value="overview" class="space-y-4">
        <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader
              class="flex flex-row items-center justify-between space-y-0 pb-2"
            >
              <CardTitle class="text-sm font-medium"> Total Revenue </CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                class="h-4 w-4 text-muted-foreground"
              >
                <path
                  d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
                />
              </svg>
            </CardHeader>
            <CardContent>
              <div class="text-2xl font-bold">$45,231.89</div>
              <p class="text-xs text-muted-foreground">
                +20.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader
              class="flex flex-row items-center justify-between space-y-0 pb-2"
            >
              <CardTitle class="text-sm font-medium"> Subscriptions </CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                class="h-4 w-4 text-muted-foreground"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </CardHeader>
            <CardContent>
              <div class="text-2xl font-bold">+2350</div>
              <p class="text-xs text-muted-foreground">
                +180.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader
              class="flex flex-row items-center justify-between space-y-0 pb-2"
            >
              <CardTitle class="text-sm font-medium"> Sales </CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                class="h-4 w-4 text-muted-foreground"
              >
                <rect width="20" height="14" x="2" y="5" rx="2" />
                <path d="M2 10h20" />
              </svg>
            </CardHeader>
            <CardContent>
              <div class="text-2xl font-bold">+12,234</div>
              <p class="text-xs text-muted-foreground">+19% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader
              class="flex flex-row items-center justify-between space-y-0 pb-2"
            >
              <CardTitle class="text-sm font-medium"> Active Now </CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                class="h-4 w-4 text-muted-foreground"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </CardHeader>
            <CardContent>
              <div class="text-2xl font-bold">+573</div>
              <p class="text-xs text-muted-foreground">+201 since last hour</p>
            </CardContent>
          </Card>
        </div>
        <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card class="col-span-4">
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent class="pl-2">
              <Overview />
            </CardContent>
          </Card>
          <Card class="col-span-3">
            <CardHeader>
              <CardTitle>Recent Sales</CardTitle>
              <CardDescription>
                You made 265 sales this month.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RecentSales />
            </CardContent>
          </Card>
        </div>
      </TabsContent>
      <TabsContent value="analytics"></TabsContent>
      <TabsContent value="reports"></TabsContent>
      <TabsContent value="notifications">
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
            <TableRow
              v-for="notification in notifications"
              :key="notification.id"
            >
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
      </TabsContent>
    </Tabs>
  </div>
</template>
