<script lang="ts" setup>
import { RouterLink } from "vue-router";
import { useAuthUser } from "../compossables/useAuthUser";
import { computed } from 'vue';
import { UserType } from "@/models/auth/user-type.model";

const { authUser } = useAuthUser();
const isAdmin = computed(() => authUser.value?.userType === UserType.Admin)
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <RouterLink type="button" class="navbar-brand mx-5" to="/products">Navbar</RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink type="button" class="nav-link active mx-3" aria-current="page" to="/"
              >Home</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink type="button" class="nav-link mx-5" to="/products"
              >Products</RouterLink
            >
          </li>
          <li class="nav-item" v-if="isAdmin">
            <RouterLink type="button" class="nav-link" to="/users">Users</RouterLink>
          </li>
          
        </ul>
        <ul class="d-flex navbar-nav">
          <li v-if="authUser.isLoggedIn" class="nav-item dropdown mx-5">
            <RouterLink
            type="button"
              class="nav-link dropdown-toggle"
              to="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Settings
            </RouterLink>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <RouterLink type="button" class="dropdown-item" to="/change-password"
                  >Change Password</RouterLink
                >
              </li>
              <li>
                <RouterLink type="button" class="dropdown-item" to="/edit-profile"
                  >Edit Profile</RouterLink
                >
              </li>
            </ul>
          </li>
          <li v-if="!authUser.isLoggedIn" class="nav-item mx-5">
            <RouterLink type="button" class="nav-link" to="/login">login</RouterLink>
          </li>
          <li class="nav-item mx-5" v-if="isAdmin">
            <RouterLink type="button" class="nav-link" to="/admin-panel">Admin</RouterLink>
          </li>
          <li v-if="authUser.isLoggedIn" class="nav-item mx-5">
            <RouterLink type="button" class="nav-link align-self-auto" to="/logout"
              >logout</RouterLink
            >
          </li>
          
        </ul>
      </div>
    </div>
  </nav>
</template>
../composables/useAuthUser
