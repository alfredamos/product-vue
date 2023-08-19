<script lang="ts" setup>
import { ref } from 'vue';
import ProductDto from '../../models/products/product.model';
import UserDto from '../../models/auth/user.model';

interface Props{
  initialValue: ProductDto;
  users: UserDto[];
}

const props = defineProps<Props>()
const product = ref<ProductDto>(props.initialValue)

const emit = defineEmits(['onBackToList', 'onSubmitProduct'])

const submitProduct = () => {
  emit('onSubmitProduct', product.value)
}

const backToList = () => {
  emit('onBackToList')
}
</script>

<template>
  <div class="row mt-5">
  <div class="col col-sm-8 col-md-8 offset-2">
    <div class="card">
      <form @submit.prevent="submitProduct">
        <div class="card-header bg-primary text-white">
          <h4 class="text-center">Product Form</h4>
        </div>
        <div class="card-body">
          <div class="mb-3">
            <label for="name" class="form-label"> Name </label>
            <input
              id="name"
              required
              v-model.trim="product.name"
              type="text"
              class="form-control"
            />            
          </div>
          <div class="mb-3">
            <label for="company" class="form-label">Company</label>
            <input
              id="company"
              v-model.trim="product.company"
              type="text"
              required
              class="form-control"
            />            
          </div>          
          <div class="mb-3">
            <label for="price" class="form-label">Price</label>
            <input
              id="price"
              v-model.trim="product.price"
              type="number"
              required
              class="form-control"
            />            
          </div>
          <div class="mb-3">
            <label for="productImage" class="form-label">Product Image</label>
            <input
              id="productImage"
              v-model.trim="product.productImage"
              type="text"
              class="form-control"
            />
          </div>
          <div class="mb-3">
            <label for="userId" class="form-label">User</label>
            <select id="userId" v-model.trim="product.userId" class="form-select">
              <option>Please select user</option>
              <option
                v-for="user in users"
                :value="user.id"
                :id="user.id"
              >
                {{ user.name }}
              </option>
            </select>
          </div>
          <div class="mb-3">
            <label for="description" class="form-label">Description</label>
            <textarea
              id="description"
              type="text"
              v-model.trim="product.description"
              class="form-control"
            ></textarea>
          </div>
        </div>
        <div class="card-footer">
          <button type="submit" class="btn btn-outline-primary form-control fw-bold">
            Submit
          </button>
          <button
            type="button"
            class="btn btn-outline-secondary form-control fw-bold"
            @click="backToList"
          >
            Back
          </button>
        </div>
      </form>
    </div>
  </div>
</div>

</template>