<template>
  <div class="b-wrapper">
    <page-innovation></page-innovation>
    <page-personalization></page-personalization>
    <page-expression></page-expression>
    <PageAI></PageAI>
    <PageAppStore></PageAppStore>
  </div>
</template>

<script>
  import PageInnovation from './PageInnovation'
  import PagePersonalization from './PagePersonalization'
  import PageExpression from './PageExpression'
  import PageAI from './PageAI'
  import PageAppStore from './PageAppStore'

  export default {
    name: 'ios-body',
    components: {PageInnovation, PagePersonalization, PageExpression, PageAI, PageAppStore},
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
