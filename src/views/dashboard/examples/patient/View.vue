<template>
  <page-header title="Patient Details" />
  <template v-if="patient">
    <div class="container mx-auto p-6">
      <h2 class="mb-4 text-2xl font-bold">Health Records</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>
              <TableHeader>Test Name</TableHeader>
            </TableHead>
            <TableHead>
              <TableHeader>Doctor</TableHeader>
            </TableHead>

            <TableHead>
              <TableHeader>Date</TableHeader>
            </TableHead>
            <TableHead>
              <TableHeader>Result</TableHeader>
            </TableHead>
            <TableHead>
              <TableHeader>Notes</TableHeader>
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          <TableRow v-for="record in patient.healthRecords" :key="record.id">
            <TableCell>{{ record.testName }}</TableCell>
            <TableCell>{{ patient.doctor }}</TableCell>
            <TableCell>{{ formatDate(record.date) }}</TableCell>
            <TableCell>{{ record.result }}</TableCell>
            <TableCell>{{ record.notes }}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>

    <form @submit.prevent="" class="container mx-auto space-y-4 p-6">
      <h2 class="mb-4 text-2xl font-bold">General Information</h2>
      <div
        class="grid grid-cols-1 gap-4 sm:grid-cols-3 md:col-span-4 lg:grid-cols-5"
      >
        <div>
          <Label class="block text-sm font-medium leading-6 text-gray-900"
            >ID:</Label
          >
          <Input v-model="patient.id" disabled />
        </div>

        <div>
          <Label class="block text-sm font-medium leading-6 text-gray-900"
            >Name:</Label
          >
          <Input v-model="patient.name" />
        </div>

        <div>
          <Label class="block text-sm font-medium leading-6 text-gray-900"
            >Age:</Label
          >
          <Input v-model="patient.age" type="number" />
        </div>

        <div>
          <Label class="block text-sm font-medium leading-6 text-gray-900"
            >Gender:</Label
          >
          <Input v-model="patient.gender" />
        </div>

        <div>
          <Label class="block text-sm font-medium leading-6 text-gray-900"
            >Illness:</Label
          >
          <Input v-model="patient.ill" />
        </div>

        <div>
          <Label class="block text-sm font-medium leading-6 text-gray-900"
            >Status:</Label
          >
          <Input v-model="patient.status" />
        </div>

        <div>
          <Label class="block text-sm font-medium leading-6 text-gray-900"
            >Priority:</Label
          >
          <Input v-model="patient.priority" />
        </div>

        <div>
          <Label class="block text-sm font-medium leading-6 text-gray-900"
            >Doctor:</Label
          >
          <Input v-model="patient.doctor" />
        </div>

        <div>
          <Label class="block text-sm font-medium leading-6 text-gray-900"
            >Last Visit:</Label
          >
          <Input v-model="patient.lastVisit" type="date" />
        </div>

        <div>
          <Label class="block text-sm font-medium leading-6 text-gray-900"
            >Room:</Label
          >
          <Input v-model="patient.room" />
        </div>

        <div>
          <Label class="block text-sm font-medium leading-6 text-gray-900"
            >Contact:</Label
          >
          <Input v-model="patient.contact" />
        </div>

        <div>
          <Label class="block text-sm font-medium leading-6 text-gray-900"
            >Allergies:</Label
          >
          <Input v-model="patient.allergies" />
        </div>

        <div>
          <Label class="block text-sm font-medium leading-6 text-gray-900"
            >Next Appointment:</Label
          >
          <Input v-model="patient.nextAppointment" type="date" />
        </div>

        <!-- Editable Medications Section with Labels -->
        <div class="col-span-full mt-10">
          <h2 class="mb-4 text-2xl font-bold">Medications</h2>

          <ul>
            <li
              v-for="(med, index) in patient.medications"
              :key="med.id"
              class="mb-2 flex items-end gap-2"
            >
              <div class="w-full">
                <Label
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Medication Name
                </Label>
                <Input
                  v-model="med.name"
                  placeholder="Medication Name"
                  class="w-full"
                />
              </div>

              <div class="w-full">
                <Label
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Dosage (mg)
                </Label>
                <Input
                  v-model="med.dosage"
                  type="number"
                  placeholder="Dosage (mg)"
                  class="w-full"
                />
              </div>

              <div class="w-full">
                <Label
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Time
                </Label>
                <Input
                  v-model="med.time"
                  placeholder="Time (e.g. Morning)"
                  class="w-full"
                />
              </div>

              <Button @click="removeMedication(index)" variant="destructive">
                Remove
              </Button>
            </li>
          </ul>
          <!-- Add New Medication Button -->
          <Button @click="addMedication" variant="secondary" class="mt-2">
            Add Medication
          </Button>
        </div>

        <!-- Editable Prescriptions Section with Labels -->
        <div class="col-span-full mt-10">
          <h3 class="mb-4 text-2xl font-bold">Prescription History</h3>
          <ul>
            <li
              v-for="(prescription, index) in patient.prescriptions"
              :key="prescription.id"
              class="mb-2 flex items-end gap-2"
            >
              <div class="w-full">
                <Label
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Date
                </Label>
                <Input
                  v-model="prescription.date"
                  type="date"
                  placeholder="Date"
                  class="w-full"
                />
              </div>

              <div class="w-full">
                <Label
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Details
                </Label>
                <Input
                  v-model="prescription.details"
                  placeholder="Details"
                  class="w-full"
                />
              </div>

              <!-- Optional: Remove button to delete prescription -->
              <Button @click="removePrescription(index)" variant="destructive">
                Remove
              </Button>
            </li>
          </ul>
          <!-- Add New Prescription Button -->
          <Button @click="addPrescription" variant="secondary" class="mt-2">
            Add Prescription
          </Button>
        </div>
      </div>

      <!-- Save & Cancel Buttons -->
      <div class="mt-4 flex flex-row-reverse gap-4">
        <Button variant="default" type="submit">Save</Button>
        <Button variant="secondary" type="button">Cancel</Button>
      </div>
    </form>
  </template>
  <template v-else>
    <p>Loading patient details...</p>
  </template>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  // @ts-ignore
  import data from '@/assets/data.json';
  import { Button } from '@/components/ui/button';
  import { Input } from '@/components/ui/input';
  import { Label } from '@/components/ui/label';
  import {
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableHeader,
    TableCell,
  } from '@/components/ui/table';

  const route = useRoute();
  const { patientId } = route.params;
  const patients = ref(data);
  const patient = ref(null);

  onMounted(() => {
    patient.value = patients.value.filter((p) => p.id == patientId)[0];
  });

  // Functions to add/remove medications and prescriptions
  const addMedication = () => {
    patient.value.medications.push({
      id: Date.now(),
      name: '',
      dosage: '',
      time: '',
    });
  };

  const removeMedication = (index) => {
    patient.value.medications.splice(index, 1);
  };

  const addPrescription = () => {
    patient.value.prescriptions.push({
      id: Date.now(),
      date: '',
      details: '',
    });
  };

  const removePrescription = (index) => {
    patient.value.prescriptions.splice(index, 1);
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString();
  };
</script>

<style scoped>
  .patient-details {
    padding: 20px;
  }
</style>
