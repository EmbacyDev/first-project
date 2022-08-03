<template>
  <div class="main-button">
    <label for="upload">
      <input name="photo"
             id="upload"
             class="upload"
             type="file"
             multiple
             accept="image/*,image/jpeg"

      >
    </label>
  </div>
</template>

<script>
export default {
  name: 'MainButton',
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

<style scoped lang="scss">
</style>
