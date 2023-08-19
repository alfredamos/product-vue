<script lang="ts" setup>
import { useFetch } from "../../compossables/useFetch";
import { UserApiResults } from "../../models/users/user-api-results.model";
import UsersTable from "../../components/UsersTable.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const { resource } = useFetch<UserApiResults>("/users");

const deleteUser = (id: string) => {
  router.push(`/users/delete/${id}`);
};
const detailUser = (id: string) => {
  router.push(`/users/detail/${id}`);
};

const editUser = (id: string) => {
  router.push(`/users/edit/${id}`);
};
const makeAdminUser = (id: string) => {
  router.push(`/users/make-admin/${id}`);
};

</script>

<template>
  <div class="container" v-if="resource">
    <div class="row">
      <div class="col-sm-6 mt-5">
        <users-table
          :users="resource.users!"          
          @on-delete-user="deleteUser"
          @on-detail-user="detailUser"
          @on-edit-user="editUser"
          @on-make-admin-user="makeAdminUser"
        />
      </div>
      <div class="col-sm-6">
        <RouterView :key="$route.fullPath" />
      </div>
    </div>
  </div>
</template>
