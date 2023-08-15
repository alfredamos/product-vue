<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";
import ChangePasswordForm from "@/forms/auth/ChangePasswordForm.vue";
import type ChangePasswordDto from "../../models/auth/change-password.model";
import { authService } from "../../services/auth.service";
import { useFetch } from "@/compossables/useFetch";
import type { UserDetail } from "@/models/auth/user-detail.model";

const router = useRouter();

const { resource } = useFetch<UserDetail>("/auth/current-user");

const user = computed(() => {
  return resource.value
});

const changePasswordSubmit = (changePasswordDto: ChangePasswordDto) => {
  authService
    .changePassword(changePasswordDto)
    .then((authApiRes) => {
      console.log("Login, authUser : ", authApiRes);
      authService.setAuthUser(authApiRes);
      router.push("/login");
    })
    .catch((error) => console.log(error));
};

const backToList = () => {
  router.push("/");
};

</script>
<template>

  <ChangePasswordForm
    v-if="user"
    :initial-value="{email: user.email, oldPassword: '', newPassword: '', confirmPassword: '' }"
    @back-to-list="backToList"
    @on-change-password="changePasswordSubmit"
  />
</template>
