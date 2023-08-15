<script lang="ts" setup>
import { ref, toRefs } from "vue";
import type EditProfileDto from "../../models/auth/edit-profile.model";

interface Props {
  initialValue: EditProfileDto;
  formName: string;
}

const props = defineProps<Props>();
const { formName, initialValue } = toRefs(props);
const emit = defineEmits(["onEditProfile", "onBackToList"]);

console.log("In edit-profile-form, initialValue : ", initialValue.value)

const editProfile = ref<EditProfileDto>(initialValue.value);

const editProfileSubmit = () => {
  emit("onEditProfile", editProfile.value);
};

const backToList = () => {
  emit("onBackToList");
};
</script>

<template>
  <div class="row mt-5">
    <div class="col col-sm-8 col-md-8 offset-2">
      <div class="card">
        <form @submit.prevent="editProfileSubmit">
          <div class="card-header bg-primary text-white">
            <h4 class="text-center">{{ formName }} Form</h4>
          </div>
          <div class="card-body">
            <div class="mb-3">
              <label for="name" class="form-label"> Name </label>
              <input
                id="name"
                v-model.trim="editProfile.name"
                type="text"
                class="form-control"
              />
            </div>
            <div class="mb-3">
              <label for="email" class="form-label"> Email </label>
              <input
                id="email"
                v-model.trim="editProfile.email"
                type="email"
                class="form-control"
              />
            </div>
            <div class="mb-3">
              <label for="phone" class="form-label"> Phone </label>
              <input
                id="phone"
                v-model.trim="editProfile.phone"
                type="tel"
                class="form-control"
              />
            </div>
            <div class="mb-3">
              <label for="password" class="form-label"> Password </label>
              <input
                id="password"
                v-model.trim="editProfile.password"
                type="password"
                class="form-control"
              />
            </div>
            <div class="mb-3">
              <label for="gender" class="form-label">Gender</label>
              <select
                id="newPassword"
                v-model.trim="editProfile.gender"
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
