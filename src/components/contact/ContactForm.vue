<template>
  <div class="c-f-wrapper">
    <form v-model="contactForm" ref="contactForm">
      <input type="text" style="" class="b-c-input" v-model.trim="contactForm.name" placeholder="Name">
      <input type="text" style="" class="b-c-input" v-model.trim="contactForm.email" placeholder="Email">
      <input type="text" style="" class="b-c-input" v-model="contactForm.occupation" placeholder="Occupation">
      <div style="position: relative; width: 100%; margin: 0 auto;">
        <textarea style="margin-bottom: 8px; min-height: 200px; resize: none;" :style="autoStyle" class="b-c-input" v-model="contactForm.comment" :placeholder="textAreaPlaceholder"></textarea>
        <div class="form-btn add-btn"></div>
        <div class="form-btn minus-btn"></div>
        <div class="form-bottom-line">
          <p style="margin: 0 8px 0 12px;" :class="{'highlight-btn': imageHighlight}" @click="highlightImage">IMAGE</p>
          <p style="margin: 0; color: #ccc;">|</p>
          <p style="margin: 0 0 0 8px;" :class="{'highlight-btn': videoHighlight}" @click="highlightVideo">VIDEO</p>
        </div>
      </div>
    </form>
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
        contactForm: {
          name: '',
          email: '',
          occupation: '',
          comment: '',
          images: [],
          imagesLocation: [],
          video: '',
        },

        textareaVideoInfo: {},
        imageHighlight: true,
        videoHighlight: false,
      }
    },

    methods: {
      highlightImage() {
        this.imageHighlight = true
        this.videoHighlight = false
      },
      highlightVideo() {
        this.imageHighlight = false
        this.videoHighlight = true
      }
    },

    created() {
    },

    computed: {
      textAreaPlaceholder() {
        if (this.contactForm.images.length > 0 || this.textareaVideoInfo.title)
          return ''
        return 'Tell us about your story and interests'
      },
      autoStyle() {
        let style = {}
        style.height = (this.contactForm.images.length > 0 && this.textareaVideoInfo.title) ? '415px' : '215px'
        
        let paddingTop = 5
        if (this.contactForm.images.length > 0 && this.contactForm.images.length <= 3)
          paddingTop += 80
        else if (this.contactForm.images.length > 3)
          paddingTop += 160

        if (this.textareaVideoInfo.title)
          paddingTop += 110
        style['padding-top'] = paddingTop + 'px'
        return style
      },
    },
    watch: {
    }
  }
</script>

<style lang="scss" scoped>
  .c-f-wrapper {
    width: 90%;
    margin: 0 auto;

    .b-c-input {
      border: 1px solid #ccc;
      border-radius: 2px;
      width: calc(100% - 12px);
      height: 32px;
      font-size: 16px;
      padding: 0 5px;
      margin-bottom: 20px;
      font-family: Helvetica;
      color: #bcbcbc;
      &::placeholder {
        color: #bcbcbc;
      }
    }

    .form-btn {
      width: 32px;
      height: 32px;
      position: absolute;
      right: 12px;
      bottom: 22px;
    }

    .add-btn {
      background: url(/static/img/contact/add-btn.png) no-repeat;
      background-size: 100% 100%;
    }

    .minus-btn {
      background: url(/static/img/contact/minus-btn.png) no-repeat;
      background-size: 100% 100%;
      z-index: 1;
    }

    .form-bottom-line {
      position: absolute;
      bottom: 15px;
      left: 1px;
      height: 46px;
      line-height: 46px;
      width: calc(100% - 2px);
      background: #f7f7f7;
      text-align: left;

      * {
        display: inline-block;
        font-size: 22px;
        font-family: MyriadPro;
        color: #454545;
      }

      .highlight-btn {
        color: #1ba2fc;
      }
    }
  }
</style>
