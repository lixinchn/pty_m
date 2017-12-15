<template>
  <div style="width: 100%; height: 236px; background: #290043; position: relative;">
    <a href="http://typany.com/api/go.php?id=2" class="bottom-btn"></a>
    <div style="position: absolute; bottom: 0px; z-index: 100; left: 12px; right: 12px;">
      <div style="background: #fff; opacity: 0.1; width: 100%; height: 3px; "></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageAppStore',
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
  .bottom-btn {
    width: 290px;
    height: 94px;
    background: url(/static/img/ios/app-store.png) no-repeat;
    background-size: 100% 100%;
    display: block;
    position: absolute; left: 0; top: 0; right: 0; bottom: 0;
    margin: auto;

    &:active {
      background: url(/static/img/ios/app-store-active.png) no-repeat;
      background-size: 100% 100%;
    }
  }
</style>
