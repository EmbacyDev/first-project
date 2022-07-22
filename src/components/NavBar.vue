<template>
  <div class="navBar">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  components: {},
  props: {},
  data() {
    return {
      msg: 'This is a NavBar component'
    };
  },
  computed: {},
  watch: {},
  methods: {}
};
</script>

<style scoped lang="scss">
.navBar {
  padding: $padding;
  background-color: #6c859d;

  a {
    font-weight: bold;
    color: #2e3036;

    &.router-link-exact-active {
      color: #42b983;
    }
  }

  p {
    margin: 0;
    padding: $padding * 2;
    color: white;
  }
}
</style>
