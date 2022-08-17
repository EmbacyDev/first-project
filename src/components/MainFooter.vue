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
          <icon-base :width="24"
                     :height="24">
            <g clip-path="url(#a)">
              <path fill="#0432D3"
                    d="M32 0H0v32h32V0zm-4.976 9.34h-2.556c-2.004 0-2.392.952-2.392 2.352v3.084h4.784l-.624 4.828h-4.16V32h-4.988V19.608h-4.172v-4.832h4.172v-3.56c0-4.132 2.524-6.384 6.212-6.384 1.768 0 3.284.132 3.728.192V9.34h-.004z"/>
            </g>
            <defs>
              <clipPath id="a">
                <path fill="#fff"
                      d="M0 0h32v32H0z"/>
              </clipPath>
            </defs>
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
