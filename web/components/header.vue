<template lang="pug">
  header(:class="{tiny: tinystate}")
    ul
      li#logo(@click="toHome")
        | BOXES
      //- li
      //-   a(href="#installation") INSTALLATION
      li
        a(href="#features") FEATURES
      li
        a(href="#price") PRICE
      li
        a(href="#contact") CONTACT
      li
        a(href="#support") SUPPORT

</template>

<style lang="sass" scoped>
  @import '../sass/variables'
  @import '../sass/colors'

  header
    position: relative
    width: 100%
    margin: 0 auto
    z-index: 2
    overflow: hidden
    color: $white-50
    background-color: $blue-500

    ul
      display: flex
      flex-flow: row wrap
      justify-content: flex-end
      +clearlist

      #logo
        margin-right: auto
        padding-left: 50px
        background-image: url("static/images/boxes-tiny.svg")
        background-position: 25px
        background-size: 20px 20px
        background-repeat: no-repeat
        cursor: pointer

      li
        padding: 20px 30px

</style>

<script>
  export default {
    name: 'HEADER',
    data () {
      return {
        tinystate: false
      }
    },
    mounted () {
      [...(document.body.querySelectorAll('a'))].filter(tag => tag.getAttribute('href')).filter(tag => tag.getAttribute('href').includes('#')).map(tag => {
        let offsettop = window[tag.getAttribute('href').substr(1)].offsetTop
        tag.parentElement.addEventListener('click', event => {
          if (document.querySelector('header.tiny')) {
            event.preventDefault()
            window.scroll({ top: offsettop, left: 0, behavior: 'smooth' });
          }
        })

        tag.addEventListener('click', event => {
          event.preventDefault()
          window.scroll({ top: offsettop, left: 0, behavior: 'smooth' });
        })
      })

      document.addEventListener('scroll', () => {
        if (window.pageYOffset > 68) {
          this.tinystate = true
        } else {
          this.tinystate = false
        }
      })
    },
    methods: {
      toHome () {
        window.location.href = '/'
      }
    }
  }
</script>
