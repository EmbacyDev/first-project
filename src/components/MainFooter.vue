<template>
  <section class="footer">
    <div class="container-footer">
      <div class="made-by">
        <p>Made by Embacy</p>
      </div>
      <div class="logo-w">
        <router-link class="logo-w"
                     to="/">
          <img class="logo"
               alt="icon"
               src="../assets/images/png/Slash-icon.png">
        </router-link>
      </div>
      <div class="main-links">
        <router-link to="/brands">Brands</router-link>
        <router-link to="/career">Career</router-link>
        <router-link to="/blog">Blog</router-link>
      </div>
      <div class="other-links">
        <router-link to="/brands">Privacy</router-link>
        <router-link to="/career">Terms of Use</router-link>
        <router-link to="/blog">EULA</router-link>
      </div>
      <div class="rating-block">
        <p>Trustpilot</p>
        <p>chrome</p>
      </div>
      <div class="secure-block">
        <p>Secure</p>
      </div>
      <div class="feedback-block">
        <p>Your feedback</p>
        <a>support@slash.com</a>
      </div>
      <div class="social-block">
        <p>Follow us</p>
        <div class="social-link-w">
          <icon-base :iconWidth="24"
                     :iconHeight="24">
            <path d="M24 0 0 0C0 .375 0 .429 0 .96L0 24C.75 24 .429 24 .96 24L23.04 24C23.571 24 23.625 24 24 24L24 .531C24 0 24 .375 24 0ZM20.268 7.005 18.351 7.005C16.848 7.005 16.557 7.719 16.557 8.769L16.557 11.082 20.145 11.082 19.677 14.703 16.557 14.703V24H12.816L12.816 14.706H9.687V11.082H12.816V8.412C12.816 5.313 14.709 3.624 17.475 3.624 18.801 3.624 19.938 3.723 20.271 3.768V7.005H20.268Z"
                  fill="#0432D3"/>
          </icon-base>
        </div>
      </div>
      <div class="copyright-block">
        <p>© 2022 Slash</p>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'MainFooter',
  components: {
  },
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
.footer {
  padding: em($in-92) em($in-100) em($in-32) em($in-100);

  .container-footer {
    display: grid;
    grid-template-columns: repeat(2, min-content) repeat(3, auto);
    grid-template-rows: repeat(2, min-content);
    gap: em(77) 0;
    grid-auto-flow: row;

    .made-by {
      grid-area: 2 / 2 / 3 / 4;
      grid-template-columns: 1fr;

      p {
        @include body-r($color: $gray-m, $size: em(16));
      }
    }

    .logo-w {
      margin-right: em($in-140);
      grid-area: 1 / 1 / 2 / 2;
    }

    .main-links {
      margin-right: em(55);
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 1fr;
      gap: em(16) 0;
      grid-area: 1 / 2 / 2 / 3;

      a {
        @include linkHeader;
        @include body-r($size: em(16))
      }
    }

    .other-links {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 1fr;
      gap: em(16) 0;
      grid-area: 1 / 3 / 2 / 4;

      a {
        @include linkHeader;
        @include body-r($size: em(16))
      }
    }

    .rating-block {
      grid-area: 1 / 4 / 2 / 5;
    }

    .secure-block {
      grid-area: 2 / 4 / 3 / 5;
    }

    .feedback-block {
      display: flex;
      align-items: center;
      grid-area: 2 / 5 / 3 / 6;

      p {
        @include body-r($color: $gray-m, $size: em(16));
        margin-right: em($in-6);
      }

      a {
        @include body-r($size: em(16));
        @include linkInside;
      }
    }

    .social-block {
      display: flex;
      grid-area: 1 / 5 / 2 / 6;

      p {
        @include body-r($color: $gray-m, $size: em(16));
      }

      .social-link-w {
        margin-left: em(16);
        display: grid;
        grid-template-columns: repeat(4, min-content);
        grid-template-rows: min-content;
        gap: 0 em(16);
      }
    }

    .copyright-block {
      grid-area: 2 / 1 / 3 / 2;

      p {
        @include body-r($color: $gray-m, $size: em(16));
      }
    }
  }
}
</style>
