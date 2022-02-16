<template>
  <v-carousel class="m-auto">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
      fluid
    ></v-carousel-item>
  </v-carousel>
</template>


<script> 
  // import {mapActions} from 'vuex'
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://previews.123rf.com/images/ventdusud/ventdusud1812/ventdusud181200008/118506392-passion-fruit-closeup-exotic-maracuja-granadilla-maracuya-parcha-passiflora-edulis-macro-closeup-exo.jpg',
          },
          {
            src: 'https://previews.123rf.com/images/westsib/westsib1804/westsib180400057/99177008-concept-asian-food-market-berries-dragon-fruit-pitahaya-on-counter-street-night-vendor-of-fruits-exo.jpg',
          },
          {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzZaV33wh2HFnT0owbshnvN50z9ZVnIih3PA&usqp=CAU',
          },
          {
            src: '../static/2.png',
          },
        ],
      }
    },
    
  }
</script>
