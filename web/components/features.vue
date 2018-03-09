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
</template>

<style lang="sass" scoped>
  @import '../sass/variables'
  @import '../sass/colors'

  #features
    ul
      display: flex
      flex-flow: row wrap
      justify-content: flex-start
      width: 80%
      +clearlist
      margin: 0 auto

      li
        width: 33.33%
        padding: 0 30px
        text-align: center

</style>

<script>
  export default {
    name: 'FEATURES'
  }
</script>
