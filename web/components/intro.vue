<template lang="pug">
  section#intro.first
    svg#logo(viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="250" height="250")
      use(xlink:href="#boxes-svg")

    h1 BOXES CMS
    h2 ExpressJS based API centric CMS

</template>

<style lang="sass" scoped>
  @import '../sass/variables'
  @import '../sass/colors'

  #intro
    text-align: center

    h1
      margin: 0
      font-size: 64px

      @media #{$mobile}
        font-size: 54px

    h2
      margin: 0
      font-size: 32px
      color: $steel

      @media #{$mobile}
        font-size: 20px

</style>

<script>
  export default {
    name: 'INTRO'
  }
</script>
