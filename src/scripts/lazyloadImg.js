export default {
  mounted: el => {
    function loadImage() {
      el.src = el.dataset.src;
      console.log(el.dataset.src);
    }

    function handleIntersect(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          loadImage();
          observer.unobserve(el);
        }
      });
    }

    function createObserver() {
      const options = {
        root: null,
        threshold: 0
      };
      const observer = new IntersectionObserver(handleIntersect, options);
      observer.observe(el);
    }

    if (window.IntersectionObserver) {
      createObserver();
    } else {
      loadImage();
    }
  }
};
