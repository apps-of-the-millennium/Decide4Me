<template>
  <form @submit.prevent="handleSubmit" class="auth-form">
    <input v-model="email" type="email" placeholder="Email" required />
    <input v-model="password" type="password" placeholder="Password" required />
    <button type="submit">{{ submitText }}</button>
    <p v-if="error" class="error">{{ error }}</p>
  </form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const props = defineProps<{
  submitText: string
  onSubmit: (email: string, password: string) => Promise<void>
}>()

const email = ref('')
const password = ref('')
const error = ref('')

const handleSubmit = async () => {
  error.value = ''
  try {
    await props.onSubmit(email.value, password.value)
  } catch (err: any) {
    error.value = err.message || 'An error occurred'
  }
}
</script>

<style scoped>
.auth-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 300px;
  margin: 0 auto;
}
.error {
  color: red;
}
</style>
