<script lang="ts" setup>
import type ChangePasswordDto  from '@/models/auth/change-password.model';
import { ref } from 'vue';

interface Props{
  initialValue: ChangePasswordDto;
}

const props = defineProps<Props>()

const emit = defineEmits(['backToList', 'onChangePassword'])

console.log("In change-password-form, change-password : ", props.initialValue)

const changePassword = ref<ChangePasswordDto>(props.initialValue);

const changePasswordSubmit = () => {
  emit('onChangePassword', changePassword.value);
}

const backToList = () => {
  emit('backToList')
}

</script>
<template>
  <div class="row mt-5">
  <div class="col col-sm-4 col-md-4 offset-4">
    <div class="card">
      <form @submit.prevent="changePasswordSubmit">
        <div class="card-header bg-primary text-white">
          <h4 class="text-center">Change Password Form</h4>
        </div>
        <div class="card-body">
          <div class="mb-3">
            <label for="email" class="form-label"> Email </label>
            <input
              id="email"
              v-model.trim="changePassword.email"
              type="email"
              class="form-control"
            />
            
          </div>
          <div class="mb-3">
            <label for="oldPassword" class="form-label"> Old Password </label>
            <input
              id="oldPassword"
              v-model.trim="changePassword.oldPassword"
              type="password"
              class="form-control"
            />            
          </div>
          <div class="mb-3">
            <label for="newPassword" class="form-label">New Password</label>
            <input
              id="newPassword"
              v-model.trim="changePassword.newPassword"
              type="password"
              class="form-control"
            />
            
            </div>
          <div class="mb-3">
            <label for="confirmPassword" class="form-label"> Password </label>
            <input
              id="confirmPassword"
              v-model.trim="changePassword.confirmPassword"
              type="password"
              class="form-control"
            />                          
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