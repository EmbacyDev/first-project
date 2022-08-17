<template>
  <section class="home">
    <div class="container">
      <h1>Slash prices, save money, shop smart</h1>
      <div class="headingImg">
        <lottie-animation ref="lottieHeader"
                          :animationData="headerLottie"
                          :autoPlay="false"
                          :loop="false"/>
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
              <icon-base :iconWidth="30"
                         :iconHeight="20">
                <path fill-rule="evenodd"
                      d="M8.50065.79211 9.9149 2.2063 4.1213
                      8.00018h25.5859v2.00002H4.12138l5.7935
                      5.7935-1.41421 1.4142-8.2077-8.2077L8.50065.79211Z"
                      clip-rule="evenodd"/>
              </icon-base>
            </div>
            <div class="swiper-prev">
              <icon-base :iconWidth="30"
                         :iconHeight="20">
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
                :modules="modules">
          <swiper-slide>
            <div class="cads">
              <div class="img-slide-w">
                <div class="sale-title">
                  <p>up to 7%</p>
                </div>
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
                <div class="sale-title">
                  <p>up to 10%</p>
                </div>
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
                <div class="sale-title">
                  <p>up to 6%</p>
                </div>
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
                <div class="sale-title">
                  <p>up to 7%</p>
                </div>
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
    <div class="container">
      <div class="h-container-w">
        <h2>Shop smart with Slash</h2>
      </div>
      <div class="content-w">
        <div class="grid-one">
          <div id="item-0">
            <div class="grid-img-w">
              <lottie-animation ref="twoLottie"
                                :animationData="twoLottie"
                                :autoPlay="true"
                                :loop="true"/>
            </div>
          </div>
          <div id="item-1">
            <div class="text-grid">
              <h3>Guaranteed</h3>
              <p>No promo codes or cashback - simply<br>receive a guaranteed price reduction at<br>checkout</p>
            </div>
          </div>
          <div id="item-2">
            <div class="text-grid">
              <h3>Always with you</h3>
              <p>Don’t spend hours looking for discounts -<br>just install the extension and shop away!</p>
            </div>
          </div>
          <div id="item-3">
            <div class="grid-img-w">
              <lottie-animation ref="threeLottie"
                                :animationData="threeLottie"
                                :autoPlay="true"
                                :loop="true"/>
            </div>
          </div>
          <div id="item-4">
            <div class="text-grid">
              <h3>Instant</h3>
              <p>Tired of waiting for cashback? With Slash<br>your benefits and clear and immediate</p>
            </div>
          </div>
          <div id="item-5">
            <div class="grid-img-w">
              <lottie-animation ref="threeLottie"
                                :animationData="fourLottie"
                                :autoPlay="true"
                                :loop="true"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-container">
      <div class="container">
        <div class="h-container-w">
          <h2>How it works</h2>
        </div>
        <div class="grid-two">
          <div id="item-0-2">
            <div class="grid-img-w">
              <img class="jpg"
                   alt="icon"
                   src="../assets/images/jpg/grid-2-content-1.jpg">
            </div>
          </div>
          <div id="item-1-2">
            <div class="grid-img-w">
              <img class="jpg"
                   alt="icon"
                   src="../assets/images/jpg/grid-2-content-2.jpg">
            </div>
          </div>
          <div id="item-2-2">
            <div class="grid-img-w">
              <img class="jpg"
                   alt="icon"
                   src="../assets/images/jpg/grid-2-content-3.jpg">
            </div>
          </div>
          <div id="item-3-2">
            <div class="text-grid">
              <p class="sub-title">Step 1</p>
              <h3>You buy with a discount</h3>
              <p>Just shop for your favourite things with<br> Slash and get a guaranteed discount at checkout.</p>
            </div>
          </div>
          <div id="item-4-2">
            <div class="text-grid">
              <p class="sub-title">Step 2</p>
              <h3>We get commission</h3>
              <p>Slash gets a commission from a brand for<br>bringing new customers,
                and we turn part of<br>it into your discount.</p>
            </div>
          </div>
          <div id="item-5-2">
            <div class="text-grid">
              <p class="sub-title">Step 3</p>
              <h3>Everyone benefits</h3>
              <p>You get a discount, merchant gets sales, we<br>get a commission.
                Perfectly balanced, as all<br>deals should be.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="content-w-2">
        <div class="text-content-w-2">
          <h2>Discounts at a snap</h2>
          <p>Instant price reduction from your favourite brands.<br>
            Install the free extension for Chrome</p>
          <main-button title="Add to Chrome"
                       class="yellow"
          />
        </div>
        <div class="img-content-w-2">
          <img class="jpg"
               alt="icon"
               src="../assets/images/png/Banner-decorative.png">
        </div>
      </div>
    </div>
    <div class="container">
      <div class="content-w-3">
        <div class="img-content-w-3">
          <lottie-animation ref="threeLottie"
                            :animationData="fiveLottie"
                            :autoPlay="true"
                            :loop="true"/>
        </div>
        <div class="text-content-w-3">
          <h2>Bring a friend</h2>
          <p>Friends who shop together, save together. Invite a friend<br>
            and get a £10 bonus discount. Your friend will get a £10<br>
            discount too.</p>
          <main-button title="Learn more"
                       class="solid"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import headerLottie from '@/assets/lottie/heder-lottie.json';
import twoLottie from '@/assets/lottie/2-lottie.json';
import threeLottie from '@/assets/lottie/3-lottie.json';
import fourLottie from '@/assets/lottie/4-lottie.json';
import fiveLottie from '@/assets/lottie/5-lottie.json';

