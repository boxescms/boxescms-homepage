<template lang="pug">
  section#intro.first
    img(src="static/images/boxes.svg")
    h1 BOXES CMS
    h2 ExpressJS based API centric CMS

</template>

<style lang="sass" scoped>
  @import '../sass/variables'
  @import '../sass/colors'

  #intro
    text-align: center
    background-color: $blue-500
    padding: 50px 50px 80px 50px

    @media #{$mobile}
      padding: 20px 20px 20px 20px


    img
      display: block
      width: 30%
      margin: 0 auto
      min-width: 150px
      max-width: 250px

    h1
      color: $white-50
      font-size: 4em
      margin-bottom: 0
      font-weight: 200

    h2
      color: $blue-100
</style>

<script>
  export default {
    name: 'INTRO'
  }
</script>
