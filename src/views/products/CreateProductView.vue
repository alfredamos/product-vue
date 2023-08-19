<script lang="ts" setup>
import ProductForm from "@/forms/products/ProductForm.vue";
import ProductDto from "../../models/products/product.model";
import { ref, computed } from "vue";
import { useRouter } from 'vue-router';
import { useFetch } from "../../compossables/useFetch";
import { UserApiResults } from "../../models/users/user-api-results.model";
import { productService } from '../../services/product.service';

const router = useRouter();

const product = ref<ProductDto>({
  name: "",
  company: "",
  price: 0,
  userId: "",
});

const { resource } = useFetch<UserApiResults>("/users");

const users = computed(() => {
  return resource.value?.users!;
});

const submitProduct = (productDto: ProductDto) => {
  console.log("New Product, product : ", productDto)
  productService.createProduct(productDto)
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
