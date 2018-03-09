<template lang="pug">
  footer
    p Maintained by the #[a(href="https://github.com/orgs/boxescms/people", target="_blank") team]

    .organisations
      a(href="https://github.com/boxescms/boxescms", target="_blank")
        img(src="assets/images/github-logo.svg")

</template>

<style lang="sass" scoped>
  @import '../sass/variables'
  @import '../sass/colors'

  footer
    position: relative
    width: 100%
    padding: 30px
    text-align: center
    background-color: $grey

    .organisations
      margin-top: 20px

      a + a
        margin-left: 10px

      img
        width: 30px
        display: inline-block

</style>

<script>
  export default {
    name: 'FOOTER'
  }
</script>
