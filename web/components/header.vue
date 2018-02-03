<template lang="pug">
  header(:class="{tiny: tinystate}")
    ul
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
    position: fixed
    top: 0
    left: 50%
    transform: translateX(-50%)
    width: 90%
    border-radius: 0 0 10px 10px
    background-color: $white
    z-index: 1
    overflow: hidden
    +shadow

    #logo
      position: absolute
      top: 6px
      left: 6px
      width: 60px
      height: 60px
      cursor: pointer
      transition: top 500ms, left 500ms, width 500ms, height 500ms

    ul
      position: relative
      display: flex
      flex-flow: row wrap
      justify-content: flex-end
      align-content: center
      align-items: center
      +clearlist

      li
        position: relative
        padding: 15px 20px 15px 20px
        font-size: 16px
        transition: padding 500ms, background-color 500ms
        text-align: center
        cursor: pointer

        @media #{$mobile}
          width: 25%
          font-size: 14px
          padding: 15px 10px

        a
          display: block
          color: $grey
          transition: color 500ms, opacity 500ms 100ms

        &:nth-child(1)
          a:hover
            color: $orange

        &:nth-child(2)
          a:hover
            color: $darkorange

        &:nth-child(3)
          a:hover
            color: $shore

        &:nth-child(4)
          a:hover
            color: $ocean

    &.tiny
      #logo
        top: 3px
        left: 3px
        width: 30px
        height: 30px

      ul
        li
          cursor: pointer
          padding: 0px 20px
          height: 10px

          @media #{$mobile}
            padding: 8px 20px

          &:nth-child(1)
            background-color: rgba(255, 170, 0, 0.7)

          &:nth-child(2)
            background-color: rgba(255, 143, 0, 0.7)

          &:nth-child(3)
            background-color: rgba(51, 81, 143, 0.7)

          &:nth-child(4)
            background-color: rgba(29, 41, 68, 0.7)

          &:hover
            opacity: 1

            &:nth-child(1)
              background-color: rgba(255, 170, 0, 1)

            &:nth-child(2)
              background-color: rgba(255, 143, 0, 1)

            &:nth-child(3)
              background-color: rgba(51, 81, 143, 1)

            &:nth-child(4)
              background-color: rgba(29, 41, 68, 1)

          a
            color: $white
            opacity: 0
            transition: color 500ms, opacity 300ms

            &:hover
              color: $white

  @keyframes boxin
    0%
      transform: translate(-50%, 0px)
    30%
      transform: translate(-50%, 0px)
    65%
      transform: translate(-50%, -6px)
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
