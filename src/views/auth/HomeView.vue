<script lang="ts" setup>
import { useAuthUser } from '@/compossables/useAuthUser';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()

const { authUser } = useAuthUser();

onMounted(() => {
  if (authUser.value.isLoggedIn){
    router.push("/products")
  }
})

</script>

<template>
  <div class="row mt-5">
      <div class="col col-sm-6 offset-3">
        <div class="card shadow-lg p-5 border-2 border-primary">
          <div class="card-body p-lg-5">
            <p class="lead text-primary">
              You are welcome to Product commerce Management System where we
              deal in all kinds of products. Please login if you have an account
              if not please signup to have access to our choice products!
            </p>
          </div>
          <div class="d-flex align-content-center justify-content-between p-5">
            <RouterLink class="link-primary" to="/login">
              Login
            </RouterLink>
            <RouterLink class="link-primary" to="/signup">
              Signup
            </RouterLink>
          </div>
        </div>
      </div>
    </div>

</template>