<template>
  <div class="index">
    <common-header></common-header>
    <contact-body></contact-body>
    <common-tail></common-tail>
    <common-sidebar></common-sidebar>
  </div>
</template>

<script>
  import CommonHeader from './common/CommonHeader'
  import ContactBody from './contact/ContactBody'
  import CommonTail from './common/CommonTail'
  import CommonSidebar from './common/CommonSidebar'


  export default {
    name: 'contact',
    components: {CommonHeader, ContactBody, CommonTail, CommonSidebar},
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
