<script setup>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

const props = defineProps({
  schema: {
    type: Array,
    required: true,
  },
});

// Build validation schema dynamically
const validationSchema = props.schema.reduce((shape, field) => {
  shape[field.name] = field.validation;
  return shape;
}, {});

const formValidationSchema = yup.object().shape(validationSchema);

const emit = defineEmits(["submit"]);

const handleSubmit = (values) => {
  emit("submit", values);
};
</script>

<template>
  <Form :validation-schema="formValidationSchema" @submit="handleSubmit" :validate-on-mount="false" :validate-on-blur="true" :validate-on-input="true">
    <div v-for="field in schema" :key="field.name" class="form-group">
      <!-- Text, Email, Number Inputs -->
      <div v-if="['text', 'email', 'number'].includes(field.type)">
        <label :for="field.name">{{ field.label }}</label>
        <Field
          :type="field.type"
          :name="field.name"
          :id="field.name"
          :placeholder="field.placeholder"
          as="input"
        />
        <ErrorMessage :name="field.name" class="error" />
      </div>

      <!-- Select Dropdown -->
      <div v-else-if="field.type === 'select'">
        <label :for="field.name">{{ field.label }}</label>
        <Field :name="field.name" as="select" :id="field.name">
          <option value="">Select {{ field.label }}</option>
          <option
            v-for="option in field.options"
            :key="option.value"
            :value="option.value"
          >
            {{ option.label }}
          </option>
        </Field>
        <ErrorMessage :name="field.name" class="error" />
      </div>

      <!-- Checkbox -->
      <div v-else-if="field.type === 'checkbox'">
        <label>
          <Field type="checkbox" :name="field.name" />
          {{ field.label }}
        </label>
        <ErrorMessage :name="field.name" class="error" />
      </div>
    </div>

    <button type="submit">Submit</button>
  </Form>
</template>

<style scoped>
.form-group {
  margin-bottom: 1rem;
}
label {
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
}
input,
select {
  padding: 0.5rem;
  width: 100%;
  max-width: 400px;
  margin-bottom: 0.5rem;
}
.error {
  color: red;
  font-size: 0.9rem;
}
button {
  padding: 0.7rem 1.2rem;
  cursor: pointer;
}
</style>
