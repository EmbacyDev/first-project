<template>
  <div class='notification'>
    <img alt='letter'
         class='letter'
         src='../../src/assets/images/letter.png'>
    <h3>Confirm your email to proceed</h3>
    <p>Please open confirmation link sent to {mail@gmail.com}</p>
    <button class='send'>
      Send again
    </button>
    <button class='done'>
      Done
    </button>
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
  .notification {
    background-color: #CDE7FF;
    color: #000;
  }
</style>
