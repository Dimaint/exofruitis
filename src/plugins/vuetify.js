import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
      options: {
        customProperties: true,
      },
    themes: {
      light: {
        primary: '#007BFF',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
      },
      dark: {
        primary: '#76FF03',
        accent: '#42424',
        secondary: '#FF8F0',
        info: '#26A69',
        warning: '#FFC10',
        error: '#DD2C0',
        success: '#00E676'
      }
    },
  },
});
