<template>
  <div class="b-wrapper">
    <PageAI></PageAI>
    <page-expression></page-expression>
    <page-personalization></page-personalization>
    <page-efficiency></page-efficiency>
    <page-google-play></page-google-play>
  </div>
</template>

<script>
  import PageAI from './PageAI'
  import PageExpression from './PageExpression'
  import PagePersonalization from './PagePersonalization'
  import PageEfficiency from './PageEfficiency'
  import PageGooglePlay from './PageGooglePlay'

  export default {
    name: 'android-body',
    components: {PageAI, PageExpression, PagePersonalization, PageEfficiency, PageGooglePlay},
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
  .b-wrapper {
    width: 100%;
  }
</style>
