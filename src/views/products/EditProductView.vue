<script lang="ts" setup>
import ProductForm from "@/forms/products/ProductForm.vue";
import ProductDto from "../../models/products/product.model";
import { computed } from "vue";
import { useRouter, useRoute } from 'vue-router';
import { useFetch } from "../../compossables/useFetch";
import { UserApiResults } from "../../models/users/user-api-results.model";
import { productService } from '../../services/product.service';
import { ProductApiResults } from '../../models/products/product-api-results.models';

const router = useRouter();

const route = useRoute()
const id = route.params.id

const {resource: productApiRes} = useFetch<ProductApiResults>(`/products/${id}`)

const product = computed(() => {
  return productApiRes.value?.product!
})

const { resource } = useFetch<UserApiResults>("/users");

const users = computed(() => {
  return resource.value?.users!;
});

const submitProduct = (productDto: ProductDto) => {
  if (productDto.rating == null ) productDto.rating = 0
  console.log("New Product, product : ", productDto)
  productService.editProduct(productDto)
    .then(productApiRes => {
      console.log("Api-response, resp : ", productApiRes)
      router.push("/products")
    })
    .catch(error => console.log(error))
};

const backToList = () => {
  router.push("/list-product");
};
</script>

<template>
  <ProductForm
    v-if="users?.length > 0"
    :initial-value="product"
    :users="users"
    @on-back-to-list="backToList"
    @on-submit-product="submitProduct"
  />
</template>
