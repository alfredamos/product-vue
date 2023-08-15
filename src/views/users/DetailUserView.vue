<script lang="ts" setup>
import UserDisplayOne from "@/components/UserDisplayOne.vue";
import { useFetch } from "@/compossables/useFetch";
import type { UserApiResults } from "@/models/users/user-api-results.model";
import { useRoute, useRouter } from "vue-router";
import { userService } from "@/services/user.service";

const router = useRouter();
const route = useRoute();
const id = route.params.id as string;
const { resource } = useFetch<UserApiResults>(`/users/${id}`);

const deleteUser = (value: boolean) => {
  if (value) {
    console.log("Right place : ", value);
    userService
      .deleteUser(id)
      .then((userApiRes) => router.push("/users"))
      .catch((error) => console.log(error));
  } else {
    console.log("wrong place : ", value);
    router.push("/users");
  }
};

const backToList = () => {
  router.push("/users");
};
</script>

<template>
  <user-display-one
    v-if="resource?.user"
    :user="resource?.user"
    @onBackToList="backToList"
    @onDeleteHandler="deleteUser"
  />
</template>
@/models/users/user-api-results.model
