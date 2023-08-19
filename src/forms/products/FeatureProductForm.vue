<script lang="ts" setup>
import { ref } from "vue";
import type FeatureProductDto from "../../models/products/feature-product.model";

interface Props {
  initialValue: FeatureProductDto;
}

const props = defineProps<Props>();
const product = ref<FeatureProductDto>(props.initialValue);

const emit = defineEmits(["onBackToList", "onSubmitProduct"]);

const submitProduct = () => {
  emit("onSubmitProduct", product.value);
};

const backToList = () => {
  emit("onBackToList");
};
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
                v-model="product.name"
                type="text"
                class="form-control"
                disabled
              />
            </div>
            <div class="mb-3">
              <label for="company" class="form-label">Company</label>
              <input
                id="company"
                v-model="product.company"
                type="text"
                class="form-control"
                disabled
              />
            </div>
            <div class="mb-3">
              <label for="price" class="form-label">Price</label>
              <input
                id="price"
                :value="product.price"
                type="number"
                disabled
                class="form-control"
              />
            </div>
            <div class="mb-3">
              <label for="featured" class="form-label">Feature</label>
              <select
                id="featured"
                v-model.trim="product.featured"
                class="form-select"
              >
                <option>Feature</option>
                <option :value="false">False</option>
                <option :value="true">True</option>
              </select>
            </div>
          </div>
          <div class="card-footer">
            <button
              type="submit"
              class="btn btn-outline-primary form-control fw-bold"
            >
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
