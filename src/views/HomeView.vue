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
    <div class="bg-move-line">
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
    </div>
    <div class="container">
      <div class="slider-w">
        <div class="h2-w">
          <h2>Top deals right now</h2>
          <div class="btn-slider-w">
            <div class="swiper-next">
              <icon-base  :width="30"
                          :height="20">
                <path fill-rule="evenodd"
                      d="M8.50065.79211 9.9149 2.2063 4.1213
                      8.00018h25.5859v2.00002H4.12138l5.7935
                      5.7935-1.41421 1.4142-8.2077-8.2077L8.50065.79211Z"
                      clip-rule="evenodd"/>
              </icon-base>
            </div>
            <div class="swiper-prev">
              <icon-base  :width="30"
                          :height="20">
                <path fill-rule="evenodd"
                      d="m21.4993 17.2079-1.4142-1.4142
                       5.7936-5.79388H.29283v-2H25.8786l-5.7935-5.7935L21.4993.7921l8.2077 8.2077-8.2077 8.2081Z"
                      clip-rule="evenodd"/>
              </icon-base>
            </div>
          </div>
        </div>
        <swiper :slidesPerView="4"
                :space-between="56"
                :setWrapperSize="true"
                :autoHeight="true"
                :loop="true"
                :loopFillGroupWithBlank="true"
                :navigation="NavigationOptions"
                :pagination="false"
                :scrollbar="false"
                :modules="modules"
                @swiper="onSwiper"
                @slideChange="onSlideChange">
          <swiper-slide>
            <div class="cads">
              <div class="img-slide-w">
                <img class="jpg"
                     alt="icon"
                     src="../assets/images/jpg/Sale-slide-1.jpg">
              </div>
              <div class="text-slide">
                <p class="first-text-slide">Xbox gamepad</p>
                <p class="second-text-slide">Aliexpress</p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="cads">
              <div class="img-slide-w">
                <img class="jpg"
                     alt="icon"
                     src="../assets/images/jpg/Sale-slide-2.jpg">
              </div>
              <div class="text-slide">
                <p class="first-text-slide">Winter Collection</p>
                <p class="second-text-slide">Converse</p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="cads">
              <div class="img-slide-w">
                <img class="jpg"
                     alt="icon"
                     src="../assets/images/jpg/Sale-slide-3.jpg">
              </div>
              <div class="text-slide">
                <p class="first-text-slide">HP 250 G8 Intel Core i5</p>
                <p class="second-text-slide">Ebuyer</p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="cads">
              <div class="img-slide-w">
                <img class="jpg"
                     alt="icon"
                     src="../assets/images/jpg/Sale-slide-4.jpg">
              </div>
              <div class="text-slide">
                <p class="first-text-slide">Keeping warm</p>
                <p class="second-text-slide">New Look</p>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script>
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

export default {
  name: 'HomeView',
  components: {},

  props: {},
  setup() {
    const onSwiper = swiper => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange
    };
  },
  data() {
    return {
      NavigationOptions: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev'
      },
      modules: [Navigation, Pagination, Scrollbar, A11y]
    };
  },
  computed: {},
  watch: {},
  methods: {}
};
</script>

<style lang="scss">
.home {
  min-width: 0;

  .container {
    padding: 0 em($in-100) em($in-140) em($in-100);
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

  .bg-move-line {
    position: relative;
    padding-top: em($in-124);
    padding-bottom: em($in-124);
    background: $mint-s;
    clip-path: polygon(0 0, 100% 15%, 100% 85%, 0% 100%);

    .move-line-w {
      width: 100%;
      height: auto;
      overflow: hidden;
      display: flex;
      align-items: center;
      text-decoration: none;
    }

    .move-line {
      width: auto;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      padding-top: em($in-2);
      padding-bottom: em($in-2);
      -webkit-animation: marquee 10s linear infinite;
      animation: marquee 10s linear infinite;

      .line-logo-w {
        .png {
          padding-right: em(64);
          width: em(153);
          height: em(56);
          object-fit: contain;
        }
      }
    }
  }

  .slider-w {
    position: relative;
    max-width: 100%;
    height: auto;
    overflow: hidden;
    min-width: 0;
    min-height: 0;

    .h2-w {
      display: flex;
      justify-content: space-between;
      padding: em($in-140) 0 em($in-68) 0;

      h2 {
        @include h2($size: em(40));
        align-self: flex-start;
      }

      .btn-slider-w {
        display: flex;
        .swiper-prev, .swiper-next {
          width: em(48);
          display: flex;
          justify-content: center;
          align-items: center;
          align-content: center;
          padding: em($in-16) em($in-10) em($in-16) em($in-10);
          cursor: pointer;
          &:hover {
            color: $gray-m;
          }
        }
      }
    }

    .swiper {
      margin-bottom: em($in-140);
      width: 100%;
      height: 100%;

      .swiper-slide {
        width: auto;

        .cads {
          .img-slide-w {
            img {
              display: block;
              width: 100%;
              object-fit: contain;
            }
          }

          .text-slide {
            display: flex;
            flex-direction: column;
            align-items: self-start;
            margin-top: em($in-32);

            .first-text-slide {
              @include subtitle($size: em(20));
            }

            .second-text-slide {
              margin-top: em($in-8);
              @include body-r($color: $gray-m, $size: em(16));
            }
          }
        }
      }
    }
  }
}
</style>
