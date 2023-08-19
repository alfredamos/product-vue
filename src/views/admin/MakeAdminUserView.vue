<script lang="ts" setup>
import { useRoute, useRouter } from "vue-router";
import { useFetch } from "../../compossables/useFetch";
import UserDto from "../../models/auth/user.model";
import { UserApiResults } from "../../models/users/user-api-results.model";
import { userService } from "../../services/user.service";
import MakeAdminUserForm from "../../forms/auth/MakeAdminUserForm.vue"
import { computed } from 'vue';
import { MakeAdminUserDto } from '../../models/auth/make-admin-user.model';
import { authService } from '../../services/auth.service';

const route = useRoute();
const id = route.params.id;
const router = useRouter();

const { resource } = useFetch<UserApiResults>(`/users/${id}`);

const user = computed(() => {
  return {
    name: resource.value?.user?.name!,
    email: resource.value?.user?.email!,
    phone: resource.value?.user?.phone!,
    gender: resource.value?.user?.gender!,
    userType: resource.value?.user?.userType!,
  }
})

const userEditSubmit = (makeAdminUserDto: MakeAdminUserDto) => {
  console.log("in make-admin, user : ", makeAdminUserDto)
  authService.makeAdmin(makeAdminUserDto)
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
  <MakeAdminUserForm
    v-if="resource?.user"   
    :initial-value="user!"
    @on-back-to-list="backToList"
    @on-submit-user="userEditSubmit"        
  />
</template>
