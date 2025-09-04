<script setup>
import { ref } from "vue";
import { formSchema } from "./schemas/formSchema";
import DynamicForm from "./components/DynamicForm.vue";

const submittedData = ref(null);

const handleFormSubmit = (data) => {
  submittedData.value = data;
};
</script>

<template>
  <div class="app">
    <h1>Vue 3 Dynamic Form Generator</h1>

    <!-- Dynamic Form -->
    <DynamicForm :schema="formSchema" @submit="handleFormSubmit" />

    <!-- Display submitted data -->
    <div v-if="submittedData" class="result">
      <h2>Form Submitted Successfully!</h2>
      <pre>{{ submittedData }}</pre>
    </div>
  </div>
</template>

<style>
.app {
  font-family: Arial, sans-serif;
  padding: 2rem;
  max-width: 600px;
  margin: auto;
}

.result {
  margin-top: 2rem;
  padding: 1rem;
  border: 1px solid #ddd;
  background: #f9f9f9;
  border-radius: 5px;
}
</style>
