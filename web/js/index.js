import Vue from 'vue'

import app from '../components/app.vue'

window.MAIN = new Vue({
  name: 'MAIN',
  el: '#main',
  components: {
    app
  },
  mounted () {
    console.log('BOXES BOXES BOXES!')
  }
})
