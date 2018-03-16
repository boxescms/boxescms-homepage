<template lang="pug">
  #app
    appheader
    intro
    //- about
    features
    price
    contact
    support
    appfooter
</template>

<style lang="sass" scoped>
  @import "../sass/variables"

  #app
    position: relative
    scroll-behavior: smooth
    overflow-x: hidden
</style>

<script>
  import appheader from '../vue/header.vue'
  import intro from '../vue/intro.vue'
  import about from '../vue/about.vue'
  import features from '../vue/features.vue'
  import price from '../vue/price.vue'
  import contact from '../vue/contact.vue'
  import support from '../vue/support.vue'
  import appfooter from '../vue/footer.vue'

  export default {
    name: 'APP',
    components: {
      intro, about, features, price, appheader, appfooter, contact, support
    }
  }
</script>
