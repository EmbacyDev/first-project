<template>
  <button type="button"
          class="signfb-button">
    <span class="svg-logo-w">
      <svg width="100%"
           height="100%"
           xmlns="http://www.w3.org/2000/svg"
           fill="none"
           viewBox="0 0 24 24">
        <g v-if="iconsType === 2">
          <path fill="#1877F2"
                d="M.5 0h24v24H.5z"/>
          <path fill="#fff"
                d="M24 12.07C24 5.719 18.851.57 12.5.57S1 5.719 1 12.07c0 5.74 4.205 10.497 9.703 11.36v-8.036h-2.92V12.07h2.92V9.536c0-2.882 1.717-4.474 4.344-4.474 1.258 0 2.574.225 2.574.225v2.83h-1.45c-1.429 0-1.874.886-1.874 1.796v2.157h3.19l-.51 3.324h-2.68v8.036C19.795 22.567 24 17.81 24 12.07z"/>
        </g>
      </svg>
    </span>
    <span>{{ title }}</span>
  </button>
</template>

<script>
export default {
  name: 'SignfbButton',
  components: {},
  props: {
    title: {
      type: String,
      default: 'Sign Up with Facebook'
    },
    iconsType: {
      type: Number,
      default: 2
    }
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {}
};
</script>

<style scoped lang="scss">
.signfb-button {
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  padding: em(12) em(120) em(12) em(120);
  cursor: pointer;
  border: 0;
  border-radius: em(4);
  @include btn-m($size: em(16), $color: $white-m);
  background: $fb-btn;
  white-space: nowrap;
  .svg-logo-w {
    margin-right: em(15);
    width: em(24);
    height: em(24);
  }
}

</style>
