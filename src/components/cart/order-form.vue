<template>
  <v-container>
    <v-row justify="center">
      <v-btn class="white--text mt-10" color="teal" v-show="!overlay" @click="overlay = !overlay">
        Заказать
      </v-btn>

      <v-overlay :z-index="zIndex" :value="overlay" >
        <v-container>
          <v-row >
            <v-col cols="12" lg="3">
              <v-text-field
                v-model="firstname"
                :rules="nameRules"
                label="Имя"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" lg="3">
                <v-text-field
                v-model="phoneNumber"
                :counter="9"
                maxlength="9"
                :error-messages="errors"
                label="Phone Number"
                required
                ></v-text-field>
            </v-col>
            <v-col cols="12" lg="6">
              <v-text-field
                v-model="street"
                :rules="steetRules"
                :counter="30"
                label="Улица"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <v-text-field
                v-model="street"
                :rules="steetRules"
                :counter="10"
                label="Дом(корпус, строение)"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <v-text-field
                v-model="street"
                :rules="steetRules"
                :counter="10"
                label="Подъезд"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <v-text-field
                v-model="street"
                :rules="steetRules"
                :counter="10"
                label="Этаж"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
                <v-text-field
                v-model="comment"
                color="teal"
            >
              <template v-slot:label>
                <div>
                  Комментарий к заказу <small>(optional)</small>
                </div>
              </template>
            </v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-card-actions class="mx-auto my-auto">
              <v-btn color="secondary" text @click="increment">
                Оформить
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn color="warning" text @click="overlay = false">
                Отмена
              </v-btn>
            </v-card-actions>
          </v-row>
        </v-container>
      </v-overlay>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
    overlay: false,
    zIndex: 0,
  }),
  methods: {
    // ...mapActions([
    // ]),
  },
  computed: {
    ...mapGetters(["CART"]),
  },
};
</script>