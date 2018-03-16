<template lang="pug">
  section#support
    h1 Support Our Development
    p If you'd like to show your support, you can make a donation to show your love.

    ul
      li
        img.logo(src="static/images/wallets/btc.svg")
        img.qr(src="static/images/wallets/btc-1P7rCaFPgaDnhviBNAtbGkrhYpAzdo9sfR.png")
        p 1P7rCaFPgaDnhviBNAtbGkrhYpAzdo9sfR
      li
        img.logo(src="static/images/wallets/eth.svg")
        img.qr(src="static/images/wallets/eth-0xe1e2b7012b1c709024a04be705f8967d5a4f433f.png")
        p 0xe1e2b7012b1c709024a04be705f8967d5a4f433f
      li
        img.logo(src="static/images/wallets/ltc.svg")
        img.qr(src="static/images/wallets/ltc-LMQNkZ8opqcJMiQBD9iSUeLRjegmL39jn7.png")
        p LMQNkZ8opqcJMiQBD9iSUeLRjegmL39jn7

</template>

<style lang="sass" scoped>
  @import '../sass/variables'
  @import '../sass/colors'

  #support
    text-align: center

    ul
      list-style-type: none
      margin: 50px auto 0 auto
      padding: 0
      display: flex
      flex-flow: row wrap
      justify-content: space-around

      li
        width: 23%

        @media #{$mobile}
          width: 90%

        & + li
          margin-top: 20px

        img
          display: block

          &.logo
            margin: 0 auto
            width: 40px

          &.qr
            width: 120px
            margin: 20px auto 0 auto

        p
          font-size: 0.8em
          margin-top: 20px
          word-break: break-all

</style>

<script>
  export default {
    name: 'SUPPORT'
  }
</script>
