
<script lang="ts" setup>
import type LoginDto from '../../models/auth/login.model';
import LoginForm from '@/forms/auth/LoginForm.vue';
import {useRouter} from "vue-router";
import { authService } from '../../services/auth.service';

const initialValue : LoginDto ={
  email: "",
  password: ""
}

const router = useRouter()


const loginSubmit = (loginDto: LoginDto) => {
  authService.login(loginDto)
    .then((user) => {
      console.log("In login - user, user", user)
      router.push("/products")
    })
    .catch(error => console.log(error)
    )
}

const backToList = () => {
  router.push("/")
}
</script>
<template>
  <LoginForm
  :initial-value="initialValue"
  @on-back-to-list="backToList"
  @on-login="loginSubmit"
  />
</template>