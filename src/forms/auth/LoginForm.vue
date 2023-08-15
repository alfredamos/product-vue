<script lang="ts" setup>
import type LoginDto from "../../models/auth/login.model";
import { ref } from "vue";

interface Props {
  initialValue: LoginDto;
}

const props = defineProps<Props>();
const emit = defineEmits(["onLogin", "onBackToList"]);

const login = ref<LoginDto>(props.initialValue);

const loginSubmit = () => {
  emit("onLogin", login.value);
};

const backToList = () => {
  emit("onBackToList");
};
</script>

<template>
  <div class="row mt-5">
    <div class="col col-sm-4 col-md-4 offset-4">
      <div class="card">
        <form @submit.prevent="loginSubmit">
          <div class="card-header bg-primary text-white">
            <h4 class="text-center">Login Form</h4>
          </div>
          <div class="card-body">
            <div class="mb-3">
              <label for="email" class="form-label"> Email </label>
              <input
                id="email"
                v-model.trim="login.email"
                type="email"
                class="form-control"
              />
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Password </label>
              <input
                id="password"
                v-model.trim="login.password"
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
