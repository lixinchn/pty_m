<template>
  <div class="index">
    <common-header></common-header>
    <policy-body></policy-body>
    <common-sidebar></common-sidebar>
    <common-tail></common-tail>
  </div>
</template>

<script>
  import CommonHeader from './common/CommonHeader'
  import PolicyBody from './policy/PolicyBody'
  import CommonTail from './common/CommonTail'
  import CommonSidebar from './common/CommonSidebar'


  export default {
    name: 'policy',
    components: {CommonHeader, PolicyBody, CommonTail, CommonSidebar},
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
