<script lang="ts" setup>
import type SignupDto from '@/models/auth/signup.model';
import {ref} from "vue"

interface Props{
  initialValue: SignupDto;
  formName: string;
}

const props = defineProps<Props>();
const emit = defineEmits(['onSignup', 'onBackToList'])

const signup = ref<SignupDto>(props.initialValue)

const signupSubmit = () => {
  emit('onSignup', signup.value)
}

const backToList = () => {
  console.log("in signup, I'm clicked")
  emit('onBackToList')
}
</script>

<template>
  <div class="row mt-5">
  <div class="col col-sm-8 col-md-8 offset-2">
    <div class="card">
      <form @submit.prevent="signupSubmit">
        <div class="card-header bg-primary text-white">
          <h4 class="text-center">{{ props.formName }} Form</h4>
        </div>
        <div class="card-body">
          <div class="mb-3">
            <label for="name" class="form-label"> Name </label>
            <input
              id="name"
              v-model.trim="signup.name"
              type="text"
              class="form-control"
            />            
          </div>
          <div class="mb-3">
            <label for="email" class="form-label"> Email </label>
            <input
              id="email"
              v-model.trim="signup.email"
              type="email"
              class="form-control"
            />            
          </div>
          <div class="mb-3">
            <label for="phone" class="form-label"> Phone </label>
            <input
              id="phone"
              v-model.trim="signup.phone"
              type="tel"
              class="form-control"
            />            
          </div>
          <div class="mb-3">
            <label for="password" class="form-label"> Password </label>
            <input
              id="password"
              v-model.trim="signup.password"
              type="password"
              class="form-control"
            />
            
          </div>
          <div class="mb-3">
            <label for="confirmPassword" class="form-label">Confirm Password </label>
            <input
              id="confirmPassword"
              v-model.trim="signup.confirmPassword"
              type="password"
              class="form-control"
            />            
          </div>
          <div class="mb-3">
            <label for="gender" class="form-label">Gender</label>
            <select
              id="newPassword"
              v-model.trim="signup.gender"              
              class="form-select"
            >
          <option>PLease select Gender</option>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
          </select>            
        </div>          
        </div>
        <div class="card-footer">
          <button type="submit" class="btn btn-outline-primary form-control fw-bold">
            Submit
          </button>
          <button
            type="button"
            class="btn btn-outline-secondary form-control fw-bold"
            @click="backToList"
          >
            Back
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
</template>