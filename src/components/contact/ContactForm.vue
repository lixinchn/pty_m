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
        <div class="gallary">
          <div v-for="(img, index) in imgUploadList" :key="index" style="display: inline-block;">
            <img :src="imageDataUrlList[index]">
            <div class="g-close"></div>
          </div>
          <el-upload
            action="http://typany.com/api/revpic.php"
            :on-success="onUploadSucc"
            :before-upload="beforeUpload"
            class="image-upload"
            :show-file-list="showFileList"
            v-show="addBtnShow">
            <img src="/static/img/contact/add-img.png" class="icon">
          </el-upload>
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
        imgUploadList: [],
        imageDataUrlList: [],
        showFileList: false,
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
      },
      onUpload(e) {
        if (!this.beforeUpload(e.target.files[0]))
          return false
        return true
      },
      onUploadSucc(response) {
        if (response.code) {
          this.$message.error(response.msg)
          return
        }
        this.imgUploadList.push(response.data)
      },
      beforeUpload(file) {
        const isValidType = ['image/jpeg', 'image/jpg', 'image/png'].indexOf(file.type) !== -1
        const isLT5M = file.size / 1024 / 1024 < 5

        let reader = new FileReader()
        reader.onload = (e) => {
          if (!isValidType || !isLT5M)
            return
          this.imageDataUrlList.push(e.target.result)
        }
        reader.readAsDataURL(file)

        if (!isValidType)
          this.$message.error('Only JPG and PNG image supported')
        else if (!isLT5M)
          this.$message.error('Image size must less than 5MB')
        return isValidType && isLT5M
      },
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

      addBtnShow() {
        return (this.imgUploadList.length < 6 && this.imageHighlight)
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
        font-family: 'MyriadPro Regular';
        color: #454545;
      }

      .highlight-btn {
        color: #1ba2fc;
      }
    }

    .gallary {
      max-width: 90%;
      width: 240px;
      position: absolute;
      bottom: 66px;
      left: 14px;
      text-align: left;
      img {
        width: 60px;
        height: 60px;
        margin-right: 10px;
      }

      .image-upload {
        display: inline-block;
      }
    }
  }
</style>
