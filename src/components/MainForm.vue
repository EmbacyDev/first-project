<template>
  <form class="main-form"
        method="post">
    <p class="header-form">JavaScript Developer (Remote)</p>
    <div class="line-form">
      <label for="email">Your email</label>
      <input name="email"
             id="email"
             class="email"
             type="email"
             required
             v-model="email">
    </div>
    <div class="line-form">
      <label for="yourself">Tell us about yourself</label>
      <textarea id="yourself"
                class="yourself"
                wrap="soft"
                required
                v-model="textarea"/>
    </div>
    <div class="line-form">
      <p>Upload CV</p>
      <label for="upload"/>
      <span class="upload-title">Choose a file
        <img class="img-title"
             alt="icon"
             src="../assets/images/icon.svg">
      </span>
      <input name="photo"
             id="upload"
             class="upload"
             type="file"
             multiple
             accept="image/*,image/jpeg"
      >
    </div>
    <button type="submit">Apply now</button>
  </form>
</template>

<script>
export default {
  name: 'MainForm',
  components: {},
  props: {},
  data() {
    return {
      email: '',
      textarea: '',
      selectedFile: null
    };
  },
  computed: {},
  watch: {},
  methods: {}
};
</script>

<style scoped lang="scss">
.main-form {
  max-width: px(592);
  padding: px(40);
  background: #F2F5FC;

  .header-form {
    @include h3();
    display: flex;
    margin-bottom: px(40);
  }

  .line-form {
    margin-top: px(24);

    label {
      position: relative;
      @include sub-r();
      width: 100%;

      input {
        margin-top: px(6);
        border: 0;
      }

      .email {
        width: 100%;
        height: px(56);
      }

      .yourself {
        width: 100%;
        height: px(90);
        resize: none;
        margin-top: px(6);
        border: 0;
      }

      .upload-title {
        @include btn-m($blue-p);
        cursor: pointer;
        display: flex;
        flex-direction: row-reverse;
        justify-content: flex-end;
        flex-wrap: nowrap;
      }

      .img-title {
        width: px(20);
        height: px(20);
        margin-right: px(6);
      }

      .upload {
        width: 0;
        height: 0;
        opacity: 0;
        overflow: hidden;
        position: absolute;
        z-index: -1;
      }
    }
  }

  button {
    display: flex;
    padding: px(14) px(28) px(14) px(28);
    margin-top: px(56);
    border: 0;
    background: #0432D3;
    color: white;
  }
}
</style>
