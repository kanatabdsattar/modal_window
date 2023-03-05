<template>
  <Teleport to="body">
    <div class="product-details" v-show="modalWindow.isShown">
      <div class="product-details__info">
        <button class="product-details__back" @click="closeButton">Go back</button>
      </div>
      <div class="product-details__index">
        <div class="product-details__title">
            {{ item.title }}
            <figure class="p-8">
              <img
                :src="item?.image"
                alt="Card Image"
                class="object-contain w-full h-48"
                />
            </figure> 
        </div>
        <div class="btn-group">
          <button class="btn btn-primary" @click="cartStore.add(modalWindow.id)">+</button>
          <button class="btn btn-ghost no-animation">{{item.quantity}}</button>
          <button class="btn btn-primary" @click="cartStore.remove(modalWindow.id)">-</button>
        </div>
      </div>
    </div>
  </Teleport>
</template>
<script setup lang="ts">
import {computed, watch} from 'vue';
import { useModalWindowStore } from '../store/modal';
import { useCartStore } from '../store/cart';
import { useProductStore } from '../store/products';

const modalWindow = useModalWindowStore();
const closeButton = () => {
    modalWindow.isShown= false;
}
const cartStore = useCartStore();
const productStore = useProductStore();

const item = computed(() => {
    return {
      ...productStore.getItemById(modalWindow.id),
      ...cartStore.getPurchaseById(modalWindow.id)
    }
});
</script>

<style scoped>
.product-details {
  justify-content: center;
  background-color:white;
  border-radius: 6px;
  box-shadow:  0 0 10px rgba(0,0,0,0.25);
  position: fixed;
  z-index: 999;
  top: 10%;
  left: 50%;
  width: 60vw;
  margin-left: -370px;
  padding-bottom: 20px;
}
.product-details__back{
    padding: 10px 15px; 
    margin: 10px;
    border-radius: 6px;
    background-color: hsla(var(--p) / var(--tw-bg-opacity, 1));
}
.product-details__index{
    margin-top: 20px;
    width: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 20px;
}
</style>
