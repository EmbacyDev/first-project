<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <div class='container'>
    <h3>Subscribe to Slash news</h3>
    <div class='notification'>
      <p>Your email</p>
      <input type='text'
             name='user_email'
             placeholder='Inputname@mail.com'>
      <button type="button"
              class='subscribe'>
        Subscribe
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotificationEmail',
  components: {},
  props: {},
  data() {
    return {
      msg: 'This is notification component'
    };
  },
  computed: {},
  watch: {},
  methods: {}
};
</script>

<style lang="scss">
  .container {
    background-color: #fabfe4;
    width: 1200px;
    height: 404px;
    bottom: 0;
    position: relative;
  }

  h3 {
      font-size: 40px;
      left: 52px;
      top: 80px;
      color: #050A1B;
      position: absolute;
  }

  .notification {
    color: #000;
    left: 52px;
    position: relative;
    top: 180px;
    background-color: #fff;
    width: 591px;
    height: 154px;
    margin-top: 40px;

    p {
      font-size: 14px;
      font-weight: 400;
      left: 40px;
      position: absolute;
      top: 20px;
    }
    input {
      position: absolute;
      background: #F2F5FC;
      top: 65px;
      left: 40px;
      width: 355px;
      height: 40px;
      padding: 0px 20px;
      border: none;
      outline: none;
    }
      ::placeholder {
        color: #98ABD9;
        font-size: 16px;
      }

    button.subscribe {
      position: absolute;
      right: 40px;
      top: 65px;
      width: 106px;
      height: 40px;
      background-color: #0432D3;
      border: none;
      color: #fff;
      font-weight: 500;
      font-size: 14px;
      cursor: pointer;
    }
  }
</style>
