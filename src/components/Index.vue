<template>
  <div class="index">
    <common-header></common-header>
    <index-body></index-body>
    <common-tail></common-tail>
  </div>
</template>

<script>
  import CommonHeader from './common/CommonHeader'
  import IndexBody from './index/IndexBody'
  import CommonTail from './common/CommonTail'


  export default {
    name: 'index',
    components: {CommonHeader, IndexBody, CommonTail},
    data () {
      return {
      }
    },

    methods: {
    },

    created() {
    },

    computed: {
    }
}
</script>

<style lang="scss" scoped>
</style>
