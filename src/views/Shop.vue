<template>
    <v-container class="d-flex justify-space-around flex-wrap">
        

        <product-item
          v-for="product in PRODUCTS"
          :key="product.id"
          :product_data="product"
          @addToCart="addToCart"
          
      />

    </v-container>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import productItem from '../components/shop/product-item.vue'
export default {
  components: {
    productItem
  },
    methods: {
      ...mapActions(['GET_PRODUCTS_FROM_API', 'ADD_TO_CART']),

      addToCart(data) {
        this.ADD_TO_CART(data);
        }
    },
    computed: {
      ...mapGetters(['PRODUCTS'])
    },
    mounted() {
      this.GET_PRODUCTS_FROM_API()
    }
}
</script>