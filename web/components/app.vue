<template lang="pug">
  #app
    svgcomponents
    appheader
    intro
    .right-prop
    about
    .left-prop
    features
    price
    appfooter
</template>

<style lang="sass" scoped>
  #app
    position: relative
    scroll-behavior: smooth
    overflow-x: hidden

    .left-prop
      overflow: hidden
      position: absolute
      top: 27%
      left: -60px
      z-index: 1
      height: 360px
      width: 318px
      background-image: url('../assets/images/box-nospace.svg'), url('../assets/images/box-nospace.svg'), url('../assets/images/box-nospace.svg'), url('../assets/images/box-nospace.svg'), url('../assets/images/box-nospace.svg'), url('../assets/images/box-nospace.svg'), url('../assets/images/box-nospace.svg'), url('../assets/images/box-nospace.svg'), url('../assets/images/box-nospace.svg'), url('../assets/images/box-nospace.svg'), url('../assets/images/box-nospace.svg'), url('../assets/images/box-nospace.svg'), url('../assets/images/box-nospace.svg'), url('../assets/images/box-nospace.svg'), url('../assets/images/box-nospace.svg')
      background-repeat: no-repeat
      background-position: 0px 0px, 52px 30px, 104px 60px ,156px 90px, 208px 120px, 0px 59px, 52px 89px, 104px 119px ,156px 149px, 0px 118px, 52px 148px, 104px 178px, 0px 177px, 52px 207px, 0px 236px
      background-size: 110px

    .right-prop
      overflow: hidden
      position: absolute
      top: 11.5%
      z-index: 1
      right: -60px
      height: 360px
      width: 318px
      background-image: url('../assets/images/box-nospace.svg'), url('../assets/images/box-nospace.svg'), url('../assets/images/box-nospace.svg'), url('../assets/images/box-nospace.svg'), url('../assets/images/box-nospace.svg'), url('../assets/images/box-nospace.svg'), url('../assets/images/box-nospace.svg'), url('../assets/images/box-nospace.svg'), url('../assets/images/box-nospace.svg'), url('../assets/images/box-nospace.svg'), url('../assets/images/box-nospace.svg'), url('../assets/images/box-nospace.svg'), url('../assets/images/box-nospace.svg'), url('../assets/images/box-nospace.svg'), url('../assets/images/box-nospace.svg')
      background-repeat: no-repeat
      background-position: 0px 0px, 52px 30px, 104px 60px ,156px 90px, 208px 120px, 0px 59px, 52px 89px, 104px 119px ,156px 149px, 0px 118px, 52px 148px, 104px 178px, 0px 177px, 52px 207px, 0px 236px
      background-size: 110px
      transform: rotateY(180deg)

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
