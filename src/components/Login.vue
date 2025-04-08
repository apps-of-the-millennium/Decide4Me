// eslint-disable-next-line vue/multi-word-component-names
<template>
  <div>
    <input v-model="email" placeholder="Email" />
    <input v-model="password" type="password" placeholder="Password" />
    <button @click="login">Login</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/firebase'

const email = ref('')
const password = ref('')

const login = async () => {
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value)
    console.log('Logged in!')
  } catch (err) {
    console.error(err)
  }
}
</script>
