<template>
  <div style="width: 100%; background: #290043; position: relative;">
    <el-row class="i-t-wrapper" type="flex" justify="space-around">
      <div><a href="#" class="i-t-anchor" style="opacity: 0.2;">Privacy Policy</a></div>
      <div><a href="#" class="i-t-anchor" style="opacity: 0.2;">©2017 sogou-inc</a></div>
      <div><a href="#" class="i-t-anchor" style="opacity: 0.2;">Terms of Service</a></div>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'common-tail',
  props: {
  },
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
  .i-t-wrapper {
    height: 94px;
    line-height: 94px;
    margin: 0 auto;


    .i-t-anchor {
      font-family: 'Avenir Book';
      font-size: 14px;
      color: #fff;
      text-decoration: none;
    }
  }
</style>
