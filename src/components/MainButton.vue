<template>
  <button class="main-button"
          @click="click">
    <span>{{ title }}</span>
  </button>
</template>

<script>
export default {
  name: 'MainButton',
  components: {},
  props: {
    title: {
      type: String,
      default: 'button'
    },
    icons: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    click() {
      this.$emit('click');
    }
  }
};
</script>

<style scoped lang="scss">
button {
  border: 0;
  cursor: pointer;
  padding: 14px $in-28 14px $in-28;
  span {
  @include btn-m()
  }
}
</style>
