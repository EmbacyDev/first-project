<template>
  <button class="main-button"
          type="button"
          @click="click">
    <span>{{ title }}</span>
    <svg v-if="icons"
         :width="width"
         :height="height"
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
         :viewBox="viewBox">
      <g v-if="iconsType === 1">
        <path fill="currentColor"
              fill-rule="evenodd"
              d="m11.4485 1.74133-1.4142 1.41418 5.8444 5.84469H.29283v2H15.8786l-5.8443
              5.8443 1.4142 1.4142 8.2585-8.2585-8.2585-8.25887Z"
              clip-rule="evenodd"/>
      </g>
      <g v-if="iconsType === 2">
        <path fill="#fff"
              fill-rule="evenodd"
              d="M8.5 4.5h-7v7h7v-7ZM0 3v10h10V3H0Z"
              clip-rule="evenodd"/>
        <path fill="#fff"
              d="M4.5 1.5h7v7H10V10h3V0H3v3h1.5V1.5Z"/>
      </g>
    </svg>
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
    width: {
      type: Number,
      default: 20
    },
    height: {
      type: Number,
      default: 20
    },
    icons: {
      type: Boolean,
      default: false
    },
    iconsType: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {};
  },
  computed: {
    viewBox() {
      return `0 0 ${this.width} ${this.height}`;
    }
  },
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
  display: flex;
  border: 0;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  align-content: center;
  padding: em(14) em(28) em(14) em(28);
  @include btn-m($size: em(16));
  white-space: nowrap;

  svg {
    margin-left: em(8);
  }
}
@include tablet {
  button {
    display: flex;
    border: 0;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    align-content: center;
    padding: px(11) px(20) px(11) px(20);
    @include btn-m($size: px(16));
    white-space: nowrap;
    svg {
      margin-left: px(8);
    }
  }
}
</style>
