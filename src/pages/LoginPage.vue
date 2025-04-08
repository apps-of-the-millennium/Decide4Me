<template>
  <div>
    <h1>Login</h1>
    <AuthForm :submitText="'Login'" :onSubmit="handleLogin" />
    <hr />
    <button @click="signInWithGoogle">Sign in with Google</button>
  </div>
</template>

<script lang="ts" setup>
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '@/firebase'
import AuthForm from '@/components/AuthForm.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const handleLogin = async (email: string, password: string) => {
  await signInWithEmailAndPassword(auth, email, password)
  router.push('/')
}
const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider()
  try {
    await signInWithPopup(auth, provider)
    router.push('/')
  } catch (error) {
    console.error('Error signing in with Google:', error)
  }
}
</script>
