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
          input(type="text", placeholder="+60 123456789")
      .row
        label Your Message:
        textarea(placeholder="Hi, my name is jeff... *")
</template>

<style lang="sass" scoped>
  @import '../sass/variables'
  @import '../sass/colors'

  #contact
    #contactus-wrapper
      width: 80%
      margin: 50px auto 0 auto

      .row
        width: 100%
        display: flex
        flex-flow: row wrap
        justify-content: space-between

        & + .row
          margin-top: 20px

        .col
          width: 30%

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
