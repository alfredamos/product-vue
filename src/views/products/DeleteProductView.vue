<script lang="ts" setup>
import { useRoute, useRouter } from "vue-router";
import { useFetch } from "../../compossables/useFetch";
import { ProductApiResults } from "../../models/products/product-api-results.models";
import { computed } from "vue";
import ProductDisplayOne from "../../components/products/productDisplayOne.vue";
import { productService } from "../../services/product.service";

const route = useRoute();
const router = useRouter();

const id = route.params.id as string;

const { resource } = useFetch<ProductApiResults>(`/products/${id}`);

const product = computed(() => {
  return resource.value?.product!;
});

const deleteProduct = (value: boolean) => {
  if (value) {
    console.log("deleted, value : ", value);
    productService
      .deleteProduct(id)
      .then((productApiRes) => router.push("/products"))
      .catch((error) => console.log(error));
  } else {
    console.log("cancelled, value : ", value);
    router.push("/products");
  }
};

const backToList = () => {
  router.push("/products");
};
</script>
<template>
  <product-display-one
    v-if="product"
    :product="product"
    @onBackToList="backToList"
    @onDeleteProduct="deleteProduct"
  />
</template>
