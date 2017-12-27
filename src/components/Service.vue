<template>
  <div class="index">
    <common-header></common-header>
    <service-body></service-body>
    <common-sidebar></common-sidebar>
    <common-tail></common-tail>
  </div>
</template>

<script>
  import CommonHeader from './common/CommonHeader'
  import ServiceBody from './service/ServiceBody'
  import CommonTail from './common/CommonTail'
  import CommonSidebar from './common/CommonSidebar'


  export default {
    name: 'service',
    components: {CommonHeader, ServiceBody, CommonTail, CommonSidebar},
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
