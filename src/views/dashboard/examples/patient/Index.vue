<script setup lang="ts">
  import { ref, h } from 'vue';
  import { DataTable, type ColumnDef } from '@/components/ui/data-table';
  import { Checkbox } from '@/components/ui/checkbox';
  import DataTableHeader from '@/components/ui/data-table/DataTableHeader.vue';
  import type { Column } from '@tanstack/vue-table';
  import { Badge } from '@/components/ui/badge';

  // @ts-ignore
  import data from '@/assets/data.json';
  import router from '@/router';

  interface IPatient {
    id: string;
    name: string;
    age: number;
    gender: string;
    ill: string;
    status: string;
    label: string;
    priority: string;
    doctor: string;
    lastVisit: string;
  }

  const tagVariants: Record<
    string,
    'secondary' | 'default' | 'destructive' | 'outline'
  > = {
    urgent: 'default',
    routine: 'secondary',
    high: 'destructive',
    medium: 'default',
    low: 'secondary',
  };

  const patients = ref(data);
  const columns: ColumnDef<IPatient>[] = [
    {
      accessorKey: 'id',
      header: ({ table }) =>
        h(Checkbox, {
          checked: table.getIsAllPageRowsSelected(),
          'onUpdate:checked': (val) => table.toggleAllPageRowsSelected(!!val),
          ariaLabel: 'Select All',
          class: 'translate-y-0.5',
        }),
      cell: ({ row }) =>
        h(Checkbox, {
          checked: row.getIsSelected(),
          'onUpdate:checked': (val) => row.toggleSelected(!!val),
          ariaLabel: 'Select row',
          class: 'translate-y-0.5',
          enableSorting: false,
          enableHiding: false,
        }),
    },
    {
      accessorKey: 'id',
      header: 'ID',
      enableSorting: false,
    },
    {
      accessorKey: 'name',
      header: ({ column }) =>
        h(DataTableHeader, {
          column: column as Column<IPatient>,
          title: 'Patient Name',
          'onUpdate:sort': (val) => {
            console.log(val);
          },
        }),
      cell: ({ row }) => h('span', { class: 'font-medium' }, row.original.name),
    },
    {
      accessorKey: 'age',
      header: 'Age',
    },
    {
      accessorKey: 'gender',
      header: 'Gender',
    },
    {
      accessorKey: 'ill',
      header: 'Illness',
    },
    {
      accessorKey: 'doctor',
      header: 'Doctor',
    },
    {
      accessorKey: 'lastVisit',
      header: 'Last Visit',
    },
    {
      accessorKey: 'status',
      header: 'Status',
    },
    {
      accessorKey: 'label',
      header: 'Label',
      // cell: ({ row }) =>
      //   h(
      //     Badge,
      //     {
      //       variant: tagVariants[row.original.label],
      //       class: 'mr-2',
      //     },
      //     () => row.original.label,
      //   ),
    },
    {
      accessorKey: 'priority',
      header: 'Priority',
      cell: ({ row }) =>
        h(
          Badge,
          {
            variant: tagVariants[row.original.priority],
            class: 'mr-2',
          },
          () => row.original.priority,
        ),
    },
    {
      id: 'actions',
      header: 'Actions',

      cell: ({ row }) =>
        h(
          'button',
          {
            class: 'btn',
            onClick: () =>
              router.push({
                name: 'patient_show',
                params: { patientId: row.original.id },
              }),
          },
          'View',
        ),
    },
  ];
</script>

<template>
  <div>
    <page-header title="Patients"></page-header>
    <DataTable :columns="columns" :data="patients"></DataTable>
  </div>
</template>
