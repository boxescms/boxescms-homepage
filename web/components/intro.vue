<template lang="pug">
  section#intro.first
    h1 BOXES CMS
    h2 ExpressJS based API centric CMS

</template>

<style lang="sass" scoped>
  @import '../sass/variables'
  @import '../sass/colors'

  #intro
    text-align: center
    height: 700px
    background-color: $blue-500

    @media #{$mobile}
      height: 450px

    h1
      color: $white-50
      font-size: 4em
      margin-bottom: 0

    h2
      color: $blue-100
</style>

<script>
  export default {
    name: 'INTRO'
  }
</script>
