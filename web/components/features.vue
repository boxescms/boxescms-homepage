<template lang="pug">
  section#features
    h1 features
    ul
      li
        h2 TITLE
        p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio nihil illo esse, voluptatem, similique quo reiciendis sequi.
      li
        h2 TITLE
        p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio nihil illo esse, voluptatem, similique quo reiciendis sequi.
      li
        h2 TITLE
        p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio nihil illo esse, voluptatem, similique quo reiciendis sequi.
      li
        h2 TITLE
        p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio nihil illo esse, voluptatem, similique quo reiciendis sequi.
      li
        h2 TITLE
        p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio nihil illo esse, voluptatem, similique quo reiciendis sequi.
      li
        h2 TITLE
        p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio nihil illo esse, voluptatem, similique quo reiciendis sequi.
</template>

<style lang="sass" scoped>
  @import '../sass/variables'
  @import '../sass/colors'

  #features
    ul
      display: flex
      flex-flow: row wrap
      justify-content: space-around
      +clearlist

      li
        width: 30%
        padding: 30px
        background-color: $white
        border-radius: 10px
        margin-top: 30px
        +shadow

        @media #{$mobile}
          width: 90%

        > h2
          margin-top: 0
          color: $dirt

</style>

<script>
  export default {
    name: 'FEATURES'
  }
</script>
