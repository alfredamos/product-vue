<script lang="ts" setup>
import { useRoute, useRouter } from "vue-router";
import { useFetch } from "../../compossables/useFetch";
import UserDto from "../../models/auth/user.model";
import { UserApiResults } from "../../models/users/user-api-results.model";
import { userService } from "../../services/user.service";
import EditProfileForm from "@/forms/auth/EditProfileForm.vue";

const route = useRoute();
const id = route.params.id;
const router = useRouter();

const { resource } = useFetch<UserApiResults>(`/users/${id}`);

const userEditSubmit = (userDto: UserDto) => {
  userService
    .editUser(userDto)
    .then((userApiRes) => {
      router.push("/users");
    })
    .catch((error) => console.log(error));
};

const backToList = () => {
  router.push("/users");
};
</script>

<template>
  <EditProfileForm
    v-if="resource?.user"
    form-name="User Edit Profile"
    :initial-value="{ ...resource?.user! }"
    @on-back-to-list="backToList"
    @on-edit-profile="userEditSubmit"
  />
</template>
../models/users/user-api-results.model
