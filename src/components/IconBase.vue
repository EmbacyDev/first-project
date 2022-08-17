<template>
  <div :style="{ width: [wrapWidth], height: [wrapHeight] }"
       class="svg-w">
    <svg xmlns="http://www.w3.org/2000/svg"
         width="100%"
         height="100%"
         :viewBox="viewBox"
         :aria-labelledby="iconName"
         fill="none">
      <title :id="iconName"
             lang="en">{{ iconName }} icon
      </title>
      <g :fill="iconColor">
        <slot/>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'IconBase',
  props: {
    iconName: {
      type: String,
      default: 'box'
    },
    iconWidth: {
      type: [Number, String],
      default: 18
    },
    iconHeight: {
      type: [Number, String],
      default: 18
    },
    iconColor: {
      type: String,
      default: 'currentColor'
    }
  },
  computed: {
    viewBox() {
      return `0 0 ${this.iconWidth} ${this.iconHeight}`;
    },
    wrapWidth() {
      return `${this.iconWidth / 16}em`;
    },
    wrapHeight() {
      return `${this.iconHeight / 16}em`;
    }
  }
};
</script>

<style scoped lang="scss">
.svg-w {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
}
</style>
