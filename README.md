# Health Care App

A healthcare platform designed to improve the way doctors and patients manage medications and prescriptions. It simplifies medication tracking for patients and helps doctors monitor and renew prescriptions easily.

## Technology Stack

- [Vue.js](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Pinia](https://pinia.vuejs.org/)
- [Gsap](https://greensock.com/gsap/)
- [Vue Router](https://vue-router.vuejs.org/)
- [shadcn-vue](https://shadcn-vue.com/)

## TODO

- [ ] **Patient Dashboard**: View prescriptions, request renewals, and manage patient details.
- [ ] **Doctor Dashboard**: Manage patient data, prescriptions, and renewals.
- [ ] Backend:
  - [ ] Authentication
  - [ ] Notifications
  - [ ] Prescriptions
  - [ ] Medications
  - [ ] Settings
  - [ ] Prescription Renewal
  - [ ] ...

## Features

- **Dashboard**: Show all the date.
- **Medication Reminders**: Patients receive notifications for their medications.
- **Settings and Notifications**: Manage notification preferences and settings.

## Project Setup

```bash
npm install
npm run dev
```

## Routes

The Health Care App uses the following routes to navigate between different sections of the app. Each route serves a specific function within the application, such as user authentication, managing patient data, or handling prescription renewals.

| Route Path                                    | Name                | Component                                                   | Description                             |
| --------------------------------------------- | ------------------- | ----------------------------------------------------------- | --------------------------------------- |
| `/health-care/`                               | Home                | `Home.vue`                                                  | Landing page of the application.        |
| `/health-care/register`                       | Register            | `Register.vue`                                              | User registration page.                 |
| `/health-care/login`                          | Login               | `Login.vue`                                                 | User login page.                        |
| `/health-care/forgot-password`                | ForgotPassword      | `ForgotPassword.vue`                                        | Password recovery page.                 |
| `/health-care/dashboard`                      | Dashboard           | `DashboardLayout.vue`                                       | Dashboard layout for doctors and users. |
| `/health-care/dashboard/home`                 | DashboardHome       | `dashboard/examples/Home.vue`                               | Doctor's dashboard home page.           |
| `/health-care/dashboard/renewal-prescription` | RenewalPrescription | `dashboard/examples/patient/RequestRenewalPrescription.vue` | Page to request prescription renewal.   |
| `/health-care/dashboard/patient`              | PatientIndex        | `dashboard/examples/patient/Index.vue`                      | List of all patients.                   |
| `/health-care/dashboard/add-patient`          | AddPatient          | `dashboard/examples/patient/Add.vue`                        | Page to add a new patient.              |
| `/health-care/dashboard/patient/:patientId`   | PatientShow         | `dashboard/examples/patient/View.vue`                       | View individual patient details.        |
| `/health-care/dashboard/settings`             | SettingsIndex       | `dashboard/examples/settings/Index.vue`                     | Application settings page.              |
| `/:pathMatch(.*)`                             | NotFound            | `NotFound.vue`                                              | Page not found (404).                   |

Each route contains a **meta title** for SEO purposes and better user experience with dynamic page titles.

## Deployment

This project can be deployed to your preferred platform or server environment. Make sure to configure environment variables accordingly.
