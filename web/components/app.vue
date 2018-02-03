<template lang="pug">
  #app
    svgcomponents
    appheader
    intro
    about
    features
    price
    appfooter
</template>

<style lang="sass" scoped>
  #content
    scroll-behavior: smooth
    overscroll-y: auto

</style>

<script>
  import appheader from '../components/header.vue'
  import appfooter from '../components/footer.vue'
  import intro from '../components/intro.vue'
  import about from '../components/about.vue'
  import features from '../components/features.vue'
  import price from '../components/price.vue'
  import contact from '../components/contact.vue'
  import svgcomponents from '../components/svg.vue'

  export default {
    name: 'APP',
    components: {
      intro, about, features, price, appheader, appfooter, svgcomponents, contact
    }
  }
</script>
