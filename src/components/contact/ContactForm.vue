<template>
  <div class="c-f-wrapper">
    <form v-model="contactForm" ref="contactForm">
      <input type="text" style="" class="b-c-input" v-model.trim="contactForm.name" placeholder="Name*">
      <input type="text" style="" class="b-c-input" v-model.trim="contactForm.email" placeholder="Email*">
      <input type="text" style="" class="b-c-input" v-model="contactForm.occupation" placeholder="Occupation">
      <div style="position: relative; width: 100%; margin: 0 auto;">
        <textarea style="margin-bottom: 8px; min-height: 200px; resize: none;" :style="autoStyle" class="b-c-input" v-model="contactForm.comment" :placeholder="textAreaPlaceholder"></textarea>
        <div class="form-btn add-btn" v-show="addBtnShow" @click="addBtnClick"></div>
        <div class="form-btn minus-btn" v-show="minusBtnShow" @click="minusBtnClick"></div>
        <div class="form-bottom-line" v-show="bottomLineShow">
          <p style="margin: 0 8px 0 12px;" :class="{'highlight-btn': imageHighlight}" @click="highlightImage">IMAGE</p>
          <p style="margin: 0; color: #ccc;">|</p>
          <p style="margin: 0 0 0 8px;" :class="{'highlight-btn': videoHighlight}" @click="highlightVideo">VIDEO</p>
        </div>
        <div class="gallary" :style="gallaryAutoStyle">
          <div v-for="(img, index) in contactForm.imagesLocation" :key="index" style="display: inline-block; position: relative;">
            <img :src="contactForm.images[index]">
            <div class="g-close" @click="onRemoveImage(index)"></div>
          </div>
          <el-upload
            action="http://m.typany.com/api/revpic.php"
            :on-success="onUploadSucc"
            :before-upload="beforeUpload"
            class="image-upload"
            :show-file-list="showFileList"
            v-show="addImgBtnShow"
            :style="autoStyleUpload">
            <img src="/static/img/contact/add-img.png" class="icon">
          </el-upload>
        </div>
        <div class="video-form" v-show="videoFormShow">
          <p style="display: inline-block;">Add links from</p>
          <img src="/static/img/contact/youtube.png" style="width: 20px; float: right;">
          <input placeholder="URL:" @input="onGetVideoInfo" v-model="url" style="color: #000;">
        </div>
        <div class="loading" v-show="loadingShow"></div>
        <div class="video-info" v-show="videoInfoShow" :style="videoInfoAutoStyle">
          <div v-show="videoTitle" style="height: 100%;">
            <img :src="videoSrc">
            <p style="height: 100%; overflow: hidden;">{{videoTitle}}</p>
          </div>
          <div v-show="!videoTitle" style="height: 100%; text-align: left; overflow: hidden; padding: 2px;">
            <a :href="contactForm.video" target="blank">{{contactForm.video}}</a>
          </div>
          <div class="v-close" @click="videoClose"></div>
        </div>
      </div>
      <p style="margin: 0; text-align: left; color: #bcbcbc; font-size: 14px;">Maximum upload file size: 2 MB.</p>
      <div style="position: relative; overflow: hidden;">
        <div class="form-submit-btn" @click="onSubmit" :style="autoStyleSubmitBtn"></div>
      </div>
    </form>

    <el-dialog
      title=""
      ref="succDialog"
      :visible.sync="dialogSubmitSucc"
      customClass="dialog-submit-succ">
      <div class="d-s-back">
        <img src="/static/img/contact/contact-succ.png" style="margin-top: 40px;">
        <p>Your Feedback is Highly</p>
        <p>Appreciated!</p>
        <div class="c-i-f-close" @click="onSuccDialogClose"></div>
      </div>
    </el-dialog>

    <el-dialog
      title=""
      ref="dropDialog"
      :visible.sync="dialogDrop"
      customClass="dialog-drop">
      <div class="d-d-back">
        <img src="/static/img/contact/drop-question.png" style="margin-top: 40px;">
        <p>Drop upload video</p>
        <div class="d-d-btn d-d-btn-yes" @click="onDropYes" style="color: #fff;">YES</div>
        <div class="d-d-btn d-d-btn-no" @click="onDropClose" style="color: #000;">NO</div>
        <div class="c-i-f-close" @click="onDropClose"></div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import {createGetParams, paramArrayToString} from '../../utils/param'
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
        showFileList: false,
        loadingShow: false,
        url: '',
        addBtnShow: true,
        minusBtnShow: false,
        dialogSubmitSucc: false,
        dialogDrop: false,
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
      onUploadSucc(response) {
        if (response.code) {
          this.$message.error(response.msg)
          return
        }
        this.contactForm.imagesLocation.push(response.data)
      },
      beforeUpload(file) {
        const isValidType = ['image/jpeg', 'image/jpg', 'image/png'].indexOf(file.type) !== -1
        const isLT2M = file.size / 1024 / 1024 < 2

        let reader = new FileReader()
        reader.onload = (e) => {
          if (!isValidType || !isLT2M)
            return
          this.contactForm.images.push(e.target.result)
        }
        reader.readAsDataURL(file)

        if (!isValidType)
          this.$message.error('Only JPG and PNG image supported')
        else if (!isLT2M)
          this.$message.error('Image size must less than 2MB')
        return isValidType && isLT2M
      },
      onGetVideoInfo() {
        if (!this.url)
          return

        this.loadingShow = true
        const data = {url: this.url}
        this.$store.dispatch('CONTACT_GetYoutubeVideoInfo', createGetParams(data)).then((data) => {
          this.loadingShow = false
          this.contactForm.video = this.url
          if (data.code) {
            this.$message.error('error: ' + data.msg)
            return
          }
        }).catch(err => {
          this.$message.error(err)
        })
      },
      addBtnClick() {
        this.addBtnShow = false
        this.minusBtnShow = true
      },
      minusBtnClick() {
        this.addBtnShow = true
        this.minusBtnShow = false
      },
      onSubmit() {
        if (!this.contactForm.name || !this.contactForm.email)
          return

        const data = {
          name: this.contactForm.name,
          email: this.contactForm.email,
          res: this.contactForm.comment,
          pics: paramArrayToString(this.contactForm.imagesLocation),
          video: this.contactForm.video,
        }
        this.$store.dispatch('CONTACT_Contact', createGetParams(data)).then((data) => {
          if (data.code) {
            this.$message.error('error: ' + data.msg)
            return
          }
          console.log(data)
          this.$store.dispatch('CONTACT_ClearYoutubeVideoInfo').then(() => {
            this.dialogSubmitSucc = true
            this.refreshContactForm()
          })
        })
      },

      /*
       * 产品要求提交后保留 name 和 email 字段
       */
      refreshContactForm() {
        this.contactForm = {
          name: this.contactForm.name,
          email: this.contactForm.email,
          occupation: '',
          comment: '',
          images: [],
          imagesLocation: [],
          video: '',
        }
        this.url = ''
      },

      onSuccDialogClose() {
        this.dialogSubmitSucc = false
      },
      onDropClose() {
        this.dialogDrop = false
      },
      onDropYes() {
        this.$store.dispatch('CONTACT_ClearYoutubeVideoInfo').then(() => {
          this.dialogDrop = false
          this.url = ''
          this.contactForm.video = ''
        })
      },
      videoClose() {
        this.dialogDrop = true
      },
      onRemoveImage(index) {
        this.contactForm.images.splice(index, 1)
        this.contactForm.imagesLocation.splice(index, 1)
      },
      handleScroll(e) {
        if (this.dialogSubmitSucc || this.dialogDrop) {
          e.preventDefault()
          e.returnValue = false
        }
      },
    },

    created() {
      window.addEventListener('touchmove', this.handleScroll)
    },

    destroyed() {
      window.removeEventListener('touchmove', this.handleScroll)
    },

    computed: {
      ...mapGetters([
        'youtubeVideoInfo',
      ]),
      textAreaPlaceholder() {
        if (this.contactForm.images.length > 0 || this.youtubeVideoInfo.title)
          return ''
        return 'Tell us about your story and interests'
      },
      autoStyle() {
        let style = {}
        let height = 215
        if (this.contactForm.images.length > 0)
          height += 80
        if (this.contactForm.images.length >= 3)
          height += 80
        if (this.videoInfoShow)
          height += 100
        
        let paddingTop = 5
        let paddingBottom = 10
        if (this.minusBtnShow) {
            paddingBottom += 160
        } else {
          if (this.contactForm.images.length > 0 && this.contactForm.images.length <= 3)
            paddingBottom += 80
          else if (this.contactForm.images.length > 3)
            paddingBottom += 160
        }

        if (this.youtubeVideoInfo.title)
          paddingBottom += 110

        style['padding-top'] = paddingTop + 'px'
        style['padding-bottom'] = paddingBottom + 'px'
        style['height'] = height + 'px'
        return style
      },

      gallaryAutoStyle() {
        let style = {}
        let bottom = 65
        if (this.videoHighlight)
          bottom += 85
        if (this.videoInfoShow)
          bottom += 100
        style['bottom'] = bottom + 'px'
        return style
      },

      videoInfoAutoStyle() {
        let style = {}
        let bottom = 140
        if (!this.videoHighlight)
          bottom = 70
        style['bottom'] = bottom + 'px'
        return style
      },

      addImgBtnShow() {
        return (this.contactForm.imagesLocation.length < 6 && this.imageHighlight && this.minusBtnShow)
      },

      videoFormShow() {
        return this.minusBtnShow && this.videoHighlight
      },

      videoInfoShow() {
        return this.youtubeVideoInfo.title || this.contactForm.video
      },
      videoSrc() {
        return this.youtubeVideoInfo.title ? this.youtubeVideoInfo.thumbnails.default.url : ''
      },
      videoTitle() {
        return this.youtubeVideoInfo.title ? this.youtubeVideoInfo.title : ''
      },
      bottomLineShow() {
        return this.minusBtnShow
      },
      autoStyleSubmitBtn() {
        if (!this.contactForm.name || !this.contactForm.email)
          return {background: 'url(/static/img/contact/submit-gray.png) no-repeat', 'background-size': '100% 100%'}
        return {}
      },

      autoStyleUpload() {
        return this.contactForm.images.length >= 4 ? {left: '-4px'} : {}
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
      color: #000;
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
      z-index: 1;
    }

    .add-btn {
      background: url(/static/img/contact/add-btn.png) no-repeat;
      background-size: 100% 100%;
    }

    .minus-btn {
      background: url(/static/img/contact/minus-btn.png) no-repeat;
      background-size: 100% 100%;
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
      left: 14px;
      text-align: left;
      img {
        width: 60px;
        height: 60px;
        margin-right: 10px;
      }

      .image-upload {
        display: inline-block;
        position: relative;
      }

      .g-close {
        position: absolute;
        background: url(/static/img/contact/close.png) no-repeat;
        background-size: 100% 100%;
        width: 18px;
        height: 18px;
        top: -9px;
        right: 0px;
      }
    }

    .video-form {
      width: 90%;
      position: absolute;
      bottom: 70px;
      text-align: left;
      padding: 0 10px;

      p {
        margin: 0;
        font-size: 18px;
        color: #bcbcbc;
      }

      input {
        width: 100%;
        border: 1px solid #ccc;
        height: 30px;
        font-size: 16px;
        color: #bcbcbc;
        padding: 0 6px;
        ::placeholder {
          color: #bcbcbc;
        }
      }
    }

    .loading {
      position: absolute;
      bottom: 120px;
      left: 0px;
      width: 60px;
      height: 60px;
      background: url(/static/img/contact/loading.gif) no-repeat;
      background-size: 100% 100%;
    }

    .video-info {
      position: absolute;
      left: 10px;
      right: 10px;
      height: 90px;
      border: 1px solid #eee;
      padding-right: 8px;

      img {
        vertical-align: top;
        width: 48%;
        height: 100%;
      }

      p {
        margin: 0;
        display: inline-block;
        width: calc(50% - 8px);
        height: 100%;
        text-align: left;
        overflow: hidden;
      }

      .v-close {
        width: 16px;
        height: 16px;
        background: url(/static/img/contact/close-pop.png) no-repeat;
        background-size: 100% 100%;
        top: -8px;
        position: absolute;
        right: -8px;
        &:active {
          background: url(/static/img/contact/close-pop-active.png);
          background-size: 100% 100%;
        }
      }
    }
    .form-submit-btn {
      width: 120px;
      height: 40px;
      background: url(/static/img/contact/submit.png) no-repeat;
      background-size: 200%;
      margin-bottom: 20px;
      float: right;

      &:active {
        background-position: -120px 0;
        background-size: 200%;
      }
    }

    .d-s-back {
      width: 100%;
      height: 100%;
      background: url(/static/img/contact/contact-succ-back.png) no-repeat;
      p {
        font-size: 16px;
        font-family: Helvetica;
        color: #fff;
      }
    }

    .c-i-f-close {
      position: absolute;
      top: 5px;
      right: 5px;
      width: 16px;
      height: 16px;
      background: url(/static/img/contact/drop-close.png) no-repeat;
      background-size: 100% 100%;
      &:active {
        background: url(/static/img/contact/drop-close-active.png);
        background-size: 100% 100%;
      }
    }

    .d-d-back {
      width: 100%;
      height: 100%;
      background: url(/static/img/contact/drop-back.png) no-repeat;
      background-size: 100% 100%;
      p {
        font-size: 16px;
        font-family: Helvetica;
        color: #fff;
      }
      .d-d-btn {
        width: 87px;
        height: 40px;
        line-height: 40px;
        cursor: pointer;
        display: inline-block;
        margin-top: 25px;
        border-radius: 4px;
      }
      .d-d-btn-yes {
        margin-right: 24px;
        background: #1ba1fc;
        &:active {
          background: #168bdc;
        }
      }
      .d-d-btn-no {
        background: #efefef;
        &:active {
          background: #e2e2e2;
        }
      }
    }
  }
</style>
