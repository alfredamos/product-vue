<script lang="ts" setup>
import ProductDisplay from "../../components/products/ProductDisplay.vue";
import { useRouter } from "vue-router";
import { useFetch } from "../../compossables/useFetch";
import type { ProductApiResults } from "@/models/products/product-api-results.models";
const { resource } = useFetch<ProductApiResults>("/products");

const router = useRouter();

console.log("In list-product, products : ", resource.value);

const addToCart = (id: string) => {
  router.push(`/add-to-cart/${id}`);
};

const backToList = () => {
  router.push("/products");
};
</script>

<template>
  <div class="container" v-if="resource">
    <div class="row mt-5">
      <div class="col-6">
        <h4 class="d-flex justify-content-start align-content-center">
          Create new Product &#8594;
        </h4>
      </div>
      <div class="col-6 d-flex justify-content-end align-content-center">
        <RouterLink
          to="/products/create"
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
        <product-display
          :product="product"
          @onBackToList="backToList()"
          @onAddCart="addToCart($event)"
        />
      </div>
    </div>
  </div>
</template>
../composables/useFetch ../models/products/product-api-results.models
