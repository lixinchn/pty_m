<template>
  <div class="c-f-wrapper">
    
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: 'contact-form',
    components: {},
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
      ...mapGetters({
        onCloseVideoForm: 'closeVideoForm',
        onCloseImageForm: 'closeImageForm',
      }),
      ...mapGetters([
        'textareaVideoInfo',
      ]),
    },
    watch: {
      onCloseVideoForm() {
        this.videoFormManualClose = true
        this.$refs.popvideo.doClose()
      },
      onCloseImageForm() {
        this.imageFormManualClose = true
        this.$refs.popimage.doClose()
      }
    }
  }
</script>

<style lang="scss" scoped>
  .c-f-wrapper {
    
  }
</style>
