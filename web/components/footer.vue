<template lang="pug">
  footer
    .wrapper
      ul
        li
          a Terms Of Service
        li
          a Privacy Policy

      p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus praesentium fugit unde sequi optio.
      p.copyright copyright 2018 Boxes Sdn. Bhd.
</template>

<style lang="sass" scoped>
  @import '../sass/variables'
  @import '../sass/colors'

  footer
    background-color: $ocean
    position: relative
    width: 100%
    padding: 30px
    // color: $navy
    text-align: center

    .copyright
      font-size: 0.7em
      color: $darkorange

    .wrapper
      width: 100%
      max-width: 500px
      position: relative
      margin: 0 auto

    ul
      display: flex
      flex-flow: row wrap
      justify-content: space-around
      width: 100%
      max-width: 500px
      list-style-type: none
      padding: 0
      margin: 0 auto 30px auto

      li
        color: $mist

</style>

<script>
  export default {
    name: 'FOOTER'
  }
</script>
