<template>
    <div class="card bordered ">
        <figure class="px-8 pt-10">
            <img
                :src="product.image"
                alt="Card Image"
                class="object-contain w-full h-64"
            />
        </figure> 
        <div class="card-body">
            <h2 class="card-title">
                <router-link class="link link-hover" :to="`/product/${product.id}`">{{ product.title }}</router-link>
            </h2>
            <p>{{ toCurrency(product.price) }}</p>
            <div class="justify-end card-actions">
                <button class="btn btn-primary" @click="addCardButton(product.id)">Add to Cart</button>
            </div>
        </div>
    </div>   
</template>

<script setup lang="ts">
import { useCartStore } from '../store/cart';
import type { Product } from '../store/products'
import { toCurrency } from '../shared/utils'
import { useModalWindowStore } from '../store/modal';

const cartStore = useCartStore()
const modalWindow = useModalWindowStore()

defineProps<{
    product: Product
}>();

const addCardButton = (id: number) => {
  cartStore.add(id);
  modalWindow.enableModal(id);
};
</script>