<template>
  <v-card
    class="mx-2 my-5 d-flex flex-column"
    max-width="300"
  >
    <v-img
      class="black--text align-end"
      height="200px"
      :src="product_data.img"
    >
    </v-img>
    <v-card-title class="primary--text">{{product_data.name}}</v-card-title>

    <v-card-subtitle class="py-4" >
      {{product_data.price}} Р. X {{product_data.quantity}}
    </v-card-subtitle>
    <v-card-text class="text--primary">
      <div>{{product_data.description}}</div>
    </v-card-text>
    <v-spacer></v-spacer>

    <v-card-actions class="mx-auto my-auto">
      <v-btn
        color="secondary"
        text
        @click="increment"
      >
        Добавить
      </v-btn>
      
      <v-btn
        color="warning"
        text
        @click="deleteFromCart"
      >
        Удалить
      </v-btn>  
      
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    name: "cart-item",
    props: {
      product_data: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      increment() {
        this.$emit('increment');
      },
      deleteFromCart() {
          if (this.product_data.quantity > 1) {
              this.$emit('decrement');
          } else {
              this.$emit('deleteFromCart');
          }
      }
    },
    
  }
</script>