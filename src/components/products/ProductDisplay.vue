
<script lang="ts" setup>
import ProductDto from '../../models/products/product.model';
interface Props{
  product: ProductDto
}

const props = defineProps<Props>()
const emit = defineEmits(['onAddToCart', 'onBackToList'])

const addToCart = (id: string) => {
  console.log("In detail-product-child, id : ", id)
  emit('onAddToCart', id)
}

const backToList = () => {
  emit('onBackToList')
}
</script>

<template>
<div class="card shadow-lg bg-white">
      <div class="card-header bg-primary">
        <h4 class="text-center text-white">{{props.product.name}}</h4>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group item">
            <p>{{props.product.company}}</p>
          </li>
          <li class="list-group item">
            <p>{{props.product.price}}</p>
          </li>
          <li class="list-group item">
            <p>{{props.product.rating}}</p>
          </li>
        </ul>
      </div>
      <div class="card-footer">
        <button
        type="button"
          @click="addToCart(props.product.id!)"
          class="btn btn-outline-secondary form-control shadow-sm fw-bold"
        >
          Add to Cart
        </button>        
      </div>
    </div>

</template>