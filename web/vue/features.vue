<template lang="pug">
  section#features
    h1 Features
    ul
      li
        img#bolt(src="static/images/bolt.svg")
        h2 Quick
        p Install node and run #[span.codeblock yarn add boxescms] to initiate your project on the command line.
      li
        h2 Static
        p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio nihil illo esse, voluptatem, similique quo reiciendis sequi.
      li
        h2 Secure
        p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio nihil illo esse, voluptatem, similique quo reiciendis sequi.
</template>

<style lang="sass" scoped>
  @import '../sass/variables'
  @import '../sass/colors'

  #features
    ul
      display: flex
      flex-flow: row wrap
      justify-content: flex-start
      align-items: top
      width: 80%
      +clearlist
      margin: 0 auto

      li
        width: 33.33%
        padding: 0 30px
        text-align: center

        @media #{$mobile}
          width: 100%

        & + li
          @media #{$mobile}
            margin-top: 20px

    #bolt
      width: 130px
      height: 130px

</style>

<script>
  export default {
    name: 'FEATURES'
  }
</script>
