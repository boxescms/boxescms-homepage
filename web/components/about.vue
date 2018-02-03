<template lang="pug">
  section#about
    .left-prop
    .right-prop
    h1 about
    p Lorem ipsum dolor sit amet, consectetur adipisicing elit.#[br]Aliquid reiciendis consectetur nostrum reprehenderit, quam nihil hic,#[br]dignissimos cumque dolore facilis impedit.#[br]Libero, inventore illo mollitia odio aut eaque quod sint!
</template>

<style lang="sass" scoped>
  @import '../sass/variables'
  @import '../sass/colors'

  #about
    text-align: center

    @media #{$mobile}
      margin-top: 180px
      margin-bottom: 0px
      padding-top: 70px
      padding-bottom: 250px

    .left-prop
      overflow-x: hidden
      position: absolute
      bottom: -15%
      left: -60px
      height: 360px
      width: 318px
      background-image: url('../assets/images/box-nospace.svg'), url('../assets/images/box-nospace.svg'), url('../assets/images/box-nospace.svg'), url('../assets/images/box-nospace.svg'), url('../assets/images/box-nospace.svg'), url('../assets/images/box-nospace.svg'), url('../assets/images/box-nospace.svg'), url('../assets/images/box-nospace.svg'), url('../assets/images/box-nospace.svg'), url('../assets/images/box-nospace.svg'), url('../assets/images/box-nospace.svg'), url('../assets/images/box-nospace.svg'), url('../assets/images/box-nospace.svg'), url('../assets/images/box-nospace.svg'), url('../assets/images/box-nospace.svg')
      background-repeat: no-repeat
      background-position: 0px 0px, 52px 30px, 104px 60px ,156px 90px, 208px 120px, 0px 59px, 52px 89px, 104px 119px ,156px 149px, 0px 118px, 52px 148px, 104px 178px, 0px 177px, 52px 207px, 0px 236px
      background-size: 110px

    .right-prop
      overflow-x: hidden
      position: absolute
      top: -35%
      right: -60px
      height: 360px
      width: 318px
      background-image: url('../assets/images/box-nospace.svg'), url('../assets/images/box-nospace.svg'), url('../assets/images/box-nospace.svg'), url('../assets/images/box-nospace.svg'), url('../assets/images/box-nospace.svg'), url('../assets/images/box-nospace.svg'), url('../assets/images/box-nospace.svg'), url('../assets/images/box-nospace.svg'), url('../assets/images/box-nospace.svg'), url('../assets/images/box-nospace.svg'), url('../assets/images/box-nospace.svg'), url('../assets/images/box-nospace.svg'), url('../assets/images/box-nospace.svg'), url('../assets/images/box-nospace.svg'), url('../assets/images/box-nospace.svg')
      background-repeat: no-repeat
      background-position: 0px 0px, 52px 30px, 104px 60px ,156px 90px, 208px 120px, 0px 59px, 52px 89px, 104px 119px ,156px 149px, 0px 118px, 52px 148px, 104px 178px, 0px 177px, 52px 207px, 0px 236px
      background-size: 110px
      transform: rotateY(180deg)

    p
      font-size: 24px
</style>

<script>
  export default {
    name: 'ABOUT'
  }
</script>
