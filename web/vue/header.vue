<template lang="pug">
  header
    button#burger(@click="displayMobileNav")
    ul.desktop
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

    ul.mobile(:class="{active: mobilenavstate}")
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

    #burger
      position: absolute
      top: 50%
      right: 15px
      transform: translate(-50%, -50%)
      background-color: transparent
      background-image: url("static/images/burger.svg")
      background-repeat: no-repeat
      background-size: contain
      width: 22px
      height: 22px
      outline: none
      border: 0
      padding: 0
      z-index: 2
      display: none

      @media #{$mobile}
        display: block

    .desktop
      li
        @media #{$mobile}
          display: none

    .mobile
      position: fixed
      top: 0
      left: 0
      bottom: 0
      right: 0
      background-color: rgba(0, 0, 0, 0.96)
      flex-flow: column wrap
      justify-content: center
      align-items: center
      align-content: center
      z-index: 1
      transform: translateX(100%)
      opacity: 0
      transition: all 500ms

      &.active
        transform: translateX(0)
        opacity: 1

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

        @media #{$mobile}
          display: block

      li
        padding: 20px 30px

</style>

<script>
  export default {
    name: 'HEADER',
    data () {
      return {
        mobilenavstate: false
      }
    },
    mounted () {
      setTimeout(() => {
        [...(document.body.querySelectorAll('a'))].filter(tag => tag.getAttribute('href')).filter(tag => tag.getAttribute('href').includes('#')).map(tag => {
          let offsettop = window[tag.getAttribute('href').substr(1)].offsetTop
          console.log(tag + ':' + offsettop)
          tag.addEventListener('click', event => {
            event.preventDefault()
            console.log(offsettop)
            window.scroll({ top: offsettop, left: 0, behavior: 'smooth' });

            if (this.mobilenavstate) {
              this.mobilenavstate = false
              document.body.style.overflow = ''
            }
          })
        })
      }, 0)
    },
    methods: {
      toHome () {
        window.location.href = '/'
      },
      displayMobileNav () {
        this.mobilenavstate = !this.mobilenavstate
        if (this.mobilenavstate) {
          document.body.style.overflow = 'hidden'
        } else {
          document.body.style.overflow = ''
        }
      }
    }
  }
</script>
