<template lang="pug">
  section#price.last
    h1 price
    ul#pricelist
      li
        .category.free
          .name FREE
          .price 0
          .desc Everything you need to start off your personal website!
        ul
          li Lorem ipsum dolor sit amet
          li Lorem ipsum dolor sit amet asdfasdf
          li Lorem ipsum dolor sit amet asdfa asfas df
          li Lorem ipsum dolor sit amet asdf asdf asdf asdf
          li Lorem ipsum dolor sit amet asdfas fdas fsad fsd f
          li Lorem ipsum dolor sit amet asdfasd fads f
      li
        .category.premium
          .name PREMIUM
          .price 30
          .desc Per month billed annually.
        ul
          li Lorem ipsum dolor sit amet asf
          li Lorem ipsum dolor sit amet sdfff
          li Lorem ipsum dolor sit ameta s
          li Lorem ipsum dolor sit ametas
          li Lorem ipsum dolor sit amets adfsd
          li Lorem ipsum dolor sit amet asdf
</template>

<style lang="sass" scoped>
  @import '../sass/variables'
  @import '../sass/colors'

  #price
    #pricelist
      display: flex
      flex-flow: row wrap
      justify-content: space-around
      width: 80%
      +clearlist
      margin: 50px auto 0 auto

      .category
        text-align: left
        +clearfix

        .name
          color: $blue-200

        .price
          position: relative
          font-size: 4em
          text-align: left
          float: left
          text-align: left
          color: $blue-400

          &::before
            content: "$"
            font-size: 0.4em
            position: absolute
            top: 10px
            right: 100%

        .desc
          float: left
          padding: 10px
          font-weight: 300

        &.free
          .price
            width: 12%
          .desc
            width: 88%

        &.premium
          .price
            width: 26%
          .desc
            width: 74%

      > li
        width: 30%
        +clearfix

        ul
          list-style-type: none
          text-align: left

          li
            position: relative

            &::before
              content: "L"
              transform: rotateY(180deg) rotateZ(-45deg)
              position: absolute
              display: block
              top: 0
              right: 107%
              color: $blue-200

            & + li
              margin-top: 15px
</style>

<script>
  export default {
    name: 'PRICE'
  }
</script>
