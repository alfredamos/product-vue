<script lang="ts" setup>
import ProductDisplay from "../../components/products/ProductDisplay.vue";
import { useRouter } from "vue-router";
import { useFetch } from "../../compossables/useFetch";
import type { ProductApiResults } from "@/models/products/product-api-results.models";
import { useAuthUser } from "@/compossables/useAuthUser";
import { computed } from "vue";
import { UserType } from "@/models/auth/user-type.model";
const { resource } = useFetch<ProductApiResults>("/products");

const router = useRouter();
const { authUser } = useAuthUser();
const isAdmin = computed(() => authUser.value.userType === UserType.Admin);

console.log("In list-product, products : ", resource.value);

const addToCart = (id: string) => {
  console.log("clicked in product-detail, id : ", id);
  router.push(`/products/detail/${id}`);
};

const backToList = () => {
  router.push("/products");
};
</script>

<template>
  <div class="container" v-if="resource">
    <div class="row mt-5" v-if="isAdmin">
      <div class="col-6">
        <h4 class="d-flex justify-content-start align-content-center">
          Create new Product &#8594;
        </h4>
      </div>
      <div class="col-6 d-flex justify-content-end align-content-center">
        <RouterLink
        type="button"
          to="/list-product/create"
          class="btn btn-outline-secondary btn-lg w-50 me-0 fw-bold"
        >
          Create
        </RouterLink>
      </div>
    </div>
    <div class="row mt-5">
      <div
        class="col col-sm-2 col-md-3 col-lg-4 m-1"
        v-for="product in resource.products"
      >
        <product-display :product="product" @onAddToCart="addToCart" />
      </div>
    </div>
  </div>
</template>
