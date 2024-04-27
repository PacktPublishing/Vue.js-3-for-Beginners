<template>
  <Form @submit="handleSubmit">
    <Label for="email">Email</Label>
    <Field
      type="email"
      name="email"
      placeholder="Enter your email"
      rules="required|email"
    ></Field>
    <ErrorMessage as="span" name="email" class="error" />
    <label for="message">Message</label>
    <Field
      as="textarea"
      name="message"
      rules="required|min:10"
    ></Field>
    <ErrorMessage as="span" name="message" class="error">
      Please enter a message with at least 10 characters
    </ErrorMessage>
    <TheButton>Send</TheButton>
  </Form>
</template>
<script setup>
import { Field, Form, ErrorMessage, defineRule } from 'vee-validate';
import TheButton from '../atoms/TheButton.vue';
import { required, email, min } from '@vee-validate/rules';
defineRule('required', required);
defineRule('email', email);
defineRule('min', min);

const handleSubmit = ({ email, message }) => {
  console.log(email, message);
};

</script>
<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
  padding-bottom: 16px;
  width: 60%;
}
.error {
  color: red;
}
</style>