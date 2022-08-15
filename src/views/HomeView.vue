<template>
  <section class="home">
    <div class="container">
      <h1>Slash prices, save money, shop smart</h1>
      <div class="headingImg">
        <img src="../assets/images/graphics-1-display.jpg"
             alt="decorative">
      </div>
      <div class="info-heading">
        <main-button title="Add to Chrome"
                     class="primary"
        />
        <div class="max-width-496">
          <p>Get instant guaranteed discounts at your favourite
            shops <br> with Slash – the first price reduction extension ever
          </p>
        </div>
      </div>
    </div>
    <div class="move-line-w">
      <div class="move-line">
        <div class="line-logo-w">
          <img class="png"
               alt="icon"
               src="../assets/images/png/AliEpress.png">
        </div>
        <div class="line-logo-w">
          <img class="png"
               alt="icon"
               src="../assets/images/png/Converse.png">
        </div>
        <div class="line-logo-w">
          <img class="png"
               alt="icon"
               src="../assets/images/png/Ebuyer.png">
        </div>
        <div class="line-logo-w">
          <img class="png"
               alt="icon"
               src="../assets/images/png/NewLook.png">
        </div>
        <div class="line-logo-w">
          <img class="png"
               alt="icon"
               src="../assets/images/png/Village.png">
        </div>
        <div class="line-logo-w">
          <img class="png"
               alt="icon"
               src="../assets/images/png/B&Q.png">
        </div>
        <div class="line-logo-w">
          <img class="png"
               alt="icon"
               src="../assets/images/png/ienles.png">
        </div>
      </div>
      <div class="move-line">
        <div class="line-logo-w">
          <img class="png"
               alt="icon"
               src="../assets/images/png/AliEpress.png">
        </div>
        <div class="line-logo-w">
          <img class="png"
               alt="icon"
               src="../assets/images/png/Converse.png">
        </div>
        <div class="line-logo-w">
          <img class="png"
               alt="icon"
               src="../assets/images/png/Ebuyer.png">
        </div>
        <div class="line-logo-w">
          <img class="png"
               alt="icon"
               src="../assets/images/png/NewLook.png">
        </div>
        <div class="line-logo-w">
          <img class="png"
               alt="icon"
               src="../assets/images/png/Village.png">
        </div>
        <div class="line-logo-w">
          <img class="png"
               alt="icon"
               src="../assets/images/png/B&Q.png">
        </div>
        <div class="line-logo-w">
          <img class="png"
               alt="icon"
               src="../assets/images/png/ienles.png">
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'HomeView',
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
.home {
  .container {
    padding: 0 em($in-100) 0 em($in-100);
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      @include h1($size: em(68));
      align-self: flex-start;
    }

    .headingImg {
      margin-top: em(60);

      img {
        width: 100%;
      }
    }

    .info-heading {
      display: flex;
      align-self: flex-start;
      align-items: center;
      margin-top: em($in-140);

      .max-width-496 {
        display: flex;
        text-align: left;
        max-width: em(496);
        margin-left: em(32);

        p {
          @include body-l($size: em(18))
        }
      }
    }
  }
  .move-line-w {
    width: 100%;
    height: em(56);
    overflow: hidden;
    display: flex;
    align-items: center;
    text-decoration: none;
  }
  .move-line {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    -webkit-animation: marquee 10s linear infinite;
    animation: marquee 10s linear infinite;
    .line-logo-w {
      padding-right: em(64);
      .png {
        width: em(153);
        height: em(56);
      }
    }
  }
}
</style>
