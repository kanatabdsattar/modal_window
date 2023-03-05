import { defineStore } from 'pinia';

export interface Purchase {
  productId: number;
  quantity: number;
}

export interface ItemView {
  id: number;
  image: string;
  title: string;
}

export const useModalWindowStore = defineStore({
  id: 'modal',

  state: () => ({
    isShown: false,
    id: 0,
  }),

  getters: {

  },

  actions: {
    enableModal(id: number) {
      this.isShown = true;
      this.id = id;
    },
    disableModal() {
      this.isShown = false;
      this.id = 0;
    },
  },
});