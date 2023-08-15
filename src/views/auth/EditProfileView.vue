<script lang="ts" setup>
import EditProfileForm from "@/forms/auth/EditProfileForm.vue";
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
import EditProfileDto from "../../models/auth/edit-profile.model";
import { authService } from "../../services/auth.service";
import { Gender } from "../../models/auth/gender.model";
import { useFetch } from "@/compossables/useFetch";
import { UserDetail } from "@/models/auth/user-detail.model";

const router = useRouter();

const { resource } = useFetch<UserDetail>("/auth/current-user");

const user = computed(() => {
  return resource.value
});

const editProfileSubmit = (editProfileDto: EditProfileDto) => {
  authService
    .editProfile(editProfileDto)
    .then((user) => {
      authService.setAuthUser(user);
      router.push("/products");
    })
    .catch((error) => console.log(error));
};

const backToList = () => {
  router.push("/products");
};
</script>
<template>
  <EditProfileForm
    v-if="user"
    form-name="Edit Profile"
    :initial-value="{ ...user, password: '', gender: user.gender as Gender }"
    @on-back-to-list="backToList"
    @on-edit-profile="editProfileSubmit"
  />
</template>
