<template>
  <div>
    <h1>Sign Up</h1>
    <AuthForm :submitText="'Sign Up'" :onSubmit="handleSignup" />
  </div>
</template>

<script lang="ts" setup>
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/firebase'
import AuthForm from '@/components/AuthForm.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const handleSignup = async (email: string, password: string) => {
  await createUserWithEmailAndPassword(auth, email, password)
  router.push('/')
}
</script>
