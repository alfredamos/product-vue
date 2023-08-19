<script lang="ts" setup>
import SignupForm from "@/forms/auth/SignupForm.vue";
import { userService } from "../../services/user.service";
import { Gender } from "@/models/auth/gender.model";
import { useRouter } from "vue-router";
import type SignupDto from "../../models/auth/signup.model";

const router = useRouter();

const backToList = () => {
  router.push("/users");
};

const signupSubmit = (signupDto: SignupDto) => {
  console.log(signupDto);
  userService
    .createUser(signupDto)
    .then((userApiRes) => {
      router.push("/users");
    })
    .catch((error) => console.log(error));
};
</script>

<template>
  <signup-form
    form-name="User Create"
    :initial-value="{
      name: '',
      email: '',
      phone: '',
      gender: Gender.Male,
      password: '',
      confirmPassword: '',
    }"
    @on-back-to-list="backToList"
    @on-signup="signupSubmit"
  />
</template>
