<template>
  <div class="home">
    <h1>This is an <strong>home</strong> page</h1>
    <main-button />
    <main-form />
    <notification-email />
  </div>
</template>

<script>

export default {
  name: 'HomeView',
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
  position: absolute;
  left: 200px;
}
</style>
