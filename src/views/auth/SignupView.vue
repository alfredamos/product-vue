<script lang="ts" setup>
import type SignupDto from '../../models/auth/signup.model';
import {useRouter} from "vue-router";
import { authService } from '../../services/auth.service';
import {Gender} from "../../models/auth/gender.model"
import SignupForm from '@/forms/auth/SignupForm.vue';

const initialValue : SignupDto ={
  name: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
  gender: Gender.Male

}

const router = useRouter()


const signupSubmit = (signupDto: SignupDto) => {
  authService.signup(signupDto)
    .then((user) => router.push("/products"))
    .catch(error => console.log(error)
    )
}

const backToList = () => {
  router.push("/")
}
</script>
<template>
  <SignupForm
  form-name="Signup"
  :initial-value="initialValue"
  @on-back-to-list="backToList"
  @on-signup="signupSubmit"
  />
</template>