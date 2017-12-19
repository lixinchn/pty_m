<template>
  <div class="index">
    <common-header></common-header>
    <contact-body></contact-body>
    <common-tail></common-tail>
  </div>
</template>

<script>
  import CommonHeader from './common/CommonHeader'
  import ContactBody from './contact/ContactBody'
  import CommonTail from './common/CommonTail'


  export default {
    name: 'contact',
    components: {CommonHeader, ContactBody, CommonTail},
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
