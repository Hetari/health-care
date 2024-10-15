<template>
  <div class="space-y-6 p-6">
    <!-- Page Header -->
    <h1 class="text-3xl font-bold">Patient Details: {{ patient.name }}</h1>

    <!-- Patient Information -->
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
      <div>
        <Label for="name">Name</Label>
        <Input v-model="patient.name" id="name" />
      </div>
      <div>
        <Label for="age">Age</Label>
        <Input v-model="patient.age" id="age" type="number" />
      </div>
      <div>
        <Label for="gender">Gender</Label>
        <Input v-model="patient.gender" id="gender" />
      </div>
      <div>
        <Label for="ill">Illness</Label>
        <Input v-model="patient.ill" id="ill" />
      </div>
      <div>
        <Label for="status">Status</Label>
        <Input v-model="patient.status" id="status" />
      </div>
      <div>
        <Label for="priority">Priority</Label>
        <Input v-model="patient.priority" id="priority" />
      </div>
      <div>
        <Label for="doctor">Doctor</Label>
        <Input v-model="patient.doctor" id="doctor" />
      </div>
      <div>
        <Label for="lastVisit">Last Visit</Label>
        <Input v-model="patient.lastVisit" id="lastVisit" type="date" />
      </div>
      <div>
        <Label for="room">Room</Label>
        <Input v-model="patient.room" id="room" />
      </div>
      <div>
        <Label for="contact">Contact</Label>
        <Input v-model="patient.contact" id="contact" />
      </div>
    </div>

    <!-- Medications Section -->
    <h2 class="mt-6 text-2xl font-semibold">Medications</h2>
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Dosage (mg)</TableHead>
            <TableHead>Time</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow v-for="(med, index) in patient.medications" :key="med.id">
            <TableCell><Input v-model="med.name" /></TableCell>
            <TableCell><Input v-model="med.dosage" type="number" /></TableCell>
            <TableCell><Input v-model="med.time" /></TableCell>
            <TableCell>
              <Button variant="destructive" @click="removeMedication(index)"
                >Remove</Button
              >
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Button class="mt-4" @click="addMedication">Add Medication</Button>
    </div>

    <!-- Prescriptions Section -->
    <h2 class="mt-6 text-2xl font-semibold">Prescriptions</h2>
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Details</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow
            v-for="(prescription, index) in patient.prescriptions"
            :key="prescription.id"
          >
            <TableCell
              ><Input v-model="prescription.date" type="date"
            /></TableCell>
            <TableCell><Input v-model="prescription.details" /></TableCell>
            <TableCell>
              <Button variant="destructive" @click="removePrescription(index)"
                >Remove</Button
              >
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Button class="mt-4" @click="addPrescription">Add Prescription</Button>
    </div>

    <!-- Health Records Section -->
    <h2 class="mt-6 text-2xl font-semibold">Health Records</h2>
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Test Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Result</TableHead>
            <TableHead>Notes</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow
            v-for="(record, index) in patient.healthRecords"
            :key="record.id"
          >
            <TableCell><Input v-model="record.testName" /></TableCell>
            <TableCell><Input v-model="record.date" type="date" /></TableCell>
            <TableCell><Input v-model="record.result" /></TableCell>
            <TableCell><Input v-model="record.notes" /></TableCell>
            <TableCell>
              <Button variant="destructive" @click="removeHealthRecord(index)"
                >Remove</Button
              >
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Button class="mt-4" @click="addHealthRecord">Add Health Record</Button>
    </div>

    <!-- Save & Cancel Buttons -->
    <div class="mt-4 flex flex-row-reverse gap-4">
      <Button variant="default" type="submit">Save</Button>
      <Button variant="secondary" type="button">Cancel</Button>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  import { Button } from '@/components/ui/button';
  import { Label } from '@/components/ui/label';
  import { Input } from '@/components/ui/input';
  import {
    TableHead,
    TableRow,
    Table,
    TableBody,
    TableCell,
    TableHeader,
  } from '@/components/ui/table';

  const patient = ref({
    id: '', // Empty string for ID
    name: '', // Empty string for name
    age: null, // Null for age
    gender: '', // Empty string for gender
    ill: '', // Empty string for illness
    status: '', // Empty string for status
    label: '', // Empty string for label
    priority: '', // Empty string for priority
    doctor: '', // Empty string for doctor
    lastVisit: null, // Null for date
    room: '', // Empty string for room
    contact: '', // Empty string for contact
    medications: [], // Empty array for medications
    prescriptions: [], // Empty array for prescriptions
    healthRecords: [], // Empty array for health records
  });

  const addMedication = () => {
    patient.value.medications.push({
      id: Date.now(),
      name: '',
      dosage: 0,
      time: '',
    });
  };

  const removeMedication = (index) => {
    patient.value.medications.splice(index, 1);
  };

  const addPrescription = () => {
    patient.value.prescriptions.push({ id: Date.now(), date: '', details: '' });
  };

  const removePrescription = (index) => {
    patient.value.prescriptions.splice(index, 1);
  };

  const addHealthRecord = () => {
    patient.value.healthRecords.push({
      id: Date.now(),
      testName: '',
      date: '',
      result: '',
      notes: '',
    });
  };

  const removeHealthRecord = (index) => {
    patient.value.healthRecords.splice(index, 1);
  };
</script>
