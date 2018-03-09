<template lang="pug">
  #app
    appheader
    intro
    about
    features
    price
    contact
    donation
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
  import appheader from '../components/header.vue'
  import intro from '../components/intro.vue'
  import about from '../components/about.vue'
  import features from '../components/features.vue'
  import price from '../components/price.vue'
  import contact from '../components/contact.vue'
  import donation from '../components/donation.vue'
  import appfooter from '../components/footer.vue'

  export default {
    name: 'APP',
    components: {
      intro, about, features, price, appheader, appfooter, contact, donation
    }
  }
</script>
