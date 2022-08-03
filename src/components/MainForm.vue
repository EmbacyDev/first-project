<template>
  <form class="main-form">
    <p>JavaScript Developer (Remote)</p>
    <label for="email">Your email
      <input id="email">
    </label>
    <label for="yourself">Tell us about yourself
      <textarea id="text-yourself" />
    </label>
  </form>
</template>

<script>
export default {
  name: 'MainForm',
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {}
};
</script>

<style lang="scss">
  .main-form {
    max-width: 592px;
    padding: 40px;
    background: #F2F5FC;
    p {
      @include h3;
    }
    label {
      display: flex;
      flex-direction: column;
      align-content: stretch;
      align-items: stretch;
    }
  }
</style>
