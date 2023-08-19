<script lang="ts" setup>
import {useRouter} from "vue-router"
import AlertModal from '@/util/AlertModal.vue';
import { authService, userSubInitial } from '@/services/auth.service';

const router = useRouter()

const onCloseOrOPenModal = (value: boolean) => {
  if (value){
    console.log("Modal Open - value : ", value);
    authService.setAuthUser(userSubInitial)
    router.push("/")
  }else{
    console.log("Modal Close - value : ", value);
    router.push("/products")
  }
}

const backToLastPage = () => {
  router.push("/products")
}

</script>

<template>
  <div class="row mt-5">
        <div class="col col-sm-6 offset-3">
          <div class="card shadow-lg">
            <div class="card-header bg-primary text-white">
              <h4 class="text-center p-3">Logout Page</h4>
            </div>
            <div class="card-body p-3 d-flex align-content-center justify-content-between p-5">
              <p class="lead">
                This is the logout page of the product center. PLease click the
                logout button below to log out otherwise click the cancel button
                to return to the previous page!
              </p>
            </div>
            <div class="card-footer bg-white p-4">
              <button
              type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                class="btn btn-outline-secondary btn-lg form-control fw-bold p-2"
              >
                Logout
              </button>
              <button
                @click="backToLastPage"
                class="btn btn-outline-primary btn-lg form-control fw-bold p-2"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>

  <AlertModal
  :modal-message="'Do you really want to logout?'"
  :modal-title="'Logout Confirmation!'"
  :modal-button-close="'Cancel'"
  :modal-button-save="'Logout'"
  @on-open-or-close-modal="onCloseOrOPenModal"
  />
</template>