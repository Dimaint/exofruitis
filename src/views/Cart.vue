<template>
    <v-container class="d-flex justify-space-around flex-wrap">
        

        <cart-item
          v-for="(product, index) in CART"
          :key="product.id"
          :product_data="product"
          @deleteFromCart="deleteFromCart(index)"
          @decrement="decrement(index)"
          @increment="increment(index)"
      />

    </v-container>
</template>


<script>
import {mapActions, mapGetters} from 'vuex'
import cartItem from '../components/cart/cart-item.vue'
export default {
  components: {
    cartItem
  },
    methods: {
      ...mapActions(['DELETE_FROM_CART', 'INCREMENT_CART_ITEM', 'DECREMENT_CART_ITEM']),

      deleteFromCart(index) {
        this.DELETE_FROM_CART(index);
        },
      increment(index) {
          this.INCREMENT_CART_ITEM(index);
        //   console.log(id)
      },
      decrement(index) {
          this.DECREMENT_CART_ITEM(index);
      }
    },
    computed: {
      ...mapGetters(['CART'])
    },
    
}
</script>