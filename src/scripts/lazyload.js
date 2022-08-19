export default {
  mounted: el => {
    function loadImage() {
      el.src = el.data.src;
    }
  }
};
