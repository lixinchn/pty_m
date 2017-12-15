<template>
  <div class="b-wrapper">
    <PageAI></PageAI>
    <page-expression></page-expression>
  </div>
</template>

<script>
  import PageAI from './PageAI'
  import PageExpression from './PageExpression'

  export default {
    name: 'android-body',
    components: {PageAI, PageExpression},
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
