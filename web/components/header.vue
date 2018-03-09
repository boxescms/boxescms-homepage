<template lang="pug">
  header(:class="{tiny: tinystate}")
    ul
      li#logo
        | BOXES
      li
        a(href="#intro") INTRO
      li
        a(href="#about") ABOUT
      li
        a(href="#features") FEATURES
      li
        a(href="#price") PRICE

    //- svg#logo(viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve")
      use(xlink:href="#box-svg")

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
    }
  }
</script>
