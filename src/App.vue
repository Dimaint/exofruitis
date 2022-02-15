<template>
  <v-app>
    <v-app-bar :clipped-left="clipped" fixed app class="">
      <v-btn text color="primary"> {{ this.title }}</v-btn>
      <v-spacer />
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          text
          small
          v-for="link of links"
          color="primary"
          :key="link.title"
          :to="link.to"
        >
          <v-icon left>{{ link.icon }}</v-icon>
          {{ link.title }}</v-btn
        >
        <v-btn text v-if="isUserLoggedIn" @click="onLogout">
          <v-icon left>mdi-logout</v-icon>Logout</v-btn
        >
      </v-toolbar-items>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
    <v-footer fixed class="hidden-md-and-up justify-center">
      <v-bottom-navigation :value="value" color="primary" grow fixed>
        <v-btn v-for="link of links" :key="link.title" :to="link.to">
          <span>{{ link.title }}</span>

          <v-icon>{{ link.icon }}</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    links: [
        {
          icon: "mdi-apps",
          title: "Фрукты",
          to: "/",
        },
        {
          icon: "mdi-account-circle-outline",
          title: "Профиль",
          to: "/profile",
        },
        {
          icon: "mdi-information-outline",
          title: "Инфо",
          to: "/about",
        },
        {
          icon: "mdi-cart-outline",
          title: "Корзина",
          to: "/cart",
        },
      ],
      title: "Exofrutis",
  }),
};
</script>
