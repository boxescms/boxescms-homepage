<template lang="pug">
  section#contact
    h1 Contact Us
    form#contactus-wrapper
      .row
        .col
          label Name:
          input(type="text", placeholder="Jeff Kapan*")
        .col
          label Email:
          input(type="text", placeholder="boxes@cms.com*")
        .col
          label Phone Number:
          input(type="text", placeholder="+60123456789")
      .row
        label Message:
        textarea(placeholder="Hi, my name is jeff... *")
</template>

<style lang="sass" scoped>
  @import '../sass/variables'
  @import '../sass/colors'

  #contact
    #contactus-wrapper
      width: 80%
      margin: 50px auto 0 auto

      @media #{$mobile}
        width: 100%

      .row
        width: 100%
        display: flex
        flex-flow: row wrap
        justify-content: space-between

        & + .row
          margin-top: 20px

        .col
          width: 30%

          @media #{$mobile}
            width: 100%

          & + .col
            margin-top: 30px

      input
        width: 100%

      textarea
        width: 100%
        resize: none
</style>

<script>
  export default {
    name: 'CONTACT'
  }
</script>