export default {
  name: 'HomeView',
  components: {},

  props: {},
  setup() {
    return {};
  },
  data() {
    return {
      headerLottie,
      twoLottie,
      threeLottie,
      fourLottie,
      fiveLottie,
      NavigationOptions: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev'
      },
      modules: [Navigation, Pagination, Scrollbar, A11y]
    };
  },
  computed: {},
  watch: {},
  mounted() {
    window.addEventListener('scroll', this.scrollHandle);
  },
  unmounted() {
    window.removeEventListener('scroll', this.scrollHandle);
  },
  methods: {
    scrollHandle() {
      this.$refs.lottieHeader.play();
      // console.log('scroll');
    }
  }
};
</script>

<style lang="scss">
.home {
  .container {
    h1 {
      @include h1($size: em(68));
      align-self: flex-start;
    }

    .headingImg {
      width: 100%;
      margin-top: em(60);
    }

    .info-heading {
      display: flex;
      align-self: flex-start;
      align-items: center;
      margin-top: em($in-84);

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
      width: 100%;
      height: 100%;

      .swiper-slide {
        width: auto;

        .cads {
          cursor: pointer;

          .img-slide-w {
            position: relative;

            .sale-title {
              position: absolute;
              right: em(16);
              top: em(16);
              background: $white-m;
              padding: em(12) em(18) em(12) em(18);
              z-index: 1;

              p {
                @include subtitle($size: em(20));
              }
            }

            img {
              transition: all 0.2s 0s ease;

              &:hover {
                transform: scale(1.1);
              }
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

  .container {
    h2 {
      @include h1($size: em(68));
      align-self: flex-start;
    }

    .content-w {
      margin-top: em(65);

      .grid-one {
        display: grid;
        grid-template-rows: 1fr 1fr 1fr;
        grid-template-columns: 1fr 1fr 1fr;
        /* гориз. отступ | вертик. отступ */
        gap: em(56) em(32);
        height: 100%;

        #item-0 {
          grid-row-start: 1;
          grid-column-start: 1;
          grid-row-end: 2;
          grid-column-end: 3;
        }

        #item-1 {
          grid-row-start: 1;
          grid-column-start: 3;
          grid-row-end: 2;
          grid-column-end: 4;
        }

        #item-2 {
          grid-row-start: 2;
          grid-column-start: 1;
          grid-row-end: 3;
          grid-column-end: 2;
        }

        #item-3 {
          grid-row-start: 2;
          grid-column-start: 2;
          grid-row-end: 3;
          grid-column-end: 4;
        }

        #item-4 {
          grid-row-start: 3;
          grid-column-start: 3;
          grid-row-end: 4;
          grid-column-end: 4;

        }

        #item-5 {
          grid-row-start: 3;
          grid-column-start: 1;
          grid-row-end: 4;
          grid-column-end: 3;
        }

        .grid-img-w {
          width: em(808);
        }

        .text-grid {
          display: flex;
          height: 100%;
          justify-content: center;
          align-items: flex-start;
          flex-direction: column;
          flex-wrap: nowrap;

          h3 {
            @include h3($size: em(28));
          }

          h4 {
            @include h3($size: em(28));
          }

          p {
            margin-top: em($in-24);
            @include body-l($size: em(18));
          }
        }
      }
    }
  }

  .bg-container {
    padding-top: em(140);
    background: $mint-s;
    clip-path: polygon(0 5%, 100% 0, 100% 100%, 0% 95%);
    height: auto;

    .container {
      h2 {
        @include h2($size: em(40));
      }

      .grid-two {
        margin-top: em($in-68);
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: em(56) em(56);
        height: 100%;

        #item-0-2 {
          grid-row-start: 1;
          grid-column-start: 1;
          grid-row-end: 2;
          grid-column-end: 2;
        }

        #item-1-2 {
          grid-row-start: 1;
          grid-column-start: 2;
          grid-row-end: 2;
          grid-column-end: 3;
        }

        #item-2-2 {
          grid-row-start: 1;
          grid-column-start: 3;
          grid-row-end: 2;
          grid-column-end: 4;
        }

        #item-3-2 {
          grid-row-start: 2;
          grid-column-start: 1;
          grid-row-end: 3;
          grid-column-end: 2;
        }

        #item-4-2 {
          grid-row-start: 2;
          grid-column-start: 2;
          grid-row-end: 3;
          grid-column-end: 3;
        }

        #item-5-2 {
          grid-row-start: 2;
          grid-column-start: 3;
          grid-row-end: 3;
          grid-column-end: 4;
        }

        .text-grid {
          .sub-title {
            @include preheader($size: em(14))
          }

          h3 {
            margin-top: em($in-32);
            @include h3($size: em(28));
          }

          p {
            margin-top: em($in-16);
            @include body-l($size: em(18));
          }
        }
      }
    }
  }

  .container {
    .content-w-2 {
      margin-top: em($in-100);
      position: relative;
      display: flex;
      align-items: center;
      flex-wrap: nowrap;
      width: 100%;
      background-color: $blue-p;
      overflow: hidden;

      .text-content-w-2 {
        max-width: em(467);
        margin: em(80) 0 em(80) em(80);

        h2 {
          @include h2($color: $white-m, $size: em(40));
        }

        p {
          margin-top: em($in-32);
          margin-bottom: em($in-64);
          @include body-l($color: $white-m, $size: em(18));
        }
      }

      .img-content-w-2 {
        position: absolute;
        right: 0;

        img {
          height: em(430);
        }
      }
    }
  }

  .container {
    .content-w-3 {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      .img-content-w-3 {
        width: em(483);
        height: em(466);
      }
      .text-content-w-3 {
        padding: em($in-100) em($in-100) em($in-100) em($in-100);
        h2 {
          @include h2($size: em(40));
        }
        p {
          margin-top: em($in-32);
          margin-bottom: em($in-64);
          @include body-l($size: em(18));
        }
      }
    }
  }
}
</style>
