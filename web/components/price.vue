<template lang="pug">
  section#price.last
    h1 price
    ul
      li
        //- h3 BASIC
        .price-wrapper
          p 59.90
        ul
          li Lorem ipsum dolor sit amet
          li Lorem ipsum dolor sit amet
          li Lorem ipsum dolor sit amet
          li Lorem ipsum dolor sit amet
          li Lorem ipsum dolor sit amet
          li Lorem ipsum dolor sit amet
          li Lorem ipsum dolor sit amet
          li Lorem ipsum dolor sit amet
          li Lorem ipsum dolor sit amet
          li Lorem ipsum dolor sit amet
          li Lorem ipsum dolor sit amet
          li Lorem ipsum dolor sit amet
          li Lorem ipsum dolor sit amet
</template>

<style lang="sass" scoped>
  @import '../sass/variables'
  @import '../sass/colors'

  #price
    > ul
      display: flex
      flex-flow: row wrap
      justify-content: center
      align-contents: flex-start
      align-items: center
      +clearlist

      > li
        background-color: $white
        width: 40%
        min-width: 320px
        border-radius: 10px
        text-align: center
        padding-bottom: 20px
        overflow: hidden
        +shadow

        & + li
          margin-left: 30px

        > h3
          text-align: center

        .price-wrapper
          position: relative
          background-color: $darkorange
          margin-bottom: 20px

          p
            position: relative
            display: inline-block
            text-align: center
            font-size: 70px
            margin: 20px auto
            color: $white

            &::before
              content: '$'
              position: absolute
              display: block
              top: 0
              left: 0
              transform: translateX(-100%)
              font-size: 30px

        ul
          display: flex
          flex-flow: column wrap
          +clearlist

          li + li
            margin-top: 20px

          li
            position: relative
            padding-left: 30px
            margin: 0 auto
            text-align: left

            &::before
              content: ''
              background-image: url('../assets/images/box.svg')
              position: absolute
              display: block
              width: 20px
              height: 20px
              top: 0
              left: 0
              background-size: contain
              background-repeat: no-repeat
              background-position: center


</style>

<script>
  export default {
    name: 'PRICE'
  }
</script>
