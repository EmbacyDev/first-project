<template>
  <button type="button"
          class="auto-button">
    <span class="svg-logo-w">
      <svg width="100%"
           height="100%"
           xmlns="http://www.w3.org/2000/svg"
           fill="none"
           viewBox="0 0 24 24">
        <g v-if="iconsType === 1">
          <path fill="#4285F4"
                fill-rule="evenodd"
                d="M23.04 12.261c0-.815-.073-1.6-.21-2.352H12v4.448h6.19a5.29 5.29 0 0 1-2.296 3.471v2.886h3.717c2.174-2.002 3.429-4.95 3.429-8.453z"
                clip-rule="evenodd"/>
          <path fill="#34A853"
                fill-rule="evenodd"
                d="M12 23.5c3.105 0 5.708-1.03 7.61-2.786l-3.716-2.886c-1.03.69-2.347 1.098-3.894 1.098-2.995 0-5.53-2.023-6.435-4.741H1.723v2.98A11.496 11.496 0 0 0 12 23.5z"
                clip-rule="evenodd"/>
          <path fill="#FBBC05"
                fill-rule="evenodd"
                d="M5.565 14.185A6.913 6.913 0 0 1 5.205 12c0-.758.13-1.495.36-2.185v-2.98H1.723A11.495 11.495 0 0 0 .5 12c0 1.856.444 3.612 1.223 5.165l3.842-2.98z"
                clip-rule="evenodd"/>
          <path fill="#EA4335"
                fill-rule="evenodd"
                d="M12 5.074c1.688 0 3.204.58 4.396 1.72l3.299-3.299C17.703 1.64 15.1.5 12 .5A11.496 11.496 0 0 0 1.723 6.835l3.842 2.98C6.47 7.097 9.005 5.074 12 5.074z"
                clip-rule="evenodd"/>
        </g>
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
  name: 'AutoButton',
  components: {},
  props: {
    title: {
      type: String,
      default: 'Sign Up with Google'
    },
    iconsType: {
      type: Number,
      default: 1
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
.auto-button {
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  padding: em(12) em(120) em(12) em(120);
  cursor: pointer;
  border: 0;
  border-radius: em(4);
  @include btn-m($size: em(16));
  white-space: nowrap;
  .svg-logo-w {
    margin-right: em(15);
    width: em(24);
    height: em(24);
  }

}

</style>
