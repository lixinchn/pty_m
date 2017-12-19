<template>
  <div class="contact-wrapper">
    <div class="split"></div>
    <div class="c-banner-wrapper">
      <img v-for="(banner, index) in banners" :key="index" :src="'/static/img/contact/' + banner">
    </div>
    <div class="c-content-wrapper">
      <p style="font-size: 24px; margin-bottom: 16px;">Join our community</p>
      <p style="margin-bottom: 5px;">Is this the begining of a beautiful friendship? If you'd like to become a Typany partner, explore what we can do together, let us know in the form below.</p>
    </div>
    <contact-form :width="width"></contact-form>
  </div>
</template>

<script>
  import ContactForm from './ContactForm'

  export default {
    name: 'contact-body',
    components: {ContactForm},
    props: {
      width: {
        type: String,
        default: '100%',
      }
    },
    data () {
      return {
        banners: ['contact-banner-1.png', 'contact-banner-2.png', 'contact-banner-3.png']
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
  .contact-wrapper {
    width: 100%;
    .split {
      width: 100%;
      height: 2px;
      background: url(/static/img/about/split.png) no-repeat;
      background-size: 100% 100%;
    }

    .c-banner-wrapper {
      margin: 20px auto;
      width: 90%;
      img {
        width: 100%;
        margin-bottom: 20px;
      }
    }

    .c-content-wrapper {
      width: 90%;
      font-family: Helvetica;
      color: #454545;
      margin: 20px auto 20px auto;
      p {
        margin: 0;
        font-size: 18px;
      }
    }
  }
</style>
