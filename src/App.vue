<template>
  <nav-bar />
  <router-view />
  <main-footer/>
</template>

<script>

export default {
  name: 'App',
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
#app {
  width: 100%;
  height: 100%;
}
</style>
