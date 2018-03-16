<template lang="pug">
  section#price
    h1 Pricing
    ul#pricelist
      li
        .category
          p.name FREE
          .details
            p.price 0
            p.desc Everything you need to start off your personal website!
        ul
          li Lorem ipsum dolor sit amet
          li Lorem ipsum dolor sit amet asdfasdf
          li Lorem ipsum dolor sit amet asdfa asfas df
          li Lorem ipsum dolor sit amet asdf asdf asdf asdf
          li Lorem ipsum dolor sit amet asdfas fdas fsad fsd f
          li Lorem ipsum dolor sit amet asdfasd fads f
      li
        .category.premium
          p.name PREMIUM
          .details
            p.price 30
            p.desc Per month#[br]billed annually.
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
      margin: 0 auto

      @media #{$mobile}
        width: 100%

      > li
        width: 35%

        @media #{$mobile}
          width: 100%

        & + li
          @media #{$mobile}
            margin-top: 50px

        .category
          text-align: left

          p
            margin: 0

          .details
            display: flex
            flex-flow: row nowrap
            justify-content: flex-start
            align-items: top

          .name
            width: 100%
            color: $blue-200

          .price
            position: relative
            display: inline-block
            font-size: 6em
            text-align: left
            color: $blue-400

            @media #{$mobile}
              margin-left: 20px

            &::before
              content: "$"
              font-size: 0.4em
              position: absolute
              top: 10px
              right: 100%

          .desc
            display: inline-block
            padding: 10px
            font-weight: 300


        ul
          list-style-type: none
          text-align: left
          margin-top: 20px

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
