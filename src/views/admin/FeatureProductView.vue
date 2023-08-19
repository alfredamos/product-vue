<script lang="ts" setup>
import { computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useFetch } from "../../compossables/useFetch";
import { productService } from "../../services/product.service";
import { ProductApiResults } from "../../models/products/product-api-results.models";
import FeatureProductDto from "../../models/products/feature-product.model";
import FeatureProductForm from "../../forms/products/FeatureProductForm.vue"


const router = useRouter();

const route = useRoute();
const id = route.params.id;

const { resource: productApiRes } = useFetch<ProductApiResults>(
  `/products/${id}`
);

const product = computed(() => {
  return {
    id: productApiRes.value?.product?.id,
    name: productApiRes.value?.product?.name!,
    price: productApiRes.value?.product?.price!,
    company: productApiRes.value?.product?.company!,
    featured: productApiRes.value?.product?.featured!,
  };
});

const submitProduct = (productDto: FeatureProductDto) => {
  console.log("feature-product : ", productDto);

  productService
    .editProductFeature(productDto)
    .then((productApiRes) => {
      console.log("Api-response, resp : ", productApiRes);
      router.push("/list-product");
    })
    .catch((error) => console.log(error));
};

const backToList = () => {
  router.push("/list-product");
};
</script>

<template>
  <FeatureProductForm
    v-if="productApiRes?.product"
    :initial-value="product"
    @on-back-to-list="backToList"
    @on-submit-product="submitProduct"
  />
</template>
